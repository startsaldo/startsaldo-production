import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, legalHead } from "@/components/legal-page";

export const Route = createFileRoute("/en/privacy")({
  head: () => legalHead("privacy", "en"),
  component: () => <LegalPage kind="privacy" lang="en" />,
});
