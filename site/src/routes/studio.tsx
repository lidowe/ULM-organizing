import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/studio")({
  head: () =>
    pageHead("studio"),
  component: StudioPage,
});

function StudioPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.studio} />
    </SiteLayout>
  );
}
