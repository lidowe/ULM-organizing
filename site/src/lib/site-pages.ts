/**
 * Page bodies as HTML strings, one module per page in ./pages.
 *
 * Tokens: {{RIBBON}}, {{CREDIT_CARDS}}, {{ARTIST_INDEX}}, {{MEDIA_INDEX}}
 * and {{IMG:name}} for CDN photos (see src/lib/photos.ts).
 */
import index from "./pages/index";
import work from "./pages/work";
import process from "./pages/process";
import studio from "./pages/studio";
import services from "./pages/services";
import contact from "./pages/contact";
import who_we_are from "./pages/who-we-are";
import credits from "./pages/credits";
import education from "./pages/education";
import news from "./pages/news";
import reach from "./pages/reach";

export const pages: Record<string, string> = {
  "index": index,
  "work": work,
  "process": process,
  "studio": studio,
  "services": services,
  "contact": contact,
  "who-we-are": who_we_are,
  "credits": credits,
  "education": education,
  "news": news,
  "reach": reach,
};
