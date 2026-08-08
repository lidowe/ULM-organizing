/**
 * Corrections this repo applies on top of every Lovable export.
 *
 * These are not preferences — each one is a defect that ships if left alone,
 * and each has survived being fixed in Lovable, so they are re-applied here
 * after every sync rather than by hand.
 *
 * Every fix is idempotent: already-correct is a skip, not an error. A missing
 * anchor is a WARNING rather than a hard failure, because the likeliest cause
 * is Lovable having finally fixed it upstream — in which case the fix should
 * simply retire. Check any warning before assuming that, though; the other
 * cause is the export restructuring around the anchor.
 *
 * Run automatically by sync-from-lovable.mjs. Also runnable alone:
 *   node scripts/local-fixes.mjs
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const SITE = resolve(import.meta.dirname, "..");
const CANONICAL_HOST = "https://upperlevelmusic.com";
const OG_IMAGE = "/drummer-engineer.jpg";

const applied = [];
const skipped = [];
const warnings = [];

const read = (rel) => (existsSync(join(SITE, rel)) ? readFileSync(join(SITE, rel), "utf8") : null);
const write = (rel, s) => writeFileSync(join(SITE, rel), s);

/** 1. The canonical host.
 * SITE_URL feeds /sitemap.xml, every <link rel=canonical> and every og:url.
 * Pointing it at the Lovable preview tells search engines the site lives
 * there, which is worse than having no sitemap at all. */
{
  const rel = "src/lib/seo.ts";
  const s = read(rel);
  if (!s) warnings.push(`${rel} not found — canonical host unchecked`);
  else if (s.includes(`SITE_URL = "${CANONICAL_HOST}"`)) skipped.push("canonical host");
  else {
    const m = s.match(/export const SITE_URL = "[^"]*";/);
    if (!m) warnings.push(`${rel}: SITE_URL declaration not found`);
    else {
      write(rel, s.replace(m[0], `export const SITE_URL = "${CANONICAL_HOST}";`));
      applied.push("canonical host -> " + CANONICAL_HOST);
    }
  }
}

/** 2. og:image on every page.
 * pageHead emits the rest of the Open Graph set but no image, so shared links
 * arrive as a bare URL with no picture. */
{
  const rel = "src/lib/seo.ts";
  const s = read(rel);
  if (!s) warnings.push(`${rel} not found — og:image unchecked`);
  else if (s.includes("og:image")) skipped.push("og:image");
  else {
    const anchor = `      { name: "twitter:card", content: "summary_large_image" },`;
    if (!s.includes(anchor)) warnings.push(`${rel}: twitter:card anchor not found in pageHead`);
    else {
      write(rel, s.replace(anchor,
`      { property: "og:image", content: absoluteUrl("${OG_IMAGE}") },
      {
        property: "og:image:alt",
        content: "Upper Level Music — an engineer and drummer working together during a session",
      },
${anchor}
      { name: "twitter:image", content: absoluteUrl("${OG_IMAGE}") },`));
      applied.push("og:image in pageHead");
    }
  }
}

/** 3. Structured data pointing at the Lovable preview, same as fix 1. */
{
  const rel = "src/routes/__root.tsx";
  const s = read(rel);
  if (!s) warnings.push(`${rel} not found — JSON-LD url unchecked`);
  else if (s.includes(`url: "${CANONICAL_HOST}"`)) skipped.push("JSON-LD url");
  else {
    const m = s.match(/url: "https:\/\/[^"]*lovable\.app",/);
    if (!m) warnings.push(`${rel}: JSON-LD url not found or already custom`);
    else {
      write(rel, s.replace(m[0], `url: "${CANONICAL_HOST}",`));
      applied.push("JSON-LD url -> " + CANONICAL_HOST);
    }
  }
}

/** 4. studio and services keep arriving with hand-written heads, which makes
 * them the only two pages with no canonical, og:url or og:image. */
for (const slug of ["studio", "services"]) {
  const rel = `src/routes/${slug}.tsx`;
  const s = read(rel);
  if (!s) { warnings.push(`${rel} not found`); continue; }
  if (s.includes("pageHead")) { skipped.push(`${slug} pageHead`); continue; }
  const start = s.indexOf("  head: () => ({");
  const end = s.indexOf("  }),", start);
  const anchor = `import { pages } from "../lib/site-pages";`;
  if (start === -1 || end === -1 || !s.includes(anchor)) {
    warnings.push(`${rel}: head block or import anchor not found`);
    continue;
  }
  let out = s.slice(0, start) + `  head: () => pageHead("${slug}"),` + s.slice(end + "  }),".length);
  out = out.replace(anchor, anchor + `\nimport { pageHead } from "../lib/seo";`);
  write(rel, out);
  applied.push(`${slug} routed through pageHead`);
}

/** 5. mcp/content.ts keeps a second, hand-maintained copy of the page table.
 * It has drifted every time — listing /about, which only redirects, while
 * omitting education, news and reach. Derive it so it cannot drift. */
{
  const rel = "src/lib/mcp/content.ts";
  const s = read(rel);
  if (!s) warnings.push(`${rel} not found — MCP page table unchecked`);
  else if (s.includes("PAGES.map(")) skipped.push("MCP page table");
  else {
    const start = s.indexOf("export const PAGE_META");
    const end = s.indexOf("];", start);
    const anchor = `import { renderTokens } from "@/lib/render-tokens";`;
    if (start === -1 || end === -1 || !s.includes(anchor)) {
      warnings.push(`${rel}: PAGE_META block or import anchor not found`);
    } else {
      let out =
        s.slice(0, start) +
        `/** Page index for MCP clients, derived from the same table that feeds
 * /sitemap.xml and every page head, so the three cannot drift apart. */
export const PAGE_META: Array<{
  slug: string;
  path: string;
  title: string;
  description: string;
}> = PAGES.map(({ slug, path, title, description }) => ({
  slug,
  path,
  title,
  description,
}));` +
        s.slice(end + 2);
      out = out.replace(anchor, anchor + `\nimport { PAGES } from "@/lib/seo";`);
      write(rel, out);
      applied.push("MCP page table derived from PAGES");
    }
  }
}

/** 6. robots.txt points crawlers at the sitemap, and arrived naming the
 * Lovable preview host — which would send crawlers to a sitemap listing a
 * different site entirely. */
{
  const rel = "public/robots.txt";
  const s = read(rel);
  if (!s) skipped.push("robots.txt (absent)");
  else if (s.includes(`Sitemap: ${CANONICAL_HOST}/sitemap.xml`)) skipped.push("robots.txt sitemap");
  else {
    const m = s.match(/^Sitemap: .*$/m);
    if (!m) warnings.push(`${rel}: no Sitemap line found`);
    else {
      write(rel, s.replace(m[0], `Sitemap: ${CANONICAL_HOST}/sitemap.xml`));
      applied.push("robots.txt sitemap -> " + CANONICAL_HOST);
    }
  }
}

/** 7. /work redirects to /credits, but the artist index, media and brands, and
 * studios and institutions sections keep arriving on the work page only — so
 * they are unreachable, Record Plant and Hit Factory among them. */
{
  const workRel = "src/lib/pages/work.ts";
  const creditsRel = "src/lib/pages/credits.ts";
  const work = read(workRel);
  const credits = read(creditsRel);
  const route = read("src/routes/work.tsx");
  if (!work || !credits) warnings.push("work.ts or credits.ts not found — orphaned sections unchecked");
  else if (credits.includes("{{ARTIST_INDEX}}")) skipped.push("orphaned credits sections");
  else if (route && !route.includes("redirect")) skipped.push("orphaned credits sections (/work renders)");
  else {
    const start = work.indexOf('<section class="section">\n  <div class="wrap section-header reveal"><div class="kicker">Selected artists &amp; clients</div>');
    const close = work.lastIndexOf("`;");
    if (start === -1 || close < start) warnings.push(`${workRel}: orphaned sections not located`);
    else {
      const block = work.slice(start, close).trimEnd();
      const at = credits.lastIndexOf("`;");
      if (at === -1) warnings.push(`${creditsRel}: closing backtick not found`);
      else {
        write(creditsRel, credits.slice(0, at) + block + "\n" + credits.slice(at));
        applied.push("moved orphaned work sections into credits");
      }
    }
  }
}

// --- Report ---------------------------------------------------------------
console.log("\nLocal fixes");
for (const a of applied) console.log(`  applied: ${a}`);
for (const s of skipped) console.log(`  already ok: ${s}`);
for (const w of warnings) console.log(`  WARNING: ${w}`);
if (warnings.length) {
  console.log(`
  A warning means a fix could not find what it expected. Either Lovable fixed
  it upstream — in which case delete that fix from this file — or the export
  moved the code and the fix needs re-anchoring. Do not ignore it: these are
  defects that ship silently.`);
}
console.log("");

process.exit(warnings.length ? 3 : 0);
