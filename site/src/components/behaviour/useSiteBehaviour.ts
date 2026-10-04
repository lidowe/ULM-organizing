import { useEffect } from "react";

/**
 * Page-level behaviour that runs after each route renders: the header's
 * scrolled state, reveal-on-scroll, the black-and-white-to-colour photo
 * fade, and opening a fold that the URL hash points at.
 */
export function useSiteBehaviour(pathname: string, hash: string) {
  // Header shadow once the page has scrolled.
  useEffect(() => {
    const header = document.querySelector(".site-header");
    const set = () => header?.classList.toggle("scrolled", window.scrollY > 24);
    set();
    window.addEventListener("scroll", set, { passive: true });
    return () => window.removeEventListener("scroll", set);
  }, [pathname]);

  // Reveal blocks as they enter the viewport; all at once under reduced motion.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealers = [...document.querySelectorAll(".reveal")];
    if (reduced || !("IntersectionObserver" in window)) {
      revealers.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -5%" },
    );
    revealers.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Photos develop to full colour as they approach the viewport centre and
  // return to ink as they scroll away. --cf is 0..1; the grayscale filter in
  // concept.css reads it. Reduced motion: photos stay ink.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const imgs = [
      ...document.querySelectorAll<HTMLElement>(
        "main figure img, main .photo-set img, main .studio-gallery img, main .row-thumb img, main .person-thumb img, .hero-panel img",
      ),
    ].filter((el) => !el.closest(".credit-photo, .work-grid, .work-card, .award-plaque"));
    if (!imgs.length) return;
    let ticking = false;
    const paint = () => {
      ticking = false;
      const vh = window.innerHeight;
      const mid = vh / 2;
      const range = vh * 0.55;
      imgs.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -60 || r.top > vh + 60) return;
        const dist = Math.abs(r.top + r.height / 2 - mid) / range;
        const t = Math.min(1, Math.max(0, 1 - dist));
        el.style.setProperty("--cf", (t * t * (3 - 2 * t)).toFixed(3));
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paint);
      }
    };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  // Deep links such as /process#describing-sound open the fold they point at.
  useEffect(() => {
    const id = decodeURIComponent(hash);
    if (!id) return;
    const el = document.getElementById(id);
    if (el instanceof HTMLDetailsElement && !el.open) {
      el.open = true;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      requestAnimationFrame(() =>
        el.scrollIntoView({ block: "start", behavior: reduced ? "auto" : "smooth" }),
      );
    }
  }, [pathname, hash]);
}
