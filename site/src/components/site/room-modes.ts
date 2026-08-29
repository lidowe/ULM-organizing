// The Room Mode Explorer (/app). No-op on pages without [data-room-modes].
//
// Axial modes of a rectangular room: f = n·c/(2·d) per dimension, c = 343
// m/s at ~20°C. Textbook arithmetic, hand-verified (5 m → 34.3, 68.6,
// 102.9 Hz…; 2.7 m → 63.5, 127.0 Hz…). The tool DESCRIBES what the
// geometry does and stops there — no verdicts, no treatment advice; the
// page copy carries the limits (axial only; furnished, occupied rooms are
// measured, not computed).

const C = 343; // m/s
const F_MAX = 300; // Hz — where the modal argument matters most
const FT = 0.3048;

type Mode = { axis: "L" | "W" | "H"; n: number; f: number };

function axialModes(dims: { L: number; W: number; H: number }): Mode[] {
  const out: Mode[] = [];
  (["L", "W", "H"] as const).forEach((axis) => {
    const d = dims[axis];
    if (!(d > 0.3)) return;
    for (let n = 1; ; n++) {
      const f = (n * C) / (2 * d);
      if (f > F_MAX) break;
      out.push({ axis, n, f });
    }
  });
  return out.sort((a, b) => a.f - b.f);
}

const AXIS_LABEL = { L: "Length", W: "Width", H: "Height" } as const;

export function initRoomModes(cleanups: Array<() => void>): void {
  const host = document.querySelector<HTMLElement>("[data-room-modes]");
  if (!host) return;

  host.innerHTML = `
    <div class="tool-io rm-io">
      <div class="tool-field"><span class="tool-label">Length</span>
        <input class="rm-in" data-rm="L" type="number" min="1" step="0.1" inputmode="decimal" value="5"></div>
      <div class="tool-field"><span class="tool-label">Width</span>
        <input class="rm-in" data-rm="W" type="number" min="1" step="0.1" inputmode="decimal" value="4"></div>
      <div class="tool-field"><span class="tool-label">Height</span>
        <input class="rm-in" data-rm="H" type="number" min="1" step="0.1" inputmode="decimal" value="2.7"></div>
      <div class="tool-field"><span class="tool-label">Units</span>
        <select class="rm-unit"><option value="m" selected>meters</option><option value="ft">feet</option></select></div>
    </div>
    <div class="tool-readout">
      <div class="rm-lanes" aria-hidden="true"></div>
      <div class="tr-row"><span class="tr-key">Read it</span>
        <p class="tr-text">Each mark is a frequency this dimension reinforces standing waves at. Clusters mean the room argues loudly there; wide empty stretches mean it goes quiet. Below is the same list in order.</p></div>
      <div class="rm-table"></div>
    </div>
    <div class="tool-foot"><p>The numbers are physics and they are dependable. What your furnished, occupied room does with them is measured, not computed &mdash; and which of it matters to the music doesn&rsquo;t compute at all. That part is a session.</p></div>
  `;

  const inputs = [...host.querySelectorAll<HTMLInputElement>(".rm-in")];
  const unitSel = host.querySelector<HTMLSelectElement>(".rm-unit")!;
  const lanes = host.querySelector<HTMLElement>(".rm-lanes")!;
  const table = host.querySelector<HTMLElement>(".rm-table")!;

  const F_MIN = 20;
  const x = (f: number) =>
    // log scale 20–300 Hz across a 720-unit stage, margins at 30/690
    30 + (660 * (Math.log10(f) - Math.log10(F_MIN))) / (Math.log10(F_MAX) - Math.log10(F_MIN));

  function render(): void {
    const toM = unitSel.value === "ft" ? FT : 1;
    const dims = { L: 0, W: 0, H: 0 };
    inputs.forEach((el) => {
      dims[el.dataset.rm as "L" | "W" | "H"] = parseFloat(el.value) * toM;
    });
    const modes = axialModes(dims);

    const gridTicks = [20, 30, 50, 80, 120, 200, 300]
      .map(
        (f) =>
          `<line class="rm-grid" x1="${x(f)}" y1="14" x2="${x(f)}" y2="96"/>` +
          `<text class="gd-label" x="${x(f)}" y="110" text-anchor="middle">${f}</text>`,
      )
      .join("");
    const laneY = { L: 28, W: 54, H: 80 };
    const laneRows = (["L", "W", "H"] as const)
      .map(
        (axis) =>
          `<text class="gd-label" x="4" y="${laneY[axis] + 4}">${axis}</text>` +
          modes
            .filter((m) => m.axis === axis)
            .map(
              (m) =>
                `<line class="rm-mark${m.n === 1 ? " rm-first" : ""}" x1="${x(m.f)}" y1="${laneY[axis] - 9}" x2="${x(m.f)}" y2="${laneY[axis] + 9}"/>`,
            )
            .join(""),
      )
      .join("");
    lanes.innerHTML = `<svg viewBox="0 0 720 118" role="img" aria-label="Axial mode frequencies of the entered room, 20 to 300 hertz, one lane per dimension">${gridTicks}${laneRows}</svg>`;

    table.innerHTML = modes.length
      ? modes
          .map(
            (m) =>
              `<div class="tr-row"><span class="tr-num">${m.f.toFixed(1)} Hz</span><p class="tr-text">${AXIS_LABEL[m.axis]}, order ${m.n}${m.n === 1 ? " — the fundamental" : ""}</p></div>`,
          )
          .join("")
      : `<div class="tr-row"><span class="tr-key">&mdash;</span><p class="tr-text">Enter the room&rsquo;s dimensions above.</p></div>`;
  }

  const onInput = () => render();
  inputs.forEach((el) => {
    el.addEventListener("input", onInput);
    cleanups.push(() => el.removeEventListener("input", onInput));
  });
  unitSel.addEventListener("change", onInput);
  cleanups.push(() => unitSel.removeEventListener("change", onInput));
  render();
}
