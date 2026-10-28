import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Moon, Sun } from "lucide-react";
import { copy, type Lang } from "@/components/home-copy";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { useSiteTheme } from "@/hooks/use-site-theme";
import startsaldoLogoLightUrl from "@/assets/startsaldo-logo.png";
import startsaldoLogoDarkUrl from "@/assets/startsaldo-logo-dark.png";

export const PROTON_BOOKING_URL =
  "https://calendar.proton.me/bookings#aoKD9adzG08Fb5PKXT_boUZbBrowx2wglL7dlHh7oos=";

export function BookingPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { lightMode, toggleTheme } = useSiteTheme();
  const logoUrl = lightMode ? startsaldoLogoLightUrl : startsaldoLogoDarkUrl;
  const themeLabel = lightMode ? t.darkMode : t.lightMode;
  const homeTo = lang === "de" ? "/" : "/en";
  const terminTo = lang === "de" ? "/termin" : "/en/termin";
  const otherTerminTo = lang === "de" ? "/en/termin" : "/termin";
  const other = lang === "de" ? "en" : "de";

  return (
    <main className="bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-band-foreground/15 bg-band-surface/95 text-band-foreground backdrop-blur-md">
        <div className="section-shell flex h-16 items-center justify-between gap-3 md:h-[78px]">
          <Link to={homeTo} className="block min-w-0" aria-label={t.toTop}>
            <img src={logoUrl} alt="StartSaldo" className="h-auto w-[132px] sm:w-[148px]" />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              to={otherTerminTo}
              hrefLang={other}
              className="rounded-button border border-band-foreground/35 px-3 py-2 text-sm font-semibold text-band-foreground transition-colors hover:text-band-accent"
            >
              {other.toUpperCase()}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
              aria-pressed={lightMode}
              className="shrink-0 text-band-foreground hover:bg-band-foreground/10 hover:text-band-foreground"
            >
              {lightMode ? <Moon /> : <Sun />}
            </Button>
          </div>
        </div>
      </header>

      <section className="section-pad bg-band-surface text-band-foreground">
        <div className="section-shell">
          <div className="mx-auto max-w-[720px] text-center">
            <h1 className="heading-lg">{t.terminTitle}</h1>
            <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-band-foreground/75 md:text-[18px]">
              {t.terminSub}
            </p>
          </div>
          <Reveal className="mx-auto mt-10 max-w-[640px] md:mt-14">
            <div className="rounded-[24px] bg-sage-soft p-6 text-foreground md:p-10">
              <p className="leading-7 text-muted-foreground">{t.terminTrust}</p>
              <Button
                asChild
                className="mt-7 h-auto min-h-11 w-full whitespace-normal bg-primary px-5 py-3 text-primary-foreground hover:bg-primary-hover sm:w-auto"
              >
                <a href={PROTON_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t.terminBtn}
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </Button>
              <p className="mt-4 text-xs leading-5 text-muted-foreground">{t.terminExternal}</p>
            </div>
            <div className="mt-10 text-center text-sm leading-7 text-band-foreground/75">
              <p>{t.terminAlt}</p>
              <p className="mt-2 font-semibold text-band-foreground">
                <a href="mailto:info@startsaldo.ch" className="transition-colors hover:text-band-accent">
                  info@startsaldo.ch
                </a>
                <span className="px-2 text-band-foreground/40">·</span>
                <a href="tel:+41766295056" className="transition-colors hover:text-band-accent">
                  +41 76 629 50 56
                </a>
              </p>
              <Link
                to={terminTo === "/termin" ? "/" : "/en"}
                className="mt-8 inline-flex items-center gap-2 font-semibold text-band-accent transition-colors hover:text-band-foreground"
              >
                <ArrowLeft className="size-4 shrink-0" />
                {t.terminBack}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-footer-surface py-10 text-band-foreground">
        <div className="section-shell flex flex-col items-center gap-2 text-center text-xs text-band-foreground/60 md:flex-row md:justify-between md:text-left">
          <p>© 2026 Digital Trust Solutions GmbH</p>
          <p>6418 Rothenthurm</p>
        </div>
      </footer>
    </main>
  );
}
