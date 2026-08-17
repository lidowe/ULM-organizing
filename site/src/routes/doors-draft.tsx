import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

// Motion draft for the five Home doors. Deliberately outside the seo.ts
// PAGES table: no sitemap entry, noindex, not linked from navigation.
export const Route = createFileRoute("/doors-draft")({
  head: () => ({
    meta: [
      { title: "The Five Doors · Motion Draft" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DoorsDraftPage,
});

function DoorsDraftPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["doors-draft"]} />
    </SiteLayout>
  );
}
