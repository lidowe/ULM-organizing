import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/Services";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/services")({
  head: () => pageHead("services"),
  component: ServicesPage,
});
