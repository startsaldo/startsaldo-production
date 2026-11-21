import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead, SITE } from "@/components/service-pages";

export const Route = createFileRoute("/en/accounting-aargau")({
  head: () => {
    const head = serviceHead("aargau", "en");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "en", href: SITE + "/en/accounting-aargau" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/buchhaltung-aargau" },
    ] };
  },
  component: () => <ServicePage lang="en" slug="aargau" />,
});
