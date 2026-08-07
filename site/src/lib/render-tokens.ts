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

/** Replace content tokens in a static page string with generated markup. */
export function renderTokens(html: string): string {
  return html.replace(/\{\{(?:IMG:[a-z0-9-]+|[A-Z_]+)\}\}/g, (token) => {
    if (token.startsWith("{{IMG:")) {
      return photo(token.slice(6, -2));
    }
    return TOKENS[token]?.() ?? token;
  });
}
