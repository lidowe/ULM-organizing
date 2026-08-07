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
import { execFileSync } from "node:child_process";

const SITE = resolve(import.meta.dirname, "..");
const args = process.argv.slice(2);
const force = args.includes("--force");
const src = args.find((a) => !a.startsWith("--"));

if (!src) {
  console.error("usage: node scripts/sync-from-lovable.mjs <path-to-lovable-checkout> [--force]");
  process.exit(1);
}

// This sync overwrites src/ wholesale, so it can silently revert work done
// here since the last sync. Insisting on a clean tree means the result always
// lands as one reviewable commit-sized diff that `git checkout .` can undo.
if (!force) {
  let dirty = "";
  try {
    dirty = execFileSync("git", ["status", "--porcelain", "--", SITE], {
      cwd: SITE,
      encoding: "utf8",
    }).trim();
  } catch {
    // Not a git checkout — nothing to protect, carry on.
  }
  if (dirty) {
    console.error(`Refusing to sync: there are uncommitted changes under site/.

${dirty}

This sync overwrites src/ with Lovable's copy, which would bury them with no
way to tell what was lost. Commit or discard them first, then re-run.
Use --force only if you intend to throw those changes away.`);
    process.exit(1);
  }
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

// Images arrive one of two ways, and never in public/ — Lovable leaves that
// holding only favicon.ico.
//
//   assets-export/    a zip export ships the real image files here, by their
//   exported-assets/  original filenames. Lovable has used both names, so try
//                     each. This is the authoritative copy for that export, so
//                     it wins over what is already in public/.
//   public/           a git checkout ships nothing useful, but copy anything
//                     genuinely new and never delete ours.
for (const dir of ["assets-export", "exported-assets"]) {
  const fromExport = join(SRC, dir);
  if (!existsSync(fromExport)) continue;
  let copied = 0;
  for (const file of readdirSync(fromExport)) {
    cpSync(join(fromExport, file), join(SITE, "public", file), { force: true });
    copied++;
  }
  notes.push(`copied ${copied} image(s) from ${dir}/ into public/`);
  break;
}

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

// --- Fix 0: rebuild any asset pointer the export forgot to ship -------------
// The app resolves {{IMG:name}} through src/assets/<name>.<ext>.asset.json, and
// photo() returns "" when there is no pointer — so a missing pointer renders
// <img src=""> even though the image file itself is sitting right there in
// public/. Export 4 shipped 86 image files and a manifest declaring 86
// pointers, but only 65 pointer files, silently breaking ten photos.
//
// The manifest is authoritative, so reconcile against it.
const manifestPath = join(SRC, "assets-export-manifest.json");
if (existsSync(manifestPath)) {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  let rebuilt = 0;
  for (const asset of manifest.assets ?? []) {
    const rel = asset.asset_json;
    if (!rel) continue;
    const target = join(SITE, rel);
    if (existsSync(target)) continue;
    writeFileSync(
      target,
      JSON.stringify(
        {
          version: 1,
          asset_id: asset.asset_id,
          url: `/__l5e/assets-v1/${asset.asset_id}/${asset.filename}`,
          original_filename: asset.filename,
          content_type: asset.content_type,
          size: asset.size,
        },
        null,
        2,
      ) + "\n",
    );
    rebuilt++;
  }
  if (rebuilt) notes.push(`rebuilt ${rebuilt} asset pointer(s) the export omitted`);
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

// Every {{IMG:name}} token has to resolve through a pointer in src/assets.
// Without one, photo() yields "" and the page ships <img src="">, which no
// build step and no file-existence check will catch — the image file is
// present, it is the pointer that is absent.
const pointers = new Set(
  readdirSync(join(SITE, "src", "assets"))
    .filter((f) => f.endsWith(".asset.json"))
    .map((f) => f.replace(/\.[a-z0-9]+\.asset\.json$/i, "")),
);
const unresolved = [];
for (const file of walk(join(SITE, "src"))) {
  for (const m of readFileSync(file, "utf8").matchAll(/\{\{IMG:([a-z0-9-]+)\}\}/g)) {
    // "name" is the metavariable in the doc comments that explain the syntax,
    // not a real photo.
    if (m[1] === "name") continue;
    if (!pointers.has(m[1])) unresolved.push(m[1]);
  }
}
const unresolvedUnique = [...new Set(unresolved)];

// --- Report ----------------------------------------------------------------
console.log(`\nSynced from ${SRC}`);
console.log(`  rewrote ${rewritten} Lovable asset URL(s) to root-relative paths`);
console.log(`  ${referenced.size} image(s) referenced by the site`);
console.log(`  ${pointers.size} asset pointer(s) available to resolve {{IMG:}} tokens`);
for (const n of notes) console.log(`  note: ${n}`);

if (unresolvedUnique.length) {
  console.log(`\nWARNING — ${unresolvedUnique.length} {{IMG:}} token(s) have no asset pointer:`);
  for (const u of unresolvedUnique) console.log(`    ${u}`);
  console.log(`
  These render as <img src=""> — a blank space, not a broken-image icon, so
  they are easy to miss. The image file may well be in public/ already; what
  is absent is src/assets/<name>.<ext>.asset.json. If the export shipped an
  assets-export-manifest.json this is rebuilt automatically, so seeing this
  means the manifest did not list them either.`);
}

if (missing.length) {
  console.log(`\nWARNING — ${missing.length} referenced image(s) are not in public/:`);
  for (const m of missing) console.log(`    ${m}`);
  console.log(`
  These will 404 on the live site. Lovable stores uploaded images on its own
  servers and does not commit them, so each one has to be downloaded from the
  Lovable editor and saved into site/public/ under exactly the name above.`);
}

console.log(`
Next: git diff          <- READ THIS FIRST
      npm run build     (confirm it compiles)
      then commit and push to main — Cloudflare redeploys itself.

The sync runs one way, Lovable -> here, and overwrites src/. If the diff shows
your own recent edits being reverted, that is Lovable overwriting work it never
had. 'git checkout -- site' undoes the whole sync.
`);

process.exit(missing.length || unresolvedUnique.length ? 2 : 0);
