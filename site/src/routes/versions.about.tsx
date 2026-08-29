import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import about from "@/lib/pages/about";

/**
 * Unlisted archive render for /the-argument: the pre-doors About page, the
 * long-form ancestor of Story. Not in seo.ts PAGES, so out of the sitemap;
 * noindex so search engines leave it alone.
 */
export const Route = createFileRoute("/versions/about")({
  head: () => ({
    meta: [
      { title: "About (archived version) · Upper Level Music" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageBody html={about} />
    </SiteLayout>
  ),
});
