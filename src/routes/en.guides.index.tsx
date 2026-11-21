import { createFileRoute } from "@tanstack/react-router";
import { RatgeberIndex } from "@/components/ratgeber-page";
import { SITE } from "@/components/service-pages";

const title = "Guides on accounting, VAT & company formation | StartSaldo";
const desc = "Articles for Swiss SMEs and start-ups: company formation, accounting, payroll and VAT explained clearly.";

export const Route = createFileRoute("/en/guides/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { property: "og:url", content: SITE + "/en/guides" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: SITE + "/en/guides" },
      { rel: "alternate", hrefLang: "de", href: SITE + "/ratgeber" },
      { rel: "alternate", hrefLang: "en", href: SITE + "/en/guides" },
      { rel: "alternate", hrefLang: "x-default", href: SITE + "/ratgeber" },
    ],
  }),
  component: () => <RatgeberIndex lang="en" />,
});
