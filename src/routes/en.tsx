import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "StartSaldo | Accounting & Payroll for Swiss SMEs" },
      { name: "description", content: "Personal financial accounting and payroll for Swiss SMEs, start-ups and self-employed professionals." },
      { property: "og:title", content: "StartSaldo | Personal accounting" },
      { property: "og:description", content: "Clear processes. Personal support. Reliable accounting." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "alternate", hrefLang: "de", href: "/" }],
  }),
  component: () => <HomePage lang="en" />,
});
