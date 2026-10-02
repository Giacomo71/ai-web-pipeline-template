import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, resolve, relative, isAbsolute, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

export const requiredFiles = [
  'AGENTS.md', 'README.md', 'CONTRIBUTING.md', 'CHANGELOG.md', 'package.json',
  'docs/COSTITUZIONE.md', 'docs/CLIENT_BRIEF.md', 'docs/PROJECT_SPEC.md',
  'docs/ARCHITECTURE.md', 'docs/DESIGN_SYSTEM.md', 'docs/CHANGE_POLICY.md',
  'docs/VERSIONING.md', 'docs/DECISION_REGISTER.md', 'docs/OPEN_QUESTIONS.md',
  'docs/ROADMAP.md', 'docs/TODO.md', 'docs/REVIEW.md', 'docs/ADR/README.md',
  'docs/ADR/TEMPLATE.md', '.github/pull_request_template.md',
  '.github/ISSUE_TEMPLATE/feature.md', '.github/ISSUE_TEMPLATE/bug.md',
  '.github/ISSUE_TEMPLATE/structural-change.md', '.github/ISSUE_TEMPLATE/release.md',
];
const states = new Set(['proposto', 'accettato', 'respinto', 'superato']);
const versionPattern = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*))*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/;
const validDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) &&
  Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
const field = (text, name) => text.match(new RegExp(`^${name}:\\s*(.+)$`, 'm'))?.[1]?.trim();

export function checkGovernance(root) {
  root = resolve(root);
  const errors = [];
  const read = path => readFileSync(resolve(root, path), 'utf8');
  const inside = path => {
    const rel = relative(root, path);
    return rel !== '..' && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
  };
  for (const path of requiredFiles) {
    if (!existsSync(resolve(root, path))) errors.push(`Missing required file: ${path}`);
  }
  const metadataFiles = requiredFiles.filter(path => path.startsWith('docs/') &&
    !path.startsWith('docs/ADR/'));
  for (const path of metadataFiles) {
    if (!existsSync(resolve(root, path))) continue;
    const text = read(path);
    for (const key of ['Stato', 'Responsabile', 'Ultima revisione']) {
      if (!field(text, key)) errors.push(`${path}: missing ${key}`);
    }
    const date = field(text, 'Ultima revisione');
    if (date && !validDate(date)) errors.push(`${path}: invalid revision date`);
  }

  // Only official Markdown sources: never scan private data or dependencies.
  const markdownFiles = ['AGENTS.md', 'README.md', 'CONTRIBUTING.md', 'CHANGELOG.md']
    .filter(path => existsSync(resolve(root, path)));
  const walk = dir => {
    if (!existsSync(resolve(root, dir))) return;
    for (const entry of readdirSync(resolve(root, dir), { withFileTypes: true })) {
      const path = `${dir}/${entry.name}`;
      if (entry.isDirectory()) walk(path);
      else if (entry.isFile() && path.endsWith('.md')) markdownFiles.push(path);
    }
  };
  walk('docs');
  walk('.github');
  for (const path of markdownFiles) {
    const text = read(path).replace(/```[^]*?```/g, '');
    for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      let target = match[1].trim().replace(/^<([^>]+)>(?:\s+.*)?$/, '$1');
      if (/^(?:[a-z][a-z0-9+.-]*:|#)/i.test(target)) continue;
      target = target.split(/[?#]/)[0];
      if (!target) continue;
      try { target = decodeURIComponent(target); }
      catch { errors.push(`${path}: invalid link encoding`); continue; }
      const full = resolve(dirname(resolve(root, path)), target);
      if (!inside(full) || !existsSync(full)) errors.push(`${path}: invalid local link ${target}`);
    }
  }

  const adrDirectory = resolve(root, 'docs/ADR');
  const records = new Map();
  if (existsSync(adrDirectory)) {
    for (const name of readdirSync(adrDirectory)) {
      if (!/^\d{4}-[a-z0-9-]+\.md$/.test(name)) {
        if (name.endsWith('.md') && !['README.md', 'TEMPLATE.md'].includes(name)) {
          errors.push(`ADR filename must be NNNN-title.md: ${name}`);
        }
        continue;
      }
      const id = name.slice(0, 4);
      const path = `docs/ADR/${name}`;
      const text = read(path);
      if (records.has(id)) errors.push(`Duplicate ADR number: ${id}`);
      records.set(id, { path, name, text, state: field(text, 'Stato') });
      if (!text.startsWith(`# ADR-${id} — `)) errors.push(`${path}: heading must match ADR number`);
      if (!states.has(field(text, 'Stato'))) errors.push(`${path}: invalid ADR state`);
      if (!validDate(field(text, 'Data') ?? '')) errors.push(`${path}: invalid ADR date`);
      for (const key of ['Responsabile', 'Autorizzazione', 'Supera', 'Superato da']) {
        if (!field(text, key)) errors.push(`${path}: missing ${key}`);
      }
      for (const heading of ['Contesto', 'Alternative', 'Decisione', 'Conseguenze', 'Verifica', 'Riferimenti']) {
        if (!text.includes(`## ${heading}\n`)) errors.push(`${path}: missing section ${heading}`);
      }
      if (['accettato', 'superato'].includes(field(text, 'Stato')) &&
          /^(?:da acquisire|TBD|nessuno)$/i.test(field(text, 'Autorizzazione') ?? '')) {
        errors.push(`${path}: accepted decision needs an authorization reference`);
      }
    }
  }
  if (existsSync(resolve(root, 'docs/DECISION_REGISTER.md'))) {
    const register = read('docs/DECISION_REGISTER.md');
    const rows = [...register.matchAll(/^\|\s*\[(\d{4})\]\(ADR\/([^)]*)\)\s*\|([^\n]*)$/gm)];
    for (const [id, record] of records) {
      const matching = rows.filter(row => row[1] === id);
      if (matching.length !== 1) errors.push(`${record.path}: must have exactly one register row`);
      else {
        const cells = matching[0][3].split('|').map(value => value.trim());
        if (matching[0][2] !== record.name || cells[1] !== record.state ||
            cells[2] !== field(record.text, 'Data')) {
          errors.push(`${record.path}: register path, state or date mismatch`);
        }
      }
    }
    for (const row of rows) {
      if (!records.has(row[1])) errors.push(`Register references unknown ADR: ${row[1]}`);
    }
  }
  for (const [id, record] of records) {
    const successor = field(record.text, 'Superato da');
    const predecessor = field(record.text, 'Supera');
    if (record.state === 'superato' && (!successor || successor === 'nessuno')) {
      errors.push(`${record.path}: superseded ADR needs a successor`);
    }
    if (record.state !== 'superato' && successor && successor !== 'nessuno') {
      errors.push(`${record.path}: successor requires superseded state`);
    }
    for (const [key, value] of [['Superato da', successor], ['Supera', predecessor]]) {
      if (!value || value === 'nessuno') continue;
      const match = value.match(/\[ADR-(\d{4})\]\((\d{4}-[a-z0-9-]+\.md)\)/);
      const other = match && records.get(match[1]);
      if (!other || match[1] === id || match[2] !== other.name) {
        errors.push(`${record.path}: ${key} must link another ADR`);
        continue;
      }
      // A proposed successor can reference an accepted predecessor without changing it yet.
      if (key === 'Supera' && ['proposto', 'respinto'].includes(record.state)) continue;
      const inverse = field(other.text, key === 'Supera' ? 'Superato da' : 'Supera');
      if (!inverse?.includes(`[ADR-${id}](${record.name})`)) {
        errors.push(`${record.path}: ${key} link must be reciprocal`);
      }
      if (key === 'Superato da' && !['accettato', 'superato'].includes(other.state)) {
        errors.push(`${record.path}: successor must be an adopted decision`);
      }
      if (key === 'Supera' && other.state !== 'superato') {
        errors.push(`${record.path}: predecessor must be superseded`);
      }
    }
  }

  let packageData;
  if (existsSync(resolve(root, 'package.json'))) {
    try { packageData = JSON.parse(read('package.json')); }
    catch { errors.push('package.json: invalid JSON'); }
    if (packageData && !versionPattern.test(packageData.version ?? '')) {
      errors.push('package.json: invalid semantic version');
    }
  }
  if (existsSync(resolve(root, 'package-lock.json'))) {
    try {
      const lock = JSON.parse(read('package-lock.json'));
      if (lock.version !== packageData?.version ||
          (lock.packages?.[''] && lock.packages[''].version !== packageData?.version)) {
        errors.push('package-lock.json: version differs from package.json');
      }
    } catch { errors.push('package-lock.json: invalid JSON'); }
  }
  if (existsSync(resolve(root, 'CHANGELOG.md')) && !read('CHANGELOG.md').includes('## [Unreleased]')) {
    errors.push('CHANGELOG.md: missing Unreleased section');
  }
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const errors = checkGovernance(root);
  if (errors.length) {
    for (const error of errors) console.error(error);
    process.exitCode = 1;
  } else console.log('Governance checks passed (structure only; decisions require review).');
}
