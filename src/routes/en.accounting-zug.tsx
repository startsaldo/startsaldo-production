import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/en/accounting-zug")({
  head: () => serviceHead("zug", "en"),
  component: () => <ServicePage lang="en" slug="zug" />,
});
