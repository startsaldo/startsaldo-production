import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead, SITE } from "@/components/service-pages";

export const Route = createFileRoute("/buchhaltung-st-gallen")({
  head: () => {
    const head = serviceHead("st-gallen", "de");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "de", href: SITE + "/buchhaltung-st-gallen" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/buchhaltung-st-gallen" },
    ] };
  },
  component: () => <ServicePage lang="de" slug="st-gallen" />,
});
