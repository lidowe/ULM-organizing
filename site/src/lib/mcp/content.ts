import { pages } from "@/lib/site-pages";
import { CREDITS, byArtist } from "@/lib/credits";
import { renderTokens } from "@/lib/render-tokens";

export type PageSlug = keyof typeof pages;

export const PAGE_META: Array<{
  slug: string;
  path: string;
  title: string;
  description: string;
}> = [
  {
    slug: "index",
    path: "/",
    title: "Home · Upper Level Music · Edward Lidow",
    description:
      "Private recording studio in Columbia, South Carolina. Recording, production, vocal production, mixing and mastering.",
  },
  {
    slug: "who-we-are",
    path: "/who-we-are",
    title: "Who We Are · Upper Level Music",
    description:
      "Upper Level Music was created in 2006 by Edward Lidow — the story, and why the studio exists.",
  },
  {
    slug: "credits",
    path: "/credits",
    title: "Credits · Selected discography and partial credits",
    description:
      "Selected discography and partial credits for Edward Lidow across recording, mixing, production and mastering.",
  },
  {
    slug: "process",
    path: "/process",
    title: "Process · How the work moves",
    description:
      "How a project moves from first conversation to a finished record at Upper Level Music.",
  },
  {
    slug: "studio",
    path: "/studio",
    title: "Studio · The room and the gear",
    description:
      "The private studio in Columbia, SC — room, monitoring, and instruments.",
  },
  {
    slug: "services",
    path: "/services",
    title: "Services · Recording, mixing, production, mastering",
    description:
      "Recording, production, vocal production, mixing, mastering and consultation.",
  },
  {
    slug: "education",
    path: "/education",
    title: "Educational Services · Upper Level Music",
    description:
      "One-on-one training in recording, mixing and studio technical work, pitched at the level you are actually at.",
  },
  {
    slug: "news",
    path: "/news",
    title: "News and Thoughts · Upper Level Music",
    description:
      "Studio updates, releases, and short essays on making records.",
  },
  {
    slug: "contact",
    path: "/contact",
    title: "Start a project · Upper Level Music",
    description:
      "Tell me about the record. Rough, reference, or a few sentences is enough to start.",
  },
  {
    slug: "reach",
    path: "/reach",
    title: "Contact · Upper Level Music",
    description:
      "Questions, press, or anything that is not a project inquiry.",
  },
];

export function pageSlugs(): string[] {
  return PAGE_META.map((p) => p.slug);
}

export function getPageHtml(slug: string): string | undefined {
  const html = (pages as Record<string, string>)[slug];
  return html === undefined ? undefined : renderTokens(html);
}

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  mdash: "—",
  ndash: "–",
  ldquo: "\u201c",
  rdquo: "\u201d",
  rsquo: "\u2019",
  lsquo: "\u2018",
  hellip: "…",
  middot: "·",
  times: "×",
};

export function decodeEntities(input: string): string {
  return input
    .replace(/&#(\d+);/g, (_m, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&([a-zA-Z]+);/g, (m, name: string) => ENTITIES[name] ?? m);
}

/** Strip markup and collapse whitespace so a model gets readable page copy. */
export function htmlToText(html: string): string {
  const withBreaks = html
    .replace(/<(script|style|canvas|svg)[\s\S]*?<\/\1>/gi, " ")
    .replace(/<\/(p|div|section|article|li|h[1-6]|tr|figure|form)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ");

  return decodeEntities(withBreaks)
    .split("\n")
    .map((line) => line.replace(/[ \t\u00a0]+/g, " ").trim())
    .filter((line) => line.length > 0)
    .join("\n");
}

export type Credit = {
  artist: string;
  title: string;
  year: string;
  role: string;
  roleTags: string[];
  credited: boolean;
};

/** All discography credits, alphabetical by artist. */
export function listCredits(): Credit[] {
  return byArtist(CREDITS).map((c) => ({
    artist: c.artist,
    title: c.title ?? "",
    year: c.year ?? "",
    role: c.role,
    roleTags: c.tags,
    credited: c.credited,
  }));
}

export const CONTACT = {
  studio: "Upper Level Music",
  engineer: "Edward Lidow",
  email: "edwardlidow@upperlevelmusic.com",
  location: "Columbia, South Carolina",
  availability: "By appointment · Remote work available",
  contactPage: "/contact",
  services: [
    "Recording",
    "Production",
    "Vocal production",
    "Mixing",
    "Mastering",
    "Consultation",
  ],
};
