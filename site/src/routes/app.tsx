import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

// The app's working preview. Deliberately outside the seo.ts PAGES table:
// no sitemap entry, noindex, not linked from navigation (front-draft's
// second CTA points here). The manifest and service worker attach ONLY on
// this route, scoped to /app, so the rest of the site stays a plain
// website.
export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "The ULM App · Working Preview" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "theme-color", content: "#0b0d11" },
    ],
    links: [{ rel: "manifest", href: "/app.webmanifest" }],
  }),
  component: AppPage,
});

function AppPage() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/app-sw.js", { scope: "/app" }).catch(() => {
        // Install layer is an enhancement; the page works without it.
      });
    }
  }, []);

  return (
    <SiteLayout>
      <PageBody html={pages["app"]} />
    </SiteLayout>
  );
}
