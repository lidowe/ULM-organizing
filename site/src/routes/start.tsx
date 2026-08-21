import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/start")({
  head: () => pageHead("start"),
  component: StartPage,
});

function StartPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["start"]} />
    </SiteLayout>
  );
}
