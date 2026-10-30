import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Check, FileText, Moon, ShieldCheck, Sun, UserPlus, Wallet } from "lucide-react";
import { copy, type Lang } from "@/components/home-copy";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSiteTheme } from "@/hooks/use-site-theme";
import startsaldoLogoLightUrl from "@/assets/startsaldo-logo.png";
import startsaldoLogoDarkUrl from "@/assets/startsaldo-logo-dark.png";
import sarahPhoto from "@/assets/sarah-photo.webp";

export const payrollCopy = {
  de: {
    title: "Lohnbuchhaltung für Schweizer KMU",
    titleAccent: "Pünktlich, korrekt und persönlich.",
    sub: "Von der monatlichen Lohnabrechnung bis zum Lohnausweis Ende Jahr.",
    cta: "Unverbindliches Erstgespräch",
    ctaContact: "Kontakt aufnehmen",
    blocksTitle: "Was wir für Sie übernehmen",
    blocks: [
      {
        title: "Monatliche Lohnabrechnung",
        items: ["Monats- und Stundenlöhne", "Zulagen, Spesen und Zuschläge", "Quellensteuer-Abrechnung", "Zahlungsdatei für Ihr E-Banking"],
      },
      {
        title: "Ein- und Austritte von Mitarbeitenden",
        items: ["Anmeldung und Abmeldung bei AHV/IV/EO", "Pensionskasse (BVG), Unfall- (UVG) und Krankentaggeldversicherung (KTG)", "Quellensteuer-Mutationen", "Arbeitgeberbescheinigungen"],
      },
      {
        title: "Sozialversicherungen",
        items: ["Abrechnung mit Ausgleichskasse und Familienausgleichskasse", "Abgleich mit Pensionskasse und Versicherungen", "Begleitung bei Mutterschaft, Krankheit und Unfall", "Antworten auf Ihre Fragen zu Beiträgen"],
      },
      {
        title: "Jahresendarbeiten",
        items: ["Lohnausweise für alle Mitarbeitenden", "Jahresdeklarationen AHV, UVG, KTG", "BVG-Lohnmeldungen", "Abstimmung mit der Finanzbuchhaltung"],
      },
    ],
    processTitle: "So läuft die Zusammenarbeit",
    process: [
      ["Erstgespräch", "Wir lernen Ihren Betrieb, Ihre Mitarbeitenden und Ihre Versicherungen kennen."],
      ["Übernahme", "Wir übernehmen die Stammdaten und richten die Lohnbuchhaltung sauber ein."],
      ["Monatlich", "Sie melden uns Stunden, Spesen und Änderungen – per E-Mail oder digital. Wir rechnen ab."],
      ["Ende Jahr", "Lohnausweise und Deklarationen erledigen wir fristgerecht."],
    ],
    personTitle: "Ihre Ansprechpartnerin",
    personName: "Sarah Mogel",
    personRole: "Payroll Spezialistin | Sozialversicherungen",
    personText: "Bei uns landen Sie nicht in einer Warteschlange. Sie haben eine feste Ansprechpartnerin, die Ihren Betrieb kennt und Ihre Fragen zu Löhnen und Sozialversicherungen verständlich beantwortet.",
    faqTitle: "Häufige Fragen zur Lohnbuchhaltung",
    faq: [
      ["Lohnt sich die Auslagerung auch für kleine Betriebe?", "Ja. Gerade bei wenigen Mitarbeitenden ist der Aufwand für Sozialversicherungen, Quellensteuer und Lohnausweise im Verhältnis gross. Wir nehmen Ihnen diese Arbeit ab."],
      ["Wie übermittle ich Stunden und Spesen?", "Ganz so, wie es für Sie am einfachsten ist – per E-Mail, als Liste oder digital. Wir besprechen das im Erstgespräch."],
      ["Was passiert bei einem Ein- oder Austritt?", "Sie informieren uns, wir kümmern uns um alle An- und Abmeldungen bei den Versicherungen und um die nötigen Bescheinigungen."],
      ["Übernehmen Sie auch die Finanzbuchhaltung?", "Ja. Auf Wunsch übernehmen wir auch die laufende Buchhaltung, MWST und den Jahresabschluss – alles aus einer Hand."],
    ],
    endTitle: "Bereit, die Lohnbuchhaltung abzugeben?",
    endSub: "Erzählen Sie uns in einem unverbindlichen Gespräch, wie Ihr Betrieb aufgestellt ist.",
    back: "Zur Startseite",
  },
  en: {
    title: "Payroll for Swiss SMEs",
    titleAccent: "On time, accurate and personal.",
    sub: "From the monthly payslip to the annual salary certificate.",
    cta: "Free initial consultation",
    ctaContact: "Get in touch",
    blocksTitle: "What we take care of",
    blocks: [
      {
        title: "Monthly payroll",
        items: ["Monthly and hourly wages", "Allowances, expenses and supplements", "Withholding tax", "Payment file for your e-banking"],
      },
      {
        title: "Employees joining and leaving",
        items: ["Registration and deregistration with AHV/IV/EO", "Pension fund (BVG), accident (UVG) and daily sickness insurance (KTG)", "Withholding tax changes", "Employer certificates"],
      },
      {
        title: "Social insurances",
        items: ["Settlement with compensation and family allowance funds", "Reconciliation with pension fund and insurers", "Support with maternity, illness and accidents", "Answers to your questions on contributions"],
      },
      {
        title: "Year-end work",
        items: ["Salary certificates for all employees", "Annual declarations AHV, UVG, KTG", "BVG salary reports", "Reconciliation with financial accounting"],
      },
    ],
    processTitle: "How we work together",
    process: [
      ["Initial meeting", "We get to know your business, your employees and your insurances."],
      ["Onboarding", "We take over the master data and set up your payroll properly."],
      ["Monthly", "You send us hours, expenses and changes – by e-mail or digitally. We do the payroll."],
      ["Year end", "We prepare salary certificates and declarations on time."],
    ],
    personTitle: "Your contact person",
    personName: "Sarah Mogel",
    personRole: "Payroll Specialist | Social Insurances",
    personText: "With us you never end up in a queue. You have one fixed contact person who knows your business and answers your questions on payroll and social insurances clearly.",
    faqTitle: "Frequently asked questions on payroll",
    faq: [
      ["Is outsourcing worthwhile for small businesses?", "Yes. Especially with few employees, the effort for social insurances, withholding tax and salary certificates is relatively high. We take this work off your hands."],
      ["How do I send hours and expenses?", "Whichever way is easiest for you – by e-mail, as a list or digitally. We discuss this in the initial meeting."],
      ["What happens when someone joins or leaves?", "You let us know, and we handle all registrations with the insurers and the required certificates."],
      ["Do you also do financial accounting?", "Yes. On request we also handle bookkeeping, VAT and the annual accounts – all from one source."],
    ],
    endTitle: "Ready to hand over your payroll?",
    endSub: "Tell us about your business in a free, no-obligation conversation.",
    back: "Back to home",
  },
} as const;

const icons = [Wallet, UserPlus, ShieldCheck, FileText];

export function PayrollPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const p = payrollCopy[lang];
  const { lightMode, toggleTheme } = useSiteTheme();
  const logoUrl = lightMode ? startsaldoLogoLightUrl : startsaldoLogoDarkUrl;
  const themeLabel = lightMode ? t.darkMode : t.lightMode;
  const homeTo = lang === "de" ? "/" : "/en";
  const terminTo = lang === "de" ? "/termin" : "/en/termin";
  const otherTo = lang === "de" ? "/en/payroll" : "/lohnbuchhaltung";
  const other = lang === "de" ? "en" : "de";

  return (
    <main className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-band-foreground/15 bg-band-surface/95 text-band-foreground backdrop-blur-md">
        <div className="section-shell flex h-16 items-center justify-between gap-3 md:h-[78px]">
          <Link to={homeTo} className="block min-w-0" aria-label={t.toTop}>
            <img src={logoUrl} alt="StartSaldo" className="h-auto w-[132px] sm:w-[148px]" />
          </Link>
          <div className="flex items-center gap-2">
            <Link to={otherTo} hrefLang={other} className="rounded-button border border-band-foreground/35 px-3 py-2 text-sm font-semibold text-band-foreground transition-colors hover:text-band-accent">
              {other.toUpperCase()}
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel} aria-pressed={lightMode} className="shrink-0 text-band-foreground hover:bg-band-foreground/10 hover:text-band-foreground">
              {lightMode ? <Moon /> : <Sun />}
            </Button>
          </div>
        </div>
      </header>

      <section className="section-pad bg-band-surface text-band-foreground">
        <div className="section-shell max-w-[860px] text-center">
          <h1 className="hero-reveal hero-reveal-1 heading-xl">
            {p.title}
            <span className="block text-band-accent">{p.titleAccent}</span>
          </h1>
          <p className="hero-reveal hero-reveal-2 mx-auto mt-6 max-w-[640px] text-base leading-7 text-band-foreground/75 md:text-[18px]">{p.sub}</p>
          <div className="hero-reveal hero-reveal-3 mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="h-auto min-h-11 bg-primary px-5 py-3 text-primary-foreground hover:bg-primary-hover">
              <Link to={terminTo}>{p.cta}<ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-card">
        <div className="section-shell">
          <Reveal><h2 className="heading-lg text-center">{p.blocksTitle}</h2></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {p.blocks.map((b, i) => {
              const Icon = icons[i] ?? Wallet;
              return (
                <Reveal key={b.title} delay={i * 80}>
                  <article className="h-full rounded-[20px] border border-border bg-background p-7">
                    <Icon className="size-7 text-primary" strokeWidth={1.6} />
                    <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {b.items.map((it) => (
                        <li key={it} className="flex gap-3 leading-6 text-muted-foreground">
                          <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={1.75} />{it}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-sage-soft">
        <div className="section-shell">
          <Reveal><h2 className="heading-lg text-center">{p.processTitle}</h2></Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {p.process.map(([title, text], i) => (
              <Reveal key={title} delay={i * 80} className="h-full"><li className="h-full list-none rounded-[20px] bg-card p-6">
                <span className="text-sm font-semibold text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-6 text-muted-foreground">{text}</p>
              </li></Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-card">
        <div className="section-shell grid items-center gap-10 md:grid-cols-[minmax(0,360px)_1fr]">
          <Reveal><img src={sarahPhoto} alt={p.personName} loading="lazy" className="aspect-square w-full rounded-[20px] object-cover object-top" /></Reveal>
          <Reveal delay={120}><div>
            <h2 className="heading-lg">{p.personTitle}</h2>
            <p className="mt-5 text-xl font-semibold">{p.personName}</p>
            <p className="text-muted-foreground">{p.personRole}</p>
            <p className="mt-5 max-w-[560px] leading-7 text-muted-foreground">{p.personText}</p>
            <a href="mailto:sarah@startsaldo.ch" className="mt-5 inline-block font-semibold text-primary">sarah@startsaldo.ch</a>
          </div></Reveal>
        </div>
      </section>

      <section className="section-pad bg-sage-soft">
        <div className="section-shell max-w-[820px]">
          <Reveal><h2 className="heading-lg text-center">{p.faqTitle}</h2></Reveal>
          <Reveal delay={120} className="mt-10"><Accordion type="single" collapsible>{p.faq.map(([q, a]) => (
            <AccordionItem key={q} value={q}><AccordionTrigger className="min-h-[72px] text-left text-base hover:no-underline">{q}</AccordionTrigger><AccordionContent className="max-w-[600px] pb-6 leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>
          ))}</Accordion></Reveal>
        </div>
      </section>

      <section className="section-pad bg-band-surface text-band-foreground">
        <Reveal className="section-shell text-center">
          <CalendarCheck className="mx-auto size-9 text-band-accent" strokeWidth={1.5} />
          <h2 className="heading-lg mt-5">{p.endTitle}</h2>
          <p className="mx-auto mt-4 max-w-[520px] text-band-foreground/75">{p.endSub}</p>
          <Button asChild className="mt-8 h-auto min-h-11 bg-primary px-5 py-3 text-primary-foreground hover:bg-primary-hover">
            <Link to={terminTo}>{p.cta}<ArrowRight className="size-4" /></Link>
          </Button>
          <p className="mt-6 text-sm text-band-foreground/75">
            <a href="mailto:info@startsaldo.ch">info@startsaldo.ch</a> · <a href="tel:+41766295056">+41 76 629 50 56</a>
          </p>
          <Link to={homeTo} className="mt-6 inline-block text-sm font-semibold text-band-accent">{p.back}</Link>
        </Reveal>
      </section>

      <footer className="bg-footer-surface py-10 text-band-foreground">
        <div className="section-shell flex flex-col items-center gap-2 text-center text-xs text-band-foreground/60 md:flex-row md:justify-between md:text-left">
          <p>© 2026 Digital Trust Solutions GmbH</p>
          <p>Schosstrasse 3, 6418 Rothenthurm</p>
        </div>
      </footer>
    </main>
  );
}
