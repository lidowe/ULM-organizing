import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Edward Lidow \u00b7 About" },
      { name: "description", content: "Musician, engineer, mixer and producer. 12 years at Hit Factory / Criteria Miami." },
      { property: "og:title", content: "Edward Lidow \u00b7 About" },
      { property: "og:description", content: "Musician, engineer, mixer and producer. 12 years at Hit Factory / Criteria Miami." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.about} />
    </SiteLayout>
  );
}
