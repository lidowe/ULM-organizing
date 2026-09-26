import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/why")({
  head: () => pageHead("why"),
  component: WhyPage,
});

function WhyPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["why"]} />
    </SiteLayout>
  );
}
