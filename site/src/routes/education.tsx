import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/education")({
  head: () =>
    pageHead("education"),
  component: EducationPage,
});

function EducationPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.education} />
    </SiteLayout>
  );
}
