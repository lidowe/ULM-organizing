import { createFileRoute } from "@tanstack/react-router";
import { EducationPage } from "@/pages/Education";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/_site/education")({
  head: () => pageHead("education"),
  component: EducationPage,
});
