import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/legal-page";

export const Route = createFileRoute("/datenschutz")({
  head: () => legalHead("privacy", "de"),
  component: () => <LegalPage kind="privacy" lang="de" />,
});
