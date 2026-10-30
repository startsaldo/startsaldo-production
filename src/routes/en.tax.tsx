import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/en/tax")({
  head: () => serviceHead("steuern", "en"),
  component: () => <ServicePage lang="en" slug="steuern" />,
});
