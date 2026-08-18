/**
 * Page bodies as HTML strings, one module per page in ./pages.
 *
 * Tokens: {{RIBBON}}, {{CREDIT_CARDS}}, {{ARTIST_INDEX}}, {{MEDIA_INDEX}}
 * and {{IMG:name}} for CDN photos (see src/lib/photos.ts).
 *
 * TEARDOWN (Edward, 17 Aug): the site reduces to Home + Hierarchy Options
 * (+ the contact intake and the unlisted doors-draft lab). Every other
 * page module stays in ./pages as the locked archive - unimported, so
 * unbuilt - recoverable from here or from git history when its rebuild
 * comes.
 */
import index from "./pages/index";
import contact from "./pages/contact";
import hierarchyOptions from "./pages/hierarchy-options";
import doorsDraft from "./pages/doors-draft";

export const pages: Record<string, string> = {
  "index": index,
  "contact": contact,
  "hierarchy-options": hierarchyOptions,
  "doors-draft": doorsDraft,
};
