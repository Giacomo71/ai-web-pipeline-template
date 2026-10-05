import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, copyFileSync, readdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkGovernance, requiredFiles } from '../scripts/check-governance.mjs';

const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
function fixture(t) {
  const root = mkdtempSync(resolve(tmpdir(), 'pipeline-governance-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const records = readdirSync(resolve(project, 'docs/ADR')).filter(name => /^\d{4}-.*\.md$/.test(name));
  for (const path of [...requiredFiles, ...records.map(name => `docs/ADR/${name}`),
    'docs/examples/ADR-EXAMPLE.md', 'docs/DECISIONS.md']) {
    mkdirSync(dirname(resolve(root, path)), { recursive: true });
    copyFileSync(resolve(project, path), resolve(root, path));
  }
  return root;
}
function update(root, path, transform) {
  const target = resolve(root, path);
  writeFileSync(target, transform(readFileSync(target, 'utf8')));
}
test('official documents pass and examples are not active ADRs', t => {
  assert.deepEqual(checkGovernance(fixture(t)), []);
});
test('official documents also pass with Windows CRLF line endings', t => {
  const root = fixture(t);
  for (const path of [...requiredFiles, 'docs/ADR/0001-governo-documentale.md']) {
    update(root, path, text => text.replace(/\r?\n/g, '\r\n'));
  }
  assert.deepEqual(checkGovernance(root), []);
});
test('broken local links and missing official files fail', t => {
  const root = fixture(t);
  update(root, 'README.md', text => `${text}\n[Broken](docs/missing.md)\n`);
  rmSync(resolve(root, 'docs/CHANGE_POLICY.md'));
  const errors = checkGovernance(root);
  assert.ok(errors.some(error => error.includes('Missing required file: docs/CHANGE_POLICY.md')));
  assert.ok(errors.some(error => error.includes('invalid local link docs/missing.md')));
});
test('registry state must match the ADR', t => {
  const root = fixture(t);
  update(root, 'docs/DECISION_REGISTER.md', text => text.replace('| accettato |', '| proposto |'));
  assert.ok(checkGovernance(root).some(error => error.includes('register path, state or date mismatch')));
});
test('superseded decisions need a successor and real dates', t => {
  const root = fixture(t);
  update(root, 'docs/ADR/0001-governo-documentale.md', text => text
    .replace('Stato: accettato', 'Stato: superato').replace('Data: 2026-10-02', 'Data: 2026-02-30'));
  const errors = checkGovernance(root);
  assert.ok(errors.some(error => error.includes('needs a successor')));
  assert.ok(errors.some(error => error.includes('invalid ADR date')));
});
test('version mismatch between lockfile and package fails', t => {
  const root = fixture(t);
  writeFileSync(resolve(root, 'package-lock.json'), JSON.stringify({ version: '9.0.0' }));
  assert.ok(checkGovernance(root).some(error => error.includes('version differs')));
});
test('duplicate ADR numbers are rejected', t => {
  const root = fixture(t);
  copyFileSync(resolve(root, 'docs/ADR/0001-governo-documentale.md'), resolve(root, 'docs/ADR/0001-duplicate.md'));
  assert.ok(checkGovernance(root).some(error => error.includes('Duplicate ADR number')));
});
test('accepted ADR requires an authorization reference', t => {
  const root = fixture(t);
  update(root, 'docs/ADR/0001-governo-documentale.md', text => text.replace(/^Autorizzazione:.*$/m, 'Autorizzazione: da acquisire'));
  assert.ok(checkGovernance(root).some(error => error.includes('needs an authorization reference')));
});
test('adopted successor links reciprocally to its predecessor', t => {
  const root = fixture(t);
  const first = readFileSync(resolve(root, 'docs/ADR/0001-governo-documentale.md'), 'utf8');
  writeFileSync(resolve(root, 'docs/ADR/9999-next-decision.md'), first
    .replace('# ADR-0001', '# ADR-9999')
    .replace('Supera: nessuno', 'Supera: [ADR-0001](0001-governo-documentale.md)'));
  update(root, 'docs/ADR/0001-governo-documentale.md', text => text
    .replace('Stato: accettato', 'Stato: superato')
    .replace('Superato da: nessuno', 'Superato da: [ADR-9999](9999-next-decision.md)'));
  update(root, 'docs/DECISION_REGISTER.md', text => text
    .replace('| accettato |', '| superato |') +
    '\n| [9999](ADR/9999-next-decision.md) | Nuova decisione | accettato | 2026-10-02 | — |\n');
  assert.deepEqual(checkGovernance(root), []);
  update(root, 'docs/ADR/9999-next-decision.md', text => text.replace('Supera: [ADR-0001](0001-governo-documentale.md)', 'Supera: nessuno'));
  assert.ok(checkGovernance(root).some(error => error.includes('must be reciprocal')));
});
