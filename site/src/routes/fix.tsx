import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/fix")({
  head: () => pageHead("fix"),
  component: FixPage,
});

function FixPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["fix"]} />
    </SiteLayout>
  );
}
