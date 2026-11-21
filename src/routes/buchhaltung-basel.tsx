import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead, SITE } from "@/components/service-pages";

export const Route = createFileRoute("/buchhaltung-basel")({
  head: () => {
    const head = serviceHead("basel", "de");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "de", href: SITE + "/buchhaltung-basel" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/buchhaltung-basel" },
    ] };
  },
  component: () => <ServicePage lang="de" slug="basel" />,
});
