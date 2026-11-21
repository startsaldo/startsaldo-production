import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/service-page";
import { serviceHead } from "@/components/service-pages";

export const Route = createFileRoute("/en/accounting-zurich")({
  head: () => {
    const head = serviceHead("zuerich", "en");
    return { ...head, links: [...head.links,
      { rel: "alternate", hrefLang: "en", href: "https://www.startsaldo.ch/en/accounting-zurich" },
      { rel: "alternate", hrefLang: "x-default", href: "https://www.startsaldo.ch/buchhaltung-zuerich" },
    ] };
  },
  component: () => <ServicePage lang="en" slug="zuerich" />,
});
