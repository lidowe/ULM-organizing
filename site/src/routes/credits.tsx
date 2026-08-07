import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

const DESCRIPTION =
  "Selected discography and partial credits for Edward Lidow — recording, mixing, production, editing and assistant work across genres.";

export const Route = createFileRoute("/credits")({
  head: () => ({
    meta: [
      { title: "Credits · Upper Level Music" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Credits · Upper Level Music" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CreditsPage,
});

function CreditsPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.credits} />
    </SiteLayout>
  );
}
