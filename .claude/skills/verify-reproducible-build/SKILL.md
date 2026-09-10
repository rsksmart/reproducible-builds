---
name: verify-reproducible-build
description: This skill should be used when the user asks to "verify a reproducible build", "check the sha256 of a build", "validate a release", or provides a binary name and version to verify (e.g., "verify powpeg-node VETIVER-9.0.0.0").
version: 0.1.0
---

# Verify Reproducible Build

Verify the reproducible build for any supported binary by building the Docker image and extracting sha256 hashes, then optionally comparing them against known-good values.

## Supported Binaries

| Binary        | Example version input |
|---------------|----------------------|
| `rskj`        | `9.0.0-vetiver`      |
| `powpeg-node` | `VETIVER-9.0.0.0`    |
| `bitcoinj`    | `0.15.6-rsk-4`       |
| `bitcoinj-thin` | `0.14.4-rsk-18`    |
| `native`      | `1.3.0`              |

## Step 1: Collect Inputs

If the user has not already provided both values, ask:

> "Which binary do you want to verify? (rskj, powpeg-node, bitcoinj, bitcoinj-thin, native)
> And what is the version? (e.g., VETIVER-9.0.0.0)"

Use these values throughout:
- `<BINARY>` = binary name (e.g., `powpeg-node`)
- `<VERSION>` = version string (e.g., `VETIVER-9.0.0.0`)

## Step 2: Locate the Release Directory

Find the matching directory inside the repo:

```bash
ls <repo-root>/<BINARY>/
```

Match the entry that corresponds to `<VERSION>`. If no exact match is found, show the available versions and ask the user to confirm.

Once confirmed, set:
- `<RELEASE_DIR>` = `<repo-root>/<BINARY>/<VERSION>/`

## Step 3: Read the README

Read `<RELEASE_DIR>/README.md` and `<RELEASE_DIR>/Dockerfile` to extract:

1. **Docker image tag** — found in the `## Build` section, e.g.:
   ```
   docker build -t powpeg-node/reed-8.1.0.0 .
   ```
   Extract the tag after `-t` → `<IMAGE_TAG>`

2. **Verify command** — found in the `## Verify` section, e.g.:
   ```
   docker run --rm powpeg-node/reed-8.1.0.0 bash -c 'sha256sum * | grep -v javadoc.jar'
   ```
   Extract the full `docker run ...` command → `<VERIFY_CMD>`

3. **Expected hashes** — the hash lines listed in the `## Verify` section of the README (if present).

## Step 4: Build the Docker Image

Navigate to the release directory and build:

```bash
cd <RELEASE_DIR>
docker build -t <IMAGE_TAG> .
```

This step can take several minutes. Warn the user that the build may take a while.

**If Docker is not running:** inform the user and ask them to start Docker Desktop before continuing.

**Common build failures:**

| Error | Cause | Action |
|-------|-------|--------|
| `connect: no such file or directory` | Docker daemon not running | Ask user to start Docker Desktop |
| `git fetch` fails with tag not found | Tag doesn't exist in the remote yet | Ask the user to confirm the tag exists in the repository |

## Step 5: Extract sha256 Hashes

Run the verify command extracted in Step 3:

```bash
<VERIFY_CMD>
```

Capture the full output. This is the **computed hash list**.

Display the computed hashes clearly to the user.

## Step 6: Compare Hashes (Optional)

### If README already contained expected hashes:

Compare the computed hashes against those from the README automatically.

- If all hashes match: report **PASS** for each artifact.
- If any hash differs: report **FAIL** for that artifact and show both values side by side.

### Ask the user if they have additional hashes to compare:

> "Do you have a set of sha256 hashes to compare against? If so, paste them now (or press Enter to skip)."

If the user provides hashes:
- Parse each line as `<hash>  <filename>`
- Compare line by line with the computed hashes
- Report **PASS** or **FAIL** per artifact, and a final overall result

### Final verdict:

- **All match** → "Reproducible build verified successfully. All hashes match."
- **Any mismatch** → "Verification FAILED. The following artifacts did not match: ..."
