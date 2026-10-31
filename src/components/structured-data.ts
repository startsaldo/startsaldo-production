import type { Lang } from "@/components/home-copy";
import { SITE } from "@/components/service-pages";

/** Schema.org business data for the home pages (Google / AI search). */
export function businessJsonLd(lang: Lang) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AccountingService",
      name: "StartSaldo",
      url: lang === "de" ? SITE + "/" : SITE + "/en",
      email: "info@startsaldo.ch",
      telephone: "+41 76 629 50 56",
      description:
        lang === "de"
          ? "Persönliche Finanz- und Lohnbuchhaltung für Schweizer KMU und Start-ups – spezialisiert auf Crypto Trading."
          : "Personal financial accounting and payroll for Swiss SMEs and start-ups – specialised in crypto trading.",
      address: { "@type": "PostalAddress", streetAddress: "Schosstrasse 3", postalCode: "6418", addressLocality: "Rothenthurm", addressRegion: "SZ", addressCountry: "CH" },
      areaServed: [{ "@type": "Country", name: "Switzerland" }, { "@type": "AdministrativeArea", name: "Kanton Schwyz" }, { "@type": "AdministrativeArea", name: "Kanton Zug" }],
      hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJYV3YuEtNhUcRbeOM7T-gjeU",
      founder: [{ "@type": "Person", name: "Audelia Babbev-Pittet" }, { "@type": "Person", name: "Sarah Mogel" }, { "@type": "Person", name: "Daniel Babbev" }],
      knowsLanguage: ["de", "en"],
    }),
  };
}
