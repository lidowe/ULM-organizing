import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

// Working surface for Edward's content ranking. Outside the seo.ts PAGES
// table on purpose: no sitemap entry, noindex.
export const Route = createFileRoute("/hierarchy-options")({
  head: () => ({
    meta: [
      { title: "Hierarchy Options · Working Surface" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: HierarchyOptionsPage,
});

function HierarchyOptionsPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["hierarchy-options"]} />
    </SiteLayout>
  );
}
