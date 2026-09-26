import type { MarkName } from "./DoorMark";

export type Door = {
  id: string;
  n: string;
  mark: MarkName;
  name: string;
  who: string;
  line: string;
  body: string;
  symptoms: string[];
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
    symptoms: [
      "It's been sitting unfinished for months",
      "It sounds smaller than the records I love",
      "I can't tell which take is the right one",
      "I don't know what it still needs",
    ],
    link: { to: "/services", hash: "finish", label: "How finishing works" },
  },
  {
    id: "part",
    n: "02",
    mark: "part",
    name: "My part won’t land",
    who: "Writer / vocalist",
    line: "The arrangement and lyrics aren't connecting with the performance and emotional delivery. It feels right during the recording but sounds wrong hearing it back.",
    body: "Nothing is out of tune and nothing moves. That gap is a performance problem, not a plugin problem, and it gets solved in the room, with someone listening to what the song is actually asking for.",
    symptoms: [
      "The vocal is accurate and flat",
      "The lyric doesn't sit on the melody",
      "The arrangement fights the singer",
      "It felt right until I played it back",
    ],
    link: { to: "/services", hash: "part", label: "How this gets solved" },
  },
  {
    id: "technical",
    n: "03",
    mark: "technical",
    name: "I can’t get it technically right",
    who: "Engineer",
    line: "I'm setting things like I've been taught, but maybe I'm missing something or using the wrong tool. More processing sounds worse, and less does too… why?",
    body: "You know the moves. The moves aren't working. Usually that means the problem is upstream of where you're reaching, and the fix is a decision, not another processor.",
    symptoms: [
      "The mix won't glue",
      "Mic placement is guesswork",
      "Everything I add makes it worse",
      "The low end never translates",
    ],
    link: { to: "/services", hash: "technical", label: "Working it together" },
  },
  {
    id: "chase",
    n: "04",
    mark: "chase",
    name: "I’m chasing a problem",
    who: "Anyone with a room or a rig",
    line: "Something in the chain is wrong — there's noise, pops, or everything is blurred and messy. Did I set something up wrong?",
    body: "Faults hide in the boring places: a ground, a gain stage, a clock, a wall. We trace the chain from one end to the other until the noise has a name.",
    symptoms: [
      "There's a noise I can't find",
      "Clicks, pops and dropouts",
      "The room lies to me",
      "Levels are wrong somewhere in the chain",
    ],
    link: { to: "/services", hash: "chase", label: "How the fault gets traced" },
  },
  {
    id: "learn",
    n: "05",
    mark: "learn",
    name: "I want to learn how it works",
    who: "Student / self-taught",
    line: "I want a deeper wisdom, not just which thing to buy. What is really happening under the hood — I want the theory, not 5% off something I don't understand.",
    body: "Guided, personal teaching against your own sessions and your own gear. Not a course to sit through: the why underneath the moves, at whatever depth you want to go.",
    symptoms: [
      "I follow recipes without knowing why",
      "I want to understand signal flow properly",
      "I need someone to review my sessions",
      "I learn faster with a person than a video",
    ],
    link: { to: "/learn", label: "See teaching" },
  },
];

export const DOORS_REASSURANCE =
  "Every project arrives at a different point, with a different budget and a different tangle to sort out. There is no template here and no judgement about scope — we listen to the artist first, then build the solution around what you're actually making. We listen to the artist so the song can be heard.";
