import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/buchhaltung-schwyz")({
  head: () => serviceHead("schwyz", "de"),
  component: () => <ServicePage lang="de" slug="schwyz" />,
});
