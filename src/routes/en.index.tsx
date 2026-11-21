import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { businessJsonLd, shareMeta } from "@/components/structured-data";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Accounting & Fiduciary Services in Schwyz | StartSaldo" },
      { name: "description", content: "Financial accounting, payroll, VAT and annual accounts for SMEs and start-ups – personally handled from Rothenthurm in the canton of Schwyz. Free initial consultation." },
      { property: "og:title", content: "Accounting & Fiduciary Services in Schwyz | StartSaldo" },
      { property: "og:description", content: "Financial accounting, payroll, VAT and annual accounts for SMEs and start-ups – personally handled from Rothenthurm in the canton of Schwyz." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.startsaldo.ch/en" },
      ...shareMeta("en"),
    ],
    links: [
      { rel: "canonical", href: "https://www.startsaldo.ch/en" },
      { rel: "alternate", hrefLang: "de", href: "https://www.startsaldo.ch/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.startsaldo.ch/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.startsaldo.ch/" },
    ],
    scripts: [businessJsonLd("en")],
  }),
  component: () => <HomePage lang="en" />,
});
