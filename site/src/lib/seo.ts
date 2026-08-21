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
    slug: "complete",
    path: "/complete",
    title: "Complete The Project · Upper Level Music",
    description:
      "Full production from demo to master, or any single stage: recording, vocal production, editing, mixing, mastering. Done right and on time.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    slug: "fix",
    path: "/fix",
    title: "Fix An Issue · Upper Level Music",
    description:
      "A mix that will not sit, a room that lies to you, a signal path with a fault you cannot isolate. Diagnosis first, then the repair, on your session and your rig.",
    changefreq: "monthly",
    priority: "0.9",
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
    slug: "evaluate",
    path: "/evaluate",
    title: "Playback, Evaluate, Improve · Upper Level Music",
    description:
      "A second set of experienced ears: honest playback, project planning, and gear checked before you spend.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "purple",
    path: "/purple",
    title: "Make It More Purple · Upper Level Music",
    description:
      "You do not need the vocabulary to start. Describe the sound in your own words — borrowed words are how sound gets described — and we will translate it into the work.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "the-gap",
    path: "/the-gap",
    title: "The Gap · Upper Level Music",
    description:
      "The tools reached everyone. The knowledge didn't. How the trade used to hand itself down, what interrupted it, and the patch around the interruption.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    slug: "story",
    path: "/story",
    title: "The Story · Upper Level Music",
    description:
      "Created in 2012 by Edward Lidow. The person, what happened to the record industry, and why control belongs to the person making the art.",
    changefreq: "monthly",
    priority: "0.7",
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
    slug: "start",
    path: "/start",
    title: "Start · Upper Level Music",
    description:
      "Start with the problem, not the booking language. A rough mix, a voice memo, a photo of the room, or a few sentences is plenty.",
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
