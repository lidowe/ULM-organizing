import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/reach")({
  head: () => ({
    meta: [
      { title: "Contact \u00b7 Upper Level Music" },
      {
        name: "description",
        content:
          "Email Upper Level Music in Columbia, South Carolina \u2014 questions, press, or anything that isn't a project inquiry.",
      },
      { property: "og:title", content: "Contact \u00b7 Upper Level Music" },
      {
        property: "og:description",
        content: "Email Upper Level Music \u2014 questions, press, or general enquiries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReachPage,
});

function ReachPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.reach} />
    </SiteLayout>
  );
}
