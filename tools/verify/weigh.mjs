// Sum image transfer bytes per page at a viewport width (dev server).
import { chromium } from "playwright";
const WIDTH = Number(process.argv[2] || 390);
const PAGES = ["index", "about", "studio", "work"];
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const ctx = await browser.newContext({ viewport: { width: WIDTH, height: 900 } });
const page = await ctx.newPage();
for (const name of PAGES) {
  const bytes = { img: 0, n: 0 };
  const handler = async (r) => {
    const ct = r.headers()["content-type"] || "";
    if (ct.startsWith("image/")) {
      try { bytes.img += (await r.body()).length; bytes.n++; } catch {}
    }
  };
  page.on("response", handler);
  await page.goto(`http://127.0.0.1:8080/${name === "index" ? "" : name}`, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    document.querySelectorAll("img").forEach((i) => (i.loading = "eager"));
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 800));
  });
  await page.waitForLoadState("networkidle");
  page.off("response", handler);
  console.log(`${name}@${WIDTH}: ${(bytes.img / 1024).toFixed(0)} KB across ${bytes.n} images`);
}
await browser.close();
