import { createFileRoute } from "@tanstack/react-router";
import { BookingPage } from "@/components/booking-page";

export const Route = createFileRoute("/en/termin")({
  head: () => ({
    meta: [
      { title: "Book a free initial consultation | StartSaldo" },
      {
        name: "description",
        content:
          "Choose a time for a free initial consultation with StartSaldo – personal accounting and payroll for Swiss SMEs and start-ups.",
      },
      { property: "og:title", content: "Free initial consultation | StartSaldo" },
      {
        property: "og:description",
        content: "Book a time for an initial consultation – personal and straightforward.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "alternate", hrefLang: "de", href: "/termin" }],
  }),
  component: () => <BookingPage lang="en" />,
});
