import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead, SITE } from "@/components/service-pages";

export const Route = createFileRoute("/en/accounting-bern")({
  head: () => {
    const head = serviceHead("bern", "en");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "en", href: SITE + "/en/accounting-bern" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/buchhaltung-bern" },
    ] };
  },
  component: () => <ServicePage lang="en" slug="bern" />,
});
