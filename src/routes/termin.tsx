import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/components/booking-page";

export const Route = createFileRoute("/termin")({
  head: () => ({
    meta: [
      { title: "Unverbindliches Erstgespräch buchen | StartSaldo" },
      {
        name: "description",
        content:
          "Wählen Sie einen Termin für ein unverbindliches Erstgespräch mit StartSaldo – persönliche Finanz- und Lohnbuchhaltung für Schweizer KMU.",
      },
      { property: "og:title", content: "Unverbindliches Erstgespräch | StartSaldo" },
      {
        property: "og:description",
        content: "Buchen Sie einen Termin für ein Erstgespräch – persönlich und unkompliziert.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "alternate", hrefLang: "en", href: "/en/termin" }],
  }),
  component: () => <BookingPage lang="de" />,
});
