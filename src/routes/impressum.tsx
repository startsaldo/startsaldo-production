import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/legal-page";

export const Route = createFileRoute("/impressum")({
  head: () => legalHead("imprint", "de"),
  component: () => <LegalPage kind="imprint" lang="de" />,
});
