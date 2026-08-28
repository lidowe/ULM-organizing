// FRONT DRAFT behaviors (/front-draft only; no-op everywhere else).
//
// v3 — the simple companion site. The interactive instrument (v1 cables,
// v2 guided walkthrough) is retired as a direction: a marketing page
// cannot honestly personalize, so the identities live as prose and the
// page routes with two calls to action (contact / the app). See
// docs/research/APP-STUDY.md. Git history holds both instruments; the
// identity copy lives on in lib/front-draft-data.ts for door-page and
// app reuse.
//
// All that remains here is the draft type-variant toggle (A current /
// B lighter Space Mono cut / C JetBrains Mono), decided by sight.

export function initFrontDraft(cleanups: Array<() => void>): void {
  const root = document.querySelector<HTMLElement>("[data-fd]");
  if (!root) return;

  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-fd-font]")];
  buttons.forEach((btn) => {
    const onClick = () => {
      root.dataset.font = btn.dataset.fdFont;
      buttons.forEach((b) => b.classList.toggle("on", b === btn));
    };
    btn.addEventListener("click", onClick);
    cleanups.push(() => btn.removeEventListener("click", onClick));
  });
}
