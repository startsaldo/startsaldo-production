import { createFileRoute } from "@tanstack/react-router";
import { PayrollPage } from "@/components/payroll-page";

const url = "https://swiss-ledger-boutique.lovable.app/lohnbuchhaltung";

export const Route = createFileRoute("/lohnbuchhaltung")({
  head: () => ({
    meta: [
      { title: "Lohnbuchhaltung für KMU in Schwyz & der Schweiz | StartSaldo" },
      { name: "description", content: "Lohnabrechnung, Sozialversicherungen, Ein- und Austritte, Quellensteuer und Lohnausweise für Schweizer KMU – persönlich betreut von StartSaldo aus Rothenthurm." },
      { property: "og:title", content: "Lohnbuchhaltung für Schweizer KMU | StartSaldo" },
      { property: "og:description", content: "Pünktlich, korrekt und persönlich: Lohnabrechnung und Sozialversicherungen für KMU." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: "/en/payroll" },
    ],
  }),
  component: () => <PayrollPage lang="de" />,
});
