#!/usr/bin/env bash
## Build the Docker image in a reproducible-build folder and check that the
## artifacts it produces match the sha256 hashes in the folder's README.
##
## Usage: verify-reproducible-build.sh <component>/<version>
##
## The hashes are read from the "## Verify" section of README.md as data. The
## README commands are never executed. Files are hashed on the host, not inside
## the image, so the image cannot fake its own sha256sum output.

set -euo pipefail

FOLDER="${1:?usage: verify-reproducible-build.sh <component>/<version>}"
README="${FOLDER}/README.md"
SUMMARY="${GITHUB_STEP_SUMMARY:-/dev/null}"

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

[ -f "${FOLDER}/Dockerfile" ] || fail "${FOLDER}/Dockerfile not found"
[ -f "$README" ] || fail "$README not found"

expected=$(awk '/^## /{ in_verify = ($0 ~ /^## Verify/) } in_verify' "$README" \
  | grep -E '^[0-9a-f]{64}  [A-Za-z0-9._+-]+$' || true)
[ -n "$expected" ] || fail "no '<sha256>  <file>' lines found in the Verify section of $README"

IMAGE="verify-$(echo "$FOLDER" | tr '/' '-' | tr '[:upper:]' '[:lower:]')"
docker build --pull --no-cache -t "$IMAGE" "$FOLDER"

workdir=$(docker image inspect --format '{{.Config.WorkingDir}}' "$IMAGE")
[ -n "$workdir" ] || fail "image has no WORKDIR; cannot locate the artifacts"

container=$(docker create "$IMAGE")
extracted=$(mktemp -d)
trap 'docker rm "$container" >/dev/null; rm -rf "$extracted"' EXIT

{
  echo "### ${FOLDER}"
  echo
  echo "| File | Expected | Actual | Result |"
  echo "|---|---|---|---|"
} >> "$SUMMARY"

failures=0
while read -r expected_hash file; do
  [ "$file" != "." ] && [ "$file" != ".." ] || fail "invalid file name in README: $file"

  actual_hash="-"
  if ! docker cp "${container}:${workdir}/${file}" "${extracted}/${file}" 2>/dev/null; then
    result="MISSING"
  elif [ -L "${extracted}/${file}" ] || [ ! -f "${extracted}/${file}" ]; then
    result="NOT A REGULAR FILE"
  else
    actual_hash=$(sha256sum "${extracted}/${file}" | cut -d' ' -f1)
    if [ "$actual_hash" = "$expected_hash" ]; then
      result="OK"
    else
      result="MISMATCH"
    fi
  fi

  [ "$result" = "OK" ] || failures=$((failures + 1))
  echo "${result}: ${file}"
  echo "  expected ${expected_hash}"
  echo "  actual   ${actual_hash}"
  echo "| \`${file}\` | \`${expected_hash}\` | \`${actual_hash}\` | ${result} |" >> "$SUMMARY"
done <<< "$expected"

echo >> "$SUMMARY"

[ "$failures" -eq 0 ] || fail "${failures} artifact(s) in ${FOLDER} do not match the README"
echo "All artifacts in ${FOLDER} match the README."
