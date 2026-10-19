'use strict';

/*
 * Pure logic for the reproducible-build generator: component conventions, tag
 * parsing, version substitution, README sha-block handling, and PR helpers.
 *
 * Everything here is deterministic and side-effect free (no git, Docker,
 * network, filesystem, or process.exit), so it can be unit-tested directly.
 * See lib.test.js. The I/O and the generate/validate flows live in
 * generate-build.js.
 */

// A semver is 2-4 dot-separated numeric parts (rskj uses 3, e.g. 9.0.2;
// powpeg-node uses 4, e.g. 9.0.0.0).
const SEMVER = '\\d+(?:\\.\\d+){1,3}';

// Per-component conventions. `folder` and `parseFolder` are inverses.
const COMPONENTS = {
  rskj: {
    name: 'rskj',
    sourceRepo: 'rsksmart/rskj',
    subdir: 'rskj',
    // folder: "<semver>-<codename>" e.g. 9.0.2-vetiver
    folder: ({ semver, codename }) => `${semver}-${codename.toLowerCase()}`,
    parseFolder: (name) => {
      const m = name.match(new RegExp(`^(${SEMVER})-([A-Za-z0-9-]+)$`));
      return m ? { semver: m[1], codename: m[2].toLowerCase() } : null;
    },
    fatJar: ({ semver, codename }) => `rskj-core-${semver}-${codename.toUpperCase()}-all.jar`,
  },
  'powpeg-node': {
    name: 'powpeg-node',
    sourceRepo: 'rsksmart/powpeg-node',
    subdir: 'powpeg-node',
    // folder: "<CODENAME>-<semver>" e.g. VETIVER-9.0.0.0 (also the tag)
    folder: ({ semver, codename }) => `${codename.toUpperCase()}-${semver}`,
    parseFolder: (name) => {
      const m = name.match(new RegExp(`^([A-Za-z0-9-]+)-(${SEMVER})$`));
      return m ? { semver: m[2], codename: m[1].toLowerCase() } : null;
    },
    fatJar: ({ semver, codename }) => `federate-node-${codename.toUpperCase()}-${semver}-all.jar`,
  },
};

// Tags are "<CODENAME>-<semver>", e.g. VETIVER-9.0.2, HOP-TESTNET-4.0.1.0.
function parseTag(tag) {
  const m = String(tag).trim().match(new RegExp(`^([A-Za-z0-9-]+)-(${SEMVER})$`));
  return m ? { codename: m[1].toLowerCase(), semver: m[2] } : null;
}

// powpeg-node uses 4-part versions (9.0.0.0); rskj uses 3 (9.0.2).
function inferComponent(parsed) {
  return parsed && parsed.semver.split('.').length >= 4 ? 'powpeg-node' : 'rskj';
}

function cmpSemver(a, b) {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d;
  }
  return 0;
}

// Replace every encoding of the old version with the new one. Each version
// appears only in these four combined forms (verified against real folders),
// so there's no risky bare-number substitution.
function substituteVersion(text, oldP, newP) {
  const forms = (p) => {
    const cn = p.codename.toLowerCase();
    const CN = p.codename.toUpperCase();
    return [`${CN}-${p.semver}`, `${p.semver}-${CN}`, `${p.semver}-${cn}`, `${cn}-${p.semver}`];
  };
  const from = forms(oldP);
  const to = forms(newP);
  let out = text;
  for (let i = 0; i < from.length; i++) out = out.split(from[i]).join(to[i]);
  return out;
}

// Replace the contiguous run of "<sha256>  <file>" lines with a fresh block.
function injectShaBlock(readme, block) {
  const isHash = (l) => /^[0-9a-fA-F]{64}\s+\S+$/.test(l.trim());
  const lines = readme.split('\n');
  const start = lines.findIndex(isHash);
  if (start === -1) throw new Error('template README has no sha256 block to replace');
  let end = start;
  while (end + 1 < lines.length && isHash(lines[end + 1])) end++;
  lines.splice(start, end - start + 1, ...block.split('\n'));
  return lines.join('\n');
}

// First hash matching a given filename in a "<sha256>  <file>" block.
function parseShaLine(block, filename) {
  for (const line of block.split('\n')) {
    const m = line.trim().match(/^([0-9a-fA-F]{64})\s+(\S+)$/);
    if (m && m[2] === filename) return m[1].toLowerCase();
  }
  return null;
}

// Map filename -> hash from a "<sha256>  <file>" block.
function parseShaMap(text) {
  const map = new Map();
  for (const line of String(text).split('\n')) {
    const m = line.trim().match(/^([0-9a-fA-F]{64})\s+(\S+)$/);
    if (m) map.set(m[2], m[1].toLowerCase());
  }
  return map;
}

function mapsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const [k, v] of a) if (b.get(k) !== v) return false;
  return true;
}

// Mirror the shell the template README uses in its "docker run ... -c" line.
function componentShell(readme) {
  return /docker run[^\n]*\bbash -c\b/.test(readme) ? 'bash' : 'sh';
}

// A fenced code block listing the artifacts and their hashes.
function hashFence(shaBlock) {
  return '```\n' + shaBlock + '\n```';
}

// Parse a PR web URL into { owner, repo, number }.
function parsePrUrl(url) {
  const m = String(url || '').match(/github\.com\/([^/]+)\/([^/]+)\/pull\/(\d+)/);
  return m ? { owner: m[1], repo: m[2], number: m[3] } : null;
}

// Identify which build folder a PR adds from its changed file paths. Returns
// { component, folder } | null. Throws if the PR touches more than one build.
function detectBuildFromFiles(filenames) {
  const found = new Map();
  for (const f of filenames) {
    const m = String(f).match(/^(rskj|powpeg-node)\/([^/]+)\//);
    if (!m) continue;
    const component = COMPONENTS[m[1]];
    if (component && component.parseFolder(m[2])) found.set(`${m[1]}/${m[2]}`, { component, folder: m[2] });
  }
  const vals = [...found.values()];
  if (vals.length > 1) {
    throw new Error(`PR touches multiple build folders: ${[...found.keys()].join(', ')}. Validate one at a time.`);
  }
  return vals[0] || null;
}

module.exports = {
  SEMVER,
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
};
