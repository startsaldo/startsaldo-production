import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { businessJsonLd, shareMeta } from "@/components/structured-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StartSaldo | Finanz- & Lohnbuchhaltung" },
      { name: "description", content: "Persönliche Finanz- und Lohnbuchhaltung für Schweizer KMU und Start-ups, GmbHs, AGs und Selbstständige." },
      { property: "og:title", content: "StartSaldo | Persönliche Buchhaltung" },
      { property: "og:description", content: "Klare Abläufe. Persönliche Betreuung. Verlässliche Buchhaltung." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.startsaldo.ch/" },
      ...shareMeta("de"),
    ],
    links: [
      { rel: "canonical", href: "https://www.startsaldo.ch/" },
      { rel: "alternate", hrefLang: "en", href: "https://www.startsaldo.ch/en" },
    ],
    scripts: [businessJsonLd("de")],
  }),
  component: () => <HomePage lang="de" />,
});
