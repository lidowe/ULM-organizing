/**
 * The site registry: the one place that names the pages, their order, their
 * navigation labels and their search metadata, plus the contact facts.
 * Navigation, the menu, the footer, the "keep exploring" buttons, page <head>
 * tags, the sitemap and structured data all read from here.
 */

export const SITE = {
  name: "Upper Level Music",
  url: "https://upperlevelmusic.com",
  email: "edwardlidow@upperlevelmusic.com",
  owner: "Edward Lidow",
  founded: "2014",
  location: "Columbia, South Carolina",
  /** Social share image (public/), black and white session photo. */
  ogImage: "/session-bw.jpg",
  ogImageAlt: "Two musicians mid-session, drums and guitar, black and white",
} as const;

export type PageSlug =
  | "index"
  | "the-gap"
  | "process"
  | "services"
  | "education"
  | "studio"
  | "work"
  | "about"
  | "contact"
  | "news";

export type PageEntry = {
  slug: PageSlug;
  path: string;
  /** Label in the header, menu and footer; pages without one stay out of the nav. */
  nav?: string;
  title: string;
  description: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

/** Every public page, in reading order. */
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
    slug: "the-gap",
    path: "/the-gap",
    nav: "The Gap",
    title: "The Gap · Upper Level Music",
    description:
      "The tools reached everyone; the knowledge didn't. Why everyone seems to need help these days, and what closes the divide.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    slug: "process",
    path: "/process",
    nav: "Process",
    title: "Process · Upper Level Music",
    description:
      "How a project moves from the first conversation to a finished record, questions first, then scope, then the work.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "services",
    path: "/services",
    nav: "Services",
    title: "Services · Upper Level Music",
    description:
      "Recording, production, vocal production, mixing, mastering and consultation. Book one stage or scope a whole record.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "education",
    path: "/education",
    nav: "Educational services",
    title: "Educational Services · Upper Level Music",
    description:
      "One-on-one training in recording, mixing and studio technical work for artists, engineers, producers and students, remote, at your pace.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    slug: "studio",
    path: "/studio",
    nav: "Studio",
    title: "Studio · Upper Level Music",
    description:
      "The microphone locker, outboard racks and analog front end behind the work, 103 microphones across 64 models.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    slug: "work",
    path: "/work",
    nav: "Work",
    title: "Work · Upper Level Music",
    description:
      "Selected discography and credits for Edward Lidow, recording, mixing, production, editing and assistant work across genres.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    slug: "about",
    path: "/about",
    nav: "About",
    title: "About · Upper Level Music",
    description:
      "Created in 2014 by Edward Lidow. A collaborative team of engineers, producers, musicians and coaches built around the person making the record.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    slug: "contact",
    path: "/contact",
    title: "Contact · Upper Level Music",
    description:
      "Tell us about the record, what you're making, where it is now, and what's getting in the way.",
    changefreq: "yearly",
    priority: "0.9",
  },
  {
    slug: "news",
    path: "/news",
    title: "News · Upper Level Music",
    description:
      "Studio updates, releases, and short essays on making records from Upper Level Music.",
    changefreq: "weekly",
    priority: "0.6",
  },
];

/** The pages in the main navigation, in reading order (Home and Contact are linked separately). */
export const NAV = PAGES.filter((p) => p.nav);

/** The numbered menu: Home, the navigation pages, then Contact. */
export const MENU = [
  { path: "/", label: "Home" },
  ...NAV.map((p) => ({ path: p.path, label: p.nav! })),
  { path: "/contact", label: "Contact" },
].map((item, i) => ({ ...item, n: String(i + 1).padStart(2, "0") }));

export function page(slug: PageSlug): PageEntry {
  return PAGES.find((p) => p.slug === slug)!;
}

export function absoluteUrl(path: string): string {
  return SITE.url + (path === "/" ? "" : path);
}
