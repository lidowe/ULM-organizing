// Screenshot every page at 1400 and 390, images forced eager and decoded,
// animations disabled. Usage: node shoot.mjs <outdir>
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const out = process.argv[2];
if (!out) throw new Error("outdir required");
mkdirSync(out, { recursive: true });

const PAGES = ["index", "complete", "fix", "learn", "evaluate", "purple", "the-gap", "story", "proof", "start", "pre-production"];
const WIDTHS = [1400, 390];
const BASE = "http://127.0.0.1:8080";

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
let bad = 0;
for (const w of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  page.on("response", (r) => {
    if (r.status() >= 400) { bad++; console.error(`  !! ${r.status()} ${r.url()}`); }
  });
  for (const name of PAGES) {
    const url = name === "index" ? `${BASE}/` : `${BASE}/${name}`;
    await page.goto(url, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: "*,*::before,*::after{animation:none!important;transition:none!important} html{scroll-behavior:auto!important}" });
    await page.evaluate(async () => {
      document.querySelectorAll("details").forEach((d) => (d.open = true));
      document.querySelectorAll(".wwa-panel").forEach((p) => { p.style.display = "block"; p.style.height = "auto"; p.style.overflow = "visible"; });
      document.querySelectorAll('.wwa-trigger[aria-expanded="false"]').forEach((b) => b.setAttribute("aria-expanded", "true"));
      document.querySelectorAll("img").forEach((i) => { i.loading = "eager"; });
      await Promise.all([...document.querySelectorAll("img")].map((i) => i.decode().catch(() => {})));
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 400));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 200));
    });
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${out}/${name}-${w}.png`, fullPage: true });
    console.log(`ok ${name}-${w}`);
  }
  await ctx.close();
}
await browser.close();
if (bad) { console.error(`${bad} responses >=400`); process.exit(1); }
