import {
  artistIndexHtml,
  creditCardsHtml,
  mediaIndexHtml,
  ribbonHtml,
} from "./credits";
import { photo, photos } from "./photos";

const TOKENS: Record<string, () => string> = {
  "{{RIBBON}}": ribbonHtml,
  "{{CREDIT_CARDS}}": creditCardsHtml,
  "{{ARTIST_INDEX}}": artistIndexHtml,
  "{{MEDIA_INDEX}}": mediaIndexHtml,
};

/**
 * Editorial TODO blocks. They are useful while drafting, but they are page
 * content like anything else, so in a production build they ship to visitors
 * as amber "content needed" panels. Keep them in source, strip them here.
 */
const NEEDS_CONTENT = /\s*<div class="needs-content">[\s\S]*?<\/div>/g;

function stripAuthoringNotes(html: string): string {
  return import.meta.env.DEV ? html : html.replace(NEEDS_CONTENT, "");
}

/**
 * Stamp each rendered photo with its registry name as `data-photo`, so CSS
 * can target a specific photograph (focal points, one-off crops) by a name
 * that is stable in dev AND production. Matching on the URL is not stable:
 * dev serves /src/assets/name.jpg while the production bundle emits
 * /assets/name-<hash>.jpg, which is how a previous generation of
 * `img[src$="/name.jpg"]` focal-point rules silently died on the live site.
 */
const urlToName = new Map(Object.entries(photos).map(([name, url]) => [url, name]));

function stampPhotoNames(html: string): string {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    if (tag.includes("data-photo=")) return tag;
    const src = /\ssrc="([^"]+)"/.exec(tag)?.[1];
    const name = src ? urlToName.get(src) : undefined;
    return name ? tag.replace(/^<img\b/, `<img data-photo="${name}"`) : tag;
  });
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

  return stampPhotoNames(withTokens);
}
