/**
 * FRONT DRAFT — working data for /front-draft, the homepage-restructure
 * draft (2026-08-28). Not imported by any live page.
 *
 * The model: identities are PRESETS over the same small system — the five
 * doors. Each preset is a data row: arming it re-describes the doors with
 * its tailored lines and (in the behavior layer) draws patch cables that
 * converge on the same five modules. A composite preset (Place of Worship)
 * arms its component identities faintly, so interconnection is shown
 * rather than claimed. Adding an identity = adding a row here. The layout
 * never changes.
 *
 * COPY STATUS: hooks and tailored lines are DRAFT scaffold in Edward's
 * direction, composed from his verbatim service rows and identity cards
 * where one exists. Delivered for veto as a numbered list; nothing here is
 * final wording. Door titles come from doors.ts, except door 5, which this
 * draft reverts to Edward's own settled title ("Explain It, Adapt, Solve
 * It") per his 2026-08-28 de-purpling note — the purple story stays inside
 * the page as an anecdote, not a system-wide connector.
 */
import { DOORS } from "./doors";
import { iconHtml } from "./visuals";

export type FdPreset = {
  id: string;
  /** Patchbay strip label: rendered in the aux tier, so case is cosmetic. */
  name: string;
  /** Library icon naming the identity's object — objects, never people. */
  icon: string;
  /** One line on the block. */
  hook: string;
  /** The door this identity most often walks through (hottest cable). */
  primary: string;
  /** doorId -> tailored line shown on that door's module when armed. */
  doors: Record<string, string>;
  /** Composite: arming this also faintly arms these identities. */
  components?: string[];
  /** Small proof fragment, credits-law-safe (real prior work only). */
  proof?: string;
};

export const FD_PRESETS: FdPreset[] = [
  {
    id: "artist",
    name: "The Artist",
    icon: "note-eighth",
    hook: "A dozen jobs you never asked for, and the record still has to happen.",
    primary: "complete",
    doors: {
      complete:
        "Full production from demo to master, or any single stage of it. Twelve songs stalled at eighty percent, finished as a body of work.",
      purple:
        "You can talk about the song in human terms. “Floating in space” is enough to work from.",
      evaluate: "A second set of experienced ears on decisions already made.",
    },
  },
  {
    id: "home-engineer",
    name: "The Home Engineer",
    icon: "audio-interface",
    hook: "Already charging for the work, or about to be. We get it.",
    primary: "learn",
    doors: {
      learn:
        "Lessons on theory, or just how ‘the pros’ do it — let’s get the deliverable to your client.",
      fix: "A mix that will not sit, worked through on your session, in your DAW.",
      evaluate: "Gear you are about to buy, checked before you spend.",
    },
  },
  {
    id: "student",
    name: "The Student",
    icon: "headphones",
    hook: "The apprenticeship that no longer exists.",
    primary: "learn",
    doors: {
      learn:
        "One-on-one, pitched at where you actually are, not where a curriculum assumes you are.",
      evaluate: "Mix and signal-flow critique on your own material.",
    },
  },
  {
    id: "engineer",
    name: "The Working Engineer",
    icon: "console-desk",
    hook: "The technical depth is there when you want it.",
    primary: "fix",
    doors: {
      fix: "Gain structure, impedance, converters and clocking on your actual rig.",
      learn:
        "Why a ribbon needs 70 dB of clean gain — as far down that path as you want.",
      complete:
        "The stages outside your lane: mastering, vocal production, specialty work.",
    },
  },
  {
    id: "studio-owner",
    name: "The Studio Owner",
    icon: "patchbay",
    hook: "The room, the racks, and the fault you cannot isolate.",
    primary: "fix",
    doors: {
      fix: "Measurement, treatment plan, speaker placement. A room that lies to you costs more than any preamp will fix.",
      evaluate:
        "What you already own that is being wasted, and what a piece will actually do before you spend.",
    },
  },
  {
    id: "audiophile",
    name: "The Audiophile",
    icon: "monitor-pair",
    hook: "A playback system taken as seriously as a control room.",
    primary: "evaluate",
    doors: {
      evaluate: "A playback system that never matched the record, taken seriously.",
      fix: "A listening room is a room, and rooms can be measured.",
    },
  },
  {
    id: "corporate",
    name: "Corporate Audio",
    icon: "mic-dynamic",
    hook: "Audio work isn’t just for chart-topping hits.",
    primary: "complete",
    proof: "American Idol · The Simpsons · Spotify",
    doors: {
      complete: "Podcast and content audio, edited, leveled and delivered to spec.",
      fix: "A space that has to sound right: measured, treated, and specified in writing.",
    },
  },
  {
    id: "venue",
    name: "The Venue",
    icon: "speaker-monitor",
    hook: "A live room is a room. Rooms can be measured.",
    primary: "fix",
    doors: {
      fix: "The signal path traced end to end, and the room measured rather than guessed.",
      evaluate: "Coverage, monitoring and gear decisions checked before you spend.",
    },
  },
  {
    id: "worship",
    name: "The Place of Worship",
    icon: "room-reflection",
    hook: "A venue, a broadcast, and a volunteer crew, all in one building.",
    primary: "fix",
    proof: "WoG Ministries",
    components: ["venue", "corporate", "student"],
    doors: {
      fix: "The sanctuary measured like any room — because it is one.",
      learn: "Training for the volunteer crew, pitched at where they are.",
    },
  },
];

/** Door 5 reverted to Edward's settled title for this draft (de-purpling). */
const DOOR_TITLE_OVERRIDES: Record<string, string> = {
  purple: "Explain It, Adapt, Solve It",
};

/** The preset bank: one armable block per identity. */
export function fdPresetsHtml(): string {
  return FD_PRESETS.map((p) => {
    const doorIds = Object.keys(p.doors).join(" ");
    const components = p.components ? ` data-components="${p.components.join(" ")}"` : "";
    const proof = p.proof ? `<span class="fd-proof">${p.proof}</span>` : "";
    return `
    <button type="button" class="fd-preset" aria-pressed="false"
      data-preset="${p.id}" data-primary="${p.primary}" data-doors="${doorIds}"${components}>
      ${iconHtml(p.icon, "md")}
      <span class="fd-preset-body">
        <span class="fd-name">${p.name}</span>
        <span class="fd-hook">${p.hook}</span>
        ${proof}
      </span>
      <span class="fd-jack" aria-hidden="true"></span>
    </button>`;
  }).join("\n");
}

/** The five door modules: bar art at module scale, base line, tailored lines. */
export function fdDoorsHtml(): string {
  return DOORS.map((door) => {
    const title = DOOR_TITLE_OVERRIDES[door.id] ?? door.title;
    const tails = FD_PRESETS.filter((p) => p.doors[door.id])
      .map(
        (p) =>
          `<p class="fd-tail" data-for="${p.id}"><span class="fd-tail-k">${p.name}</span>${p.doors[door.id]}</p>`,
      )
      .join("\n      ");
    return `
    <a class="fd-door" href="${door.href}" data-door="${door.id}">
      <span class="fd-jack" aria-hidden="true"></span>
      <span class="fd-door-art" aria-hidden="true"><svg viewBox="0 0 720 120">${doorArt(door.id)}</svg></span>
      <span class="fd-door-body">
        <span class="fd-door-title display">${title}</span>
        <span class="fd-door-sub">${door.sub}</span>
        ${tails}
      </span>
    </a>`;
  }).join("\n");
}

/* The bar art, reused from doors.ts at module scale, static (no sequencer
   classes fire because the .db-bar wrapper is absent). Gradients repeat per
   svg exactly as doors.ts does, so a module renders alone. */
function doorArt(id: string): string {
  const door = DOORS.find((d) => d.id === id);
  if (!door) return "";
  const DEFS = `<defs>
    <radialGradient id="fdMetal-${id}" cx="38%" cy="32%" r="80%">
      <stop offset="0%" stop-color="#c9ccd4"/><stop offset="55%" stop-color="#868d9c"/><stop offset="100%" stop-color="#4c525f"/>
    </radialGradient>
    <linearGradient id="fdTan-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#b39d6e"/><stop offset="100%" stop-color="#7d6b48"/>
    </linearGradient>
    <linearGradient id="fdPanel-${id}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1b2232"/><stop offset="100%" stop-color="#10141f"/>
    </linearGradient>
  </defs>`;
  const art = door.art
    .replaceAll("url(#dbMetal)", `url(#fdMetal-${id})`)
    .replaceAll("url(#dbTan)", `url(#fdTan-${id})`)
    .replaceAll("url(#dbPanel)", `url(#fdPanel-${id})`);
  return DEFS + art;
}
