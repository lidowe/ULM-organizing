import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import education from "@/lib/pages/education";

/**
 * Unlisted archive render for /the-argument: the pre-doors Education page, the
 * ancestor of Learn. Out of the sitemap, noindex.
 */
export const Route = createFileRoute("/versions/education")({
  head: () => ({
    meta: [
      { title: "Education (archived version) · Upper Level Music" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageBody html={education} />
    </SiteLayout>
  ),
});
