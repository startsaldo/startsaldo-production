import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/legal-page";

export const Route = createFileRoute("/en/legal-notice")({
  head: () => legalHead("imprint", "en"),
  component: () => <LegalPage kind="imprint" lang="en" />,
});
