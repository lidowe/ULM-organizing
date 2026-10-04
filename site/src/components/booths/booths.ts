/**
 * Booths: the ten situations a visitor can recognise themselves in, each with
 * a hand-drawn sketch that works as that area's identifier. The same sketch
 * appears wherever the area is discussed on other pages (<BoothTag id="…" />).
 *
 * Copy comes from Edward's own sentences (the five problem titles, the Gap's
 * "Beyond music" examples) and the earlier front-draft audience notes. Nothing
 * here quotes a price; the detail panel is for confirming "this is me".
 */

export type BoothGroupId = "record" | "rooms" | "content";

export const BOOTH_IDS = [
  "finish",
  "part",
  "technical",
  "chase",
  "room",
  "listening",
  "worship",
  "business",
  "podcast",
  "learn",
] as const;

export type BoothId = (typeof BOOTH_IDS)[number];

export type Booth = {
  id: BoothId;
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
    body: "Church, mosque, synagogue, temple, gurdwara or meeting hall: a house of worship is a venue, a broadcast studio and a classroom under one roof. We measure it like any other room, trace the signal from microphone to speaker, and train your volunteer crew.",
    symptoms: [
      "Speech is hard to understand at the back",
      "The music sounds fine but the words don’t",
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
