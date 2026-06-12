---
name: rskj-reproducible-build
description: This skill should be used when the user asks to "generate a reproducible build for rskj", "create reproducible build", "add new rskj release", "set up reproducible build for a new rskj version", or mentions generating build files for a new rskj release name and version number.
version: 0.1.0
---

# rskj Reproducible Build

Generate the reproducible build setup for a new rskj release by copying the previous version and substituting the release name and number.

## Prerequisites

Before starting, collect the following from the user:

1. **Version name** — the release codename in lowercase (e.g., `vetiver`)
2. **Version number** — the semantic version (e.g., `9.0.0`)

Ask for both values upfront if not already provided:

> "What is the new rskj release name (e.g., vetiver) and version number (e.g., 9.0.0)?"

Use these values throughout as:
- `<NAME>` = lowercase name (e.g., `vetiver`)
- `<NAME_UPPER>` = uppercase name (e.g., `VETIVER`)
- `<VERSION>` = version number (e.g., `9.0.0`)

## Step 1: Identify the Previous Release

Find the most recent release directory to use as a base:

```bash
ls /path/to/reproducible-builds/rskj/
```

Pick the highest-versioned directory (e.g., `8.1.0-reed`) as the source.

## Step 2: Create the New Directory and Files

Create the new release directory:

```bash
mkdir -p rskj/<VERSION>-<NAME>
```

Copy and update `Dockerfile` — substitute all occurrences of:
- Previous release name (upper and lowercase) → `<NAME_UPPER>` / `<NAME>`
- Previous version number → `<VERSION>`

Key lines that change in the Dockerfile:
```dockerfile
RUN gitrev=<NAME_UPPER>-<VERSION> && \
...
COPY --from=builder --chown=rsk:rsk /root/.m2/repository/co/rsk/rskj-core/<VERSION>-<NAME_UPPER>/*.module ./
CMD ["java", "-cp", "rskj-core-<VERSION>-<NAME_UPPER>-all.jar", "co.rsk.Start"]
```

Copy and update `README.md` — substitute the same patterns throughout. Note: the sha256 hashes in the README are **placeholders** at this point and will be updated after the build runs.

## Step 3: Build the Docker Image

Navigate to the new release directory and run:

```bash
docker build -t rskj/<VERSION>-<NAME> .
```

This step requires Docker to be running. If Docker is not running, ask the user to start Docker Desktop first.

## Step 4: Extract the JAR from the Image

Run the following commands to extract all artifacts into a local `libs/` folder:

```bash
cid=$(docker run -d rskj/<VERSION>-<NAME> /bin/true)
docker cp "$cid":/home/rsk/ ./libs/
docker rm "$cid"
```

Verify the contents:

```bash
ls ./libs/
```

Expected files:
- `rskj-core-<VERSION>-<NAME_UPPER>-all.jar`
- `rskj-core-<VERSION>-<NAME_UPPER>-javadoc.jar`
- `rskj-core-<VERSION>-<NAME_UPPER>-sources.jar`
- `rskj-core-<VERSION>-<NAME_UPPER>.jar`
- `rskj-core-<VERSION>-<NAME_UPPER>.module`
- `rskj-core-<VERSION>-<NAME_UPPER>.pom`

## Step 5: Capture sha256 Hashes

Run:

```bash
docker run --rm rskj/<VERSION>-<NAME> sh -c 'sha256sum * | grep -v javadoc.jar'
```

This outputs the actual sha256 hashes for all artifacts (excluding the javadoc jar).

## Step 6: Update README.md

Replace the placeholder hashes in `README.md` with the actual output from Step 5. The block to update is inside the `## Verify` section and should look like:

```
<hash>  rskj-core-<VERSION>-<NAME_UPPER>-all.jar
<hash>  rskj-core-<VERSION>-<NAME_UPPER>-sources.jar
<hash>  rskj-core-<VERSION>-<NAME_UPPER>.jar
<hash>  rskj-core-<VERSION>-<NAME_UPPER>.module
<hash>  rskj-core-<VERSION>-<NAME_UPPER>.pom
```

## Step 7: Commit and Open a PR

Stage and commit the new files:

```bash
git add rskj/<VERSION>-<NAME>/
git commit -m "Add reproducible build for <NAME_UPPER>-<VERSION>"
```

Then open a PR targeting `master`.

### Common Build Failures

| Error | Cause | Action |
|-------|-------|--------|
| `connect: no such file or directory` | Docker daemon not running | Ask user to start Docker Desktop |
| `checkstyleMain/Test/IntegrationTest FAILED` | Checkstyle violations in source | Add `-x checkstyleMain -x checkstyleTest -x checkstyleIntegrationTest` to the gradle command |
| `git fetch` fails | Tag doesn't exist yet | Confirm the tag exists on `https://github.com/rsksmart/rskj` |
