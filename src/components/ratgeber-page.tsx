import { services, servicePaths, type ServiceSlug } from "@/components/service-pages";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { SiteFooter, SiteHeader } from "@/components/site-nav";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { articlesForLang, localize, type Article, type ArticleBlock, type GuideLang } from "@/components/ratgeber";

const t = {
  de: { h: "Ratgeber", acc: "für KMU und Start-ups", sub: "Klare Antworten auf häufige Fragen zu Gründung, Buchhaltung, Lohn und MWST in der Schweiz.", more: "Weiterlesen", back: "← Ratgeber", note: "Dieser Beitrag gibt einen allgemeinen Überblick und ersetzt keine individuelle Beratung.", q: "Fragen zu Ihrer Situation?", cta: "Kostenloses Erstgespräch", locale: "de-CH" },
  en: { h: "Guides", acc: "for SMEs and start-ups", sub: "Clear answers to common questions on company formation, accounting, payroll and VAT in Switzerland.", more: "Read more", back: "← Guides", note: "This article gives a general overview and does not replace individual advice.", q: "Questions about your situation?", cta: "Free initial consultation", locale: "en-GB" },
};

export function RatgeberIndex({ lang }: { lang: GuideLang }) {
  const c = t[lang];
  return (
    <main className="bg-background text-foreground">
      <SiteHeader lang={lang} altTo={lang === "de" ? "/en/guides" : "/ratgeber"} />
      <section className="section-pad bg-band-surface text-band-foreground">
        <div className="section-shell max-w-[900px] text-center">
          <h1 className="hero-reveal hero-reveal-1 heading-xl">{c.h}<span className="block text-band-accent">{c.acc}</span></h1>
          <p className="hero-reveal hero-reveal-2 mx-auto mt-6 max-w-[640px] text-base leading-7 text-band-foreground/75 md:text-[18px]">{c.sub}</p>
        </div>
      </section>
      <section className="section-pad bg-card">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articlesForLang(lang).map((raw, i) => {
            const a = localize(raw, lang);
            const cls = "flex h-full flex-col rounded-[20px] bg-sage-soft p-6 transition-colors hover:bg-sage md:rounded-[24px] md:p-8";
            const inner = (<>
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{a.category}</span>
              <h2 className="mt-3 text-[22px] font-semibold leading-tight">{a.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-6 text-muted-foreground">{a.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">{c.more}<ArrowRight className="size-4" /></span>
            </>);
            return (
              <Reveal key={a.slug} delay={i * 80} className="h-full">
                {lang === "de"
                  ? <Link to="/ratgeber/$slug" params={{ slug: a.slug }} className={cls}>{inner}</Link>
                  : <Link to="/en/guides/$slug" params={{ slug: a.slug }} className={cls}>{inner}</Link>}
              </Reveal>
            );
          })}
        </div>
      </section>
      <SiteFooter lang={lang} />
    </main>
  );
}

/** Service pages linked from each article (internal linking for search). */
const relatedServices: Record<string, ServiceSlug[]> = {
  "buchhaltung-selber-machen-oder-auslagern": ["finanzbuchhaltung", "jahresabschluss", "mwst", "lohnbuchhaltung", "startups"],
  "treuhaender-kosten-gmbh-schweiz": ["finanzbuchhaltung", "jahresabschluss", "mwst", "lohnbuchhaltung", "zuerich", "luzern", "aargau"],
  "gmbh-oder-einzelfirma": ["startups", "steuern", "bern"],
  "mwst-pflicht-schweiz": ["mwst", "finanzbuchhaltung", "basel"],
  "aufbewahrungspflicht-geschaeftsunterlagen": ["finanzbuchhaltung", "jahresabschluss", "st-gallen"],
};

const contentLinkClass = "font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

function ContentLink({ href, children }: { href: string; children: ReactNode }) {
  if (href === "https://www.startsaldo.ch/mwst" || href === "/mwst") return <Link to="/mwst" className={contentLinkClass}>{children}</Link>;
  if (href === "https://www.startsaldo.ch/jahresabschluss" || href === "/jahresabschluss") return <Link to="/jahresabschluss" className={contentLinkClass}>{children}</Link>;
  if (href === "https://www.startsaldo.ch/termin" || href === "/termin") return <Link to="/termin" className={contentLinkClass}>{children}</Link>;
  const guide = href.match(/^(?:https:\/\/www\.startsaldo\.ch)?\/ratgeber\/([^/]+)$/);
  if (guide?.[1]) return <Link to="/ratgeber/$slug" params={{ slug: guide[1] }} className={contentLinkClass}>{children}</Link>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={contentLinkClass}>{children}</a>;
}

/** Render the supplied article's simple inline Markdown without injecting HTML. */
function InlineText({ text }: { text: string }): ReactNode {
  return text.split(/(\*\*[\s\S]+?\*\*|\*[^*]+?\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i} className="font-semibold text-foreground"><InlineText text={part.slice(2, -2)} /></strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={i}><InlineText text={part.slice(1, -1)} /></em>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <ContentLink key={i} href={link[2] ?? ""}>{link[1]}</ContentLink>;
    return part;
  });
}

function ArticleBlocks({ blocks, lang }: { blocks: ArticleBlock[]; lang: GuideLang }) {
  return (
    <div className="mt-4 space-y-4">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          const secondary = block.text.startsWith("*Quelle:") || block.text.startsWith("*Hinweis:");
          return <p key={i} className={`${secondary ? "text-sm text-muted-foreground" : "text-[16px] text-foreground/85"} leading-7`}><InlineText text={block.text} /></p>;
        }
        if (block.type === "table") {
          const threeColumns = block.headers.length === 3;
          const cellPadding = threeColumns ? "px-3 py-3.5 sm:px-4 sm:py-4" : "px-4 py-3.5 sm:px-5 sm:py-4";
          return (
            <div key={i} className="overflow-hidden rounded-[20px] border border-border bg-card pt-0">
              {threeColumns && (
                <div role="group" aria-label={block.label} className="divide-y divide-border sm:hidden">
                  {block.rows.map((row, rowIndex) => (
                    <dl key={row[0] ?? rowIndex} className="space-y-3 px-4 py-5">
                      {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className="grid grid-cols-[92px_minmax(0,1fr)] gap-3">
                          <dt className="font-semibold text-primary">{block.headers[cellIndex]}</dt>
                          <dd className="min-w-0 break-words text-foreground/85">{cell}</dd>
                        </div>
                      ))}
                    </dl>
                  ))}
                </div>
              )}
              <table aria-label={block.label} className={`${threeColumns ? "hidden text-[13px] sm:table sm:text-[14px]" : "text-[14px]"} w-full table-fixed border-collapse text-left leading-6`}>
                <colgroup>{block.headers.map((header, index) => <col key={header} className={index === 0 ? (threeColumns ? "w-[24%]" : "w-[58%]") : undefined} />)}</colgroup>
                <thead className="bg-sage-soft text-primary">
                  <tr>{block.headers.map((header) => <th key={header} scope="col" className={`${cellPadding} break-words font-semibold`}>{header}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {block.rows.map((row, rowIndex) => (
                    <tr key={row[0] ?? rowIndex}>
                      {row.map((cell, cellIndex) => cellIndex === 0
                        ? <th key={cellIndex} scope="row" className={`${cellPadding} break-words font-normal text-foreground/85`}>{cell}</th>
                        : <td key={cellIndex} className={`${cellPadding} break-words ${threeColumns ? "text-foreground/85" : "font-semibold text-foreground"}`}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-3 rounded-[20px] bg-sage-soft p-5 md:p-6">
              {block.items.map((item) => <li key={item} className="flex gap-3 text-[15px] leading-6"><Check className="mt-1 size-4 shrink-0 text-success" strokeWidth={1.75} /><span>{item}</span></li>)}
            </ul>
          );
        }
        if (block.type === "faq") {
          return (
            <Accordion key={i} type="single" collapsible className="rounded-[20px] border border-border bg-sage-soft px-5 md:px-6">
              {block.items.map((item) => (
                <AccordionItem key={item.question} value={item.question} className="last:border-b-0">
                  <AccordionTrigger className="min-h-[68px] gap-4 text-left text-base hover:no-underline">{item.question}</AccordionTrigger>
                  <AccordionContent className="max-w-[620px] pb-6 text-[15px] leading-7 text-muted-foreground"><InlineText text={item.answer} /></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          );
        }
        return (
          <Link key={i} to={lang === "de" ? block.to : "/en/termin"} className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
            {block.label}<ArrowRight className="size-4 shrink-0" />
          </Link>
        );
      })}
    </div>
  );
}

export function RatgeberArticle({ article, lang }: { article: Article; lang: GuideLang }) {
  const c = t[lang];
  const a = localize(article, lang);
  const date = new Date(a.date).toLocaleDateString(c.locale, { day: "numeric", month: "long", year: "numeric" });
  const altTo = lang === "de" ? (article.en ? `/en/guides/${a.slug}` : "/en/guides") : `/ratgeber/${a.slug}`;
  return (
    <main className="bg-background text-foreground">
      <SiteHeader lang={lang} altTo={altTo} />
      <section className="section-pad bg-band-surface text-band-foreground">
        <div className="section-shell max-w-[820px]">
          <Link to={lang === "de" ? "/ratgeber" : "/en/guides"} className="text-sm text-band-foreground/70 hover:text-band-accent">{c.back}</Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-band-accent">{a.category} · {date}</p>
          <h1 className="mt-3 heading-lg">{a.title}</h1>
          <p className="mt-5 text-base leading-7 text-band-foreground/75 md:text-[18px]">{a.desc}</p>
        </div>
      </section>
      <article className="section-pad bg-card">
        <div className="section-shell max-w-[720px] space-y-10">
          {a.lead && <div className="space-y-4">{a.lead.map((p) => <p key={p} className="text-[17px] leading-8 text-foreground/85"><InlineText text={p} /></p>)}</div>}
          {a.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-[24px] font-semibold md:text-[28px]">{s.h}</h2>
              {s.blocks ? <ArticleBlocks blocks={s.blocks} lang={lang} /> : s.p.map((p) => <p key={p} className="mt-4 text-[16px] leading-7 text-foreground/85">{p}</p>)}
            </section>
          ))}
          {a.defaultNote !== false && <p className="text-sm text-muted-foreground">{c.note}</p>}
          {(relatedServices[a.slug] ?? []).length > 0 && (
            <nav aria-label={lang === "de" ? "Passende Leistungen" : "Related services"} className="border-t border-border pt-6 text-[15px]">
              <p className="font-semibold">{lang === "de" ? "Passende Leistungen von StartSaldo:" : "Related StartSaldo services:"}</p>
              <ul className="mt-2 space-y-1.5">
                {(relatedServices[a.slug] ?? []).map((sv) => <li key={sv}><Link to={servicePaths[sv][lang]} className="text-primary underline-offset-4 hover:underline">{services[sv][lang].menu}</Link></li>)}
              </ul>
            </nav>
          )}
        </div>
      </article>
      <section className="section-pad bg-sage-soft">
        <div className="section-shell max-w-[720px] text-center">
          <h2 className="heading-lg">{c.q}</h2>
          <Button asChild className="mt-8 h-auto min-h-11 bg-primary px-5 py-3 text-primary-foreground hover:bg-primary-hover">
            <Link to={lang === "de" ? "/termin" : "/en/termin"}>{a.cta ?? c.cta}<ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter lang={lang} />
    </main>
  );
}
