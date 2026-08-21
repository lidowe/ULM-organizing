import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/purple")({
  head: () => pageHead("purple"),
  component: PurplePage,
});

function PurplePage() {
  return (
    <SiteLayout>
      <PageBody html={pages["purple"]} />
    </SiteLayout>
  );
}
