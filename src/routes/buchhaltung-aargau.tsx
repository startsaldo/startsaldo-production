import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead, SITE } from "@/components/service-pages";

export const Route = createFileRoute("/buchhaltung-aargau")({
  head: () => {
    const head = serviceHead("aargau", "de");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "de", href: SITE + "/buchhaltung-aargau" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/buchhaltung-aargau" },
    ] };
  },
  component: () => <ServicePage lang="de" slug="aargau" />,
});
