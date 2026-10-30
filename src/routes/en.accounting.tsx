import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/en/accounting")({
  head: () => serviceHead("finanzbuchhaltung", "en"),
  component: () => <ServicePage lang="en" slug="finanzbuchhaltung" />,
});
