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
    title: "Upper Level Music · Recording, Mixing and Production",
    description:
      "Major-label studio veterans offering recording, production, vocal production, mixing and mastering, remote or in person, tailored to where your record is.",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    slug: "process",
    path: "/process",
    title: "Process · Upper Level Music",
    description:
      "How a project moves from the first conversation to a finished record, questions first, then scope, then the work.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "about",
    path: "/about",
    title: "About · Upper Level Music",
    description:
      "Created in 2006 by Edward Lidow. A collaborative team of engineers, producers, musicians and coaches built around the person making the record.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    slug: "services",
    path: "/services",
    title: "Available Services · Upper Level Music",
    description:
      "Recording, production, vocal production, mixing, mastering and consultation. Book one stage or scope a whole record.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "studio",
    path: "/studio",
    title: "Studio and Technology · Upper Level Music",
    description:
      "The microphone locker, outboard racks and analog front end behind the work, 103 microphones across 64 models.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    slug: "education",
    path: "/education",
    title: "Educational Services · Upper Level Music",
    description:
      "One-on-one training in recording, mixing and studio technical work for artists, engineers, producers and students, remote, at your pace.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    slug: "news",
    path: "/news",
    title: "News and Thoughts · Upper Level Music",
    description:
      "Studio updates, releases, and short essays on making records from Upper Level Music.",
    changefreq: "weekly",
    priority: "0.6",
  },
  {
    slug: "work",
    path: "/work",
    title: "Work · Upper Level Music",
    description:
      "Selected discography and credits for Edward Lidow, recording, mixing, production, editing and assistant work across genres.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "contact",
    path: "/contact",
    title: "Start a Project · Upper Level Music",
    description:
      "Tell us about the record, what you're making, where it is now, and what's getting in the way.",
    changefreq: "yearly",
    priority: "0.9",
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
