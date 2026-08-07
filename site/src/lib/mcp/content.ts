import { pages } from "@/lib/site-pages";
import { CREDITS, byArtist } from "@/lib/credits";
import { renderTokens } from "@/lib/render-tokens";
import { PAGES } from "@/lib/seo";

export type PageSlug = keyof typeof pages;

/** Page index for MCP clients, derived from the same table that feeds
 * /sitemap.xml and every page head, so the three cannot drift apart. */
export const PAGE_META: Array<{
  slug: string;
  path: string;
  title: string;
  description: string;
}> = PAGES.map(({ slug, path, title, description }) => ({
  slug,
  path,
  title,
  description,
}));

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
