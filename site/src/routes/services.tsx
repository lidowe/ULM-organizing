import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/services")({
  head: () => pageHead("services"),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.services} />
    </SiteLayout>
  );
}
