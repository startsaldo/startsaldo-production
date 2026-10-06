import { Link } from "@tanstack/react-router";
import { copy, type Lang } from "@/components/home-copy";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, CheckCircle2, ClipboardCheck, Cloud, Mail, Menu, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import audeliaPhotoUrl from "@/assets/audelia.jpg";
import sarahPhotoUrl from "@/assets/sarah.jpg";
import startsaldoLogoDarkUrl from "@/assets/startsaldo-logo-dark.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";



function StatementCard({ title, rows, highlighted = false }: { title: string; rows: string[]; highlighted?: boolean }) {
  return (
    <div className={`statement-card ${highlighted ? "statement-card-highlighted" : ""}`} aria-hidden="true">
      <div className="border-b border-primary-foreground/15 pb-2">
        <span className="block truncate whitespace-nowrap text-[9px] font-semibold uppercase leading-none tracking-[0.05em]">{title}</span>
      </div>
      <div className="mt-2 space-y-2">
        {rows.map((row, index) => (
          <div key={row} className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-1.5 sm:gap-2">
            <span className="truncate whitespace-nowrap text-[7.5px] leading-none text-primary-foreground/65 sm:text-[8px]">{row}</span>
            <span className={`h-1 w-8 shrink-0 rounded-full bg-primary-foreground/25 sm:w-11 ${index % 2 ? "max-w-7 sm:max-w-8" : "max-w-8 sm:max-w-11"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatementMarquee({ reverse = false, statementCards }: { reverse?: boolean; statementCards: { title: string; rows: string[] }[] }) {
  const cards = Array.from({ length: 12 }).flatMap(() => statementCards);
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Fade cards in/out via their own opacity near the rail edges — no mask,
  // no gradient overlay. Cards keep their look and simply become transparent.
  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cardEls = Array.from(track.children) as HTMLElement[];
    const fadeWidth = 170;
    let raf = 0;
    const tick = () => {
      const railRect = rail.getBoundingClientRect();
      const rects = cardEls.map((el) => el.getBoundingClientRect());
      cardEls.forEach((el, i) => {
        const rect = rects[i]!;
        const d = Math.min(rect.right - railRect.left, railRect.right - rect.left);
        const t = Math.min(Math.max(d / fadeWidth, 0), 1);
        const eased = t * t * (3 - 2 * t);
        el.style.opacity = (eased * 0.75).toFixed(3);
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="statement-rail" ref={railRef}>
      <div ref={trackRef} className={reverse ? "statement-track statement-track-reverse" : "statement-track"}>
        {cards.map((card, index) => <StatementCard key={`${card.title}-${index}`} {...card} highlighted={index % 4 === 1} />)}
      </div>
    </div>
  );
}

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const other = lang === "de" ? "en" : "de";
  const langLink = (cls: string, onClick?: () => void) => <Link to={other === "en" ? "/en" : "/"} onClick={onClick} hrefLang={other} aria-label={t.switchLabel} className={cls}>{other.toUpperCase()}</Link>;
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  // Menü ausblenden beim Herunterscrollen, einblenden beim Hochscrollen.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;
      if (y < 100) {
        setHeaderHidden(false);
      } else if (delta > 6) {
        setHeaderHidden(true);
        setMenuOpen(false);
      } else if (delta < -6) {
        setHeaderHidden(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    setSendError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          firma: fd.get("firma"),
          email: fd.get("email"),
          telefon: fd.get("telefon"),
          nachricht: fd.get("nachricht"),
          lang,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? t.sendFail);
      }
      form.reset();
      setSent(true);
    } catch (err) {
      setSendError(err instanceof Error ? err.message : t.sendFail);
    } finally {
      setSending(false);
    }
  }
  const testiRef = useRef<HTMLDivElement>(null);

  // The feedback rail moves slowly on its own, pauses for direct interaction,
  // and loops through its duplicated card group without a visible jump.
  useEffect(() => {
    const rail = testiRef.current;
    if (!rail) return;
    const cardEls = Array.from(rail.querySelectorAll("[data-testi-card]")) as HTMLElement[];
    const fadeWidth = 400;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let paused = false;
    let dragging = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;
    let resumeTimer = 0;
    let raf = 0;
    let previousTime = performance.now();
    let autoPosition = rail.scrollWidth / 2;

    const loopPosition = () => {
      const groupWidth = rail.scrollWidth / 2;
      if (!groupWidth) return;
      if (rail.scrollLeft <= 0) rail.scrollLeft += groupWidth;
      else if (rail.scrollLeft >= groupWidth) rail.scrollLeft -= groupWidth;
      autoPosition = rail.scrollLeft;
    };
    const pauseTemporarily = () => {
      paused = true;
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        if (!dragging && !rail.matches(":hover")) paused = false;
      }, 1800);
    };
    const updateFade = () => {
      const railRect = rail.getBoundingClientRect();
      cardEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const d = Math.min(rect.right - railRect.left, railRect.right - rect.left);
        const t = Math.min(Math.max(d / fadeWidth, 0), 1);
        const eased = t * t * (3 - 2 * t);
        el.style.opacity = eased.toFixed(3);
      });
    };
    const tick = (time: number) => {
      const elapsed = Math.min(time - previousTime, 40);
      previousTime = time;
      if (!paused && !reducedMotion) {
        const groupWidth = rail.scrollWidth / 2;
        autoPosition -= elapsed * 0.012;
        if (autoPosition <= 0) autoPosition += groupWidth;
        rail.scrollLeft = autoPosition;
      }
      updateFade();
      raf = requestAnimationFrame(tick);
    };
    const onMouseEnter = () => { paused = true; };
    const onMouseLeave = () => {
      if (!dragging) paused = false;
    };
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      pauseTemporarily();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      rail.scrollLeft += delta;
      loopPosition();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      dragging = true;
      paused = true;
      dragStartX = event.clientX;
      dragStartScrollLeft = rail.scrollLeft;
      rail.setPointerCapture(event.pointerId);
      rail.dataset["dragging"] = "true";
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging || event.pointerType !== "mouse") return;
      rail.scrollLeft = dragStartScrollLeft - (event.clientX - dragStartX);
      loopPosition();
    };
    const endPointerDrag = (event: PointerEvent) => {
      if (!dragging || event.pointerType !== "mouse") return;
      dragging = false;
      delete rail.dataset["dragging"];
      if (rail.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId);
      pauseTemporarily();
    };
    const onTouchStart = () => { paused = true; };
    const onTouchEnd = () => {
      loopPosition();
      pauseTemporarily();
    };

    rail.scrollLeft = autoPosition;
    rail.addEventListener("mouseenter", onMouseEnter);
    rail.addEventListener("mouseleave", onMouseLeave);
    rail.addEventListener("wheel", onWheel, { passive: false });
    rail.addEventListener("pointerdown", onPointerDown);
    rail.addEventListener("pointermove", onPointerMove);
    rail.addEventListener("pointerup", endPointerDrag);
    rail.addEventListener("pointercancel", endPointerDrag);
    rail.addEventListener("touchstart", onTouchStart, { passive: true });
    rail.addEventListener("touchend", onTouchEnd, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resumeTimer);
      rail.removeEventListener("mouseenter", onMouseEnter);
      rail.removeEventListener("mouseleave", onMouseLeave);
      rail.removeEventListener("wheel", onWheel);
      rail.removeEventListener("pointerdown", onPointerDown);
      rail.removeEventListener("pointermove", onPointerMove);
      rail.removeEventListener("pointerup", endPointerDrag);
      rail.removeEventListener("pointercancel", endPointerDrag);
      rail.removeEventListener("touchstart", onTouchStart);
      rail.removeEventListener("touchend", onTouchEnd);
    };
  }, []);
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
      window.scrollTo(0, 0);
    }
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      const id = a?.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  const nav = t.nav;
  const checks = (items: string[], light = false) => <ul className="mt-7 space-y-3.5">{items.map((item) => <li key={item} className="flex gap-3 text-[15px] leading-6"><Check className={`mt-1 size-4 shrink-0 ${light ? "text-sage" : "text-success"}`} />{item}</li>)}</ul>;
  return (
    <main className="bg-background text-foreground">
      <header className={`sticky top-0 z-50 border-b border-primary-foreground/15 bg-deep/95 text-primary-foreground backdrop-blur-md transition-transform duration-300 ease-out ${headerHidden ? "-translate-y-full" : "translate-y-0"}`}>
        <div className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:h-[78px] md:grid-cols-[auto_minmax(0,1fr)_auto_auto] lg:gap-4">
          <a href="#top" className="block min-w-0" aria-label={t.toTop}>
             <img src={startsaldoLogoDarkUrl} alt="StartSaldo" className="h-auto w-[132px] sm:w-[148px]" />
          </a>
           <nav className="hidden justify-center gap-4 text-[13.5px] md:flex lg:gap-7 lg:text-[14px]">{nav.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap font-medium text-primary-foreground transition-colors hover:text-sage">{label}</a>)}</nav>
           <Button asChild className="hidden bg-sage text-deep hover:bg-sage-soft md:inline-flex"><a href="#kontakt">{t.cta}</a></Button>
           {langLink("ml-1 hidden rounded-button border border-primary-foreground/35 px-3 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-sage md:inline-flex")}
           <button aria-label={menuOpen ? t.menuClose : t.menuOpen} aria-expanded={menuOpen} className="grid size-10 shrink-0 place-items-center rounded-button border border-primary-foreground/35 bg-transparent text-primary-foreground md:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X className="size-5"/> : <Menu className="size-5"/>}</button>
        </div>
         <div className={`absolute inset-x-0 top-full z-40 border-b border-primary-foreground/15 bg-deep text-primary-foreground shadow-[0_24px_40px_-20px_rgba(23,32,28,0.25)] transition-all duration-300 ease-out md:hidden ${menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`} aria-hidden={!menuOpen}>
           <nav className="section-shell flex flex-col py-2">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-primary-foreground/15 py-3.5 text-base font-medium">{label}</a>)}{langLink("py-3.5 text-base font-semibold text-sage", () => setMenuOpen(false))}</nav>
        </div>
      </header>

      <section
        id="top"
         className="overflow-hidden bg-deep pb-14 pt-12 text-primary-foreground sm:py-16 lg:py-20"
      >
        <div className="section-shell">
           <p className="hero-reveal hero-reveal-1 eyebrow mx-auto max-w-[320px] text-center text-sage">{t.eyebrow}</p>
           <h1 className="hero-reveal hero-reveal-2 heading-xl mx-auto mt-5 max-w-[650px] text-center">{t.h1a}<br/><span className="text-sage">{t.h1b}</span></h1>
           <p className="hero-reveal hero-reveal-3 mx-auto mt-6 max-w-[350px] text-center text-base leading-7 text-primary-foreground/75 md:max-w-none md:text-[19px] md:leading-[1.65]">{t.heroSub}</p>
        </div>
         <div className="hero-reveal hero-reveal-4 section-shell mt-8 grid gap-3 sm:flex sm:items-center sm:justify-center"><Button variant="outline" asChild className="w-full border-sage bg-transparent text-sage hover:bg-primary-foreground/10 sm:w-auto"><a href="https://calendar.proton.me/bookings#aoKD9adzG08Fb5PKXT_boUZbBrowx2wglL7dlHh7oos=" target="_blank" rel="noopener noreferrer">{t.heroBtn1}</a></Button><Button asChild className="w-full bg-sage text-deep hover:bg-sage-soft sm:w-auto"><a href="#dienstleistungen">{t.heroBtn2}</a></Button></div>
        <div className="hero-reveal hero-reveal-5 mt-7 w-full" aria-label={t.marqueeLabel}>
          <StatementMarquee reverse statementCards={t.statementCards} />
        </div>

      </section>



      <section id="dienstleistungen" className="section-pad bg-card"><div className="section-shell"><Reveal><div className="text-center"><p className="eyebrow">{t.svcEyebrow}</p><h2 className="heading-lg mt-4">{t.svcTitle}</h2><p className="mx-auto mt-4 max-w-[350px] text-base leading-7 text-muted-foreground md:mt-5 md:max-w-none md:text-[18px]">{t.svcSub}</p></div></Reveal>
        <div className="mt-10 grid items-stretch gap-5 md:mt-14 md:gap-6 lg:grid-cols-2"><Reveal className="h-full"><article className="flex h-full min-w-0 flex-col rounded-[20px] bg-sage-soft p-6 md:rounded-[24px] md:p-10"><h3 className="break-words text-[26px] font-semibold md:text-[30px]">{t.fin.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{t.fin.text}</p><div className="my-6 border-t border-border md:my-7"/>{checks(t.fin.items)}<a href="#kontakt" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary lg:mt-auto lg:pt-8">{t.svcLink} <ArrowRight className="size-4"/></a></article></Reveal>
          <Reveal delay={120} className="h-full"><article className="flex h-full min-w-0 flex-col rounded-[20px] bg-sage-soft p-6 md:rounded-[24px] md:p-10"><h3 className="break-words text-[26px] font-semibold md:text-[30px]">{t.pay.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{t.pay.text}</p><div className="my-6 border-t border-border md:my-7"/>{checks(t.pay.items)}<a href="#kontakt" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary lg:mt-auto lg:pt-8">{t.svcLink} <ArrowRight className="size-4"/></a></article></Reveal></div>
      </div></section>


      <section id="team" className="section-pad bg-sage-soft"><div className="section-shell"><Reveal><div className="text-center"><p className="eyebrow">{t.teamEyebrow}</p><h2 className="heading-lg mt-4">{t.teamTitle}</h2><p className="mx-auto mt-4 max-w-[350px] text-base leading-7 text-muted-foreground md:mt-5 md:max-w-none md:text-[18px]">{t.teamSub}</p></div></Reveal><div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">{([["Audelia Babbev-Pittet",t.audelia[0],t.audelia[1],audeliaPhotoUrl,"audelia@startsaldo.ch"],["Sarah Mogel",t.sarah[0],t.sarah[1],sarahPhotoUrl,"sarah@startsaldo.ch"]] as const).map(([name,role,bio,photo,email],idx)=><Reveal key={name} delay={idx*120}><article className="overflow-hidden rounded-[20px] border border-border bg-card md:rounded-[24px]">{photo ? <img src={photo} alt={`${t.portrait} ${name}`} className="aspect-[4/3] w-full object-cover object-top"/> : <div className="grid aspect-[4/3] place-items-center bg-sage-soft"><div className="text-center"><UserRound className="mx-auto size-12 text-primary/50"/><p className="mt-3 text-sm font-medium text-muted-foreground">{t.portrait} {name}</p></div></div>}<div className="min-w-0 p-6 md:p-8"><h3 className="break-words text-[25px] font-semibold md:text-[28px]">{name}</h3><p className="mt-1 break-words font-semibold text-primary">{role}</p><p className="mt-5 leading-7 text-muted-foreground">{bio}</p>{email ? <a href={`mailto:${email}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-success"><Mail className="size-4 shrink-0" /><span className="break-all">{email}</span></a> : null}</div></article></Reveal>)}</div></div></section>

      <section className="section-pad bg-card"><div className="section-shell"><Reveal><div className="text-center"><p className="eyebrow">{t.testiEyebrow}</p><h2 className="heading-lg mt-4">{t.testiTitle}</h2></div></Reveal><Reveal className="mt-12"><div ref={testiRef} className="testi-rail" aria-label={t.testiLabel}><div className="testi-track">{[0,1].map((g)=><div key={g} className="testi-group" aria-hidden={g===1}>{[1,2,3,4,5,6].map(x=><div key={x} data-testi-card className="w-[280px] shrink-0 sm:w-[310px]"><article className="h-full rounded-[20px] bg-sage-soft p-8">{x===1 ? (<><p className="leading-7">{t.quote}</p><p className="mt-8 text-sm font-medium">Jean-Marc Pittet</p></>) : (<><p className="text-lg font-medium">{t.testiPh}</p><p className="mt-8 text-sm text-muted-foreground">{t.testiPhSub}</p></>)}</article></div>)}</div>)}</div></div></Reveal></div></section>

      <section id="faq" className="section-pad bg-sage-soft"><div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><Reveal><div className="text-center"><p className="eyebrow">FAQ</p><h2 className="heading-lg mt-4">{t.faqTitle}</h2><p className="mt-5 leading-7 text-muted-foreground">{t.faqSub}</p></div></Reveal><Reveal delay={120}><Accordion type="single" collapsible>{t.faq.map(([q,a])=><AccordionItem key={q ?? "faq"} value={q ?? "faq"}><AccordionTrigger className="min-h-[72px] text-left text-base hover:no-underline">{q}</AccordionTrigger><AccordionContent className="max-w-[600px] pb-6 leading-7 text-muted-foreground whitespace-pre-line">{a}</AccordionContent></AccordionItem>)}</Accordion></Reveal></div></section>

      <section id="kontakt" className="section-pad bg-deep text-primary-foreground"><div className="section-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><div><div className="text-center"><p className="eyebrow text-sage">{t.contactEyebrow}</p><h2 className="heading-lg mt-4">{t.contactTitle}</h2></div><dl className="mt-10 space-y-6"><div><dt className="text-sm text-primary-foreground/65">E-Mail</dt><dd className="mt-1 font-semibold"><a href="mailto:info@startsaldo.ch" className="transition-colors hover:text-sage">info@startsaldo.ch</a></dd></div><div><dt className="text-sm text-primary-foreground/65">{t.phone}</dt><dd className="mt-1 font-semibold"><a href="tel:+41766295056" className="transition-colors hover:text-sage">076 629 50 56</a></dd></div><div><dt className="text-sm text-primary-foreground/65">{t.location}</dt><dd className="mt-1 font-semibold">{t.locationValue}</dd></div></dl></div></Reveal>
        <Reveal delay={120}>
        {sent ? (
          <div role="status" className="flex flex-col items-center px-6 py-10 text-center text-primary-foreground md:px-10">
            <span className="grid size-16 place-items-center rounded-full bg-sage-soft"><CheckCircle2 className="size-8 text-success" /></span>
            <h3 className="mt-7 max-w-[460px] text-[24px] font-semibold leading-snug">{t.success}</h3>
            <Button variant="outline" className="mt-8" onClick={() => setSent(false)}>{t.newMsg}</Button>
          </div>
        ) : (
        <form className="text-primary-foreground" onSubmit={handleContactSubmit}><div className="grid gap-5 sm:grid-cols-2">{[[t.fName,"name"],[t.fCompany,"firma"],["E-Mail","email"],[t.phone,"telefon"]].map(([label,field],i)=><label key={label} className="text-sm font-medium">{label}<input name={field} required={i===0||i===2} type={i===2?"email":i===3?"tel":"text"} className="mt-2 h-[52px] w-full rounded-[10px] border border-input bg-card px-4 text-foreground outline-none transition-colors focus:border-primary"/></label>)}</div><label className="mt-6 block text-sm font-medium">{t.fMessage}<textarea name="nachricht" required className="mt-2 min-h-[140px] w-full resize-y rounded-[10px] border border-input bg-card p-4 text-foreground outline-none transition-colors focus:border-primary"/></label>{sendError && <p role="alert" className="mt-4 text-center text-sm font-medium text-destructive">{sendError}</p>}<Button type="submit" disabled={sending} className="mt-6 w-full bg-sage text-deep hover:bg-sage-soft">{sending ? t.sending : t.submit}</Button><p className="mt-4 text-center text-xs leading-5 text-primary-foreground/70">{t.consent}</p></form>
        )}</Reveal></div></section>

      <footer className="bg-foreground py-12 text-primary-foreground"><div className="section-shell"><div className="grid gap-10 md:grid-cols-3"><div><img src={startsaldoLogoDarkUrl} alt="StartSaldo" className="h-auto w-[148px]" /><p className="mt-3 whitespace-nowrap text-sm leading-6 text-primary-foreground/65">{t.footerTag}</p></div><nav className="flex flex-col items-start gap-3 text-sm md:mx-auto md:w-fit">{nav.slice(0,4).map(([l,h])=><a key={h} href={h}>{l}</a>)}{langLink("font-semibold text-sage")}</nav><div className="text-sm leading-7 md:justify-self-end"><a href="mailto:info@startsaldo.ch">info@startsaldo.ch</a><br/><a href="tel:+41766295056">076 629 50 56</a><br/>Rothenthurm SZ</div></div><div className="mt-10 flex flex-row items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60"><p>© 2026 Digital Trust Solutions GmbH</p><div className="flex gap-5"><a href="#" onClick={(e)=>e.preventDefault()}>{t.imprint}</a><a href="#" onClick={(e)=>e.preventDefault()}>{t.privacy}</a></div></div></div></footer>
    </main>
  );
}
