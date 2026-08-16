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
  return stripAuthoringNotes(html).replace(
    /\{\{(?:IMG:[a-z0-9-]+|[A-Z_]+)\}\}/g,
    (token) => {
      if (token.startsWith("{{IMG:")) {
        return photo(token.slice(6, -2));
      }
      return TOKENS[token]?.() ?? token;
    },
  );
}
