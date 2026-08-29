import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

// The homepage-restructure draft. Deliberately outside the seo.ts PAGES
// table: no sitemap entry, noindex, not linked from navigation.
export const Route = createFileRoute("/front-draft")({
  head: () => ({
    meta: [
      { title: "The Front · Draft" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: FrontDraftPage,
});

function FrontDraftPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["front-draft"]} />
    </SiteLayout>
  );
}
