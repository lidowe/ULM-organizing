import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/evaluate")({
  head: () => pageHead("evaluate"),
  component: EvaluatePage,
});

function EvaluatePage() {
  return (
    <SiteLayout>
      <PageBody html={pages["evaluate"]} />
    </SiteLayout>
  );
}
