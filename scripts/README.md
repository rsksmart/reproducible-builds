# scripts

Tooling for maintaining this repository.

| File | Purpose |
| --- | --- |
| `generate-build.js` | CLI: the `generate` and `validate` commands, plus all I/O (git, Docker, GitHub). |
| `lib.js` | Pure, side-effect-free logic (component conventions, tag parsing, version substitution, sha-block handling). |
| `lib.test.js` | Unit tests for `lib.js`. Run from this folder: `node --test lib.test.js`. |

All zero-dependency — just Node. There's no build step and nothing to install.

## generate-build.js

Generates a reproducible-build entry for a release tag end to end: it scaffolds the folder,
builds it, verifies the result against the published GitHub release, then commits and pushes
a branch and opens a PR.

It uses the **newest existing folder of the same project as the template**, so a new build
automatically inherits the current base images, GPG key, gradle flags, and README wording —
nothing is hardcoded, so it won't drift as conventions change.

### What it does

1. Parses the tag and picks the component (`rskj` vs `powpeg-node`) from the version shape
   (3 parts → rskj, 4 parts → powpeg-node; override with `--component`).
2. **Verifies the git tag exists** in the source repo (fail fast before the long build). The
   tag — not a GitHub release — is the reference, because the release is published *after* the
   reproducible build is accepted. Source integrity is then enforced inside the build itself
   (the Dockerfile GPG-verifies `SHA256SUMS` for the checked-out source).
3. Copies the newest existing folder of that project and substitutes the version everywhere
   it appears, producing the new `Dockerfile`.
4. Runs `docker build`, then `sha256sum *` inside the image to get the artifact hashes.
5. *(Informational only)* If a GitHub release already exists for the tag, notes whether the
   fat jar matches it. Usually there's no release yet, so this is skipped — it's never a gate.
6. Writes `README.md` with the computed hashes.
7. Creates a branch (`repro/<component>-<folder>`), commits **only the new folder**, pushes
   to the detected remote, and opens a PR with `gh` (or prints the PR title + compare URL).

The PR body is filled in with a brief description and the artifact hashes:

~~~~
<component> reproducible build for version <version>

~~~
<sha256>  <artifact-1>
<sha256>  <artifact-2>
...
~~~
~~~~

### Requirements

- Node.js ≥ 18 (uses the built-in `fetch`)
- Docker (the build runs on every invocation to compute real hashes)
- git, with this repo checked out and a remote you can push to
- Optional: [`gh`](https://cli.github.com/) (GitHub CLI) to open the PR automatically

### Usage

Run it from anywhere inside the repo — it finds the repo root itself:

```bash
node scripts/generate-build.js <tag> [options]
```

Examples:

```bash
# rskj (3-part version, auto-detected)
node scripts/generate-build.js VETIVER-9.0.3

# powpeg-node (4-part version, auto-detected)
node scripts/generate-build.js VETIVER-9.0.1.0

# build + verify + write files, but make NO git changes (recommended first run)
node scripts/generate-build.js VETIVER-9.0.3 --dry-run

# create the branch + commit but don't push
node scripts/generate-build.js VETIVER-9.0.3 --no-push
```

#### Testing the process against an already-accepted build

To exercise the tool against a tag whose build folder already exists on `master` (instead of
inventing a fake tag), use `--allow-existing`. The folder already lives on `master`, so the
already-exists guard would normally stop you. `--allow-existing` lets it proceed — and because
a faithful build reproduces the committed files byte-for-byte, it ends with **"nothing to
commit"**, which is itself proof that the build reproduces:

```bash
# full run against an existing build — confirms it reproduces, makes no commit
node scripts/generate-build.js VETIVER-9.0.1 --allow-existing

# or just build + verify the hashes, touch nothing in git
node scripts/generate-build.js VETIVER-9.0.1 --dry-run
```

Use `--force` (not `--allow-existing`) only when you actually intend to **overwrite** an
existing build and commit the change.

### Options

| Option | Description |
| --- | --- |
| `-c, --component <c>` | `rskj` or `powpeg-node` (default: auto-detected from the version). |
| `-b, --branch <name>` | Branch to create (default: `repro/<component>-<folder>`). |
| `--remote <name>` | Git remote to push to (default: auto-detected, prefers `origin`). |
| `--base <branch>` | Base branch (default: `master`). |
| `--no-push` | Create the branch + commit but don't push. |
| `--dry-run` | Build and write files, but make no git changes (also skips the already-exists check). |
| `--allow-existing` | Regenerate a build that already exists (for testing). |
| `--keep-image` | Keep the Docker image after building. |
| `--force` | Proceed despite a dirty tree, an existing folder, or a missing source tag. |
| `-h, --help` | Show help. |

### Environment (all optional)

- `GITHUB_TOKEN` (or `GH_TOKEN`) — raises GitHub API rate limits for the release cross-check.
- `REPRO_REMOTE` / `REPRO_BASE_BRANCH` — override the push remote / base branch.
- `NO_COLOR` — disable colored output.

### Safety behavior

- Refuses to run on a **dirty working tree** (tracked changes) — commit or stash first, or
  pass `--force`.
- Refuses if the **target folder already exists** — checked both on disk **and on
  `<remote>/<base>`**, so an already-published build is caught even when your local checkout
  is behind. Use `--force` to overwrite.
- **Verifies the source tag exists** before building (fail fast). A GitHub release is *not*
  required and never gates the build — it's published after the reproducible build is
  accepted. If a release happens to exist already, a hash comparison is shown for information
  only.
- The Docker build runs in a **temporary directory**, so a failed build never leaves
  untracked files in the repo, and the branch is created off a clean tree.
- Commits **only** the new build folder, never the script or other changes. If the generated
  files are identical to what's already on the base branch, it stops without an empty commit.

### Notes

- The branch is created from `<remote>/<base>` after fetching (and before any files are
  written into the repo), so it doesn't depend on — or collide with — your local state.
- If `gh` isn't installed, the script prints the PR title and a compare URL to open manually.
- Verifying a reproducible-build PR is handled by the `validate` mode of `generate-build.js` (see below).

## Validating a PR (`validate`)

Reproduces the build proposed in a pull request and posts the result as a PR comment — handy
for reviewing reproducible-build PRs.

```bash
node scripts/generate-build.js validate https://github.com/rsksmart/reproducible-builds/pull/123
```

It reads the PR's changed files to find the build folder, fetches that folder's `Dockerfile`
and `README.md` from the **PR's head branch**, rebuilds it with Docker, and compares the
freshly computed hashes against the sha256 block in the committed **`README.md` file**. The
PR description text is not used for validation — it's purely cosmetic. Then it comments:

- **match** → `Hashes verified!` followed by the artifact list;
- **mismatch** → `Hashes differ!!` followed by the artifact list (and the console prints a
  per-file diff).

Exit code is `0` on match, `1` on mismatch — so it's CI-friendly.

```bash
# preview the comment without posting it
node scripts/generate-build.js validate <pr-url> --dry-run
```

Posting the comment uses `gh` if installed, otherwise the GitHub API with `GITHUB_TOKEN`; if
neither is available it prints the comment for you to paste. Validation works on PRs from
forks too (it builds from the PR head repo). It needs Docker, but not a local clone or git.
