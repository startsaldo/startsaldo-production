import { services, servicePaths, type ServiceSlug } from "@/components/service-pages";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteFooter, SiteHeader } from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import { articles, localize, type Article, type GuideLang } from "@/components/ratgeber";

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
          {articles.map((raw, i) => {
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
  "gmbh-oder-einzelfirma": ["startups", "steuern"],
  "mwst-pflicht-schweiz": ["mwst", "finanzbuchhaltung"],
  "aufbewahrungspflicht-geschaeftsunterlagen": ["finanzbuchhaltung", "jahresabschluss"],
};

export function RatgeberArticle({ article, lang }: { article: Article; lang: GuideLang }) {
  const c = t[lang];
  const a = localize(article, lang);
  const date = new Date(a.date).toLocaleDateString(c.locale, { day: "numeric", month: "long", year: "numeric" });
  return (
    <main className="bg-background text-foreground">
      <SiteHeader lang={lang} altTo={lang === "de" ? `/en/guides/${a.slug}` : `/ratgeber/${a.slug}`} />
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
          {a.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-[24px] font-semibold md:text-[28px]">{s.h}</h2>
              {s.p.map((p) => <p key={p} className="mt-4 text-[16px] leading-7 text-foreground/85">{p}</p>)}
            </section>
          ))}
          <p className="text-sm text-muted-foreground">{c.note}</p>
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
            <Link to={lang === "de" ? "/termin" : "/en/termin"}>{c.cta}<ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter lang={lang} />
    </main>
  );
}
