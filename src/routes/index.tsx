import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StartSaldo | Finanz- & Lohnbuchhaltung" },
      { name: "description", content: "Persönliche Finanz- und Lohnbuchhaltung für Schweizer KMU, GmbHs, AGs, Startups und Selbstständige." },
      { property: "og:title", content: "StartSaldo | Persönliche Buchhaltung" },
      { property: "og:description", content: "Klare Abläufe. Persönliche Betreuung. Verlässliche Buchhaltung." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "/en" }],
  }),
  component: () => <HomePage lang="de" />,
});
