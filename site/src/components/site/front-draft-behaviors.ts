// FRONT DRAFT behaviors (/front-draft only; no-op everywhere else).
//
// v2 — the guided walkthrough. The v1 cable swarm assumed patchbay literacy
// (the site's own thesis-sin) and ran simultaneous motion against the icon
// grammar's solo law. Now the connection is narrated in language first,
// sequence second, lines a distant third:
//
//   arm an identity -> its KEYPHRASE appears on the stage -> the doors
//   RE-SORT into that identity's order (FLIP, so nothing teleports) and
//   light ONE AT A TIME, each taking a rank number and revealing its
//   tailored line as it lights. At most one tracer line exists at any
//   moment — a pointer following the narration, fading to a faint thread
//   as the next beat starts. The rest state is a readable ranked list.
//
// Degradation is the design: no JS = full static page (hooks visible, all
// doors in default order); reduced motion or a click mid-sequence = jump
// straight to the rest state; under 900px the CSS hides the line layer and
// the sequenced lighting carries the response alone.

const BEAT_MS = 380;

export function initFrontDraft(cleanups: Array<() => void>): void {
  const root = document.querySelector<HTMLElement>("[data-fd]");
  if (!root) return;
  root.classList.add("fd-js");

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const presets = [...root.querySelectorAll<HTMLButtonElement>(".fd-preset")];
  const doors = [...root.querySelectorAll<HTMLElement>(".fd-door")];
  const grid = root.querySelector<HTMLElement>("[data-fd-grid]");
  const stage = root.querySelector<HTMLElement>("[data-fd-stage]");
  const lines = root.querySelector<SVGSVGElement>("[data-fd-cables]");

  const byId = new Map(presets.map((p) => [p.dataset.preset!, p]));
  const doorEl = new Map(doors.map((d) => [d.dataset.door!, d]));
  const defaultOrder = doors.map((d) => d.dataset.door!);

  /** Arming order matters: the last-armed identity narrates. */
  const armed: string[] = [];
  let timers: ReturnType<typeof setTimeout>[] = [];

  const clearTimers = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  /** Armed presets plus components of armed composites (insertion-ordered). */
  function effective(): Map<string, "full" | "partial"> {
    const out = new Map<string, "full" | "partial">();
    armed.forEach((id) => out.set(id, "full"));
    armed.forEach((id) => {
      byId.get(id)?.dataset.components?.split(" ").forEach((c) => {
        if (!out.has(c)) out.set(c, "partial");
      });
    });
    return out;
  }

  /** Ranked doors: primaries of armed identities first (in arming order),
   *  then every other relevant door in first-mention order. */
  function rankedDoors(eff: Map<string, "full" | "partial">): string[] {
    const ranked: string[] = [];
    armed.forEach((id) => {
      const primary = byId.get(id)?.dataset.primary;
      if (primary && !ranked.includes(primary)) ranked.push(primary);
    });
    eff.forEach((_state, id) => {
      byId.get(id)?.dataset.doors?.split(" ").forEach((d) => {
        if (!ranked.includes(d)) ranked.push(d);
      });
    });
    return ranked;
  }

  /** Reorder the rack via CSS order, animated FLIP so nothing teleports. */
  function sortRack(order: string[]): void {
    const first = reduced ? null : new Map(doors.map((d) => [d, d.getBoundingClientRect().top]));
    doors.forEach((d) => {
      d.style.order = String(order.indexOf(d.dataset.door!));
    });
    if (!first) return;
    doors.forEach((d) => {
      const delta = first.get(d)! - d.getBoundingClientRect().top;
      if (Math.abs(delta) < 2) return;
      d.style.transition = "none";
      d.style.transform = `translateY(${delta}px)`;
      requestAnimationFrame(() => {
        d.style.transition = "transform .45s cubic-bezier(.22,.61,.36,1)";
        d.style.transform = "";
      });
    });
  }

  function clearLines(): void {
    lines?.replaceChildren();
  }

  /** One tracer at a time: draw to the door being introduced; the previous
   *  tracer settles into a faint thread. */
  function drawTracer(fromPreset: HTMLElement, toDoor: HTMLElement, hot: boolean): void {
    if (!lines || !grid || reduced) return;
    const box = grid.getBoundingClientRect();
    if (box.width < 1) return;
    const jack = (el: HTMLElement) => {
      const j = el.querySelector<HTMLElement>(".fd-jack");
      if (!j) return null;
      const b = j.getBoundingClientRect();
      if (b.width === 0 && b.height === 0) return null; // hidden = mobile
      return { x: b.left + b.width / 2 - box.left, y: b.top + b.height / 2 - box.top };
    };
    const from = jack(fromPreset);
    const to = jack(toDoor);
    if (!from || !to) return;
    lines.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    lines.querySelectorAll(".fd-tracer").forEach((p) => (p.setAttribute("class", "fd-thread")));
    const sag = Math.min(48, Math.abs(to.x - from.x) * 0.14);
    const midY = Math.max(from.y, to.y) + sag;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M${from.x},${from.y} C${from.x + (to.x - from.x) * 0.25},${midY} ${from.x + (to.x - from.x) * 0.75},${midY} ${to.x},${to.y}`,
    );
    path.setAttribute("pathLength", "1");
    path.setAttribute("class", `fd-tracer${hot ? " fd-tracer-hot" : ""}`);
    path.style.strokeDasharray = "1";
    path.style.strokeDashoffset = "1";
    lines.appendChild(path);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        path.style.transition = `stroke-dashoffset ${BEAT_MS * 0.8}ms cubic-bezier(.22,.61,.36,1)`;
        path.style.strokeDashoffset = "0";
      }),
    );
  }

  /** The complete state for the current armed set — also the final frame
   *  every sequence resolves to and the instant state under reduced motion. */
  function restState(): void {
    const eff = effective();
    const ranked = rankedDoors(eff);
    const order = [...ranked, ...defaultOrder.filter((d) => !ranked.includes(d))];

    presets.forEach((p) => {
      const id = p.dataset.preset!;
      const state = eff.get(id);
      p.setAttribute("aria-pressed", armed.includes(id) ? "true" : "false");
      p.classList.toggle("armed", state === "full");
      p.classList.toggle("fd-partial", state === "partial");
    });

    const last = armed[armed.length - 1];
    if (stage) {
      stage.textContent = last ? (byId.get(last)?.dataset.keyphrase ?? "") : "";
      stage.classList.toggle("on", !!last);
    }

    sortRack(armed.length ? order : defaultOrder);

    const hotDoors = new Set(armed.map((id) => byId.get(id)?.dataset.primary));
    doors.forEach((d) => {
      const id = d.dataset.door!;
      const idx = ranked.indexOf(id);
      d.classList.remove("fd-beat");
      d.classList.toggle("fd-lit", idx >= 0);
      d.classList.toggle("fd-hot", hotDoors.has(id));
      d.classList.toggle("fd-dim", eff.size > 0 && idx < 0);
      const rank = d.querySelector<HTMLElement>(".fd-rank");
      if (rank) {
        rank.textContent = idx >= 0 ? String(idx + 1) : "";
        rank.hidden = idx < 0;
      }
      d.querySelectorAll<HTMLElement>(".fd-tail").forEach((t) => {
        t.classList.toggle("on", eff.has(t.dataset.for ?? ""));
      });
    });

    clearLines();
  }

  /** Arm with narration: keyphrase immediately, then the new identity's
   *  doors light one at a time. Everything else snaps to rest first so the
   *  beats are the only motion (one story at a time). */
  function playSequence(newId: string): void {
    const preset = byId.get(newId);
    if (!preset || reduced) {
      restState();
      return;
    }
    const newDoors = preset.dataset.doors?.split(" ") ?? [];
    const primary = preset.dataset.primary;

    restState();
    // Pull the new identity's contribution back out, to hand it to the beats.
    newDoors.forEach((doorId) => {
      const d = doorEl.get(doorId);
      if (!d) return;
      const tail = d.querySelector<HTMLElement>(`.fd-tail[data-for="${newId}"]`);
      tail?.classList.remove("on");
      const otherReasons = armed
        .filter((a) => a !== newId)
        .some((a) => byId.get(a)?.dataset.doors?.split(" ").includes(doorId));
      if (!otherReasons) d.classList.remove("fd-lit", "fd-hot");
    });

    newDoors.forEach((doorId, i) => {
      timers.push(
        setTimeout(() => {
          const d = doorEl.get(doorId);
          if (!d) return;
          d.classList.add("fd-lit", "fd-beat");
          if (doorId === primary) d.classList.add("fd-hot");
          d.querySelector<HTMLElement>(`.fd-tail[data-for="${newId}"]`)?.classList.add("on");
          drawTracer(preset, d, doorId === primary);
        }, 420 + i * BEAT_MS),
      );
    });
    // Settle: the final frame is exactly the rest state.
    timers.push(setTimeout(restState, 420 + newDoors.length * BEAT_MS + 600));
  }

  presets.forEach((p) => {
    const onClick = () => {
      const id = p.dataset.preset!;
      const mid = timers.length > 0;
      clearTimers();
      const i = armed.indexOf(id);
      if (i >= 0) {
        armed.splice(i, 1);
        restState();
      } else {
        armed.push(id);
        if (mid) restState();
        else playSequence(id);
      }
    };
    p.addEventListener("click", onClick);
    cleanups.push(() => p.removeEventListener("click", onClick));
  });

  const onResize = () => clearLines();
  window.addEventListener("resize", onResize);
  cleanups.push(() => window.removeEventListener("resize", onResize));
  cleanups.push(clearTimers);

  // ---- Draft controls: type variant A/B/C, bank side L/R ----------------
  const bindToggle = (attr: "font" | "side", selector: string) => {
    const buttons = [...root.querySelectorAll<HTMLButtonElement>(selector)];
    buttons.forEach((btn) => {
      const onClick = () => {
        root.dataset[attr] = btn.dataset[attr === "font" ? "fdFont" : "fdSide"];
        buttons.forEach((b) => b.classList.toggle("on", b === btn));
        clearTimers();
        restState();
      };
      btn.addEventListener("click", onClick);
      cleanups.push(() => btn.removeEventListener("click", onClick));
    });
  };
  bindToggle("font", "[data-fd-font]");
  bindToggle("side", "[data-fd-side]");
}
