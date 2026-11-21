import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead, SITE } from "@/components/service-pages";

export const Route = createFileRoute("/en/accounting-st-gallen")({
  head: () => {
    const head = serviceHead("st-gallen", "en");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "en", href: SITE + "/en/accounting-st-gallen" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/buchhaltung-st-gallen" },
    ] };
  },
  component: () => <ServicePage lang="en" slug="st-gallen" />,
});
