import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/en/vat")({
  head: () => serviceHead("mwst", "en"),
  component: () => <ServicePage lang="en" slug="mwst" />,
});
