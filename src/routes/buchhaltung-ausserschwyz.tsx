import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/buchhaltung-ausserschwyz")({
  head: () => serviceHead("hoefe", "de"),
  component: () => <ServicePage lang="de" slug="hoefe" />,
});
