import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageBody } from "../components/site/SiteLayout";
import { pages } from "../lib/site-pages";
import { pageHead } from "../lib/seo";

export const Route = createFileRoute("/proof")({
  head: () => pageHead("proof"),
  component: ProofPage,
});

function ProofPage() {
  return (
    <SiteLayout>
      <PageBody html={pages["proof"]} />
    </SiteLayout>
  );
}
