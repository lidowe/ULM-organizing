/**
 * Booths: the ten situations a visitor can recognise themselves in, each with
 * a hand-drawn sketch that works as that area's identifier. The same sketch
 * appears wherever the area is discussed on other pages ({{BOOTH:id}}).
 *
 * Copy comes from Edward's own sentences (the five problem titles, the Gap's
 * "Beyond music" examples) and the earlier front-draft audience notes. Nothing
 * here quotes a price; the detail panel is for confirming "this is me".
 */

export type BoothGroupId = "record" | "rooms" | "content";

export type Booth = {
  id: string;
  group: BoothGroupId;
  /** Short label used on tags and the contact form. */
  short: string;
  /** The title, in the visitor's voice. */
  name: string;
  line: string;
  body: string;
  symptoms: string[];
  /** How a first conversation about this situation starts. */
  start: string;
  link: { to: string; label: string };
};

export const BOOTH_GROUPS: Array<{ id: BoothGroupId; label: string }> = [
  { id: "record", label: "Making a record" },
  { id: "rooms", label: "Rooms and systems" },
  { id: "content", label: "Content and education" },
];

export const BOOTHS: Booth[] = [
  {
    id: "finish",
    group: "record",
    short: "Finishing a record",
    name: "I can’t finish my record",
    line: "I’ve gotten far, but I’m struggling to finalize the sound like I hear it in my mind.",
    body: "The songs exist. The takes exist. What’s missing is the last stretch, where decisions stop being creative and start being editorial. We come in at whatever point you’ve reached and carry it the rest of the way.",
    symptoms: [
      "It’s been sitting unfinished for months",
      "It sounds smaller than the records I love",
      "I can’t tell which take is the right one",
      "I don’t know what it still needs",
    ],
    link: { to: "/services#finish", label: "Mixing and finishing" },
    start:
      "Send what you have and tell us where it stalls. We listen first, then tell you what it needs before any price is agreed.",
  },
  {
    id: "part",
    group: "record",
    short: "Performance",
    name: "My part won’t land",
    line: "It feels right while I’m recording, then sounds wrong when I hear it back.",
    body: "Nothing is out of tune and nothing moves. That gap is a performance problem, not a plugin problem, and it gets solved in the room, with someone listening to what the song is actually asking for.",
    symptoms: [
      "The vocal is accurate and flat",
      "The lyric doesn’t sit on the melody",
      "The arrangement fights the singer",
      "It felt right until I played it back",
    ],
    link: { to: "/process#describing-sound", label: "How we find the sound you hear" },
    start:
      "Tell us how it feels in the room and how it sounds back. We listen to the take and the song before anything gets touched.",
  },
  {
    id: "technical",
    group: "record",
    short: "Technical setup",
    name: "I can’t get it technically right",
    line: "I’m setting things the way I was taught, and more processing sounds worse, and so does less.",
    body: "You know the moves, and the moves aren’t working. Usually the problem is upstream of where you’re reaching, and the fix is a decision, not another processor.",
    symptoms: [
      "The mix won’t glue",
      "Mic placement is guesswork",
      "Everything I add makes it worse",
      "The low end never translates",
    ],
    link: { to: "/services#consulting", label: "Consulting and troubleshooting" },
    start:
      "Describe your chain or session. We tell you where we would look first, before any work or price is agreed.",
  },
  {
    id: "chase",
    group: "record",
    short: "Tracking down a problem",
    name: "I’m chasing a problem",
    line: "Something in the chain is wrong: noise, pops, or everything blurred and messy.",
    body: "Faults hide in the boring places: a ground, a gain stage, a clock, a wall. We trace the chain from one end to the other until the noise has a name.",
    symptoms: [
      "There’s a noise I can’t find",
      "Clicks, pops and dropouts",
      "The room lies to me",
      "Levels are wrong somewhere in the chain",
    ],
    link: { to: "/services#consulting", label: "Consulting and troubleshooting" },
    start:
      "Tell us what you hear and when. We narrow down where in the chain it could live before any work or price is agreed.",
  },
  {
    id: "room",
    group: "rooms",
    short: "Rooms and acoustics",
    name: "My room doesn’t sound right",
    line: "I can’t trust what I hear in here, or I’m building a space and don’t know where to start.",
    body: "We measure the room, work out what it is doing to what you hear, and plan treatment and speaker placement, from a few panels to a full build.",
    symptoms: [
      "Mixes that don’t carry over to other speakers",
      "Bass that booms or disappears in places",
      "I don’t know where treatment or speakers should go",
      "I’m building or rebuilding a space",
    ],
    link: { to: "/services#acoustics", label: "Rooms and acoustics" },
    start:
      "Send photos of the room and where you sit. We review them, and measurement comes before any recommendation.",
  },
  {
    id: "listening",
    group: "rooms",
    short: "Listening systems",
    name: "My listening system doesn’t match the record",
    line: "I’ve put real money into playback gear and it still doesn’t sound like the music I know.",
    body: "A listening room is a room, and rooms can be measured. We start with the room and the signal path before anyone suggests buying something.",
    symptoms: [
      "Great gear, flat or harsh sound",
      "I can’t tell what to upgrade first",
      "The room fights the speakers",
      "I want it set up and checked properly",
    ],
    link: { to: "/services#systems", label: "Systems and setup" },
    start:
      "Tell us what you play, what it plays through and what sounds wrong. We start with the room and the signal path.",
  },
  {
    id: "worship",
    group: "rooms",
    short: "Places of worship",
    name: "Our place of worship can’t be heard",
    line: "A beautiful room with hard surfaces, a volunteer on a console with more channels than training, and a congregation straining to hear.",
    body: "A sanctuary is a venue, a broadcast studio and a classroom under one roof. We measure it like any other room, trace the signal from microphone to speaker, and train your volunteer crew.",
    symptoms: [
      "Speech is hard to understand at the back",
      "The band sounds fine but the message doesn’t",
      "Feedback, or a system nobody dares touch",
      "Our streams and recordings sound thin",
    ],
    link: { to: "/services#systems", label: "Systems and setup" },
    start:
      "Tell us about the room, the system and who runs it each week. We look at the space first, then scope the work, including crew training.",
  },
  {
    id: "business",
    group: "rooms",
    short: "Business and venues",
    name: "A room or system in my business isn’t working",
    line: "A conference room, venue or restaurant where people can’t hear, or a system someone wired and nobody understands.",
    body: "We measure and treat the space, trace the signal path end to end, and specify the fix in writing, so it comes from what is actually happening and not from a catalog.",
    symptoms: [
      "Nobody past the third row can hear the presenter",
      "Dinner conversation dies under the music",
      "Microphones, speakers and screens that don’t work together",
      "I need a system specified or checked before I spend",
    ],
    link: { to: "/services#systems", label: "Systems and setup" },
    start:
      "Tell us what the space is for and where it fails. We scope the fix in writing before any price is agreed.",
  },
  {
    id: "podcast",
    group: "content",
    short: "Podcast and content",
    name: "I’m making a podcast or content",
    line: "Good microphones, a spare bedroom, and it still doesn’t sound like the shows I admire.",
    body: "Podcast and content audio, edited, leveled and delivered to spec. We can also look at the room and setup so the next episode starts better.",
    symptoms: [
      "It sounds hollow or echoey",
      "Edits, levels and delivery specs take too long",
      "Voiceover or narration that sounds off",
      "I want a setup that records well from the start",
    ],
    link: { to: "/services#editing", label: "Editing and finishing" },
    start:
      "Send a short clip of what you record now. We listen and work out whether the fix is the room, the setup or the edit.",
  },
  {
    id: "learn",
    group: "content",
    short: "Educational services",
    name: "I want to learn how it works",
    line: "I want a deeper wisdom, not just which thing to buy. I want the theory, not 5% off something I don’t understand.",
    body: "Guided, personal teaching against your own sessions and your own gear. Not a course to sit through: the why underneath the moves, at whatever depth you want to go, in person or over video.",
    symptoms: [
      "I follow recipes without knowing why",
      "I want to understand signal flow properly",
      "I need someone to review my sessions",
      "I learn faster with a person than a video",
    ],
    link: { to: "/education", label: "How teaching works" },
    start:
      "Tell us what you are working on and what keeps going wrong. We start from your own session and gear and settle format and price together.",
  },
];

/* ---- Sketches ---------------------------------------------------------
   Drawn as loose line work (160 x 120). The wobble filter (#sk-wobble, defined
   once in SiteLayout) roughens every stroke so they read as pen sketches;
   `acc` strokes take the oxblood accent, used once per sketch at most. */

const SKETCHES: Record<string, string> = {
  finish: `
    <circle cx="68" cy="64" r="42"/>
    <circle cx="68" cy="64" r="33" opacity=".45"/>
    <circle cx="68" cy="64" r="24" opacity=".45"/>
    <circle cx="68" cy="64" r="12"/>
    <circle cx="68" cy="64" r="2.4" fill="currentColor"/>
    <path d="M40 38 A32 32 0 0 1 60 29" opacity=".7"/>
    <circle cx="128" cy="20" r="6"/>
    <path d="M128 26 L128 66 Q128 74 120 78"/>
    <path d="M112 78 l9 -5 l5 9 l-9 5z" class="acc"/>`,
  part: `
    <rect x="58" y="12" width="44" height="60" rx="22"/>
    <path d="M62 30 H98 M60 42 H100 M60 54 H100" opacity=".55"/>
    <path d="M46 46 Q46 90 80 90 Q114 90 114 46"/>
    <path d="M80 90 V108 M62 108 H98"/>
    <path d="M30 40 q-6 11 0 22 M20 32 q-11 19 0 38" class="acc"/>
    <path d="M130 40 q6 11 0 22 M140 32 q11 19 0 38" opacity=".5"/>`,
  technical: `
    <rect x="12" y="14" width="136" height="36" rx="3"/>
    <circle cx="34" cy="32" r="8"/><path d="M34 32 l4 -5"/>
    <circle cx="60" cy="32" r="8"/><path d="M60 32 l-3 -6"/>
    <circle cx="86" cy="32" r="8"/><path d="M86 32 l5 2" class="acc"/>
    <rect x="106" y="23" width="32" height="18" rx="2"/><path d="M110 37 Q122 25 134 37" opacity=".7"/>
    <rect x="12" y="58" width="136" height="36" rx="3"/>
    <path d="M30 66 V86 M54 66 V86 M78 66 V86 M102 66 V86 M126 66 V86" opacity=".45"/>
    <rect x="25" y="72" width="10" height="6" rx="1"/><rect x="49" y="78" width="10" height="6" rx="1"/>
    <rect x="73" y="70" width="10" height="6" rx="1"/><rect x="97" y="76" width="10" height="6" rx="1"/>
    <rect x="121" y="74" width="10" height="6" rx="1"/>
    <path d="M22 94 C22 112 52 114 60 104 S96 112 104 100 S128 108 134 94"/>`,
  chase: `
    <path d="M6 68 Q16 48 26 68 T46 68 T66 68"/>
    <path d="M66 68 L72 68 L78 34 L86 100 L92 68 L100 68" class="acc"/>
    <path d="M100 68 Q110 48 120 68 T140 68 T156 68"/>
    <circle cx="84" cy="66" r="26"/>
    <path d="M103 86 L132 112" stroke-width="4"/>`,
  room: `
    <path d="M80 24 V98 M80 24 L14 8 M80 24 L146 8 M80 98 L14 76 M80 98 L146 76 M14 8 V76 M146 8 V76"/>
    <path d="M24 22 L46 28 L46 70 L24 64 Z" opacity=".7"/>
    <path d="M52 30 L70 35 L70 76 L52 71 Z" opacity=".7"/>
    <rect x="104" y="54" width="24" height="34" rx="2"/>
    <circle cx="116" cy="64" r="5"/><circle cx="116" cy="77" r="8"/>
    <path d="M96 62 q-7 9 0 18 M88 55 q-13 16 0 32" class="acc"/>`,
  listening: `
    <rect x="8" y="22" width="24" height="46" rx="2"/>
    <circle cx="20" cy="34" r="4"/><circle cx="20" cy="54" r="9"/>
    <rect x="128" y="22" width="24" height="46" rx="2"/>
    <circle cx="140" cy="34" r="4"/><circle cx="140" cy="54" r="9"/>
    <path d="M62 78 Q62 60 80 60 Q98 60 98 78"/>
    <path d="M56 80 H104 V102 H56 Z"/>
    <path d="M56 84 Q50 84 50 92 Q50 100 56 100 M104 84 Q110 84 110 92 Q110 100 104 100"/>
    <path d="M20 68 L80 58 L140 68" stroke-dasharray="3 6" class="acc"/>
    <path d="M20 68 L80 98 L140 68" stroke-dasharray="3 6" opacity=".6"/>`,
  worship: `
    <path d="M48 104 V52 Q48 26 80 8 Q112 26 112 52 V104"/>
    <path d="M60 104 V56 Q60 36 80 24 Q100 36 100 56 V104" opacity=".6"/>
    <path d="M80 40 V70 M70 51 H90" class="acc"/>
    <path d="M8 106 H152 M18 96 H58 M102 96 H142 M12 101 H64 M96 101 H148" opacity=".6"/>`,
  business: `
    <rect x="40" y="12" width="84" height="46" rx="2"/>
    <path d="M52 26 H112 M52 36 H98 M52 46 H84" opacity=".55"/>
    <circle cx="20" cy="14" r="8"/><circle cx="20" cy="14" r="3"/>
    <path d="M12 26 q8 8 16 0 M7 33 q13 12 26 0" class="acc"/>
    <path d="M18 88 H142 L132 100 H28 Z"/>
    <circle cx="54" cy="68" r="6"/><circle cx="80" cy="66" r="6"/><circle cx="106" cy="68" r="6"/>
    <path d="M46 88 q8 -12 16 0 M72 88 q8 -12 16 0 M98 88 q8 -12 16 0"/>
    <path d="M44 100 V110 M116 100 V110"/>`,
  podcast: `
    <rect x="14" y="8" width="16" height="10" rx="2"/>
    <path d="M22 18 L74 28 L102 48"/>
    <rect x="98" y="32" width="28" height="48" rx="14"/>
    <path d="M102 46 H122 M102 56 H122 M102 66 H122" opacity=".5"/>
    <path d="M92 38 q-12 20 0 42" opacity=".6"/>
    <path d="M112 80 V108 M98 108 H126"/>
    <path d="M22 108 V96 Q22 74 54 74 Q86 74 86 96 V108" class="acc"/>
    <rect x="14" y="94" width="14" height="20" rx="6"/><rect x="80" y="94" width="14" height="20" rx="6"/>`,
  learn: `
    <path d="M80 30 Q54 16 16 22 V94 Q54 88 80 100 Q106 88 144 94 V22 Q106 16 80 30 Z"/>
    <path d="M80 30 V100"/>
    <path d="M26 38 Q48 34 70 40 M26 50 Q48 46 70 52 M26 62 Q48 58 70 64 M26 74 Q48 70 70 76" opacity=".5"/>
    <path d="M92 64 Q100 44 108 64 T124 64 T138 64" class="acc"/>`,
};

export function boothSketchSvg(id: string): string {
  const inner = SKETCHES[id];
  if (!inner) return "";
  return (
    `<svg class="sk" viewBox="0 0 160 120" aria-hidden="true" focusable="false">` +
    `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" filter="url(#sk-wobble)">` +
    inner +
    `</g></svg>`
  );
}

/** Small linked identifier for use inside page copy: {{BOOTH:room}}. */
export function boothTagHtml(id: string): string {
  const b = BOOTHS.find((x) => x.id === id);
  if (!b) return "";
  return (
    `<a class="booth-tag" href="/#booth-${b.id}" title="${b.name}">` +
    `<span class="booth-tag-mark">${boothSketchSvg(b.id)}</span>` +
    `<span class="booth-tag-label">${b.short}</span></a>`
  );
}
