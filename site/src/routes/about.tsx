import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageHead("about"),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.about} />
    </SiteLayout>
  );
}
