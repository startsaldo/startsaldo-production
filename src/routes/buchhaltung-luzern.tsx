import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/buchhaltung-luzern")({
  head: () => {
    const head = serviceHead("luzern", "de");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "de", href: "https://www.startsaldo.ch/buchhaltung-luzern" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.startsaldo.ch/buchhaltung-luzern" },
    ] };
  },
  component: () => <ServicePage lang="de" slug="luzern" />,
});
