import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead, SITE } from "@/components/service-pages";

export const Route = createFileRoute("/en/accounting-basel")({
  head: () => {
    const head = serviceHead("basel", "en");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "en", href: SITE + "/en/accounting-basel" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/buchhaltung-basel" },
    ] };
  },
  component: () => <ServicePage lang="en" slug="basel" />,
});
