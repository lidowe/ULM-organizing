// Pixel-diff two screenshot dirs. Usage: node diff.mjs dirA dirB
import { PNG } from "pngjs";
import { readFileSync, readdirSync, existsSync } from "fs";

const [a, b] = process.argv.slice(2);
let anyDiff = false;
for (const f of readdirSync(a).filter((f) => f.endsWith(".png")).sort()) {
  if (!existsSync(`${b}/${f}`)) { console.log(`${f}: MISSING in ${b}`); anyDiff = true; continue; }
  const ia = PNG.sync.read(readFileSync(`${a}/${f}`));
  const ib = PNG.sync.read(readFileSync(`${b}/${f}`));
  if (ia.width !== ib.width || ia.height !== ib.height) {
    console.log(`${f}: SIZE ${ia.width}x${ia.height} -> ${ib.width}x${ib.height}`);
    anyDiff = true; continue;
  }
  let n = 0;
  for (let i = 0; i < ia.data.length; i += 4) {
    if (Math.abs(ia.data[i] - ib.data[i]) > 8 || Math.abs(ia.data[i+1] - ib.data[i+1]) > 8 || Math.abs(ia.data[i+2] - ib.data[i+2]) > 8) n++;
  }
  const pct = ((n / (ia.width * ia.height)) * 100).toFixed(3);
  if (n > 0) anyDiff = true;
  console.log(`${f}: ${n} px differ (${pct}%)`);
}
process.exit(0);
