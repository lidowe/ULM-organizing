import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work \u00b7 Selected records" },
      { name: "description", content: "A selected view of Edward Lidow's work across recording, mixing, production and mastering." },
      { property: "og:title", content: "Work \u00b7 Selected records" },
      { property: "og:description", content: "A selected view of Edward Lidow's work across recording, mixing, production and mastering." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteLayout>
      <PageBody html={pages.work} />
    </SiteLayout>
  );
}
