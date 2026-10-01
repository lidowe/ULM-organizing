import { artistIndexHtml, creditCardsHtml, mediaIndexHtml, ribbonHtml } from "./credits";
import { photo, photoByUrl } from "./photos";
import { boothTagHtml } from "../components/site/booths";

const TOKENS: Record<string, () => string> = {
  "{{RIBBON}}": ribbonHtml,
  "{{CREDIT_CARDS}}": creditCardsHtml,
  "{{ARTIST_INDEX}}": artistIndexHtml,
  "{{MEDIA_INDEX}}": mediaIndexHtml,
};

/**
 * One `sizes` hint: photos render full-bleed or inside the 1200px column, so
 * a single hint covers the layout without per-image bookkeeping. A browser
 * over-fetches by at most one variant step in narrower sub-columns.
 */
const SIZES = "(max-width: 700px) 100vw, (max-width: 1200px) 90vw, 1200px";

/**
 * Decorate each rendered photo from the registry: `data-photo` (a name that
 * is stable in dev AND production), the generated `srcset`/`sizes`, and the
 * photo's focal point as an inline object-position for cropped contexts.
 * The first photo on a page is made eager + high priority so the largest
 * paint is not waiting on a lazy-load callback; the rest stay lazy.
 */
function stampPhotos(html: string): string {
  let first = true;
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    if (tag.includes("data-photo=")) return tag;
    const src = /\ssrc="([^"]+)"/.exec(tag)?.[1];
    const entry = src ? photoByUrl(src) : undefined;
    if (!entry) return tag;

    let attrs = `data-photo="${entry.name}" decoding="async"`;
    if (entry.srcset && !tag.includes("srcset=")) {
      attrs += ` srcset="${entry.srcset}" sizes="${SIZES}"`;
    }
    if (entry.focal && !tag.includes("style=")) {
      attrs += ` style="object-position:${entry.focal}"`;
    }

    let out = tag.replace(/^<img\b/, `<img ${attrs}`);
    if (first) {
      first = false;
      out = out.replace(/\sloading="lazy"/, "");
      if (!out.includes("fetchpriority=")) {
        out = out.replace(/^<img\b/, '<img fetchpriority="high"');
      }
    }
    return out;
  });
}

/**
 * Editorial TODO blocks. They are useful while drafting, but they are page
 * content like anything else, so in a production build they ship to visitors
 * as amber "content needed" panels. Keep them in source, strip them here.
 */
const NEEDS_CONTENT = /\s*<div class="needs-content">[\s\S]*?<\/div>/g;

function stripAuthoringNotes(html: string): string {
  return import.meta.env.DEV ? html : html.replace(NEEDS_CONTENT, "");
}

/** "Upper Level Music" (and the short "Upper Level") is always set in red. */
function brandRed(html: string): string {
  return html
    .split(/(<[^>]*>)/g)
    .map((seg, i) =>
      i % 2 === 1
        ? seg
        : seg.replace(/Upper Level(?: Music)?/g, (m) => `<span class="ulm">${m}</span>`),
    )
    .join("");
}

/** Replace content tokens in a static page string with generated markup. */
export function renderTokens(html: string): string {
  const withTokens = stripAuthoringNotes(html).replace(
    /\{\{(?:(?:IMG|BOOTH):[a-z0-9-]+|[A-Z_]+)\}\}/g,
    (token) => {
      if (token.startsWith("{{IMG:")) return photo(token.slice(6, -2));
      if (token.startsWith("{{BOOTH:")) return boothTagHtml(token.slice(8, -2));
      return TOKENS[token]?.() ?? token;
    },
  );

  return brandRed(stampPhotos(withTokens));
}
