import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteFooter, SiteHeader } from "@/components/site-nav";
import { Button } from "@/components/ui/button";
import { articles, type Article } from "@/components/ratgeber";

const fmt = (d: string) => new Date(d).toLocaleDateString("de-CH", { day: "numeric", month: "long", year: "numeric" });

export function RatgeberIndex() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader lang="de" />
      <section className="section-pad bg-band-surface text-band-foreground">
        <div className="section-shell max-w-[900px] text-center">
          <h1 className="hero-reveal hero-reveal-1 heading-xl">Ratgeber<span className="block text-band-accent">für KMU und Start-ups</span></h1>
          <p className="hero-reveal hero-reveal-2 mx-auto mt-6 max-w-[640px] text-base leading-7 text-band-foreground/75 md:text-[18px]">Klare Antworten auf häufige Fragen zu Gründung, Buchhaltung, Lohn und MWST in der Schweiz.</p>
        </div>
      </section>
      <section className="section-pad bg-card">
        <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80} className="h-full">
              <Link to="/ratgeber/$slug" params={{ slug: a.slug }} className="flex h-full flex-col rounded-[20px] bg-sage-soft p-6 transition-colors hover:bg-sage md:rounded-[24px] md:p-8">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{a.category}</span>
                <h2 className="mt-3 text-[22px] font-semibold leading-tight">{a.title}</h2>
                <p className="mt-3 flex-1 text-[15px] leading-6 text-muted-foreground">{a.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Weiterlesen<ArrowRight className="size-4" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter lang="de" />
    </main>
  );
}

export function RatgeberArticle({ a }: { a: Article }) {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader lang="de" />
      <section className="section-pad bg-band-surface text-band-foreground">
        <div className="section-shell max-w-[820px]">
          <Link to="/ratgeber" className="text-sm text-band-foreground/70 hover:text-band-accent">← Ratgeber</Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-band-accent">{a.category} · {fmt(a.date)}</p>
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
          <p className="text-sm text-muted-foreground">Dieser Beitrag gibt einen allgemeinen Überblick und ersetzt keine individuelle Beratung.</p>
        </div>
      </article>
      <section className="section-pad bg-sage-soft">
        <div className="section-shell max-w-[720px] text-center">
          <h2 className="heading-lg">Fragen zu Ihrer Situation?</h2>
          <Button asChild className="mt-8 h-auto min-h-11 bg-primary px-5 py-3 text-primary-foreground hover:bg-primary-hover">
            <Link to="/termin">Kostenloses Erstgespräch<ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </section>
      <SiteFooter lang="de" />
    </main>
  );
}
