'use strict';

// Unit tests for the pure logic in lib.js. Run with:
//   node --test scripts/
// or
//   node scripts/lib.test.js
//
// Hermetic: uses small inline fixtures, no repo files, network, or Docker.

const { test } = require('node:test');
const assert = require('node:assert/strict');
const lib = require('./lib');

// --- tag parsing ------------------------------------------------------------

test('parseTag: rskj 3-part', () => {
  assert.deepEqual(lib.parseTag('VETIVER-9.0.2'), { codename: 'vetiver', semver: '9.0.2' });
});
test('parseTag: powpeg 4-part', () => {
  assert.deepEqual(lib.parseTag('VETIVER-9.0.0.0'), { codename: 'vetiver', semver: '9.0.0.0' });
});
test('parseTag: dashed codename', () => {
  assert.deepEqual(lib.parseTag('HOP-TESTNET-4.0.1.0'), { codename: 'hop-testnet', semver: '4.0.1.0' });
});
test('parseTag: garbage returns null', () => {
  assert.equal(lib.parseTag('not-a-tag'), null);
});

// --- component inference ----------------------------------------------------

test('inferComponent: 3-part -> rskj', () => {
  assert.equal(lib.inferComponent(lib.parseTag('VETIVER-9.0.2')), 'rskj');
});
test('inferComponent: 4-part -> powpeg-node', () => {
  assert.equal(lib.inferComponent(lib.parseTag('VETIVER-9.0.0.0')), 'powpeg-node');
});

// --- semver compare ---------------------------------------------------------

test('cmpSemver: numeric ordering (not lexical)', () => {
  assert.ok(lib.cmpSemver('9.0.2', '9.0.10') < 0);
  assert.ok(lib.cmpSemver('9.0.0.0', '8.1.0.0') > 0);
  assert.equal(lib.cmpSemver('1.2.3', '1.2.3'), 0);
});

// --- component folder <-> parse round-trips ---------------------------------

test('rskj: folder / parseFolder / fatJar', () => {
  const rskj = lib.COMPONENTS.rskj;
  const ctx = { semver: '9.0.2', codename: 'vetiver' };
  assert.equal(rskj.folder(ctx), '9.0.2-vetiver');
  assert.deepEqual(rskj.parseFolder('9.0.2-vetiver'), { semver: '9.0.2', codename: 'vetiver' });
  assert.deepEqual(rskj.parseFolder('4.0.1-hop-testnet'), { semver: '4.0.1', codename: 'hop-testnet' });
  assert.equal(rskj.parseFolder('bouncycastle'), null);
  assert.equal(rskj.fatJar(ctx), 'rskj-core-9.0.2-VETIVER-all.jar');
});
test('powpeg-node: folder / parseFolder / fatJar', () => {
  const pp = lib.COMPONENTS['powpeg-node'];
  const ctx = { semver: '9.0.0.0', codename: 'vetiver' };
  assert.equal(pp.folder(ctx), 'VETIVER-9.0.0.0');
  assert.deepEqual(pp.parseFolder('VETIVER-9.0.0.0'), { semver: '9.0.0.0', codename: 'vetiver' });
  assert.deepEqual(pp.parseFolder('HOP-TESTNET-4.0.1.0'), { semver: '4.0.1.0', codename: 'hop-testnet' });
  assert.equal(pp.fatJar(ctx), 'federate-node-VETIVER-9.0.0.0-all.jar');
});

// --- version substitution ---------------------------------------------------

const RSKJ_DOCKERFILE = [
  'RUN gitrev=VETIVER-9.0.2 && \\',
  '    git checkout "$gitrev"',
  'COPY --from=builder /root/.m2/repository/co/rsk/rskj-core/9.0.2-VETIVER/*.module ./',
  'CMD ["java", "-cp", "rskj-core-9.0.2-VETIVER-all.jar", "co.rsk.Start"]',
].join('\n');

const RSKJ_README = [
  '# rskj VETIVER-9.0.2',
  '* Tag: `VETIVER-9.0.2`',
  '$ docker build -t rskj/9.0.2-vetiver .',
  '$ docker run --rm rskj/9.0.2-vetiver sh -c \'sha256sum * | grep -v javadoc.jar\'',
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa  rskj-core-9.0.2-VETIVER-all.jar',
  'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb  rskj-core-9.0.2-VETIVER.jar',
].join('\n');

const POWPEG_README = [
  '# powpeg-node VETIVER-9.0.0.0',
  '$ docker run --rm powpeg-node/vetiver-9.0.0.0 bash -c \'sha256sum * | grep -v javadoc.jar\'',
  'cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc  federate-node-VETIVER-9.0.0.0-all.jar',
].join('\n');

test('substituteVersion: rskj Dockerfile bumps every encoding, no stale version', () => {
  const out = lib.substituteVersion(
    RSKJ_DOCKERFILE,
    { codename: 'vetiver', semver: '9.0.2' },
    { codename: 'vetiver', semver: '9.0.3' },
  );
  assert.ok(out.includes('gitrev=VETIVER-9.0.3'));
  assert.ok(out.includes('rskj-core/9.0.3-VETIVER/*.module'));
  assert.ok(out.includes('rskj-core-9.0.3-VETIVER-all.jar'));
  assert.ok(!out.includes('9.0.2'));
});

test('substituteVersion: rskj README title/tag/build-image bump', () => {
  const out = lib.substituteVersion(
    RSKJ_README,
    { codename: 'vetiver', semver: '9.0.2' },
    { codename: 'vetiver', semver: '9.0.3' },
  );
  assert.ok(out.includes('# rskj VETIVER-9.0.3'));
  assert.ok(out.includes('Tag: `VETIVER-9.0.3`'));
  assert.ok(out.includes('docker build -t rskj/9.0.3-vetiver .'));
  assert.ok(!out.includes('9.0.2'));
});

test('substituteVersion: powpeg lowercased build-image form', () => {
  const out = lib.substituteVersion(
    POWPEG_README,
    { codename: 'vetiver', semver: '9.0.0.0' },
    { codename: 'vetiver', semver: '9.0.1.0' },
  );
  assert.ok(out.includes('# powpeg-node VETIVER-9.0.1.0'));
  assert.ok(out.includes('powpeg-node/vetiver-9.0.1.0'));
});

// --- sha block handling -----------------------------------------------------

test('injectShaBlock: replaces the hash run, leaves surrounding text', () => {
  const fresh = ['1'.repeat(64) + '  rskj-core-9.0.3-VETIVER-all.jar'].join('\n');
  const out = lib.injectShaBlock(RSKJ_README.replace(/9\.0\.2/g, '9.0.3'), fresh);
  assert.equal((out.match(/^[0-9a-f]{64}\s/gm) || []).length, 1);
  assert.ok(out.includes('1'.repeat(64)));
  assert.ok(!out.includes('a'.repeat(64)));
  assert.ok(out.includes('# rskj VETIVER-9.0.3')); // non-hash lines preserved
});

test('injectShaBlock: throws when no block present', () => {
  assert.throws(() => lib.injectShaBlock('# no hashes here', 'x'), /no sha256 block/);
});

test('parseShaLine: finds a specific file', () => {
  assert.equal(lib.parseShaLine(RSKJ_README, 'rskj-core-9.0.2-VETIVER.jar'), 'b'.repeat(64));
  assert.equal(lib.parseShaLine(RSKJ_README, 'missing.jar'), null);
});

test('parseShaMap + mapsEqual', () => {
  const m = lib.parseShaMap(RSKJ_README);
  assert.equal(m.size, 2);
  assert.equal(m.get('rskj-core-9.0.2-VETIVER-all.jar'), 'a'.repeat(64));
  assert.ok(lib.mapsEqual(m, lib.parseShaMap(RSKJ_README)));
  const diff = new Map(m);
  diff.set('rskj-core-9.0.2-VETIVER-all.jar', '0'.repeat(64));
  assert.ok(!lib.mapsEqual(m, diff));
  const fewer = new Map(m);
  fewer.delete('rskj-core-9.0.2-VETIVER.jar');
  assert.ok(!lib.mapsEqual(m, fewer));
});

// --- misc helpers -----------------------------------------------------------

test('componentShell: detects bash vs sh', () => {
  assert.equal(lib.componentShell(POWPEG_README), 'bash');
  assert.equal(lib.componentShell(RSKJ_README), 'sh');
});

test('hashFence: wraps in a code fence', () => {
  assert.equal(lib.hashFence('H  x.jar'), '```\nH  x.jar\n```');
});

test('parsePrUrl: extracts owner/repo/number', () => {
  assert.deepEqual(lib.parsePrUrl('https://github.com/rsksmart/reproducible-builds/pull/123'), {
    owner: 'rsksmart',
    repo: 'reproducible-builds',
    number: '123',
  });
  assert.deepEqual(lib.parsePrUrl('https://github.com/o/r/pull/9/files'), { owner: 'o', repo: 'r', number: '9' });
  assert.equal(lib.parsePrUrl('https://github.com/o/r/issues/9'), null);
});

test('detectBuildFromFiles: single build folder', () => {
  const b = lib.detectBuildFromFiles(['rskj/9.0.3-vetiver/Dockerfile', 'rskj/9.0.3-vetiver/README.md', 'README.md']);
  assert.equal(b.component.name, 'rskj');
  assert.equal(b.folder, '9.0.3-vetiver');
});
test('detectBuildFromFiles: powpeg folder', () => {
  const b = lib.detectBuildFromFiles(['powpeg-node/VETIVER-9.0.1.0/Dockerfile']);
  assert.equal(b.component.name, 'powpeg-node');
  assert.equal(b.folder, 'VETIVER-9.0.1.0');
});
test('detectBuildFromFiles: none -> null', () => {
  assert.equal(lib.detectBuildFromFiles(['README.md', 'bitcoinj/x/Dockerfile']), null);
});
test('detectBuildFromFiles: multiple -> throws', () => {
  assert.throws(
    () => lib.detectBuildFromFiles(['rskj/9.0.3-vetiver/Dockerfile', 'rskj/8.1.0-reed/Dockerfile']),
    /multiple build folders/,
  );
});
