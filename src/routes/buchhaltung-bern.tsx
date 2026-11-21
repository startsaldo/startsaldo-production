import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead, SITE } from "@/components/service-pages";

export const Route = createFileRoute("/buchhaltung-bern")({
  head: () => {
    const head = serviceHead("bern", "de");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "de", href: SITE + "/buchhaltung-bern" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/buchhaltung-bern" },
    ] };
  },
  component: () => <ServicePage lang="de" slug="bern" />,
});
