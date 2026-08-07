import {
  artistIndexHtml,
  creditCardsHtml,
  mediaIndexHtml,
  ribbonHtml,
} from "./credits";
import { photo } from "./photos";

const TOKENS: Record<string, () => string> = {
  "{{RIBBON}}": ribbonHtml,
  "{{CREDIT_CARDS}}": creditCardsHtml,
  "{{ARTIST_INDEX}}": artistIndexHtml,
  "{{MEDIA_INDEX}}": mediaIndexHtml,
};

/** Widths requested from the asset CDN for responsive `srcset` candidates. */
const WIDTHS = [480, 768, 1024, 1440, 1920];

/**
 * Most photos render either full-bleed or inside the 1200px content column,
 * so one `sizes` hint covers the layout without per-image bookkeeping.
 */
const SIZES = "(max-width: 700px) 100vw, (max-width: 1200px) 90vw, 1200px";

function srcsetFor(url: string): string {
  return WIDTHS.map((w) => `${url}?w=${w} ${w}w`).join(", ");
}

/**
 * Add responsive `srcset`/`sizes` to CDN images, and make the first image on
 * a page eager + high priority so the largest paint isn't waiting on a
 * lazy-load callback. Everything below it stays lazy.
 */
function enhanceImages(html: string): string {
  let first = true;

  return html.replace(/<img\b[^>]*>/g, (tag) => {
    const src = /\ssrc="([^"]+)"/.exec(tag)?.[1];
    if (!src || !src.startsWith("/__l5e/") || tag.includes("srcset=")) return tag;

    const isFirst = first;
    first = false;

    let out = tag.replace(
      /\ssrc="/,
      ` sizes="${SIZES}" srcset="${srcsetFor(src)}" src="`,
    );

    if (isFirst) {
      out = out.replace(/\sloading="lazy"/, "");
      out = out.replace(/<img\b/, '<img loading="eager" fetchpriority="high" decoding="async"');
    } else if (!out.includes("decoding=")) {
      out = out.replace(/<img\b/, '<img decoding="async"');
    }

    return out;
  });
}

/** Replace content tokens in a static page string with generated markup. */
export function renderTokens(html: string): string {
  const withTokens = html.replace(
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
