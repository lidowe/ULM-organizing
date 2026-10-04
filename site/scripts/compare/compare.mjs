// Compare two captures made by capture.mjs and write a report Ed can open:
// side-by-side screenshots with a pixel-diff overlay, plus text, markup and
// computed-style differences per page.
//
//   node scripts/compare/compare.mjs --before legacy --after m1 [--allow-text]
//
// Exits non-zero when anything differs beyond the pixel threshold, so it can gate a step.
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const BEFORE = path.resolve(".compare", arg("before", "legacy"));
const AFTER = path.resolve(".compare", arg("after", "after"));
const OUT = path.resolve(
  ".compare",
  `report-${arg("before", "legacy")}-vs-${arg("after", "after")}`,
);
const PIXEL_LIMIT = Number(arg("pixel-limit", "0.001")); // fraction of pixels allowed to differ
const STYLE_LIMIT = Number(arg("style-limit", "0"));

fs.mkdirSync(OUT, { recursive: true });
const names = fs
  .readdirSync(BEFORE)
  .filter((f) => f.endsWith(".png"))
  .map((f) => f.replace(/\.png$/, ""))
  .sort();
const rows = [];
let failed = false;

const pad = (png, w, h) => {
  if (png.width === w && png.height === h) return png;
  const out = new PNG({ width: w, height: h });
  out.data.fill(255);
  PNG.bitblt(png, out, 0, 0, Math.min(png.width, w), Math.min(png.height, h), 0, 0);
  return out;
};

for (const name of names) {
  const a = (ext) => path.join(BEFORE, `${name}.${ext}`);
  const b = (ext) => path.join(AFTER, `${name}.${ext}`);
  if (!fs.existsSync(b("png"))) {
    rows.push({ name, missing: true });
    failed = true;
    continue;
  }

  const imgA = PNG.sync.read(fs.readFileSync(a("png")));
  const imgB = PNG.sync.read(fs.readFileSync(b("png")));
  const w = Math.max(imgA.width, imgB.width),
    h = Math.max(imgA.height, imgB.height);
  const diff = new PNG({ width: w, height: h });
  const changed = pixelmatch(pad(imgA, w, h).data, pad(imgB, w, h).data, diff.data, w, h, {
    threshold: 0.1,
  });
  const ratio = changed / (w * h);
  fs.writeFileSync(path.join(OUT, `${name}--diff.png`), PNG.sync.write(diff));
  fs.copyFileSync(a("png"), path.join(OUT, `${name}--before.png`));
  fs.copyFileSync(b("png"), path.join(OUT, `${name}--after.png`));

  const textSame = fs.readFileSync(a("txt"), "utf8") === fs.readFileSync(b("txt"), "utf8");
  // Collapse whitespace across text-node seams (React splits text differently).
  const markup = (f) =>
    fs.readFileSync(f, "utf8").replace(/\s+/g, " ").replace(/ </g, "<").replace(/> /g, ">");
  const htmlSame = markup(a("html")) === markup(b("html"));
  const sa = JSON.parse(fs.readFileSync(a("styles.json"), "utf8"));
  const sb = JSON.parse(fs.readFileSync(b("styles.json"), "utf8"));
  const styleDiffs = [];
  for (const key of new Set([...Object.keys(sa), ...Object.keys(sb)])) {
    if (!sa[key] || !sb[key]) {
      styleDiffs.push(`${sa[key] ? "removed" : "added"} ${key}`);
      continue;
    }
    for (const prop of Object.keys(sa[key])) {
      if (sa[key][prop] !== sb[key][prop])
        styleDiffs.push(`${key} {${prop}: ${sa[key][prop]} → ${sb[key][prop]}}`);
    }
  }
  const sizeSame = imgA.width === imgB.width && imgA.height === imgB.height;
  const ok =
    ratio <= PIXEL_LIMIT &&
    styleDiffs.length <= STYLE_LIMIT &&
    (textSame || process.argv.includes("--allow-text"));
  if (!ok) failed = true;
  rows.push({
    name,
    ratio,
    textSame,
    htmlSame,
    sizeSame,
    size: `${imgA.width}×${imgA.height} → ${imgB.width}×${imgB.height}`,
    styleDiffs,
    ok,
  });
}

const esc = (s) =>
  String(s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
const html = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Compare ${esc(path.basename(BEFORE))} vs ${esc(path.basename(AFTER))}</title>
<style>body{font:15px/1.5 system-ui;margin:0;padding:16px;background:#f4f2ee;color:#141311}h1{font-size:20px}
.r{background:#fff;border:1px solid #ddd;border-left:5px solid #2f6b3a;margin:14px 0;padding:12px}.r.bad{border-left-color:#b5321f}
.imgs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.imgs figure{margin:0}.imgs img{width:100%;border:1px solid #ccc}
figcaption{font:12px ui-monospace,monospace;color:#555}pre{white-space:pre-wrap;font:12px ui-monospace,monospace;max-height:16em;overflow:auto;background:#f7f7f7;padding:8px}
@media(max-width:700px){.imgs{grid-template-columns:1fr}}</style>
<h1>${esc(path.basename(BEFORE))} → ${esc(path.basename(AFTER))}</h1>
<p>${rows.filter((r) => r.ok).length} of ${rows.length} page views match (pixel limit ${(PIXEL_LIMIT * 100).toFixed(2)}%).</p>
${rows
  .map((r) =>
    r.missing
      ? `<div class="r bad"><b>${esc(r.name)}</b>: missing in "after"</div>`
      : `<div class="r ${r.ok ? "" : "bad"}"><b>${esc(r.name)}</b>
 · pixels changed ${(r.ratio * 100).toFixed(3)}% · size ${esc(r.size)} · text ${r.textSame ? "same" : "<b>changed</b>"} · markup ${r.htmlSame ? "same" : "changed"} · style diffs ${r.styleDiffs.length}
<div class="imgs"><figure><img loading="lazy" src="${esc(r.name)}--before.png"><figcaption>before</figcaption></figure><figure><img loading="lazy" src="${esc(r.name)}--after.png"><figcaption>after</figcaption></figure><figure><img loading="lazy" src="${esc(r.name)}--diff.png"><figcaption>differences in red</figcaption></figure></div>
${r.styleDiffs.length ? `<details><summary>Style differences</summary><pre>${esc(r.styleDiffs.slice(0, 200).join("\n"))}</pre></details>` : ""}</div>`,
  )
  .join("\n")}`;
fs.writeFileSync(path.join(OUT, "index.html"), html);

for (const r of rows) {
  if (r.missing) console.log(`MISSING ${r.name}`);
  else
    console.log(
      `${r.ok ? "ok  " : "DIFF"} ${r.name.padEnd(20)} px ${(r.ratio * 100).toFixed(3)}%  text ${r.textSame ? "=" : "≠"}  html ${r.htmlSame ? "=" : "≠"}  styles ${r.styleDiffs.length}`,
    );
}
console.log(`report: ${path.join(OUT, "index.html")}`);
process.exit(failed ? 1 : 0);
