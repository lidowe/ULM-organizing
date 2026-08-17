/**
 * Page bodies as HTML strings, one module per page in ./pages.
 *
 * Tokens: {{RIBBON}}, {{CREDIT_CARDS}}, {{ARTIST_INDEX}}, {{MEDIA_INDEX}}
 * and {{IMG:name}} for CDN photos (see src/lib/photos.ts).
 */
import index from "./pages/index";
import work from "./pages/work";
import studio from "./pages/studio";
import services from "./pages/services";
import contact from "./pages/contact";
import about from "./pages/about";
import education from "./pages/education";
import news from "./pages/news";
import preProduction from "./pages/pre-production";
import describingSound from "./pages/describing-sound";
import theGap from "./pages/the-gap";
import workbench from "./pages/workbench";
import doorsDraft from "./pages/doors-draft";

export const pages: Record<string, string> = {
  "index": index,
  "work": work,
  "studio": studio,
  "services": services,
  "contact": contact,
  "about": about,
  "education": education,
  "news": news,
  "pre-production": preProduction,
  "describing-sound": describingSound,
  "the-gap": theGap,
  "workbench": workbench,
  "doors-draft": doorsDraft,
};
