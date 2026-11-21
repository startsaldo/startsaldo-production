import { createFileRoute, notFound } from "@tanstack/react-router";
import { RatgeberArticle } from "@/components/ratgeber-page";
import { articleBySlug, localize } from "@/components/ratgeber";
import { SITE } from "@/components/service-pages";

export const Route = createFileRoute("/ratgeber/$slug")({
  loader: ({ params }) => {
    const a = articleBySlug(params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData: raw, params }) => {
    if (!raw) return { meta: [{ title: "Beitrag nicht gefunden | StartSaldo" }, { name: "robots", content: "noindex" }] };
    const a = localize(raw, "de");
    const url = `${SITE}/ratgeber/${params.slug}`;
    const alt = `${SITE}/en/guides/${params.slug}`;
    return {
      meta: [
        { title: a.seoTitle ?? `${a.title} | StartSaldo` }, { name: "description", content: a.metaDescription ?? a.desc },
        { property: "og:title", content: a.title }, { property: "og:description", content: a.metaDescription ?? a.desc },
        { property: "og:type", content: "article" }, { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: url },
        ...(raw.en ? [
          { rel: "alternate", hrefLang: "de", href: url },
          { rel: "alternate", hrefLang: "en", href: alt },
          { rel: "alternate", hrefLang: "x-default", href: url },
        ] : []),
      ],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Article", headline: a.title, description: a.metaDescription ?? a.desc, datePublished: a.date, dateModified: a.date, inLanguage: "de-CH", mainEntityOfPage: url, author: { "@type": "Organization", name: "StartSaldo", url: SITE + "/" }, publisher: { "@type": "Organization", name: "StartSaldo", url: SITE + "/" } },
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
  component: () => <RatgeberArticle article={Route.useLoaderData()} lang="de" />,
});
