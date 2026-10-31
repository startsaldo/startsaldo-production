import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { businessJsonLd } from "@/components/structured-data";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "StartSaldo | Accounting & Payroll for Swiss SMEs and start-ups" },
      { name: "description", content: "Personal financial accounting and payroll for Swiss SMEs, start-ups and self-employed professionals." },
      { property: "og:title", content: "StartSaldo | Personal accounting" },
      { property: "og:description", content: "Clear processes. Personal support. Reliable accounting." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://startsaldo.ch/en" },
      { rel: "alternate", hrefLang: "de", href: "https://startsaldo.ch/" },
    ],
    scripts: [businessJsonLd("en")],
  }),
  component: () => <HomePage lang="en" />,
});
