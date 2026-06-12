# Claude Code — Reproducible Builds

This repository contains reproducible build definitions (Dockerfiles and verification instructions) for RSKj and its dependencies.

## Project Structure

- `rskj/` — Reproducible builds for RSKj node releases, one directory per version (e.g. `9.0.0-vetiver/`)
- `powpeg-node/` — Reproducible builds for PowPeg node releases
- `bitcoinj/`, `bitcoinj-thin/`, `bouncycastle/`, `native/` — Reproducible builds for RSKj dependencies
- `.claude/skills/` — Project-specific Claude Code skills

## Agents and Skills

See [AGENTS.md](AGENTS.md) for available agents and skills that assist with tasks in this repository.

## Key Conventions

- Each release lives in its own directory named `<version>-<codename>/` (e.g. `9.0.0-vetiver/`)
- Every release directory contains a `Dockerfile` and a `README.md`
- The `README.md` must include the actual sha256 hashes of the built artifacts after a successful build
- Docker image tags follow the pattern `<reproducible-build>/<version>-<codename>` (e.g. `rskj/9.0.0-vetiver`)
- Artifact names follow the pattern `<reproducible-build-binary>-<version>-<CODENAME>` (e.g. `rskj-core-9.0.0-VETIVER-all.jar`)

## Workflow Summary

To add a new RSKj release, use the `rskj-reproducible-build` skill. It will guide you through all steps interactively. See [AGENTS.md](AGENTS.md) for the list of skills.
