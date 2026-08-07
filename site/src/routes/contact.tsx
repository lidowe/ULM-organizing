import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead("contact"),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.contact} />
    </SiteLayout>
  );
}
