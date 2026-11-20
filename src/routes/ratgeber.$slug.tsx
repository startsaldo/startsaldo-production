import { createFileRoute, notFound } from "@tanstack/react-router";
import { RatgeberArticle } from "@/components/ratgeber-page";
import { articleBySlug } from "@/components/ratgeber";
import { SITE } from "@/components/service-pages";

export const Route = createFileRoute("/ratgeber/$slug")({
  loader: ({ params }) => {
    const a = articleBySlug(params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData: a, params }) => {
    if (!a) return { meta: [{ title: "Beitrag nicht gefunden | StartSaldo" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE}/ratgeber/${params.slug}`;
    return {
      meta: [
        { title: `${a.title} | StartSaldo` }, { name: "description", content: a.desc },
        { property: "og:title", content: a.title }, { property: "og:description", content: a.desc },
        { property: "og:type", content: "article" }, { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", headline: a.title, description: a.desc, datePublished: a.date, dateModified: a.date, inLanguage: "de-CH", mainEntityOfPage: url, author: { "@type": "Organization", name: "StartSaldo", url: SITE + "/" }, publisher: { "@type": "Organization", name: "StartSaldo", url: SITE + "/" } },
            { "@type": "BreadcrumbList", itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: SITE + "/" },
              { "@type": "ListItem", position: 2, name: "Ratgeber", item: SITE + "/ratgeber" },
              { "@type": "ListItem", position: 3, name: a.title, item: url },
            ] },
          ],
        }),
      }],
    };
  },
  component: () => <RatgeberArticle a={Route.useLoaderData()} />,
});
