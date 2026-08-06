#!/usr/bin/env node
// Pull a Lovable export into site/, applying the fixes that make it deployable.
//
//   node scripts/sync-from-lovable.mjs <path-to-lovable-checkout>
//
// The Lovable project and the deployed copy differ in ways that break the site
// if copied naively. This script does the copy and re-applies every fix, so a
// sync is one command instead of a checklist you have to remember.
//
// What it protects:
//   1. Lovable references images as /__l5e/assets-v1/<uuid>/<file>, an address
//      that only resolves inside Lovable's preview. Rewritten to /<file>.
//   2. Lovable does not commit image files. public/ here is never overwritten
//      by an empty one; existing photos are kept.
//   3. wrangler.jsonc and DEPLOY.md do not exist upstream. Never touched.
//   4. Lovable resets the MCP server's name to the "pixel-perfect-clone"
//      project name. Restored to Upper Level Music.
//
// Anything it cannot fix automatically is reported as a WARNING at the end.

import { existsSync, readFileSync, writeFileSync, cpSync, readdirSync } from "node:fs";
import { join, resolve, basename } from "node:path";

const SITE = resolve(import.meta.dirname, "..");
const src = process.argv[2];

if (!src) {
  console.error("usage: node scripts/sync-from-lovable.mjs <path-to-lovable-checkout>");
  process.exit(1);
}

const SRC = resolve(src);
if (!existsSync(join(SRC, "src", "routes")) || !existsSync(join(SRC, "package.json"))) {
  console.error(`Not a Lovable project checkout: ${SRC}`);
  console.error("Expected it to contain src/routes/ and package.json.");
  process.exit(1);
}

// Files and directories carried over. wrangler.jsonc, DEPLOY.md, scripts/ and
// public/ are deliberately absent — they are ours, not Lovable's.
const COPY = [
  "src",
  "package.json",
  "components.json",
  "tsconfig.json",
  "vite.config.ts",
  "eslint.config.js",
];

const notes = [];

for (const entry of COPY) {
  const from = join(SRC, entry);
  if (!existsSync(from)) {
    notes.push(`upstream is missing ${entry} — left the local copy alone`);
    continue;
  }
  cpSync(from, join(SITE, entry), { recursive: true, force: true });
}

// Images: copy any Lovable does happen to ship, but never delete ours.
const upstreamPublic = join(SRC, "public");
if (existsSync(upstreamPublic)) {
  for (const file of readdirSync(upstreamPublic)) {
    const target = join(SITE, "public", file);
    if (!existsSync(target)) {
      cpSync(join(upstreamPublic, file), target);
      notes.push(`new file from upstream public/: ${file}`);
    }
  }
}

// --- Fix 1: Lovable's preview-only asset URLs -------------------------------
// /__l5e/assets-v1/<uuid>/studio-racks.jpg  ->  /studio-racks.jpg
const L5E = /\/__l5e\/assets-v1\/[0-9a-f-]+\/([^"'\\\s)]+)/g;

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (/\.(ts|tsx|js|jsx|css|json|html)$/.test(entry.name)) out.push(full);
  }
  return out;
}

let rewritten = 0;
const referenced = new Set();

for (const file of walk(join(SITE, "src"))) {
  const before = readFileSync(file, "utf8");
  const after = before.replace(L5E, (_, filename) => {
    rewritten++;
    referenced.add(filename);
    return `/${filename}`;
  });
  if (after !== before) writeFileSync(file, after);
}

// --- Fix 2: restore the MCP server's public identity -----------------------
const mcpIndex = join(SITE, "src", "lib", "mcp", "index.ts");
if (existsSync(mcpIndex)) {
  const before = readFileSync(mcpIndex, "utf8");
  const after = before
    .replace(/name:\s*"pixel-perfect-clone"/, 'name: "upper-level-music"')
    .replace(/title:\s*"Pixel Perfect Clone"/, 'title: "Upper Level Music"');
  if (after !== before) {
    writeFileSync(mcpIndex, after);
    notes.push("reset the MCP server name back to Upper Level Music");
  }
}

// --- Check: every image the site asks for actually exists -------------------
// This is the failure that would ship a page with broken photos, so it is
// checked explicitly rather than left to the build (which will not catch it).
const missing = [];
for (const file of walk(join(SITE, "src"))) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/["'\\]\/([\w.-]+\.(?:jpg|jpeg|png|webp|avif|gif|svg|ico))/g)) {
    referenced.add(m[1]);
  }
}
for (const name of referenced) {
  if (!existsSync(join(SITE, "public", basename(name)))) missing.push(name);
}

// --- Report ----------------------------------------------------------------
console.log(`\nSynced from ${SRC}`);
console.log(`  rewrote ${rewritten} Lovable asset URL(s) to root-relative paths`);
console.log(`  ${referenced.size} image(s) referenced by the site`);
for (const n of notes) console.log(`  note: ${n}`);

if (missing.length) {
  console.log(`\nWARNING — ${missing.length} referenced image(s) are not in public/:`);
  for (const m of missing) console.log(`    ${m}`);
  console.log(`
  These will 404 on the live site. Lovable stores uploaded images on its own
  servers and does not commit them, so each one has to be downloaded from the
  Lovable editor and saved into site/public/ under exactly the name above.`);
}

console.log(`
Next: npm run build     (confirm it compiles)
      git add -A && git commit && push to main — Cloudflare redeploys itself.
`);

process.exit(missing.length ? 2 : 0);
