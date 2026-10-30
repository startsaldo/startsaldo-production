import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/finanzbuchhaltung")({
  head: () => serviceHead("finanzbuchhaltung", "de"),
  component: () => <ServicePage lang="de" slug="finanzbuchhaltung" />,
});
