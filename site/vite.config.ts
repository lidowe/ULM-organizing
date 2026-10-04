// The build, spelled out. This replaces @lovable.dev/vite-tanstack-config,
// which assembled the same plugins behind one call: TanStack Start (SSR, with
// src/server.ts as the server entry), Nitro for the Cloudflare Worker output
// (build only), React, and vite-imagetools for the photo variants.
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

export default defineConfig(({ command }) => ({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
    command === "build" && nitro({ preset: "cloudflare-module" }),
    viteReact(),
    imagetools(),
  ],
  css: { transformer: "lightningcss" },
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
}));
