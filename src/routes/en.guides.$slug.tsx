import { createFileRoute, notFound } from "@tanstack/react-router";
import { RatgeberArticle } from "@/components/ratgeber-page";
import { articleBySlug, localize } from "@/components/ratgeber";
import { SITE } from "@/components/service-pages";

export const Route = createFileRoute("/en/guides/$slug")({
  loader: ({ params }) => {
    const a = articleBySlug(params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData: raw, params }) => {
    if (!raw) return { meta: [{ title: "Article not found | StartSaldo" }, { name: "robots", content: "noindex" }] };
    const a = localize(raw, "en");
    const url = `${SITE}/en/guides/${params.slug}`;
    const alt = `${SITE}/ratgeber/${params.slug}`;
    return {
      meta: [
        { title: `${a.title} | StartSaldo` }, { name: "description", content: a.desc },
        { property: "og:title", content: a.title }, { property: "og:description", content: a.desc },
        { property: "og:type", content: "article" }, { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "de", href: alt },
        { rel: "alternate", hrefLang: "en", href: url },
        { rel: "alternate", hrefLang: "x-default", href: alt },
      ],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", headline: a.title, description: a.desc, datePublished: a.date, dateModified: a.date, inLanguage: "en", mainEntityOfPage: url, author: { "@type": "Organization", name: "StartSaldo", url: SITE + "/" }, publisher: { "@type": "Organization", name: "StartSaldo", url: SITE + "/" } },
            { "@type": "BreadcrumbList", itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/en" },
              { "@type": "ListItem", position: 2, name: "Guides", item: SITE + "/en/guides" },
              { "@type": "ListItem", position: 3, name: a.title, item: url },
            ] },
          ],
        }),
      }],
    };
  },
  component: () => <RatgeberArticle article={Route.useLoaderData()} lang="en" />,
});
