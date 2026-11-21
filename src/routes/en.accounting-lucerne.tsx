import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/en/accounting-lucerne")({
  head: () => {
    const head = serviceHead("luzern", "en");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "en", href: "https://www.startsaldo.ch/en/accounting-lucerne" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.startsaldo.ch/buchhaltung-luzern" },
    ] };
  },
  component: () => <ServicePage lang="en" slug="luzern" />,
});
