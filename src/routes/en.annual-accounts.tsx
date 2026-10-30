import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/en/annual-accounts")({
  head: () => serviceHead("jahresabschluss", "en"),
  component: () => <ServicePage lang="en" slug="jahresabschluss" />,
});
