import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    pageHead("process"),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.process} />
    </SiteLayout>
  );
}
