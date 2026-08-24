import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/complete")({
  head: () => pageHead("complete"),
  component: CompletePage,
});

function CompletePage() {
  return (
    <SiteLayout>
      <PageBody html={pages["complete"]} />
    </SiteLayout>
  );
}
