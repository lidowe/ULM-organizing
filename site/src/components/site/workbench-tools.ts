// The Workbench instruments. Everything runs in the browser; nothing is
// collected, nothing phones home.
//
// The impedance engine is ported from Edward's Studio Virtual app
// (src/engine/impedance.ts) with the thresholds unchanged: <1.5 danger,
// <3 warn, <5 slight warmth, >=10 transparent, and the ribbon special case
// checked against peak impedance at resonance rather than nominal. The gear
// numbers are the app's data files, which are themselves distillations of
// the Wiring Bible appendices A and B. Change a number only against those
// sources.
//
// The hum tree is adapted from the Bible's Section 13 (Noise
// Troubleshooting Guide), rephrased for a stranger's room instead of this
// studio's racks. DRAFT: the diagnoses are Edward's, the phrasing is not
// yet vetted by him.

type Mic = {
  name: string;
  kind: string;
  zOut: number;
  zOutPeak?: number;
  demand: number;
};

type Pre = { name: string; zIn: number; maxGain: number; generic?: boolean };

// From microphones.ts: impedanceOut / impedanceOutPeak / gainDemand.
const MICS: Mic[] = [
  { name: "Coles 4038", kind: "ribbon", zOut: 300, zOutPeak: 1300, demand: 75 },
  { name: "Cascade Fat Head II", kind: "ribbon", zOut: 300, zOutPeak: 1200, demand: 68 },
  { name: "Shure SM57", kind: "dynamic", zOut: 150, demand: 55 },
  { name: "Shure SM58", kind: "dynamic", zOut: 150, demand: 55 },
  { name: "Shure SM7B", kind: "dynamic", zOut: 150, demand: 72 },
  { name: "EV RE20", kind: "dynamic", zOut: 150, demand: 60 },
  { name: "Sennheiser MD 441-U", kind: "dynamic", zOut: 200, demand: 55 },
  { name: "Heil PR 40", kind: "dynamic", zOut: 600, demand: 50 },
  { name: "Lewitt MTP 550 DM", kind: "dynamic", zOut: 350, demand: 55 },
  { name: "Neumann U87", kind: "FET condenser", zOut: 200, demand: 30 },
  { name: "AKG C414", kind: "FET condenser", zOut: 200, demand: 35 },
  { name: "Neumann KM184", kind: "small condenser", zOut: 50, demand: 40 },
  { name: "Wunder Audio CM7 GS", kind: "tube condenser", zOut: 200, demand: 30 },
  { name: "MXL 990", kind: "budget condenser", zOut: 200, demand: 35 },
];

// From preamps.ts: zIn / maxGain. The interface entry is the one generic:
// typical stock-interface input stage, so a visitor can test their own room.
const PRES: Pre[] = [
  { name: "Your interface's stock preamp (typ.)", zIn: 3000, maxGain: 55, generic: true },
  { name: "Thermionic Rooster 2", zIn: 1200, maxGain: 56 },
  { name: "A-Designs MP-2A", zIn: 1400, maxGain: 60 },
  { name: "Manley Dual Mono", zIn: 2400, maxGain: 60 },
  { name: "Sonic Farm Creamer+", zIn: 900, maxGain: 74 },
  { name: "Pendulum Quartet II", zIn: 1500, maxGain: 70 },
  { name: "Eclair Evil Twin", zIn: 10000, maxGain: 36 },
  { name: "Wunder PEQ2R", zIn: 1200, maxGain: 72 },
  { name: "Undertone MPEQ-1", zIn: 200, maxGain: 60 },
  { name: "A-Designs Ventura SE", zIn: 1500, maxGain: 65 },
  { name: "API 3122V", zIn: 1500, maxGain: 68 },
  { name: "Stam Audio SA-69", zIn: 300, maxGain: 70 },
  { name: "Chandler Germanium Pre", zIn: 600, maxGain: 60 },
  { name: "Tonelux MP5A", zIn: 1500, maxGain: 65 },
  { name: "NPNG DMP-2NW", zIn: 5000, maxGain: 72 },
  { name: "Pueblo Audio JR2/2", zIn: 10000, maxGain: 72 },
];

type Verdict = { severity: "ok" | "note" | "warn" | "danger"; text: string };

function bridge(mic: Mic, pre: Pre): Verdict & { nom: number; peak?: number } {
  const nom = pre.zIn / mic.zOut;
  const peak = mic.zOutPeak ? pre.zIn / mic.zOutPeak : undefined;
  const eff = peak ?? nom;
  const r = (n: number) => n.toFixed(1);
  if (peak !== undefined && peak < 2)
    return {
      nom, peak, severity: "danger",
      text: `${r(nom)}:1 on paper, ${r(peak)}:1 at the ribbon's resonance. The bass character changes — output drops and transients damp right where the ribbon lives. Usable, but only if you choose it on purpose.`,
    };
  if (eff < 1.5)
    return { nom, peak, severity: "danger", text: `${r(eff)}:1 — severe loading. Level drops and the frequency response bends. This pairing is fighting itself.` };
  if (eff < 3)
    return { nom, peak, severity: "warn", text: `${r(eff)}:1 — heavy loading. The top end rolls off and transients soften. Sometimes that is the sound you want. Know that it is happening.` };
  if (eff < 5)
    return { nom, peak, severity: "note", text: `${r(eff)}:1 — slight warmth from loading. A gentle thumb on the scale.` };
  if (eff >= 10)
    return { nom, peak, severity: "ok", text: `${r(eff)}:1 — transparent bridging. The mic sounds like the mic.` };
  return { nom, peak, severity: "ok", text: `${r(eff)}:1 — good bridging. Nothing being taken away.` };
}

function gainMargin(mic: Mic, pre: Pre): Verdict & { margin: number } {
  const margin = pre.maxGain - mic.demand;
  if (margin < 0)
    return {
      margin, severity: "danger",
      text: `This mic wants about ${mic.demand} dB on a quiet source; the preamp tops out at ${pre.maxGain} dB. It runs out of gain, and whatever makes up the difference downstream brings the noise floor up with it.`,
    };
  if (margin < 10)
    return {
      margin, severity: "warn",
      text: `About ${margin} dB in hand. It works, near the top of the knob — fine on loud sources, tight on quiet ones.`,
    };
  return {
    margin, severity: "ok",
    text: `About ${margin} dB in hand. The preamp never has to strain.`,
  };
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function initImpedanceTool(cleanups: Array<() => void>): void {
  const root = document.querySelector<HTMLElement>("[data-imp-tool]");
  if (!root) return;
  const micSel = root.querySelector<HTMLSelectElement>("[data-imp-mic]");
  const preSel = root.querySelector<HTMLSelectElement>("[data-imp-pre]");
  const out = root.querySelector<HTMLElement>("[data-imp-out]");
  if (!micSel || !preSel || !out) return;

  micSel.innerHTML = MICS.map(
    (m, i) => `<option value="${i}">${esc(m.name)} — ${esc(m.kind)}, ${m.zOut}&#8486;</option>`,
  ).join("");
  preSel.innerHTML = PRES.map(
    (p, i) => `<option value="${i}">${esc(p.name)} — ${p.zIn}&#8486; in, ${p.maxGain} dB</option>`,
  ).join("");

  const render = () => {
    const mic = MICS[Number(micSel.value)];
    const pre = PRES[Number(preSel.value)];
    if (!mic || !pre) return;
    const b = bridge(mic, pre);
    const g = gainMargin(mic, pre);
    const sev = (v: Verdict) => (v.severity === "ok" || v.severity === "note" ? "cool" : "hot");
    const word: Record<Verdict["severity"], string> = {
      ok: "clear", note: "coloring", warn: "loading", danger: "trouble",
    };
    const peakRow = b.peak !== undefined
      ? `<div class="tr-row"><span class="tr-key">at resonance</span><span class="tr-num">${b.peak.toFixed(1)}:1</span></div>`
      : "";
    out.innerHTML = `
      <div class="tr-row"><span class="tr-key">bridging</span><span class="tr-num">${b.nom.toFixed(1)}:1</span></div>
      ${peakRow}
      <div class="tr-row"><span class="tr-key ${sev(b)}">${word[b.severity]}</span><p class="tr-text">${esc(b.text)}</p></div>
      <div class="tr-row"><span class="tr-key">gain</span><span class="tr-num">${mic.demand} dB wanted / ${pre.maxGain} dB available</span></div>
      <div class="tr-row"><span class="tr-key ${g.severity === "ok" ? "cool" : "hot"}">${g.severity === "danger" ? "short" : g.severity === "warn" ? "tight" : "clear"}</span><p class="tr-text">${esc(g.text)}</p></div>`;
  };

  micSel.addEventListener("change", render);
  preSel.addEventListener("change", render);
  cleanups.push(() => {
    micSel.removeEventListener("change", render);
    preSel.removeEventListener("change", render);
  });

  // Open on the pairing that teaches the most: the ribbon into the stock
  // interface — fine on paper, marginal at resonance, short on gain.
  micSel.value = "0";
  preSel.value = "0";
  render();
}

// ---- Find The Hum ------------------------------------------------------

type HumNode =
  | { q: string; opts: Array<{ label: string; next: string }> }
  | { title: string; mech: string; fix: string; safety?: string };

const HUM: Record<string, HumNode> = {
  start: {
    q: "First: what does it actually sound like? Listen past the annoyance and describe the note.",
    opts: [
      { label: "A smooth, low, round hum. One steady note, more felt than heard.", next: "t60" },
      { label: "A harsh, edgy buzz. Angrier than a hum, with bite in it.", next: "t120" },
      { label: "Hash, whine or ticking — and it changes with what the computer is doing.", next: "tdig" },
      { label: "Crackle, dropouts, or it changes when something gets touched or moved.", next: "ttouch" },
      { label: "A box itself is buzzing. The gear, not the speakers.", next: "rmech" },
    ],
  },
  t60: {
    q: "That points at magnetic induction — a transformer's leakage field reaching a cable. The test: while listening, move and rotate the mic cable, especially where it passes power supplies, wall warts or other gear. Did the hum change as the cable moved?",
    opts: [
      { label: "Yes — it changed as the cable moved.", next: "r60" },
      { label: "No — steady no matter what I moved.", next: "tloop" },
    ],
  },
  t120: {
    q: "That points at the loop family — shield current carrying power-supply harmonics through a shared path. The test: unplug the audio cables between boxes one at a time. Audio cables — never the power, never the safety ground. Did the buzz drop when one cable came out?",
    opts: [
      { label: "Yes — one cable was carrying it.", next: "rloop" },
      { label: "No — every cable out, buzz still there.", next: "rstuck" },
    ],
  },
  tloop: {
    q: "Then the field isn't the story. Hum and buzz are family, so run the loop test anyway: unplug the audio cables between boxes one at a time — audio, not power, never the safety ground. Did the hum drop when one came out?",
    opts: [
      { label: "Yes — one cable was carrying it.", next: "rloop" },
      { label: "No — still there with everything unplugged.", next: "rstuck" },
    ],
  },
  tdig: {
    q: "That points at conducted digital noise — a switch-mode supply or the computer's own ground reaching the analog side. In a small studio the single biggest path is the USB or Thunderbolt cable itself. The test: power off wall-wart and digital boxes one at a time, and re-route the USB or Thunderbolt cable away from the audio cabling. Did the hash change?",
    opts: [
      { label: "Yes — it moved when I moved the cable or killed a box.", next: "rdig" },
      { label: "No — constant, whatever I did.", next: "rstuck" },
    ],
  },
  ttouch: {
    q: "Noise that moves when something gets touched is a contact or grounding problem. The test: swap the suspect cable for a different one on the same route. Did the noise follow the cable?",
    opts: [
      { label: "The noise went away with the old cable.", next: "rcable" },
      { label: "The noise stayed, whatever cable I used.", next: "rpin" },
    ],
  },
  r60: {
    title: "Confirmed: Magnetic Induction.",
    mech: "A transformer's leakage field is reaching the cable, and the cable is working as an antenna.",
    fix: "Distance first — the field falls off fast, so even a foot matters. Cross power and audio at 90 degrees instead of running them parallel. Keep signal and return tight together to shrink the loop area. Star-quad cable helps where the route can't move.",
  },
  rloop: {
    title: "Confirmed: A Ground Loop.",
    mech: "That cable was carrying loop current. Two boxes see ground through different paths, and the difference between those paths flows through your audio shield.",
    fix: "Break the loop without breaking safety: a transformer isolator on that line, or power both boxes from the same strip so their grounds meet in one place. If one leg can go optical — lightpipe, TOSLINK — the loop has nothing left to ride. Copper digital doesn't count: a coax or USB ground is still a ground.",
    safety: "Never lift the safety ground to fix hum. Not with an adapter, not to test, not for a minute. It works, and it can kill someone. Every other fix on this page exists so that one is never needed.",
  },
  rdig: {
    title: "Confirmed: Conducted Digital Noise.",
    mech: "A switching supply or the computer's ground domain is riding into the analog side — most often straight down the USB or Thunderbolt cable.",
    fix: "Separate the domains. Digital cables routed away from analog. Ferrite chokes on the USB or Thunderbolt line. Wall-warts on a different strip from the audio. The order matters less than the separation.",
  },
  rcable: {
    title: "Confirmed: The Cable.",
    mech: "A broken shield or an intermittent joint inside the connector. It measures fine until it doesn't.",
    fix: "Retire it. Not the drawer — the bin. A cable that failed once will fail again, and it will pick a take to do it in.",
  },
  rpin: {
    title: "Likely: The Gear's Own Grounding.",
    mech: "If the noise stays with the box no matter which cable feeds it, the box's own shield connection — the classic pin 1 problem — or the way your rig's grounds meet is the suspect.",
    fix: "Stop here rather than guessing; this branch is a genuine rabbit hole, and the fixes involve a soldering iron. This is exactly the noise to record and send me.",
  },
  rmech: {
    title: "The Box Itself Is Buzzing.",
    mech: "A transformer core saturating asymmetrically — usually DC riding on the mains. Often worse when a neighbour's air conditioning or a fridge kicks in.",
    fix: "Confirm it first: does the buzz track appliances switching on? If so, a DC-blocking conditioner upstream of the buzzing unit is the fix. The box is the victim here, not the culprit.",
  },
  rstuck: {
    title: "The Tree Ends Here — On Purpose.",
    mech: "Past this point the answer depends on your actual room: what shares a supply, what shares a zone, how the grounds meet. Guessing further would be the sponsored-advice move.",
    fix: "Send me a ten-second phone recording of the noise and one photo of the back of the rig. That is a normal use of this site, project or no project.",
  },
};

function initHumTree(cleanups: Array<() => void>): void {
  const root = document.querySelector<HTMLElement>("[data-hum-tree]");
  if (!root) return;
  let path: string[] = [];

  const render = (id: string) => {
    const node = HUM[id];
    if (!node) return;
    const crumb = path.length
      ? `<div class="hum-crumb">${path.map((_, i) => `step ${i + 1}`).join(" &middot; ")} &middot; ${"q" in node ? `step ${path.length + 1}` : "result"}</div>`
      : "";
    if ("q" in node) {
      root.innerHTML = `${crumb}
        <p class="hum-q">${esc(node.q)}</p>
        <div class="hum-opts">${node.opts
          .map(
            (o, i) =>
              `<button type="button" class="hum-opt" data-next="${o.next}"><span class="no">${String.fromCharCode(65 + i)}</span><span class="hum-opt-text">${esc(o.label)}</span></button>`,
          )
          .join("")}</div>
        ${path.length ? `<button type="button" class="hum-reset" data-hum-reset>&larr; Start over</button>` : ""}`;
    } else {
      root.innerHTML = `${crumb}
        <h3 class="hum-title">${esc(node.title)}</h3>
        <div class="hum-block"><span class="tr-key">mechanism</span><p class="tr-text">${esc(node.mech)}</p></div>
        <div class="hum-block"><span class="tr-key hot">the fix</span><p class="tr-text">${esc(node.fix)}</p></div>
        ${node.safety ? `<div class="hum-block hum-safety"><span class="tr-key hot">safety</span><p class="tr-text">${esc(node.safety)}</p></div>` : ""}
        <button type="button" class="hum-reset" data-hum-reset>&larr; Start over</button>`;
    }
  };

  const onClick = (e: Event) => {
    const t = e.target as HTMLElement;
    const opt = t.closest<HTMLElement>("[data-next]");
    if (opt) {
      path.push(opt.dataset.next!);
      render(opt.dataset.next!);
      return;
    }
    if (t.closest("[data-hum-reset]")) {
      path = [];
      render("start");
    }
  };
  root.addEventListener("click", onClick);
  cleanups.push(() => root.removeEventListener("click", onClick));
  render("start");
}

export function initWorkbenchTools(cleanups: Array<() => void>): void {
  initImpedanceTool(cleanups);
  initHumTree(cleanups);
}
