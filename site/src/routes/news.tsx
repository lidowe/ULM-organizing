import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/news")({
  head: () =>
    pageHead("news"),
  component: NewsPage,
});

function NewsPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.news} />
    </SiteLayout>
  );
}
