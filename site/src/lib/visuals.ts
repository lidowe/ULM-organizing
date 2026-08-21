/**
 * The visual library registry: Edward's ULM icon and diagram set, inlined.
 *
 * Three classes of file live in src/visuals/ (see its manifest):
 *   icons/  icon-<subject>.svg  64×64 static subject icons
 *   ui/     ui-<action>.svg     interface glyphs on the same grid
 *   motion/ anim-<concept>.svg  480×300 animated teaching scenes,
 *                               self-contained CSS/SMIL, reduced-motion safe
 *
 * Everything is inlined (not <img>) so the CSS custom properties cascade in:
 * --ulm-line/--ulm-dim/--ulm-accent map onto the site palette in site.css,
 * and stroke weight compensates per size class (.ulm-icon--xs…--display).
 *
 * Page markup uses tokens, resolved by render-tokens.ts:
 *   {{ICON:patchbay}}        → sm wrapper (default)
 *   {{ICON:patchbay:md}}     → sized wrapper (xs|sm|md|lg|xl|display)
 *   {{UI:arrow-right}}       → ui glyph, sm
 *   {{ANIM:room-modes}}      → fluid .ulm-anim wrapper
 * An unknown name renders nothing rather than a broken frame.
 */

const files = import.meta.glob<string>("../visuals/*/*.svg", {
  eager: true,
  import: "default",
  query: "?raw",
});

const byName: Record<string, string> = {};
for (const [path, svg] of Object.entries(files)) {
  byName[
    path
      .split("/")
      .pop()!
      .replace(/\.svg$/, "")
  ] = svg;
}

const ICON_SIZES = new Set(["xs", "sm", "md", "lg", "xl", "display"]);

export function iconHtml(name: string, size = "sm"): string {
  const svg = byName[`icon-${name}`] ?? byName[`ui-${name}`];
  if (!svg || !ICON_SIZES.has(size)) return "";
  return `<span class="ulm-icon ulm-icon--${size}" aria-hidden="true">${svg}</span>`;
}

export function animHtml(name: string): string {
  const svg = byName[`anim-${name}`];
  if (!svg) return "";
  return `<div class="ulm-anim">${svg}</div>`;
}
