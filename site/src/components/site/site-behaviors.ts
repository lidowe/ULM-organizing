// Shared behaviors from the original static site: header scroll shadow,
// menu dialog, IntersectionObserver reveals, work filter, project form,
// resonance canvas. Call once after each route renders; each block is a
// no-op if its target elements are absent on the current page.

export function initSiteBehaviors(): () => void {
  const cleanups: Array<() => void> = [];

  const header = document.querySelector(".site-header");
  const setHeader = () =>
    header && header.classList.toggle("scrolled", window.scrollY > 24);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });
  cleanups.push(() => window.removeEventListener("scroll", setHeader));

  const dialog = document.querySelector<HTMLDialogElement>("[data-menu-dialog]");
  const openMenu = () => {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };
  const closeMenu = () => {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };
  document.querySelectorAll("[data-open-menu]").forEach((btn) => {
    btn.addEventListener("click", openMenu);
    cleanups.push(() => btn.removeEventListener("click", openMenu));
  });
  document.querySelectorAll("[data-close-menu]").forEach((btn) => {
    btn.addEventListener("click", closeMenu);
    cleanups.push(() => btn.removeEventListener("click", closeMenu));
  });
  const onDialogClick = (e: MouseEvent) => {
    if (dialog && e.target === dialog && typeof dialog.close === "function")
      dialog.close();
  };
  if (dialog) {
    dialog.addEventListener("click", onDialogClick);
    cleanups.push(() => dialog.removeEventListener("click", onDialogClick));
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealers = [...document.querySelectorAll(".reveal")];
  let io: IntersectionObserver | null = null;
  if (!reduced && "IntersectionObserver" in window) {
    io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io?.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -5%" },
    );
    revealers.forEach((el) => io!.observe(el));
    cleanups.push(() => io?.disconnect());
  } else {
    revealers.forEach((el) => el.classList.add("in"));
  }

  const filterButtons = [
    ...document.querySelectorAll<HTMLElement>("[data-filter]"),
  ];
  const workCards = [
    ...document.querySelectorAll<HTMLElement>("[data-work-role]"),
  ];
  filterButtons.forEach((btn) => {
    const onClick = () => {
      const filter = btn.dataset.filter ?? "all";
      filterButtons.forEach((b) => b.classList.toggle("active", b === btn));
      workCards.forEach((card) => {
        const roles = (card.dataset.workRole || "").split(" ");
        card.hidden = filter !== "all" && !roles.includes(filter);
      });
    };
    btn.addEventListener("click", onClick);
    cleanups.push(() => btn.removeEventListener("click", onClick));
  });

  const form = document.querySelector<HTMLFormElement>("[data-project-form]");
  if (form) {
    const onSubmit = (e: SubmitEvent) => {
      e.preventDefault();
      const val = (id: string) => {
        const el = document.getElementById(id) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement
          | null;
        return el ? el.value.trim() : "";
      };
      const service = val("need") || "Project inquiry";
      const body = [
        "Name: " + val("name"),
        "Email: " + val("email"),
        "Artist / project: " + (val("project") || "—"),
        "Where the project is now: " + (val("stage") || "—"),
        "What I need help with: " + service,
        "Timeline: " + (val("timeline") || "—"),
        "Budget / range: " + (val("budget") || "—"),
        "Links: " + (val("links") || "—"),
        "",
        "About the record:",
        val("details"),
      ].join("\n");
      const status = document.querySelector("[data-form-status]");
      if (status) status.classList.add("show");
      window.location.href =
        "mailto:edwardlidow@upperlevelmusic.com?subject=" +
        encodeURIComponent("Upper Level Music — " + service) +
        "&body=" +
        encodeURIComponent(body);
    };
    form.addEventListener("submit", onSubmit);
    cleanups.push(() => form.removeEventListener("submit", onSubmit));
  }

  const canvas = document.querySelector<HTMLCanvasElement>("[data-resonance]");
  if (canvas) {
    const ctx = canvas.getContext("2d", { alpha: true })!;
    let w = 0,
      h = 0,
      dpr = 1,
      mouseX = 0.68,
      mouseY = 0.35,
      raf = 0;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX / Math.max(innerWidth, 1);
      mouseY = e.clientY / Math.max(innerHeight, 1);
    };
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    resize();
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const cx = w * (0.64 + (mouseX - 0.5) * 0.06);
      const cy = h * (0.35 + (mouseY - 0.5) * 0.05);
      const rings = Math.max(11, Math.min(22, Math.floor(w / 70)));
      for (let r = 0; r < rings; r++) {
        const p = r / (rings - 1);
        const base = Math.min(w, h) * (0.08 + p * 0.78);
        ctx.beginPath();
        const steps = 170;
        for (let i = 0; i <= steps; i++) {
          const a = (i / steps) * Math.PI * 2;
          const wave =
            Math.sin(a * 3 + t * 0.00022 + r * 0.47) * 7 * (1 - p) +
            Math.sin(a * 7 - t * 0.00013 + r) * 3.4;
          const ovalX = base * (1.12 + 0.05 * Math.sin(r * 0.5));
          const ovalY = base * (0.55 + 0.04 * Math.cos(r * 0.7));
          const x =
            cx + Math.cos(a) * (ovalX + wave) + Math.sin(a * 2 + t * 0.0001) * 4;
          const y = cy + Math.sin(a) * (ovalY + wave * 0.45);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const alpha = 0.055 + (1 - p) * 0.08;
        ctx.strokeStyle = `rgba(200,208,216,${alpha})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }
      const grad = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.min(w, h) * 0.16,
      );
      grad.addColorStop(0, "rgba(240,241,243,.10)");
      grad.addColorStop(0.35, "rgba(200,208,216,.05)");
      grad.addColorStop(1, "rgba(12,13,15,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw(performance.now());
    if (reduced && raf) cancelAnimationFrame(raf);
    cleanups.push(() => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    });
  }

  const deck = document.querySelector<HTMLElement>("[data-tape-deck]");
  if (deck && !reduced) {
    const reels = [...deck.querySelectorAll<HTMLElement>(".reel")];
    const counter = deck.querySelector<HTMLElement>("[data-tape-count]");
    let angle = 0,
      velocity = 0.25,
      lastY = window.scrollY,
      deckRaf = 0;
    const onScroll = () => {
      const y = window.scrollY;
      velocity += (y - lastY) * 0.06;
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const tick = () => {
      velocity = velocity * 0.94 + 0.25 * 0.06;
      angle += velocity;
      reels.forEach((reel, i) => {
        reel.style.transform = `rotate(${angle * (i === 0 ? 1 : 1.28)}deg)`;
      });
      if (counter) {
        const total = Math.max(
          document.body.scrollHeight - window.innerHeight,
          1,
        );
        const pct = Math.min(Math.max(window.scrollY / total, 0), 1);
        const secs = Math.round(pct * 214);
        counter.textContent = `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`;
      }
      deckRaf = requestAnimationFrame(tick);
    };
    tick();
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(deckRaf);
    });
  }

  return () => cleanups.forEach((fn) => fn());
}
