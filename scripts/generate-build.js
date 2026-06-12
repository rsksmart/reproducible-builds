#!/usr/bin/env node
'use strict';

/*
 * Reproducible-build generator.
 *
 * Given a release tag, this scaffolds a new reproducible-build folder for rskj
 * or powpeg-node by cloning the *newest existing* folder of that project as a
 * template (so it always inherits the latest base images, gpg keys, gradle
 * flags, etc.), then:
 *
 *   1. verifies the source git TAG exists (the release is published later, so
 *      the tag — not a release — is the reference here),
 *   2. renders the Dockerfile for the new tag,
 *   3. builds it with Docker and captures the artifact sha256sums (source
 *      integrity is enforced in-build via the Dockerfile's GPG SHA256SUMS check),
 *   4. writes the README with the real hashes,
 *   5. creates a branch, commits, and pushes it,
 *   6. opens a PR with `gh` if available, otherwise prints the PR info.
 *
 * If a GitHub release already happens to exist for the tag, a hash comparison
 * is shown for information only — it never gates the build.
 *
 * This script is meant to live inside the reproducible-builds repo: it finds
 * its own repo root via git and operates on it — no config/paths needed.
 *
 * Usage:
 *   node generate-build.js <tag> [options]
 *
 *   <tag>   e.g. VETIVER-9.0.3 (rskj) or VETIVER-9.0.1.0 (powpeg-node)
 *
 * Options:
 *   -c, --component <c>  rskj | powpeg-node  (default: auto from version shape)
 *   -b, --branch <name>  branch to create    (default: repro/<component>-<folder>)
 *       --remote <name>  git remote to push  (default: auto-detected)
 *       --base <branch>  base branch          (default: master)
 *       --no-push        create branch + commit but don't push
 *       --dry-run        build + write files, make no git changes
 *       --keep-image     keep the Docker image afterwards
 *       --force          proceed despite a dirty tree, an existing folder, or a missing tag
 *   -h, --help
 *
 * Requirements: Node >= 18, Docker, git. Optional: gh (GitHub CLI) for auto-PR.
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

const UPSTREAM = 'rsksmart/reproducible-builds'; // canonical repo, for PR compare URLs

// Pure logic (component conventions, parsing, substitution, sha handling) lives
// in lib.js and is unit-tested in lib.test.js. This file is the I/O + flows.
const {
  COMPONENTS,
  parseTag,
  inferComponent,
  cmpSemver,
  substituteVersion,
  injectShaBlock,
  parseShaLine,
  parseShaMap,
  mapsEqual,
  componentShell,
  hashFence,
  parsePrUrl,
  detectBuildFromFiles,
} = require('./lib');

// ---------------------------------------------------------------------------
// Terminal helpers
// ---------------------------------------------------------------------------

const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
const paint = (code, s) => (useColor ? `[${code}m${s}[0m` : s);
const c = {
  bold: (s) => paint('1', s),
  dim: (s) => paint('2', s),
  red: (s) => paint('31', s),
  green: (s) => paint('32', s),
  yellow: (s) => paint('33', s),
  cyan: (s) => paint('36', s),
};
const die = (msg, code = 2) => {
  console.error(c.red('error: ') + msg);
  process.exit(code);
};
const step = (msg) => console.log(c.cyan('• ') + c.bold(msg));

// ---------------------------------------------------------------------------
// Shell / git helpers
// ---------------------------------------------------------------------------

function run(cmd, args, opts = {}) {
  const r = spawnSync(cmd, args, { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, ...opts });
  if (r.error) throw r.error;
  if (!opts.allowFail && r.status !== 0) {
    throw new Error(`${cmd} ${args.join(' ')} failed: ${(r.stderr || r.stdout || '').trim()}`);
  }
  return r;
}
const git = (args, cwd, opts = {}) => run('git', args, { cwd, ...opts });
const has = (cmd) => {
  const r = spawnSync(cmd, ['--version'], { encoding: 'utf8' });
  return !r.error && r.status === 0;
};
function streaming(cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { cwd, stdio: 'inherit' });
    p.on('error', reject);
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited ${code}`))));
  });
}

function detectRemote(repoDir, override) {
  if (override) return override;
  if (process.env.REPRO_REMOTE) return process.env.REPRO_REMOTE;
  const remotes = git(['remote'], repoDir).stdout.split('\n').map((s) => s.trim()).filter(Boolean);
  if (remotes.includes('origin')) return 'origin';
  if (remotes.length) return remotes[0];
  die('no git remotes configured in this repo.');
}

function githubSlug(repoDir, remote) {
  const r = git(['remote', 'get-url', remote], repoDir, { allowFail: true });
  if (r.status !== 0) return null;
  const m = r.stdout.trim().match(/github\.com[:/]([^/]+\/[^/]+?)(?:\.git)?$/);
  return m ? m[1] : null;
}

// ---------------------------------------------------------------------------
// GitHub release cross-check
// ---------------------------------------------------------------------------

function ghHeaders() {
  const h = { 'User-Agent': 'rsk-build-generator', Accept: 'application/vnd.github+json' };
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}
// Does the git tag exist in the source repo? (This is what we build against —
// the release comes later.)
async function tagExists(repo, tag) {
  const res = await fetch(`https://api.github.com/repos/${repo}/git/ref/tags/${encodeURIComponent(tag)}`, {
    headers: ghHeaders(),
  });
  if (res.status === 404) return false;
  if (!res.ok) throw new Error(`tag lookup -> ${res.status} ${res.statusText}`);
  return true;
}

async function fetchReleaseDigest(repo, tag, fatJarName) {
  const res = await fetch(`https://api.github.com/repos/${repo}/releases/tags/${tag}`, { headers: ghHeaders() });
  if (res.status === 404) return { release: null, digest: null };
  if (!res.ok) throw new Error(`release lookup -> ${res.status} ${res.statusText}`);
  const rel = await res.json();
  const a =
    (rel.assets || []).find((x) => x.name === fatJarName) ||
    (rel.assets || []).find((x) => x.name.endsWith('-all.jar'));
  const digest = a && a.digest && a.digest.startsWith('sha256:') ? a.digest.slice(7) : null;
  return { release: rel, digest };
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const opts = { push: true };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--component' || a === '-c') opts.component = argv[++i];
    else if (a === '--branch' || a === '-b') opts.branch = argv[++i];
    else if (a === '--remote') opts.remote = argv[++i];
    else if (a === '--base') opts.base = argv[++i];
    else if (a === '--no-push') opts.push = false;
    else if (a === '--dry-run') opts.dryRun = true;
    else if (a === '--allow-existing') opts.allowExisting = true;
    else if (a === '--keep-image') opts.keepImage = true;
    else if (a === '--force') opts.force = true;
    else if (a === '--help' || a === '-h') opts.help = true;
    else positional.push(a);
  }
  return { opts, positional };
}

const USAGE = `${c.bold('Reproducible-build generator')}

Two commands:

  generate (default)  Scaffold, build, verify, commit & push a reproducible
                      build for a release tag (templated from the newest folder).
  validate            Reproduce the build proposed in a PR and comment whether
                      the hashes match.

Usage:
  node generate-build.js <tag> [options]
  node generate-build.js validate <pr-url> [--dry-run] [--keep-image]

Tags:
  VETIVER-9.0.3       rskj (auto-detected: 3-part version)
  VETIVER-9.0.1.0     powpeg-node (auto-detected: 4-part version)

Generate options:
  -c, --component <c>  rskj | powpeg-node (default: auto from version shape)
  -b, --branch <name>  branch to create   (default: repro/<component>-<folder>)
      --remote <name>  git remote to push (default: auto-detected)
      --base <branch>  base branch         (default: master)
      --no-push        create branch + commit but don't push
      --dry-run        build + write files, make no git changes (skips the exists check)
      --allow-existing regenerate a build that already exists
      --keep-image     keep the Docker image afterwards
      --force          proceed despite a dirty tree, an existing folder, or a missing tag
  -h, --help

Validate:
  validate <pr-url>    Reproduce the PR's build and post a PR comment:
                       "Hashes verified!" or "Hashes differ!!" with the hashes.
                       --dry-run prints the comment instead of posting.
                       Exits 0 if they match, 1 if they differ.

Requirements: Node >= 18, Docker. git is needed for generate; a PR comment needs
gh (GitHub CLI) or GITHUB_TOKEN.
`;

async function main() {
  const { opts, positional } = parseArgs(process.argv.slice(2));
  if (opts.help) {
    console.log(USAGE);
    process.exit(0);
  }

  // Subcommand: validate a PR by reproducing its build and commenting the result.
  if (positional[0] === 'validate') {
    return modeValidate(positional[1], opts);
  }

  const tag = positional[0];
  if (!tag) {
    console.log(USAGE);
    process.exit(2);
  }

  const parsed = parseTag(tag);
  if (!parsed) die(`could not parse tag "${tag}". Expected <CODENAME>-<version>, e.g. VETIVER-9.0.2`);
  const componentName = opts.component || inferComponent(parsed);
  const component = COMPONENTS[componentName];
  if (!component) die(`unknown component "${componentName}". Known: ${Object.keys(COMPONENTS).join(', ')}`);

  const folder = component.folder(parsed);
  const fatJarName = component.fatJar(parsed);
  console.log(c.bold(`\n${component.name}  ${tag}`));
  console.log(c.dim(`  folder: ${component.subdir}/${folder}`));
  if (!opts.component) console.log(c.dim(`  (auto-detected component: ${componentName} — use --component to override)`));

  if (!has('docker')) die('Docker is required (this generator always builds to compute real hashes).');
  if (!has('git')) die('git is required.');

  // Repo root = this script's own repository.
  const repoDir = git(['rev-parse', '--show-toplevel'], __dirname, { allowFail: true }).stdout.trim();
  if (!repoDir) die('this script must live inside the reproducible-builds git repository.');

  const remote = detectRemote(repoDir, opts.remote);
  const base = opts.base || process.env.REPRO_BASE_BRANCH || 'master';
  const branch = opts.branch || `repro/${component.name}-${folder}`;

  // Guard: dirty tree (ignore untracked files like this script itself).
  const dirty = git(['status', '--porcelain', '--untracked-files=no'], repoDir).stdout.trim();
  if (dirty && !opts.force) die(`working tree is not clean. Commit/stash first or use --force.\n${dirty}`);

  // Fetch the base up front so existence checks and branching see the latest state.
  step(`Fetching ${remote}/${base}`);
  git(['fetch', remote, base], repoDir);

  const relFolder = path.join(component.subdir, folder);
  const folderPath = path.join(repoDir, relFolder);
  // Refuse if the build already exists either on disk OR upstream on the base
  // branch (your local checkout may simply be behind — that was the cause of
  // the "untracked files would be overwritten by checkout" error).
  const existsLocal = fs.existsSync(folderPath);
  const existsUpstream =
    git(['ls-tree', '-r', '--name-only', `${remote}/${base}`, '--', relFolder], repoDir, { allowFail: true })
      .stdout.trim().length > 0;
  const exists = existsLocal || existsUpstream;
  // --dry-run never commits, and --allow-existing / --force are explicit opt-ins
  // to regenerate. Otherwise refuse, so we don't open a duplicate PR.
  const mayProceedIfExists = opts.dryRun || opts.allowExisting || opts.force;
  if (exists) {
    const where = existsUpstream ? `already exists on ${remote}/${base}` : 'already exists locally';
    if (!mayProceedIfExists) {
      die(
        `target ${relFolder} ${where} (already published?).\n` +
          `  To regenerate it for testing, add --allow-existing or --dry-run;\n` +
          `  use --force to overwrite and commit.`,
      );
    }
    console.log(c.yellow(`  note: ${relFolder} ${where}; regenerating (you'll see "nothing to commit" if it reproduces).`));
  }

  // Pre-flight: the source tag must exist (this is what we build — the GitHub
  // *release* is published only AFTER the reproducible build is accepted, so we
  // do not require/gate on it here). Fail fast before the long Docker build.
  step(`Checking tag ${tag} exists in ${component.sourceRepo}`);
  let tagOk = true;
  try {
    tagOk = await tagExists(component.sourceRepo, tag);
  } catch (e) {
    console.log(c.yellow(`  could not verify the tag (${e.message}); continuing.`));
  }
  if (!tagOk && !opts.force) {
    die(`tag "${tag}" not found in ${component.sourceRepo}. Check the tag name, or use --force to build anyway.`, 1);
  }
  if (tagOk) console.log(c.green('  ✔ tag found'));

  // Template = newest existing folder for this component.
  const subdirPath = path.join(repoDir, component.subdir);
  const templates = fs
    .readdirSync(subdirPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => ({ name: d.name, p: component.parseFolder(d.name) }))
    .filter((x) => x.p && x.name !== folder)
    .sort((a, b) => cmpSemver(b.p.semver, a.p.semver));
  if (!templates.length) die(`no existing ${component.subdir} folder to use as a template.`);
  const template = templates[0];
  step(`Using ${component.subdir}/${template.name} as the template`);

  const tplDockerfile = fs.readFileSync(path.join(subdirPath, template.name, 'Dockerfile'), 'utf8');
  const tplReadme = fs.readFileSync(path.join(subdirPath, template.name, 'README.md'), 'utf8');

  const dockerfile = substituteVersion(tplDockerfile, template.p, parsed);

  // Build in a temporary context so the repo working tree is never touched
  // until we have a verified result. (Avoids leaving untracked files behind on
  // a failed build, and avoids colliding with the upcoming branch checkout.)
  const buildDir = fs.mkdtempSync(path.join(os.tmpdir(), 'rsk-build-'));
  fs.writeFileSync(path.join(buildDir, 'Dockerfile'), dockerfile);

  const imageTag = `${component.name}/${folder}`.toLowerCase();
  step(`Building ${imageTag} with Docker (compiles ${component.name} from source — can take a while)`);
  try {
    await streaming('docker', ['build', '-t', imageTag, buildDir], repoDir);
  } catch (e) {
    fs.rmSync(buildDir, { recursive: true, force: true });
    die(`docker build failed: ${e.message}`, 1);
  }

  step('Hashing built artifacts');
  const shell = componentShell(tplReadme); // mirror the shell the template README documents
  const shaBlock = run('docker', ['run', '--rm', imageTag, shell, '-c', 'sha256sum * | grep -v javadoc.jar']).stdout.trim();
  fs.rmSync(buildDir, { recursive: true, force: true });
  if (!shaBlock) die('the built image produced no artifacts to hash.', 1);
  console.log(shaBlock.split('\n').map((l) => '    ' + l).join('\n'));
  if (!opts.keepImage) spawnSync('docker', ['image', 'rm', '-f', imageTag], { stdio: 'ignore' });

  // Informational only: if a GitHub release already exists for this tag, note
  // whether our fat jar matches it. Normally there is NO release yet (it's
  // published after the reproducible build is accepted), so this is skipped.
  // This is never a gate — the reproducible build is the source of truth.
  step('Comparing against a published GitHub release (if one exists yet)');
  const built = parseShaLine(shaBlock, fatJarName);
  let declared = null;
  try {
    ({ digest: declared } = await fetchReleaseDigest(component.sourceRepo, tag, fatJarName));
  } catch (e) {
    console.log(c.yellow(`  could not query the release (${e.message}); skipping.`));
  }
  if (declared && built) {
    if (declared === built) console.log(c.green(`  ✔ matches the existing release digest (${built.slice(0, 16)}…)`));
    else
      console.log(
        c.red(`  ✘ differs from the existing release digest:\n    built:   ${built}\n    release: ${declared}`) +
          c.yellow('\n  (the reproducible build is authoritative — investigate if this is unexpected.)'),
      );
  } else {
    console.log(c.dim('  no release yet — expected (releases are published after the build is accepted); skipping.'));
  }

  const readme = injectShaBlock(substituteVersion(tplReadme, template.p, parsed), shaBlock);

  // Helper: write the two files into the repo folder.
  const writeFiles = () => {
    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(path.join(folderPath, 'Dockerfile'), dockerfile);
    fs.writeFileSync(path.join(folderPath, 'README.md'), readme);
  };

  if (opts.dryRun) {
    step('Writing files (dry-run)');
    writeFiles();
    console.log(c.yellow(`\n--dry-run: wrote ${relFolder}; no git changes made.`));
    return;
  }

  // Create the branch BEFORE writing any files into the repo, so a clean tree
  // is checked out and there are no untracked files to collide with.
  step(`Creating branch ${branch} off ${remote}/${base}`);
  git(['checkout', '-B', branch, `${remote}/${base}`], repoDir);

  step('Writing files');
  writeFiles();

  step('Committing');
  git(['add', '--', relFolder], repoDir);
  if (git(['diff', '--cached', '--quiet'], repoDir, { allowFail: true }).status === 0) {
    console.log(c.yellow(`  nothing to commit — generated files are identical to ${remote}/${base}.`));
    console.log(c.green('\n✔ done (no changes).\n'));
    return;
  }
  git(['commit', '-m', `Add ${component.name} reproducible build for ${tag}`], repoDir);

  if (opts.push) {
    step(`Pushing to ${remote}/${branch}`);
    git(['push', '-u', remote, branch], repoDir);
    openPr({ repoDir, remote, base, branch, component, tag, version: parsed.semver, shaBlock });
  } else {
    console.log(c.yellow(`\n  --no-push: publish with:  git -C "${repoDir}" push -u ${remote} ${branch}`));
  }

  console.log(c.green('\n✔ done.\n'));
}

function openPr({ repoDir, remote, base, branch, component, tag, version, shaBlock }) {
  const title = `Add ${component.name} reproducible build for ${tag}`;
  const body = `${component.name} reproducible build for version ${version}\n\n${hashFence(shaBlock)}\n`;

  if (has('gh')) {
    step('Opening a PR with gh');
    const r = spawnSync(
      'gh',
      ['pr', 'create', '--repo', UPSTREAM, '--base', base, '--head', branch, '--title', title, '--body', body],
      { cwd: repoDir, stdio: 'inherit' },
    );
    if (!r.error && r.status === 0) return;
    console.log(c.yellow('  gh pr create did not complete — here is the info to open it manually:'));
  } else {
    step('PR info (gh not found — copy/paste to open the PR)');
  }
  const slug = githubSlug(repoDir, remote);
  const owner = slug ? slug.split('/')[0] : null;
  const head = owner && owner !== UPSTREAM.split('/')[0] ? `${owner}:${branch}` : branch;
  const q = `expand=1&title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  console.log(`  title: ${title}`);
  console.log(`  body:\n${body.split('\n').map((l) => '    ' + l).join('\n')}`);
  console.log(`  url:   https://github.com/${UPSTREAM}/compare/${base}...${encodeURIComponent(head)}?${q}`);
}

// ---------------------------------------------------------------------------
// validate mode: reproduce a PR's build and comment the result
// ---------------------------------------------------------------------------

async function ghJson(url) {
  const res = await fetch(url, { headers: ghHeaders() });
  if (res.status === 404) throw new Error(`not found: ${url}`);
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status} ${res.statusText}`);
  return res.json();
}

async function fetchTextOrDie(url, label) {
  const res = await fetch(url, { headers: { 'User-Agent': 'rsk-build-generator' } });
  if (!res.ok) die(`could not fetch ${label} from the PR (${res.status} ${res.statusText}):\n  ${url}`, 1);
  return res.text();
}

async function postComment(prUrl, pr, body) {
  if (has('gh')) {
    const r = spawnSync('gh', ['pr', 'comment', prUrl, '--body', body], { stdio: 'inherit' });
    if (!r.error && r.status === 0) return console.log(c.green('  comment posted.'));
    console.log(c.yellow('  gh pr comment did not complete; trying the API…'));
  }
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (token) {
    const res = await fetch(`https://api.github.com/repos/${pr.owner}/${pr.repo}/issues/${pr.number}/comments`, {
      method: 'POST',
      headers: { ...ghHeaders(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ body }),
    });
    if (res.ok) return console.log(c.green('  comment posted.'));
    console.log(c.yellow(`  API comment failed: ${res.status} ${res.statusText}`));
  }
  console.log(c.yellow('\n  Could not post automatically (need `gh` or GITHUB_TOKEN). Comment to paste:\n'));
  console.log(body.split('\n').map((l) => '    ' + l).join('\n'));
}

async function modeValidate(prUrl, opts) {
  const pr = parsePrUrl(prUrl);
  if (!pr) die('validate needs a PR URL, e.g.\n  node generate-build.js validate https://github.com/rsksmart/reproducible-builds/pull/123');
  if (!has('docker')) die('Docker is required to reproduce the build.');

  console.log(c.bold(`\nValidating PR #${pr.number} in ${pr.owner}/${pr.repo}`));

  // 1. PR head (repo + ref) and the build folder it adds.
  step('Fetching PR metadata');
  const meta = await ghJson(`https://api.github.com/repos/${pr.owner}/${pr.repo}/pulls/${pr.number}`);
  const headRepo = meta.head && meta.head.repo ? meta.head.repo.full_name : `${pr.owner}/${pr.repo}`;
  const headRef = meta.head && meta.head.ref;
  if (!headRef) die('could not determine the PR head ref.', 1);

  const files = await ghJson(`https://api.github.com/repos/${pr.owner}/${pr.repo}/pulls/${pr.number}/files?per_page=100`);
  let build;
  try {
    build = detectBuildFromFiles(files.map((f) => f.filename));
  } catch (e) {
    die(e.message, 1); // e.g. PR touches multiple build folders
  }
  if (!build) die('this PR does not add a recognized rskj/ or powpeg-node/ build folder.', 1);
  const { component, folder } = build;
  console.log(c.dim(`  build: ${component.subdir}/${folder}   (head ${headRepo}@${headRef})`));

  // 2. Fetch the PR's Dockerfile + README from the head ref.
  const rawBase = `https://raw.githubusercontent.com/${headRepo}/${encodeURIComponent(headRef)}/${component.subdir}/${folder}`;
  step('Fetching the build files from the PR');
  const dockerfile = await fetchTextOrDie(`${rawBase}/Dockerfile`, 'Dockerfile');
  const prReadme = await fetchTextOrDie(`${rawBase}/README.md`, 'README.md');
  const declared = parseShaMap(prReadme);
  if (!declared.size) die('the PR README has no sha256 block to compare against.', 1);

  // 3. Reproduce.
  const buildDir = fs.mkdtempSync(path.join(os.tmpdir(), 'rsk-validate-'));
  fs.writeFileSync(path.join(buildDir, 'Dockerfile'), dockerfile);
  const imageTag = `${component.name}/${folder}`.toLowerCase() + ':validate';
  step(`Building ${imageTag} (compiles ${component.name} from source — can take a while)`);
  try {
    await streaming('docker', ['build', '-t', imageTag, buildDir]);
  } catch (e) {
    fs.rmSync(buildDir, { recursive: true, force: true });
    die(`docker build failed: ${e.message}`, 1);
  }
  step('Hashing built artifacts');
  const shell = componentShell(prReadme);
  const reproBlock = run('docker', ['run', '--rm', imageTag, shell, '-c', 'sha256sum * | grep -v javadoc.jar']).stdout.trim();
  fs.rmSync(buildDir, { recursive: true, force: true });
  if (!opts.keepImage) spawnSync('docker', ['image', 'rm', '-f', imageTag], { stdio: 'ignore' });
  if (!reproBlock) die('the built image produced no artifacts to hash.', 1);
  console.log(reproBlock.split('\n').map((l) => '    ' + l).join('\n'));

  // 4. Compare reproduced vs the hashes declared in the PR's README.md file
  //    (the source of truth — the PR description text is irrelevant here).
  const reproduced = parseShaMap(reproBlock);
  const matches = mapsEqual(declared, reproduced);
  if (matches) {
    console.log(c.green('\n  ✔ reproduced hashes match the PR.'));
  } else {
    console.log(c.red('\n  ✘ reproduced hashes do NOT match the PR:'));
    const names = new Set([...declared.keys(), ...reproduced.keys()]);
    for (const n of names) {
      if (declared.get(n) !== reproduced.get(n)) {
        console.log(c.dim(`    ${n}: PR=${declared.get(n) || '(absent)'}  built=${reproduced.get(n) || '(absent)'}`));
      }
    }
  }

  // 5. Comment.
  const body = `${matches ? 'Hashes verified!' : 'Hashes differ!!'}\n\n${hashFence(reproBlock)}\n`;
  if (opts.dryRun) {
    console.log(c.yellow('\n--dry-run: not posting. The comment would be:\n'));
    console.log(body.split('\n').map((l) => '    ' + l).join('\n'));
  } else {
    step('Posting the result as a PR comment');
    await postComment(prUrl, pr, body);
  }
  process.exit(matches ? 0 : 1);
}

if (require.main === module) {
  main().catch((e) => die(e.stack || e.message, 1));
}
