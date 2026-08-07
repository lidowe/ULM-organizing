import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/reach")({
  head: () =>
    pageHead("reach"),
  component: ReachPage,
});

function ReachPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.reach} />
    </SiteLayout>
  );
}
