import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/steuern")({
  head: () => serviceHead("steuern", "de"),
  component: () => <ServicePage lang="de" slug="steuern" />,
});
