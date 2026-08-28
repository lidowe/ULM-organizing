// FRONT DRAFT behaviors (/front-draft only; no-op everywhere else).
//
// The patchbay: identity presets arm and disarm like console channels.
// Arming a preset re-describes the five door modules (its tailored lines
// appear, its primary door heats up) and draws patch cables from the
// preset's jack to the doors it feeds — multiple armed presets show their
// cables CONVERGING on the same five modules, which is the section's whole
// argument made visible. A composite preset (data-components) also
// half-arms its component identities.
//
// Degradation is the design: with no JS, every door shows its base line and
// every preset shows its hook — the page routes fine as a static document.
// Cables are drawn with plain SVG paths positioned from live geometry, so
// they survive both bank sides and any viewport; under 900px the CSS hides
// the cable layer entirely and emphasis alone carries the response.

export function initFrontDraft(cleanups: Array<() => void>): void {
  const root = document.querySelector<HTMLElement>("[data-fd]");
  if (!root) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const presets = [...root.querySelectorAll<HTMLButtonElement>(".fd-preset")];
  const doors = [...root.querySelectorAll<HTMLElement>(".fd-door")];
  const grid = root.querySelector<HTMLElement>("[data-fd-grid]");
  const cables = root.querySelector<SVGSVGElement>("[data-fd-cables]");
  const armed = new Set<string>();

  const byId = new Map(presets.map((p) => [p.dataset.preset!, p]));

  /** Armed presets plus the components of any armed composite. */
  function effective(): Map<string, "full" | "partial"> {
    const out = new Map<string, "full" | "partial">();
    armed.forEach((id) => out.set(id, "full"));
    armed.forEach((id) => {
      const comp = byId.get(id)?.dataset.components;
      comp?.split(" ").forEach((c) => {
        if (!out.has(c)) out.set(c, "partial");
      });
    });
    return out;
  }

  function apply(): void {
    const eff = effective();

    presets.forEach((p) => {
      const id = p.dataset.preset!;
      const state = eff.get(id);
      p.setAttribute("aria-pressed", armed.has(id) ? "true" : "false");
      p.classList.toggle("armed", state === "full");
      p.classList.toggle("fd-partial", state === "partial");
    });

    const hotDoors = new Set(
      [...armed].map((id) => byId.get(id)?.dataset.primary).filter(Boolean),
    );
    const litDoors = new Set<string>();
    eff.forEach((_state, id) => {
      byId.get(id)?.dataset.doors?.split(" ").forEach((d) => litDoors.add(d));
    });

    doors.forEach((door) => {
      const id = door.dataset.door!;
      door.classList.toggle("fd-hot", hotDoors.has(id));
      door.classList.toggle("fd-lit", eff.size > 0 && litDoors.has(id));
      door.classList.toggle("fd-dim", eff.size > 0 && !litDoors.has(id));
      door.querySelectorAll<HTMLElement>(".fd-tail").forEach((tail) => {
        tail.classList.toggle("on", eff.has(tail.dataset.for ?? ""));
      });
    });

    drawCables(eff);
  }

  function jackPoint(el: HTMLElement, gridBox: DOMRect): { x: number; y: number } | null {
    const jack = el.querySelector<HTMLElement>(".fd-jack");
    if (!jack) return null;
    const b = jack.getBoundingClientRect();
    if (b.width === 0 && b.height === 0) return null; // hidden (mobile)
    return { x: b.left + b.width / 2 - gridBox.left, y: b.top + b.height / 2 - gridBox.top };
  }

  function drawCables(eff: Map<string, "full" | "partial">): void {
    if (!cables || !grid) return;
    const gridBox = grid.getBoundingClientRect();
    if (gridBox.width < 1) return;
    cables.setAttribute("viewBox", `0 0 ${gridBox.width} ${gridBox.height}`);
    cables.replaceChildren();

    const doorEl = new Map(doors.map((d) => [d.dataset.door!, d]));
    eff.forEach((state, id) => {
      const preset = byId.get(id);
      if (!preset) return;
      const from = jackPoint(preset, gridBox);
      if (!from) return;
      const primary = preset.dataset.primary;
      preset.dataset.doors?.split(" ").forEach((doorId) => {
        const target = doorEl.get(doorId);
        if (!target) return;
        const to = jackPoint(target, gridBox);
        if (!to) return;
        const sag = Math.min(56, Math.abs(to.x - from.x) * 0.16);
        const midY = Math.max(from.y, to.y) + sag;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute(
          "d",
          `M${from.x},${from.y} C${from.x + (to.x - from.x) * 0.25},${midY} ${from.x + (to.x - from.x) * 0.75},${midY} ${to.x},${to.y}`,
        );
        path.setAttribute("pathLength", "1");
        let cls = "fd-cable";
        if (state === "full" && doorId === primary) cls += " fd-cable-hot";
        if (state === "partial") cls += " fd-cable-faint";
        path.setAttribute("class", cls);
        cables.appendChild(path);
        if (!reduced) {
          // Draw-in: narration, not decoration; the final frame is the
          // patched state either way.
          path.style.strokeDasharray = "1";
          path.style.strokeDashoffset = "1";
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              path.style.transition = "stroke-dashoffset .55s cubic-bezier(.22,.61,.36,1)";
              path.style.strokeDashoffset = "0";
            }),
          );
        }
      });
    });
  }

  presets.forEach((p) => {
    const onClick = () => {
      const id = p.dataset.preset!;
      if (armed.has(id)) armed.delete(id);
      else armed.add(id);
      apply();
    };
    p.addEventListener("click", onClick);
    cleanups.push(() => p.removeEventListener("click", onClick));
  });

  const onResize = () => drawCables(effective());
  window.addEventListener("resize", onResize);
  cleanups.push(() => window.removeEventListener("resize", onResize));

  // ---- Draft controls: type variant A/B/C, bank side L/R ----------------
  const bindToggle = (attr: "font" | "side", selector: string) => {
    const buttons = [...root.querySelectorAll<HTMLButtonElement>(selector)];
    buttons.forEach((btn) => {
      const onClick = () => {
        root.dataset[attr] = btn.dataset[attr === "font" ? "fdFont" : "fdSide"];
        buttons.forEach((b) => b.classList.toggle("on", b === btn));
        // Geometry moves when the bank changes sides or the face changes.
        requestAnimationFrame(() => drawCables(effective()));
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });
  };
  bindToggle("font", "[data-fd-font]");
  bindToggle("side", "[data-fd-side]");
}
