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
