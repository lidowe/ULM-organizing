import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Educational Services \u00b7 Upper Level Music" },
      {
        name: "description",
        content:
          "Coaching, mentorship and technical training for artists, engineers and producers \u2014 remote, at your pace.",
      },
      { property: "og:title", content: "Educational Services \u00b7 Upper Level Music" },
      {
        property: "og:description",
        content:
          "Coaching, mentorship and technical training for artists, engineers and producers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.education} />
    </SiteLayout>
  );
}
