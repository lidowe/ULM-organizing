import { pages } from "@/lib/site-pages";

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
    slug: "work",
    path: "/work",
    title: "Work · Selected records",
    description:
      "A selected view of Edward Lidow's work across recording, mixing, production and mastering.",
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
    slug: "about",
    path: "/about",
    title: "Edward Lidow · About",
    description:
      "Musician, engineer, mixer and producer. 12 years at Hit Factory / Criteria Miami.",
  },
  {
    slug: "contact",
    path: "/contact",
    title: "Start a project · Upper Level Music",
    description:
      "Tell me about the record. Rough, reference, or a few sentences is enough to start.",
  },
];

export function pageSlugs(): string[] {
  return PAGE_META.map((p) => p.slug);
}

export function getPageHtml(slug: string): string | undefined {
  return (pages as Record<string, string>)[slug];
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
};

/** Parse the selected-discography cards out of the Work page markup. */
export function listCredits(): Credit[] {
  const html = getPageHtml("work") ?? "";
  const cards = html.match(/<article class="work-card"[\s\S]*?<\/article>/g) ?? [];

  return cards.map((card) => {
    const year = /data-year="([^"]*)"/.exec(card)?.[1] ?? "";
    const roleTags = (/data-work-role="([^"]*)"/.exec(card)?.[1] ?? "")
      .split(/\s+/)
      .filter(Boolean);
    const artistRaw = /<div class="artist">([\s\S]*?)<\/div>/.exec(card)?.[1] ?? "";
    const title = decodeEntities(
      (/<h3>([\s\S]*?)<\/h3>/.exec(card)?.[1] ?? "").replace(/<[^>]+>/g, ""),
    ).trim();
    const role = decodeEntities(
      (/<div class="role">([\s\S]*?)<\/div>/.exec(card)?.[1] ?? "").replace(
        /<[^>]+>/g,
        "",
      ),
    ).trim();
    const artist = decodeEntities(artistRaw.replace(/<[^>]+>/g, ""))
      .split("·")[0]!
      .trim();

    return { artist, title, year, role, roleTags };
  });
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
