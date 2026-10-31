import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/gruendung-startups")({
  head: () => serviceHead("startups", "de"),
  component: () => <ServicePage lang="de" slug="startups" />,
});
