import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead("index"),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <PageBody html={pages.index} />
    </SiteLayout>
  );
}
