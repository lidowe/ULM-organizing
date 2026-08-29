import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import describingSound from "@/lib/pages/describing-sound";

/**
 * Unlisted archive render for /the-argument: the pre-doors Describing Sound
 * page, the ancestor of Purple. Out of the sitemap, noindex.
 */
export const Route = createFileRoute("/versions/describing-sound")({
  head: () => ({
    meta: [
      { title: "Describing Sound (archived version) · Upper Level Music" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageBody html={describingSound} />
    </SiteLayout>
  ),
});
