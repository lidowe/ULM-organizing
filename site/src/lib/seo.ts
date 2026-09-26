/**
 * Shared head metadata and the canonical list of public pages.
 *
 * Route modules call `pageHead(slug)` so title, description, Open Graph tags,
 * canonical and og:url stay consistent and self-referencing. The same table
 * feeds /sitemap.xml and the MCP page index, so there is one source of truth.
 */
export const SITE_URL = "https://upperlevelmusic.com";

export const SITE_NAME = "Upper Level Music";

/** Social share image: black and white session photo, drums and guitar. */
export const SITE_OG_IMAGE =
  SITE_URL +
  "/session-bw.jpg";

export type PageEntry = {
  /** Content key in src/lib/site-pages.ts */
  slug: string;
  path: string;
  title: string;
  description: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

export const PAGES: PageEntry[] = [
  {
    slug: "index",
    path: "/",
    title: "Upper Level Music · Recording, Mixing, Production and Teaching",
    description:
      "Thirty years of major-label rooms, working for independent artists. Five doors in: complete a project, fix an issue, learn the craft, get honest playback, or just describe it in your own words.",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    slug: "learn",
    path: "/learn",
    title: "Learn The Craft · Upper Level Music",
    description:
      "One-on-one training in recording, mixing and studio technical work. The apprenticeship knowledge, handed over directly.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    slug: "proof",
    path: "/proof",
    title: "On Record · Upper Level Music",
    description:
      "Selected discography with precise roles, RIAA and Billboard plaques, the rooms worked in, and the equipment behind the work.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "pre-production",
    path: "/pre-production",
    title: "A Chance to Be Heard · Upper Level Music",
    description:
      "Before we reach for a microphone, a short, informal Q&A. We wouldn't know which mic to start with without knowing what's being delivered into it.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    slug: "start",
    path: "/start",
    title: "Start · Upper Level Music",
    description:
      "Start with the problem, not the booking language. A rough mix, a voice memo, a photo of the room, or a few sentences is plenty.",
    changefreq: "yearly",
    priority: "0.9",
  },
  {
    slug: "services",
    path: "/services",
    title: "Services & Rates · Upper Level Music",
    description:
      "Mixing, editing, mastering, recording, production, diagnosis, rooms and systems, and one-on-one teaching, with rates on the page.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    slug: "why",
    path: "/why",
    title: "Why ULM · Upper Level Music",
    description:
      "Edward Lidow, the gap between the tools and the knowledge, and why Upper Level Music was built around the person making the record.",
    changefreq: "monthly",
    priority: "0.8",
  },
];

export function absoluteUrl(path: string): string {
  return SITE_URL + (path === "/" ? "" : path);
}

/** Head metadata for a public page, keyed by its content slug. */
export function pageHead(slug: string) {
  const page = PAGES.find((p) => p.slug === slug);
  if (!page) throw new Error(`Unknown page slug: ${slug}`);

  const url = absoluteUrl(page.path);

  return {
    meta: [
      { title: page.title },
      { name: "description", content: page.description },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: page.title },
      { property: "og:description", content: page.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: SITE_OG_IMAGE },
      { property: "og:image:alt", content: "Two musicians mid-session, drums and guitar, black and white" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SITE_OG_IMAGE },
      { name: "twitter:title", content: page.title },
      { name: "twitter:description", content: page.description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
