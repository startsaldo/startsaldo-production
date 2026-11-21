import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/buchhaltung-zuerich")({
  head: () => {
    const head = serviceHead("zuerich", "de");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "de", href: "https://www.startsaldo.ch/buchhaltung-zuerich" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.startsaldo.ch/buchhaltung-zuerich" },
    ] };
  },
  component: () => <ServicePage lang="de" slug="zuerich" />,
});
