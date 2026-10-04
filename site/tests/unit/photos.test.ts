import fs from "node:fs";
import { describe, expect, it } from "vitest";
import { PHOTO_NAMES } from "../../src/lib/photo-names.gen";

describe("photo names", () => {
  it("match the files in src/assets (run scripts/photos/gen-names.mjs if not)", () => {
    const files = fs
      .readdirSync("src/assets")
      .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
      .map((f) => f.replace(/\.(jpe?g|png|webp)$/i, ""))
      .sort();
    expect([...PHOTO_NAMES]).toEqual(files);
  });
});
