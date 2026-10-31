import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { copy, type Lang } from "@/components/home-copy";
import { navOrder, serviceOrder, servicePaths, services, type ServiceSlug } from "@/components/service-pages";
import { Button } from "@/components/ui/button";
import { useSiteTheme } from "@/hooks/use-site-theme";
import startsaldoLogoLightUrl from "@/assets/startsaldo-logo.png";
import startsaldoLogoDarkUrl from "@/assets/startsaldo-logo-dark.png";

export const servicesLabel = { de: "Leistungen", en: "Services" } as const;

/** Desktop dropdown listing all service and region pages. */
export function ServicesMenu({ lang }: { lang: Lang }) {
  return (
    <div className="group relative">
      <button type="button" className="inline-flex items-center gap-1 whitespace-nowrap font-medium text-band-foreground transition-colors hover:text-band-accent" aria-haspopup="true">
        {servicesLabel[lang]}
        <ChevronDown className="size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <div className="w-[240px] rounded-[16px] border border-band-foreground/15 bg-band-surface p-2 shadow-[0_24px_40px_-20px_rgba(23,32,28,0.35)]">
          {serviceOrder.map((s) => (
            <Link key={s} to={servicePaths[s][lang]} className="block rounded-[10px] px-3 py-2.5 text-[14px] font-medium text-band-foreground transition-colors hover:bg-band-foreground/10 hover:text-band-accent" activeProps={{ className: "text-band-accent" }}>
              {services[s][lang].menu}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Mobile list of service pages, shown inside the hamburger menu. */
export function MobileServiceLinks({ lang, onClick }: { lang: Lang; onClick?: () => void }) {
  return (
    <div className="border-b border-band-foreground/15 py-3">
      <p className="pb-2 text-base font-medium">{servicesLabel[lang]}</p>
      <div className="grid grid-cols-2 gap-x-4">
        {serviceOrder.map((s) => (
          <Link key={s} to={servicePaths[s][lang]} onClick={onClick} className="py-2 text-[15px] text-band-foreground/80 hover:text-band-accent">
            {services[s][lang].menu}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Header for sub pages: same menu as the home page, anchors point back to home sections. */
export function SiteHeader({ lang, slug }: { lang: Lang; slug?: ServiceSlug }) {
  const t = copy[lang];
  const { lightMode, toggleTheme } = useSiteTheme();
  const [open, setOpen] = useState(false);
  const logoUrl = lightMode ? startsaldoLogoLightUrl : startsaldoLogoDarkUrl;
  const themeLabel = lightMode ? t.darkMode : t.lightMode;
  const home = lang === "de" ? "/" : "/en";
  const other: Lang = lang === "de" ? "en" : "de";
  const otherTo = slug ? servicePaths[slug][other] : other === "en" ? "/en" : "/";
  const anchors = t.nav.filter(([, h]) => h !== "#dienstleistungen");
  const langLink = (cls: string) => (
    <Link to={otherTo} hrefLang={other} aria-label={t.switchLabel} className={cls} onClick={() => setOpen(false)}>{other.toUpperCase()}</Link>
  );
  return (
    <header className="sticky top-0 z-50 border-b border-band-foreground/15 bg-band-surface/95 text-band-foreground backdrop-blur-md">
      <div className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 min-[860px]:h-[78px] min-[860px]:grid-cols-[auto_minmax(0,1fr)_auto_auto_auto] lg:gap-4">
        <Link to={home} className="block min-w-0" aria-label={t.toTop}>
          <img src={logoUrl} alt="StartSaldo" className="h-auto w-[132px] sm:w-[148px]" />
        </Link>
        <nav className="hidden items-center justify-center gap-4 text-[13.5px] min-[860px]:flex lg:gap-7 lg:text-[14px]">
          <ServicesMenu lang={lang} />
          {anchors.map(([label, href]) => <a key={href} href={`${home === "/" ? "" : home}/${href}`} className="whitespace-nowrap font-medium text-band-foreground transition-colors hover:text-band-accent">{label}</a>)}
        </nav>
        <Button asChild className="hidden bg-band-accent text-band-surface hover:bg-band-hover min-[860px]:inline-flex"><Link to={lang === "de" ? "/termin" : "/en/termin"}>{t.cta}</Link></Button>
        {langLink("ml-1 hidden rounded-button border border-band-foreground/35 px-3 py-2 text-sm font-semibold text-band-foreground transition-colors hover:text-band-accent min-[860px]:inline-flex")}
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel} aria-pressed={lightMode} className="shrink-0 text-band-foreground hover:bg-band-foreground/10 hover:text-band-foreground">{lightMode ? <Moon /> : <Sun />}</Button>
        <button aria-label={open ? t.menuClose : t.menuOpen} aria-expanded={open} className="grid size-10 shrink-0 place-items-center rounded-button border border-band-foreground/35 bg-transparent text-band-foreground min-[860px]:hidden" onClick={() => setOpen(!open)}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>
      <div className={`absolute inset-x-0 top-full z-40 border-b border-band-foreground/15 bg-band-surface text-band-foreground shadow-[0_24px_40px_-20px_rgba(23,32,28,0.25)] transition-all duration-300 ease-out min-[860px]:hidden ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`} aria-hidden={!open}>
        <nav className="section-shell flex flex-col py-2">
          <MobileServiceLinks lang={lang} onClick={() => setOpen(false)} />
          {anchors.map(([label, href]) => <a key={href} href={`${home === "/" ? "" : home}/${href}`} className="border-b border-band-foreground/15 py-3.5 text-base font-medium">{label}</a>)}
          {langLink("py-3.5 text-base font-semibold text-band-accent")}
        </nav>
      </div>
    </header>
  );
}

export function FooterServiceLinks({ lang }: { lang: Lang }) {
  return (
    <nav className="flex flex-col items-start gap-3 text-sm" aria-label={servicesLabel[lang]}>
      {serviceOrder.map((s) => <Link key={s} to={servicePaths[s][lang]} className="hover:text-band-accent">{services[s][lang].menu}</Link>)}
    </nav>
  );
}

export function SiteFooter({ lang }: { lang: Lang }) {
  const { lightMode } = useSiteTheme();
  const t = copy[lang];
  return (
    <footer className="bg-footer-surface py-12 text-band-foreground">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={lightMode ? startsaldoLogoLightUrl : startsaldoLogoDarkUrl} alt="StartSaldo" className="h-auto w-[148px]" />
            <p className="mt-3 text-sm leading-6 text-band-foreground/65">{t.footerTag}</p>
          </div>
          <div className="md:mx-auto md:w-fit"><FooterServiceLinks lang={lang} /></div>
          <div className="text-sm leading-7 md:justify-self-end">
            <a href="mailto:info@startsaldo.ch">info@startsaldo.ch</a><br />
            <a href="tel:+41766295056">+41 76 629 50 56</a><br />
            Schosstrasse 3, 6418 Rothenthurm
          </div>
        </div>
        <div className="mt-10 border-t border-band-foreground/15 pt-6 text-xs text-band-foreground/60">© 2026 Digital Trust Solutions GmbH</div>
      </div>
    </footer>
  );
}
