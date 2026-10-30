import { createFileRoute } from "@tanstack/react-router";
import { PayrollPage } from "@/components/payroll-page";

const url = "https://swiss-ledger-boutique.lovable.app/en/payroll";

export const Route = createFileRoute("/en/payroll")({
  head: () => ({
    meta: [
      { title: "Payroll services for Swiss SMEs | StartSaldo" },
      { name: "description", content: "Payroll, social insurances, employee onboarding and offboarding, withholding tax and salary certificates for Swiss SMEs – personally handled by StartSaldo." },
      { property: "og:title", content: "Payroll for Swiss SMEs | StartSaldo" },
      { property: "og:description", content: "On time, accurate and personal: payroll and social insurances for SMEs." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "de", href: "/lohnbuchhaltung" },
    ],
  }),
  component: () => <PayrollPage lang="en" />,
});
