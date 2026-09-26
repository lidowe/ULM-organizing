import type { MarkName } from "./DoorMark";

/**
 * The five doors. Names, lines, bodies and symptoms are Lovable's wording.
 * `usually` (what the problem tends to turn out to be) and `price` are the
 * trial iteration's additions, so the home page answers the money question
 * without a second click. Rates mirror the Services page and share its
 * confirm-before-publishing status.
 */
export type Door = {
  id: string;
  n: string;
  mark: MarkName;
  name: string;
  who: string;
  line: string;
  body: string;
  usually: string;
  symptoms: string[];
  price: string;
  link: { to: string; hash?: string; label: string };
};

export const DOORS: Door[] = [
  {
    id: "finish",
    n: "01",
    mark: "finish",
    name: "I can’t finish my record",
    who: "Artist / band",
    line: "I've gotten far, but I'm struggling to finalize the sound like I hear it in my mind. I need a professional touch to get my project perfect.",
    body: "The songs exist. The takes exist. What's missing is the last stretch — the part where decisions stop being creative and start being editorial. We come in at whatever point you've reached and carry it the rest of the way.",
    usually:
      "Too many open decisions. Which take, what to cut, what the song still needs. Finishing is choosing and committing more than it is processing.",
    symptoms: [
      "It's been sitting unfinished for months",
      "It sounds smaller than the records I love",
      "I can't tell which take is the right one",
      "I don't know what it still needs",
    ],
    price: "Mixing $400–$900 / song · Mastering $100–$175 / song",
    link: { to: "/services", hash: "finish", label: "Services and rates" },
  },
  {
    id: "part",
    n: "02",
    mark: "part",
    name: "My part won’t land",
    who: "Writer / vocalist",
    line: "The arrangement and lyrics aren't connecting with the performance and emotional delivery. It feels right during the recording but sounds wrong hearing it back.",
    body: "Nothing is out of tune and nothing moves. That gap is a performance problem, not a plugin problem, and it gets solved in the room, with someone listening to what the song is actually asking for.",
    usually:
      "The arrangement and the performance competing for the same space, or a take chosen for accuracy over delivery.",
    symptoms: [
      "The vocal is accurate and flat",
      "The lyric doesn't sit on the melody",
      "The arrangement fights the singer",
      "It felt right until I played it back",
    ],
    price: "Vocal production $150–$400 / song · Tracking $65–$100 / hr",
    link: { to: "/services", hash: "part", label: "Services and rates" },
  },
  {
    id: "technical",
    n: "03",
    mark: "technical",
    name: "I can’t get it technically right",
    who: "Engineer",
    line: "I'm setting things like I've been taught, but maybe I'm missing something or using the wrong tool. More processing sounds worse, and less does too… why?",
    body: "You know the moves. The moves aren't working. Usually that means the problem is upstream of where you're reaching, and the fix is a decision, not another processor.",
    usually:
      "Something upstream, gain structure, monitoring or the room, being corrected downstream with processing.",
    symptoms: [
      "The mix won't glue",
      "Mic placement is guesswork",
      "Everything I add makes it worse",
      "The low end never translates",
    ],
    price: "Diagnosis and planning $100–$150 / hr, worked on your session",
    link: { to: "/services", hash: "technical", label: "Services and rates" },
  },
  {
    id: "chase",
    n: "04",
    mark: "chase",
    name: "I’m chasing a problem",
    who: "Anyone with a room or a rig",
    line: "Something in the chain is wrong — there's noise, pops, or everything is blurred and messy. Did I set something up wrong?",
    body: "Faults hide in the boring places: a ground, a gain stage, a clock, a wall. We trace the chain from one end to the other until the noise has a name.",
    usually:
      "One fault with several symptoms. Found by elimination, each test ruling half the chain out, not by buying the next box.",
    symptoms: [
      "There's a noise I can't find",
      "Clicks, pops and dropouts",
      "The room lies to me",
      "Levels are wrong somewhere in the chain",
    ],
    price: "Systems, rooms and power $100–$150 / hr · Builds quoted",
    link: { to: "/services", hash: "chase", label: "Services and rates" },
  },
  {
    id: "learn",
    n: "05",
    mark: "learn",
    name: "I want to learn how it works",
    who: "Student / self-taught",
    line: "I want a deeper wisdom, not just which thing to buy. What is really happening under the hood — I want the theory, not 5% off something I don't understand.",
    body: "Guided, personal teaching against your own sessions and your own gear. Not a course to sit through: the why underneath the moves, at whatever depth you want to go.",
    usually:
      "The recipes are fine. The why underneath them is missing, and that is the part that used to be handed down in the room.",
    symptoms: [
      "I follow recipes without knowing why",
      "I want to understand signal flow properly",
      "I need someone to review my sessions",
      "I learn faster with a person than a video",
    ],
    price: "One-on-one lessons $75–$150 / hr",
    link: { to: "/learn", label: "How the teaching runs" },
  },
];

export const DOORS_REASSURANCE =
  "Every project arrives at a different point, with a different budget and a different tangle to sort out. There is no template here and no judgement about scope — we listen to the artist first, then build the solution around what you're actually making. We listen to the artist so the song can be heard.";
