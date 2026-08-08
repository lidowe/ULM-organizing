// Shared behaviors: header scroll shadow, menu dialog, IntersectionObserver
// reveals, work filter, project form, click-to-reveal sections. Call once
// after each route renders; each block is a no-op if its target elements are
// absent on the current page.


export function initSiteBehaviors(): () => void {
  const cleanups: Array<() => void> = [];

  const header = document.querySelector(".site-header");
  const setHeader = () =>
    header && header.classList.toggle("scrolled", window.scrollY > 24);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });
  cleanups.push(() => window.removeEventListener("scroll", setHeader));

  const dialog = document.querySelector<HTMLDialogElement>("[data-menu-dialog]");
  const menuBtn = document.querySelector<HTMLButtonElement>("[data-open-menu]");
  const setMenuExpanded = (expanded: boolean) => {
    menuBtn?.setAttribute("aria-expanded", expanded ? "true" : "false");
  };
  const openMenu = () => {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    setMenuExpanded(true);
  };
  const closeMenu = () => {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    setMenuExpanded(false);
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
      const payload = {
        name: val("name"),
        email: val("email"),
        project: val("project"),
        stage: val("stage"),
        need: service,
        timeline: val("timeline"),
        budget: val("budget"),
        links: val("links"),
        details: val("details"),
        company: val("company"),
      };
      const body = [
        "Name: " + payload.name,
        "Email: " + payload.email,
        "Artist / project: " + (payload.project || "-"),
        "Where the project is now: " + (payload.stage || "-"),
        "What I need help with: " + service,
        "Timeline: " + (payload.timeline || "-"),
        "Budget / range: " + (payload.budget || "-"),
        "Links: " + (payload.links || "-"),
        "",
        "About the record:",
        payload.details,
      ].join("\n");

      const status = document.querySelector("[data-form-status]");
      const setStatus = (text: string) => {
        if (!status) return;
        status.textContent = text;
        status.classList.add("show");
      };
      const submitBtn = form.querySelector<HTMLButtonElement>("button[type=submit]");
      const originalLabel = submitBtn ? submitBtn.textContent : null;

      const mailtoFallback = () => {
        setStatus(
          "Opening your email app with the project details drafted. If nothing opens, email Edward directly at edwardlidow@upperlevelmusic.com.",
        );
        window.location.href =
          "mailto:edwardlidow@upperlevelmusic.com?subject=" +
          encodeURIComponent("Upper Level Music - " + service) +
          "&body=" +
          encodeURIComponent(body);
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }
      setStatus("Sending your inquiry...");

      void fetch("/api/public/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(async (res) => {
          const data = (await res.json().catch(() => ({}))) as {
            ok?: boolean;
            error?: string;
            fallback?: string;
          };
          if (res.ok && data.ok) {
            form.reset();
            setStatus(
              "Thank you, your inquiry is in. Edward will reply to " +
                payload.email +
                " directly.",
            );
            return;
          }
          if (res.status === 400) {
            setStatus(
              data.error || "Please check the required fields and try again.",
            );
            return;
          }
          mailtoFallback();
        })
        .catch(() => mailtoFallback())
        .finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel || "Send inquiry";
          }
        });
    };
    form.addEventListener("submit", onSubmit);
    cleanups.push(() => form.removeEventListener("submit", onSubmit));
  }



  // Click-to-reveal sections (Who We Are). One panel open at a time per group.
  const accordions = [
    ...document.querySelectorAll<HTMLElement>("[data-accordion]"),
  ];
  if (accordions.length) {
    const allTriggers: HTMLButtonElement[] = [];
    const panelOf = (trigger: HTMLElement) =>
      document.getElementById(trigger.getAttribute("aria-controls") ?? "");

    const setOpen = (trigger: HTMLButtonElement, open: boolean) => {
      const panel = panelOf(trigger);
      trigger.setAttribute("aria-expanded", open ? "true" : "false");
      trigger.closest("[data-accordion-item]")?.classList.toggle("open", open);
      if (!panel) return;
      panel.style.height = open ? `${panel.scrollHeight}px` : "0px";
      if (open) {
        const done = () => {
          if (trigger.getAttribute("aria-expanded") === "true")
            panel.style.height = "auto";
          panel.removeEventListener("transitionend", done);
        };
        panel.addEventListener("transitionend", done);
      }
    };

    accordions.forEach((group) => {
      const triggers = [
        ...group.querySelectorAll<HTMLButtonElement>(".wwa-trigger"),
      ];
      triggers.forEach((trigger) => {
        allTriggers.push(trigger);
        const panel = panelOf(trigger);
        const startOpen = trigger.getAttribute("aria-expanded") === "true";
        if (panel) {
          panel.style.height = startOpen ? "auto" : "0px";
          trigger
            .closest("[data-accordion-item]")
            ?.classList.toggle("open", startOpen);
        }
        const onClick = () => {
          const isOpen = trigger.getAttribute("aria-expanded") === "true";
          if (!isOpen) {
            allTriggers.forEach((other) => {
              if (
                other !== trigger &&
                other.getAttribute("aria-expanded") === "true"
              ) {
                const otherPanel = panelOf(other);
                if (otherPanel)
                  otherPanel.style.height = `${otherPanel.scrollHeight}px`;
                requestAnimationFrame(() => setOpen(other, false));
              }
            });
            requestAnimationFrame(() => {
              setOpen(trigger, true);
              const top = trigger.getBoundingClientRect().top;
              if (top < 80 || top > window.innerHeight * 0.55) {
                window.scrollBy({
                  top: top - 110,
                  behavior: reduced ? "auto" : "smooth",
                });
              }
            });
          } else {
            const p = panelOf(trigger);
            if (p) p.style.height = `${p.scrollHeight}px`;
            requestAnimationFrame(() => setOpen(trigger, false));
          }
        };
        trigger.addEventListener("click", onClick);
        cleanups.push(() => trigger.removeEventListener("click", onClick));
      });
    });

    const onResize = () => {
      allTriggers.forEach((trigger) => {
        if (trigger.getAttribute("aria-expanded") === "true") {
          const panel = panelOf(trigger);
          if (panel) panel.style.height = "auto";
        }
      });
    };
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));
  }

  return () => cleanups.forEach((fn) => fn());
}
