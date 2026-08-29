import {
  artistIndexHtml,
  creditCardsHtml,
  mediaIndexHtml,
  ribbonHtml,
} from "./credits";
import { photo, photoByUrl } from "./photos";
import { animHtml, iconHtml } from "./visuals";
import { doorMarkHtml, doorRailHtml, doorsHtml } from "./doors";
import { fdDoorsHtml, fdPresetsHtml } from "./front-draft-data";

const TOKENS: Record<string, () => string> = {
  "{{RIBBON}}": ribbonHtml,
  "{{CREDIT_CARDS}}": creditCardsHtml,
  "{{ARTIST_INDEX}}": artistIndexHtml,
  "{{MEDIA_INDEX}}": mediaIndexHtml,
  "{{DOORS}}": doorsHtml,
  "{{DOOR_RAIL}}": doorRailHtml,
  // Front-draft working surface (/front-draft) only.
  "{{FD_PRESETS}}": fdPresetsHtml,
  "{{FD_DOORS}}": fdDoorsHtml,
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
 * One `sizes` hint: photos render full-bleed or inside the 1200px column, so
 * a single hint covers the layout without per-image bookkeeping. A browser
 * over-fetches by at most one variant step in narrower sub-columns.
 */
const SIZES = "(max-width: 700px) 100vw, (max-width: 1200px) 90vw, 1200px";

/**
 * Decorate each rendered photo from the registry: `data-photo` (a name that
 * is stable in dev AND production — matching on the URL is not, which is how
 * a previous generation of `img[src$=...]` focal rules silently died on the
 * live site), the generated `srcset`/`sizes`, and the photo's focal point as
 * an inline object-position for cropped contexts.
 */
function stampPhotoNames(html: string): string {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    if (tag.includes("data-photo=")) return tag;
    const src = /\ssrc="([^"]+)"/.exec(tag)?.[1];
    const entry = src ? photoByUrl(src) : undefined;
    if (!entry) return tag;

    let attrs = `data-photo="${entry.name}"`;
    if (entry.srcset && !tag.includes("srcset=")) {
      attrs += ` srcset="${entry.srcset}" sizes="${SIZES}"`;
    }
    if (entry.focal && !tag.includes("style=")) {
      attrs += ` style="object-position:${entry.focal}"`;
    }
    return tag.replace(/^<img\b/, `<img ${attrs}`);
  });
}

/** Replace content tokens in a static page string with generated markup. */
export function renderTokens(html: string): string {
  const withTokens = stripAuthoringNotes(html).replace(
    /\{\{(?:(?:IMG|ICON|UI|ANIM|DOOR_MARK):[a-z0-9-]+(?::[a-z]+)?|[A-Z_]+)\}\}/g,
    (token) => {
      const inner = token.slice(2, -2);
      if (inner.startsWith("IMG:")) return photo(inner.slice(4));
      if (inner.startsWith("ICON:")) {
        const [name, size] = inner.slice(5).split(":");
        return iconHtml(name, size ?? "sm");
      }
      if (inner.startsWith("UI:")) return iconHtml(inner.slice(3));
      if (inner.startsWith("ANIM:")) return animHtml(inner.slice(5));
      if (inner.startsWith("DOOR_MARK:")) return doorMarkHtml(inner.slice(10));
      return TOKENS[token]?.() ?? token;
    },
  );

  return stampPhotoNames(withTokens);
}
