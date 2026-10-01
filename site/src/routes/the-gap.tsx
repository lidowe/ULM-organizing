import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/the-gap")({
  head: () => pageHead("the-gap"),
  component: TheGapPage,
});

function TheGapPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["the-gap"]} />
    </SiteLayout>
  );
}
