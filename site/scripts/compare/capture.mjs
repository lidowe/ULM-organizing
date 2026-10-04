// Capture every page of a running build as evidence for a before/after comparison:
// full-page screenshot, visible text, normalised markup and computed styles,
// at phone, tablet and desktop widths. Motion is reduced so the scroll fade and
// reveals are deterministic.
//
//   node scripts/compare/capture.mjs --base http://127.0.0.1:8790 --label legacy
//
// Output goes to .compare/<label>/ (gitignored).
import { chromium } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const BASE = arg("base", "http://127.0.0.1:8790");
const LABEL = arg("label", "capture");
const ONLY = arg("pages", "");
const OUT = path.resolve(".compare", LABEL);

export const PAGES = [
  ["home", "/"],
  ["the-gap", "/the-gap"],
  ["process", "/process"],
  ["services", "/services"],
  ["education", "/education"],
  ["studio", "/studio"],
  ["work", "/work"],
  ["about", "/about"],
  ["contact", "/contact"],
  ["news", "/news"],
];
export const WIDTHS = [
  ["phone", 375, 812],
  ["tablet", 768, 1024],
  ["desktop", 1440, 900],
];

// Properties that decide how a page looks; enough to pinpoint any CSS regression.
const PROPS = [
  "display",
  "position",
  "float",
  "width",
  "height",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "font-family",
  "font-size",
  "font-weight",
  "line-height",
  "letter-spacing",
  "text-transform",
  "text-align",
  "color",
  "background-color",
  "background-image",
  "border-top-width",
  "border-top-color",
  "border-left-width",
  "border-left-color",
  "box-shadow",
  "opacity",
  "filter",
  "grid-template-columns",
  "gap",
  "max-width",
  "object-fit",
  "z-index",
];

fs.mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ channel: "chrome" });

for (const [wName, w, h] of WIDTHS) {
  const context = await browser.newContext({
    viewport: { width: w, height: h },
    reducedMotion: "reduce",
    deviceScaleFactor: 1,
  });
  for (const [name, route] of PAGES) {
    if (ONLY && !ONLY.split(",").includes(name)) continue;
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    await page.evaluate(async () => {
      document.querySelectorAll("img").forEach((img) => (img.loading = "eager"));
      await document.fonts.ready;
      await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
    });
    await page.waitForTimeout(300);
    const file = (ext) => path.join(OUT, `${name}--${wName}.${ext}`);
    await page.screenshot({ path: file("png"), fullPage: true, animations: "disabled" });

    const data = await page.evaluate((props) => {
      const keyOf = (el) => {
        const parts = [];
        for (let n = el; n && n.nodeType === 1 && n !== document.body; n = n.parentElement) {
          const sibs = [...(n.parentElement?.children ?? [])].filter(
            (s) => s.tagName === n.tagName,
          );
          parts.unshift(
            `${n.tagName.toLowerCase()}${sibs.length > 1 ? `[${sibs.indexOf(n)}]` : ""}`,
          );
        }
        return parts.join(">");
      };
      const styles = {};
      for (const el of document.body.querySelectorAll("*")) {
        if (["SCRIPT", "STYLE", "LINK", "META", "NOSCRIPT"].includes(el.tagName)) continue;
        const cs = getComputedStyle(el);
        if (cs.display === "none") continue;
        const entry = {};
        for (const p of props) entry[p] = cs.getPropertyValue(p);
        const before = getComputedStyle(el, "::before"),
          after = getComputedStyle(el, "::after");
        if (before.content !== "none")
          entry["::before"] =
            `${before.content}|${before.backgroundImage.slice(0, 80)}|${before.opacity}`;
        if (after.content !== "none")
          entry["::after"] =
            `${after.content}|${after.backgroundImage.slice(0, 80)}|${after.opacity}`;
        styles[keyOf(el)] = entry;
      }
      // Markup as a canonical string: attributes sorted, whitespace collapsed,
      // whitespace-only text dropped, inline styles and router bookkeeping
      // left out (computed styles are compared separately), asset hashes removed.
      const SKIP = new Set(["style", "data-status", "aria-current"]);
      const unhash = (v) => v.replace(/\/assets\/([\w.-]+?)-[\w-]{8}\.(\w+)/g, "/assets/$1.$2");
      const serialise = (node) => {
        if (node.nodeType === 3) {
          const t = node.textContent.replace(/\s+/g, " ");
          return t.trim() ? t : "";
        }
        if (node.nodeType !== 1) return "";
        const tag = node.tagName.toLowerCase();
        if (["script", "style", "link", "meta", "noscript"].includes(tag)) return "";
        const attrs = [...node.attributes]
          .filter((a) => !SKIP.has(a.name) && !/^data-[\w-]+-id$/.test(a.name))
          .map((a) => `${a.name}="${unhash(a.value)}"`)
          .sort();
        const inner = [...node.childNodes].map(serialise).join("");
        return `<${tag}${attrs.length ? " " + attrs.join(" ") : ""}>${inner}</${tag}>`;
      };
      return {
        text: (document.querySelector("main") ?? document.body).innerText,
        html: serialise(document.body),
        styles,
        title: document.title,
      };
    }, PROPS);
    fs.writeFileSync(file("txt"), data.text);
    fs.writeFileSync(file("html"), data.html);
    fs.writeFileSync(file("styles.json"), JSON.stringify(data.styles));
    if (errors.length) fs.writeFileSync(file("errors.txt"), errors.join("\n"));
    console.log(`${name} ${wName}${errors.length ? ` (${errors.length} console errors)` : ""}`);
    await page.close();
  }
  await context.close();
}
await browser.close();
