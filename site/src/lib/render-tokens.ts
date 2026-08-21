import {
  artistIndexHtml,
  creditCardsHtml,
  mediaIndexHtml,
  ribbonHtml,
} from "./credits";
import { photo, photoName } from "./photos";

const TOKENS: Record<string, () => string> = {
  "{{RIBBON}}": ribbonHtml,
  "{{CREDIT_CARDS}}": creditCardsHtml,
  "{{ARTIST_INDEX}}": artistIndexHtml,
  "{{MEDIA_INDEX}}": mediaIndexHtml,
};

/**
 * Stamp registry photos with `data-photo="<name>"` so the focal-point rules
 * in site.css survive Vite's hashed asset filenames, and make the first image
 * on a page eager + high priority so the largest paint isn't waiting on a
 * lazy-load callback. Everything below it stays lazy.
 */
function enhanceImages(html: string): string {
  let first = true;

  return html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = /\ssrc="([^"]+)"/.exec(tag)?.[1];
    const name = src ? photoName(src) : undefined;
    if (!name) return tag;

    const isFirst = first;
    first = false;

    let out = tag;
    if (!out.includes("data-photo=")) {
      out = out.replace(/<img\b/, `<img data-photo="${name}"`);
    }

    if (isFirst) {
      out = out.replace(/\sloading="lazy"/, "");
      if (!out.includes("loading=")) {
        out = out.replace(/<img\b/, '<img loading="eager"');
      }
      if (!out.includes("fetchpriority=")) {
        out = out.replace(/<img\b/, '<img fetchpriority="high"');
      }
    }
    if (!out.includes("decoding=")) {
      out = out.replace(/<img\b/, '<img decoding="async"');
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

/** Replace content tokens in a static page string with generated markup. */
export function renderTokens(html: string): string {
  const withTokens = stripAuthoringNotes(html).replace(
    /\{\{(?:IMG:[a-z0-9-]+|[A-Z_]+)\}\}/g,
    (token) => {
      if (token.startsWith("{{IMG:")) {
        return photo(token.slice(6, -2));
      }
      return TOKENS[token]?.() ?? token;
    },
  );

  return enhanceImages(withTokens);
}
