import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import storyGap from "@/lib/pages/story-gap";

/**
 * Unlisted, de-identified render of Story for /the-argument: the industry-
 * through-values run, with "The person" section removed. Out of the sitemap,
 * noindex.
 */
export const Route = createFileRoute("/versions/story")({
  head: () => ({
    meta: [
      { title: "The Argument, from Story · Upper Level Music" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageBody html={storyGap} />
    </SiteLayout>
  ),
});
