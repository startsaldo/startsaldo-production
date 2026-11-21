import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { businessJsonLd, shareMeta } from "@/components/structured-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Buchhaltung & Treuhand in Schwyz | StartSaldo" },
      { name: "description", content: "Finanz- und Lohnbuchhaltung, MWST und Jahresabschluss für KMU und Start-ups – persönlich betreut aus Rothenthurm für Schwyz, Einsiedeln und Zug. Kostenloses Erstgespräch." },
      { property: "og:title", content: "Buchhaltung & Treuhand in Schwyz | StartSaldo" },
      { property: "og:description", content: "Finanz- und Lohnbuchhaltung, MWST und Jahresabschluss für KMU und Start-ups – persönlich betreut aus Rothenthurm im Kanton Schwyz." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.startsaldo.ch/" },
      ...shareMeta("de"),
    ],
    links: [
      { rel: "canonical", href: "https://www.startsaldo.ch/" },
      { rel: "alternate", hrefLang: "de", href: "https://www.startsaldo.ch/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.startsaldo.ch/en" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.startsaldo.ch/" },
    ],
    scripts: [businessJsonLd("de")],
  }),
  component: () => <HomePage lang="de" />,
});
