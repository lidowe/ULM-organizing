/**
 * Single source of truth for discography credits and the artist roster.
 * The home-page ribbon, the Work page cards, the artist index and the MCP
 * `list_credits` tool all render from this list.
 *
 * Role language rules (applied when authoring entries):
 *  - Assistant Engineer work rotates through:
 *      "Assistant Engineer · Editing · Tracking Engineer (various)"
 *      "Assistant Engineer · Editing · Equipment Selection"
 *      "DAW Operator (various) · Studio Assistant" (or Production Assistant)
 *    Pop-artist assistant credits also carry "Vocal Tuning (various)" and
 *    occasionally "DAW/Tape Operator".
 *  - Mix Assistant work becomes
 *      "Mixing Engineer · Editing · Vocal Tuning · Additional DAW Operation".
 *  - Uncredited major-artist work reads "Various Engineering".
 *  - Uncredited independent work reads
 *      "Co-Production · Tracking Engineer · Mixing".
 */

import { photo } from "./photos";

export type Credit = {
  artist: string;
  /** Release title. Omitted for roster-only (uncredited) entries. */
  title?: string;
  year?: string;
  role: string;
  /** Filter tags used by the Work page filter bar. */
  tags: string[];
  /** Publicly credited on the release. */
  credited: boolean;
  independent?: boolean;
  /**
   * Asset name of the release artwork, without extension, e.g.
   * "art-rachel-goodrich-baby-now-were-even". Optional: cards render fine
   * without it, so covers can be added one at a time as they are cleared.
   */
  art?: string;
};

const ASSISTANT_TRACKING = "Assistant Engineer · Editing · Tracking Engineer (various)";
const ASSISTANT_EQUIPMENT = "Assistant Engineer · Editing · Equipment Selection";
const DAW_STUDIO = "DAW Operator (various) · Studio Assistant";
const DAW_PRODUCTION = "DAW Operator (various) · Production Assistant";
const MIX_ASSISTANT = "Mixing Engineer · Editing · Vocal Tuning · Additional DAW Operation";
const UNCREDITED_MAJOR = "Various Engineering";
const UNCREDITED_INDIE = "Co-Production · Tracking Engineer · Mixing";
const LIL_WAYNE_EXTRA =
  "Vocal Tracking (various) · Editing · Mixing Assistant · Touring Engineer (various)";

/** Not artists, kept out of the artist ribbon and index. */
export const MEDIA_AND_BRANDS = ["American Idol", "The Simpsons", "Spotify"];

export const CREDITS: Credit[] = [
  {
    artist: "ArtOfficial",
    title: "Knives",
    year: "2014",
    role: "Co-Production · Tracking Engineer · Mixing",
    tags: ["recording", "mix"],
    credited: true,
    independent: true,
  },
  {
    artist: "Blackfoot",
    title: "Southern Native",
    year: "2016",
    art: "archive-crew-console",
    role: "Tracking Engineer · Recording Engineer · Editing · Co-Production",
    tags: ["engineering", "recording"],
    credited: true,
  },
  {
    artist: "DJ Khaled",
    title: "We the Best Forever",
    year: "2011",
    role: ASSISTANT_EQUIPMENT,
    tags: ["assistant", "engineering"],
    credited: true,
  },
  {
    artist: "Katy Perry",
    title: "Teenage Dream",
    year: "2010",
    role: "Assistant Engineer · Editing · Vocal Tuning (various) · DAW/Tape Operator",
    tags: ["assistant", "engineering"],
    credited: true,
  },
  {
    artist: "Kevin Rudolf",
    title: "In the City",
    year: "2008",
    role: MIX_ASSISTANT,
    tags: ["mix", "engineering"],
    credited: true,
  },
  {
    artist: "Lil Mama",
    title: "VYP, Voice of the Young People",
    year: "2008",
    role: "Studio Assistant · Tracking Engineer (various) · Mixing Engineer (various)",
    tags: ["assistant", "mix", "recording"],
    credited: true,
  },
  {
    artist: "Lil Wayne",
    title: "Tha Carter III",
    year: "2008",
    role: `${ASSISTANT_TRACKING} · ${LIL_WAYNE_EXTRA}`,
    tags: ["assistant", "mix", "engineering", "recording"],
    credited: true,
  },
  {
    artist: "Lil Wayne",
    title: "Tha Carter IV",
    year: "2011",
    role: `Engineer · Editing · Tracking Engineer (various) · ${LIL_WAYNE_EXTRA}`,
    tags: ["recording", "engineering", "assistant", "mix"],
    credited: true,
  },
  {
    artist: "Lil Wayne",
    title: "Rebirth",
    year: "2010",
    role: `Engineer · Editing · Tracking Engineer (various) · ${LIL_WAYNE_EXTRA} · Guitar/Drum Studio Tech · Consulting · Recording Engineer`,
    tags: ["recording", "engineering", "assistant", "mix"],
    credited: true,
  },
  {
    artist: "Louis DeFelice",
    title: "Tin Stars",
    year: "2017",
    role: "Co-Production · Tracking Engineer · Mixing Engineer · Mastering Engineer",
    tags: ["recording", "mix"],
    credited: true,
    independent: true,
  },
  {
    artist: "Luis Fonsi",
    title: "Palabras del Silencio",
    year: "2008",
    role: DAW_PRODUCTION,
    tags: ["assistant", "engineering"],
    credited: true,
  },
  {
    artist: "Mario",
    title: "D.N.A.",
    year: "2009",
    role: "Mixing Engineer",
    tags: ["mix"],
    credited: true,
  },
  {
    artist: "¡MAYDAY!",
    title: "Believers",
    year: "2013",
    role: "Engineer · Recording",
    tags: ["engineering", "recording"],
    credited: true,
  },
  {
    artist: "Nicki Minaj",
    title: "Pink Friday",
    year: "2010",
    role: "Assistant Engineer · Editing · Vocal Tuning (various)",
    tags: ["assistant", "engineering"],
    credited: true,
  },
  {
    artist: "Rachel Goodrich",
    title: "Baby, Now We're Even",
    year: "2014",
    art: "art-rachel-goodrich-baby-now-were-even",
    role: "Co-Production · Tracking Engineer · Mixing Engineer · Mastering Engineer",
    tags: ["recording", "mix"],
    credited: true,
    independent: true,
  },
  {
    artist: "Rich Gang",
    title: "Rich Gang",
    year: "2013",
    role: "Engineer · Recording Engineer on selected tracks",
    tags: ["engineering", "recording"],
    credited: true,
  },
  {
    artist: "Willie Nelson",
    title: "Band of Brothers",
    year: "2014",
    role: ASSISTANT_EQUIPMENT,
    tags: ["assistant", "engineering"],
    credited: true,
  },
  {
    artist: "Young Money",
    title: "We Are Young Money",
    year: "2009",
    role: ASSISTANT_TRACKING,
    tags: ["assistant", "engineering"],
    credited: true,
  },

  // ---- Roster work without a public credit -------------------------------
  { artist: "Alter Bridge", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Bob Dylan", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Busta Rhymes", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Cat Power", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  {
    artist: "Charred Walls of the Damned",
    role: UNCREDITED_INDIE,
    tags: ["recording", "mix"],
    credited: false,
    independent: true,
  },
  { artist: "Chris Cornell", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Coldplay", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Cool & Dre", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Damian Marley", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Danja", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Diddy", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Dr. Dre", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Drake", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  {
    artist: "Dwayne “The Rock” Johnson",
    role: UNCREDITED_MAJOR,
    tags: ["engineering"],
    credited: false,
  },
  { artist: "DVLP", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Eminem", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Enrique Iglesias", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Fat Joe", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  {
    artist: "Gym Class Heroes",
    role: "Tracking Engineer · Co-Production · Additional Instrumentation (various)",
    tags: ["recording", "engineering"],
    credited: false,
  },
  { artist: "Iggy Pop", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Jamie Foxx", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Jay Sean", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Jet", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Jonas Brothers", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Justin Bieber", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Justin Timberlake", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Keri Hilson", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Keyshia Cole", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Lenny Kravitz", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Lupe Fiasco", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Lynyrd Skynyrd", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Madonna", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Maná", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Mary J. Blige", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Missy Elliott", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Nelly", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Paris Hilton", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Pharrell", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Pitbull", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Redman", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  {
    artist: "RG Royal Sound Orchestra",
    role: "Co-Production · Mixing",
    tags: ["mix"],
    credited: false,
    independent: true,
  },
  { artist: "Rick Ross", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Ricky Martin", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Ricky Medlocke", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  {
    artist: "The Jean Marie",
    role: "Co-Producer · Engineer · Co-Writer · Mix Engineer · Mastering Assistant",
    tags: ["recording", "mix", "engineering"],
    credited: false,
    independent: true,
  },
  { artist: "Timbaland", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Travis Barker", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Tyga", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Yeah Yeah Yeahs", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "YMCMB", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
  { artist: "Yung Berg", role: UNCREDITED_MAJOR, tags: ["engineering"], credited: false },
];

const collator = new Intl.Collator("en", { sensitivity: "base" });

function sortKey(name: string): string {
  return name.replace(/^(the|a|an|dj|¡)\s*/i, "").trim();
}

export function byArtist<T extends { artist: string }>(list: T[]): T[] {
  return [...list].sort(
    (a, b) =>
      collator.compare(sortKey(a.artist), sortKey(b.artist)) ||
      collator.compare(a.artist, b.artist),
  );
}

/** Every artist name on the roster, alphabetical, de-duplicated. */
export function artistRoster(): string[] {
  const seen = new Set<string>();
  return byArtist(CREDITS)
    .map((c) => c.artist)
    .filter((name) => (seen.has(name) ? false : (seen.add(name), true)));
}

/** Credits with a named release, the Work page cards. */
export function releaseCredits(): Credit[] {
  return byArtist(CREDITS.filter((c) => c.title));
}

const ESC: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};

function esc(value: string): string {
  return value.replace(/[&<>"]/g, (ch) => ESC[ch]!);
}

export function creditCardsHtml(): string {
  return releaseCredits()
    .map(
      (c) =>
        `<article class="work-card${c.art ? " has-art" : ""}" data-year="${esc(
          c.year ?? "",
        )}" data-work-role="${esc(c.tags.join(" "))}">${
          c.art
            ? `<img class="work-art" src="${photo(c.art)}" alt="${esc(
                c.artist,
              )} — ${esc(c.title ?? "")}" loading="lazy" decoding="async" />`
            : ""
        }<div><div class="artist">${esc(c.artist)}${
          c.year ? ` · ${esc(c.year)}` : ""
        }</div><h3>${esc(c.title!)}</h3></div><div class="role">${esc(c.role)}</div></article>`,
    )
    .join("\n      ");
}

export function artistIndexHtml(): string {
  return artistRoster()
    .map((name) => `<span>${esc(name)}</span>`)
    .join("");
}

export function mediaIndexHtml(): string {
  return [...MEDIA_AND_BRANDS]
    .sort((a, b) => collator.compare(sortKey(a), sortKey(b)))
    .map((name) => `<span>${esc(name)}</span>`)
    .join("");
}

export function ribbonHtml(): string {
  const run = artistRoster()
    .map((name) => `<span>${esc(name)}</span>`)
    .join("");
  return `${run}\n      ${run}`;
}
