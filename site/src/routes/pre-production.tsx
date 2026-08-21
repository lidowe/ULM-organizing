import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/pre-production")({
  head: () => pageHead("pre-production"),
  component: PreProductionPage,
});

function PreProductionPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["pre-production"]} />
    </SiteLayout>
  );
}
