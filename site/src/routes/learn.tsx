import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/learn")({
  head: () => pageHead("learn"),
  component: LearnPage,
});

function LearnPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["learn"]} />
    </SiteLayout>
  );
}
