// Shared behaviors: header scroll shadow, menu dialog, IntersectionObserver
// reveals, work filter, project form, click-to-reveal sections. Call once
// after each route renders; each block is a no-op if its target elements are
// absent on the current page.


import { initWorkbenchTools } from "./workbench-tools";
import { initFrontDraft } from "./front-draft-behaviors";
import { initRoomModes } from "./room-modes";

export function initSiteBehaviors(): () => void {
  const cleanups: Array<() => void> = [];

  initWorkbenchTools(cleanups);
  initFrontDraft(cleanups);
  initRoomModes(cleanups);

  // The door rail marks the page it is on, so the current door reads as
  // location rather than a link to itself.
  document.querySelectorAll<HTMLAnchorElement>(".door-rail .rail-row").forEach((row) => {
    if (row.getAttribute("href") === window.location.pathname) {
      row.setAttribute("aria-current", "page");
    }
  });

  // Every inlined teaching scene gets a pause control: looping motion next
  // to prose needs an off switch that isn't a system setting.
  document.querySelectorAll<HTMLElement>("figure.scene").forEach((scene) => {
    if (scene.querySelector(".scene-pause")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "scene-pause";
    btn.textContent = "Pause";
    btn.setAttribute("aria-pressed", "false");
    const toggle = () => {
      const paused = scene.classList.toggle("paused");
      btn.textContent = paused ? "Play" : "Pause";
      btn.setAttribute("aria-pressed", paused ? "true" : "false");
    };
    btn.addEventListener("click", toggle);
    scene.appendChild(btn);
    cleanups.push(() => btn.removeEventListener("click", toggle));
  });

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
      const expedited = !!document.querySelector<HTMLInputElement>("#expedited:checked");
      const style =
        document.querySelector<HTMLInputElement>("input[name=style]:checked")?.value ?? "";
      const payload = {
        name: val("name"),
        email: val("email"),
        services: val("services"),
        expedited,
        situation: val("situation"),
        send: val("send"),
        style,
        notes: val("notes"),
        company: val("company"),
      };
      const body = [
        (expedited ? "EXPEDITED REQUEST\n\n" : "") + "Name: " + payload.name,
        "Email: " + payload.email,
        "Preferred way of working: " + (payload.style || "-"),
        "Files / links: " + (payload.send || "-"),
        "",
        "Services they're interested in:",
        payload.services,
        "",
        "Situation and what they've tried:",
        payload.situation || "-",
        "",
        "Questions, comments, concerns, criticisms:",
        payload.notes || "-",
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
          encodeURIComponent(
            (expedited ? "EXPEDITED - " : "") + "Upper Level Music - " + payload.name,
          ) +
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

    // Arriving on a deep link such as /about#industry: without this the browser
    // scrolls to a collapsed panel and the visitor sees a heading with nothing
    // under it. Reuses setOpen so there is only one way a panel opens.
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const item = document.getElementById(id);
      const trigger = item?.querySelector<HTMLButtonElement>(".wwa-trigger");
      if (!trigger) return;
      if (trigger.getAttribute("aria-expanded") !== "true") setOpen(trigger, true);
      requestAnimationFrame(() => {
        item!.scrollIntoView({ block: "start", behavior: reduced ? "auto" : "smooth" });
        window.scrollBy({ top: -100, behavior: "auto" });
      });
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    cleanups.push(() => window.removeEventListener("hashchange", openFromHash));

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
