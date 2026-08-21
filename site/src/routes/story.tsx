import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/story")({
  head: () => pageHead("story"),
  component: StoryPage,
});

function StoryPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["story"]} />
    </SiteLayout>
  );
}
