import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteChrome } from "@/components/chrome/SiteChrome";

/** Every public page renders inside the same chrome, which stays mounted between pages. */
export const Route = createFileRoute("/_site")({
  component: () => (
    <SiteChrome>
      <Outlet />
    </SiteChrome>
  ),
});
