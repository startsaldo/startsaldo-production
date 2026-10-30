import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Check } from "lucide-react";
import type { Lang } from "@/components/home-copy";
import { Reveal } from "@/components/reveal";
import { services, type Person, type ServiceSlug } from "@/components/service-pages";
import { SiteFooter, SiteHeader } from "@/components/site-nav";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import sarahPhoto from "@/assets/sarah-photo.webp";
import audeliaPhoto from "@/assets/audelia-photo.webp";

const people: Record<Person, { name: string; email: string; photo: string; role: Record<Lang, string> }> = {
  sarah: { name: "Sarah Mogel", email: "sarah@startsaldo.ch", photo: sarahPhoto, role: { de: "Payroll Spezialistin | Sozialversicherungen", en: "Payroll Specialist | Social Insurances" } },
  audelia: { name: "Audelia Babbev-Pittet", email: "audelia@startsaldo.ch", photo: audeliaPhoto, role: { de: "Finanzbuchhalterin", en: "Financial accountant" } },
};

export function ServicePage({ lang, slug }: { lang: Lang; slug: ServiceSlug }) {
  const p = services[slug][lang];
  const terminTo = lang === "de" ? "/termin" : "/en/termin";
  const homeTo = lang === "de" ? "/" : "/en";
  const single = p.people.length === 1;
  const contactTitle = lang === "de" ? (single ? "Ihre Ansprechpartnerin" : "Ihre Ansprechpartnerinnen") : single ? "Your contact person" : "Your contact persons";
  const blockCols = p.blocks.length === 4 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <main className="bg-background text-foreground">
      <SiteHeader lang={lang} slug={slug} />

      <section className="section-pad bg-band-surface text-band-foreground">
        <div className="section-shell max-w-[900px] text-center">
          <h1 className="hero-reveal hero-reveal-1 heading-xl">
            {p.title}
            <span className="block text-band-accent">{p.titleAccent}</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mx-auto mt-6 max-w-[640px] text-base leading-7 text-band-foreground/75 md:text-[18px]">{p.sub}</p>
          <div className="hero-reveal hero-reveal-3 mt-9 flex justify-center">
            <Button asChild className="h-auto min-h-11 bg-primary px-5 py-3 text-primary-foreground hover:bg-primary-hover">
              <Link to={terminTo}>{lang === "de" ? "Unverbindliches Erstgespräch" : "Free initial consultation"}<ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-card">
        <div className="section-shell">
          <Reveal><h2 className="heading-lg text-center">{p.blocksTitle}</h2></Reveal>
          <div className={`mt-12 grid gap-6 ${blockCols}`}>
            {p.blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 80} className="h-full">
                <article className="h-full rounded-[20px] border border-border bg-background p-7">
                  <h3 className="text-xl font-semibold">{b.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {b.items.map((it) => (
                      <li key={it} className="flex gap-3 leading-6 text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={1.75} />{it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sage-soft">
        <div className="section-shell">
          <Reveal><h2 className="heading-lg text-center">{p.processTitle}</h2></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {p.process.map(([title, text], i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="h-full rounded-[20px] bg-card p-6">
                  <span className="text-sm font-semibold text-primary">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-6 text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-card">
        <div className="section-shell">
          <Reveal className="text-center">
            <h2 className="heading-lg">{contactTitle}</h2>
            <p className="mx-auto mt-5 max-w-[620px] leading-7 text-muted-foreground">{p.personText}</p>
          </Reveal>
          <div className={`mx-auto mt-12 grid gap-6 ${single ? "max-w-[420px]" : "max-w-[860px] md:grid-cols-2"}`}>
            {p.people.map((k, i) => {
              const person = people[k];
              return (
                <Reveal key={k} delay={i * 120}>
                  <article className="overflow-hidden rounded-[20px] border border-border bg-background">
                    <img src={person.photo} alt={person.name} loading="lazy" className="aspect-square w-full object-cover object-top" />
                    <div className="p-6">
                      <p className="text-xl font-semibold">{person.name}</p>
                      <p className="mt-1 font-semibold text-primary">{person.role[lang]}</p>
                      <a href={`mailto:${person.email}`} className="mt-4 inline-block font-semibold text-primary hover:text-success">{person.email}</a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sage-soft">
        <div className="section-shell max-w-[820px]">
          <Reveal><h2 className="heading-lg text-center">{p.faqTitle}</h2></Reveal>
          <Reveal delay={120} className="mt-10">
            <Accordion type="single" collapsible>
              {p.faq.map(([q, a]) => (
                <AccordionItem key={q} value={q}>
                  <AccordionTrigger className="min-h-[72px] text-left text-base hover:no-underline">{q}</AccordionTrigger>
                  <AccordionContent className="max-w-[600px] pb-6 leading-7 text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-band-surface text-band-foreground">
        <Reveal className="section-shell text-center">
          <CalendarCheck className="mx-auto size-9 text-band-accent" strokeWidth={1.5} />
          <h2 className="heading-lg mt-5">{p.endTitle}</h2>
          <p className="mx-auto mt-4 max-w-[520px] text-band-foreground/75">{p.endSub}</p>
          <Button asChild className="mt-8 h-auto min-h-11 bg-primary px-5 py-3 text-primary-foreground hover:bg-primary-hover">
            <Link to={terminTo}>{lang === "de" ? "Unverbindliches Erstgespräch" : "Free initial consultation"}<ArrowRight className="size-4" /></Link>
          </Button>
          <p className="mt-6 text-sm text-band-foreground/75">
            <a href="mailto:info@startsaldo.ch">info@startsaldo.ch</a> · <a href="tel:+41766295056">+41 76 629 50 56</a>
          </p>
          <Link to={homeTo} className="mt-6 inline-block text-sm font-semibold text-band-accent">{lang === "de" ? "Zur Startseite" : "Back to home"}</Link>
        </Reveal>
      </section>

      <SiteFooter lang={lang} />
    </main>
  );
}
