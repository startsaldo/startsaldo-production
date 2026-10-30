import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/krypto")({
  head: () => serviceHead("krypto", "de"),
  component: () => <ServicePage lang="de" slug="krypto" />,
});
