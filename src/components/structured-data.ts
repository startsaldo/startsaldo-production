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
          ? "Persönliche Finanz- und Lohnbuchhaltung für Schweizer KMU und Start-ups – inklusive Buchhaltung für Firmen mit Krypto-Transaktionen."
          : "Personal financial accounting and payroll for Swiss SMEs and start-ups – including accounting for companies with crypto transactions.",
      address: { "@type": "PostalAddress", streetAddress: "Schoosstrasse 3", postalCode: "6418", addressLocality: "Rothenthurm", addressRegion: "SZ", addressCountry: "CH" },
      areaServed: [{ "@type": "Country", name: "Switzerland" }, { "@type": "AdministrativeArea", name: "Kanton Schwyz" }, { "@type": "AdministrativeArea", name: "Kanton Zug" }, { "@type": "City", name: "Rothenthurm" }, { "@type": "City", name: "Einsiedeln" }, { "@type": "City", name: "Schwyz" }],
      logo: SITE + "/favicon-512x512.png",
      image: SITE + "/og/startsaldo-team.jpg",
      legalName: "Digital Trust Solutions GmbH",
      taxID: "CHE-147.018.858",
      knowsAbout: lang === "de"
        ? ["Finanzbuchhaltung", "Lohnbuchhaltung", "Sozialversicherungen", "Mehrwertsteuer (MWST)", "Jahresabschluss nach OR", "Steuererklärung für KMU", "Firmengründung GmbH", "Krypto-Transaktionen in der Buchhaltung"]
        : ["Financial accounting", "Payroll", "Social insurance", "Value added tax (VAT)", "Annual accounts under the Swiss CO", "Tax returns for SMEs", "Company formation (GmbH)", "Crypto transactions in accounting"],
      sameAs: ["https://maps.google.com/maps?cid=16541053202830517101"],
      hasMap: "https://www.google.com/maps/place/?q=place_id:ChIJYV3YuEtNhUcRbeOM7T-gjeU",
      founder: [{ "@type": "Person", name: "Audelia Babbev-Pittet" }, { "@type": "Person", name: "Sarah Mogel" }, { "@type": "Person", name: "Daniel Babbev" }],
      knowsLanguage: ["de", "en"],
    }),
  };
}

/** Shared link-preview tags (WhatsApp, LinkedIn, iMessage) for every page. */
export function shareMeta(lang: Lang) {
  const img = "https://www.startsaldo.ch/og/startsaldo-team.jpg";
  return [
    { property: "og:site_name", content: "StartSaldo" },
    { property: "og:locale", content: lang === "de" ? "de_CH" : "en_CH" },
    { property: "og:image", content: img },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:image", content: img },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
