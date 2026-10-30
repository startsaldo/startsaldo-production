import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/lohnbuchhaltung")({
  head: () => serviceHead("lohnbuchhaltung", "de"),
  component: () => <ServicePage lang="de" slug="lohnbuchhaltung" />,
});
