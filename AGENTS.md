# Agents and Skills

> For full repository context, conventions, and project structure, read [CLAUDE.md](CLAUDE.md) first.

This file documents the Claude Code agents and skills available in this repository.

## Skills

Skills are located in `.claude/skills/` and are automatically loaded by Agents when working in this project.

The list of skills is here, take a look on then to use it, or ask the agent to help you out.

- `rskj-reproducible-build`
  - **Location:** `.claude/skills/rskj-reproducible-build/SKILL.md`
  - **Purpose:** Generate the reproducible build setup (Dockerfile + README) for a new rskj release, build the Docker image, capture sha256 hashes, and open a PR.

- `verify-reproducible-build`
  - **Location:** `.claude/skills/verify-reproducible-build/SKILL.md`
  - **Purpose:** Verify any reproducible build (rskj, powpeg-node, bitcoinj, bitcoinj-thin, native) by building the Docker image and computing sha256 hashes, with optional comparison against known-good values.

