import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/who-we-are")({
  head: () =>
    pageHead("who-we-are"),
  component: WhoWeArePage,
});

function WhoWeArePage() {
  return (
    <SiteLayout>
      <PageBody html={pages["who-we-are"]} />
    </SiteLayout>
  );
}
