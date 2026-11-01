import { shareMeta } from "@/components/structured-data";
import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/components/booking-page";

export const Route = createFileRoute("/termin")({
  head: () => ({
    meta: [
      { title: "Kostenloses Erstgespräch buchen | StartSaldo" },
      {
        name: "description",
        content:
          "Wählen Sie einen Termin für ein kostenloses und unverbindliches Erstgespräch mit StartSaldo – persönliche Finanz- und Lohnbuchhaltung für Schweizer KMU und Start-ups.",
      },
      { property: "og:title", content: "Kostenloses Erstgespräch | StartSaldo" },
      {
        property: "og:description",
        content: "Buchen Sie einen Termin für ein Erstgespräch – persönlich und unkompliziert.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://startsaldo.ch/termin" },
      ...shareMeta("de"),
    ],
    links: [
      { rel: "canonical", href: "https://startsaldo.ch/termin" },
      { rel: "alternate", hrefLang: "en", href: "https://startsaldo.ch/en/termin" },
    ],
  }),
  component: () => <BookingPage lang="de" />,
});
