import { shareMeta } from "@/components/structured-data";
import { SITE } from "@/components/service-pages";
import { Link } from "@tanstack/react-router";
import type { Lang } from "@/components/home-copy";
import { SiteFooter, SiteHeader } from "@/components/site-nav";

export type LegalKind = "imprint" | "privacy";

export const legalPaths = {
  imprint: { de: "/impressum", en: "/en/legal-notice" },
  privacy: { de: "/datenschutz", en: "/en/privacy" },
} as const;

export const legalLabels: Record<LegalKind, Record<Lang, string>> = {
  imprint: { de: "Impressum", en: "Legal notice" },
  privacy: { de: "Datenschutz", en: "Privacy" },
};

/** Footer links to the legal pages, used in every footer of the site. */
export function LegalLinks({ lang, className = "flex gap-5" }: { lang: Lang; className?: string }) {
  return (
    <div className={className}>
      <Link to={legalPaths.imprint[lang]} className="hover:text-band-accent">{legalLabels.imprint[lang]}</Link>
      <Link to={legalPaths.privacy[lang]} className="hover:text-band-accent">{legalLabels.privacy[lang]}</Link>
    </div>
  );
}

type Block = { h: string; p: (string | string[])[] };

const company = ["Digital Trust Solutions GmbH", "Schoosstrasse 3", "6418 Rothenthurm", "Schweiz"];
const companyEn = ["Digital Trust Solutions GmbH", "Schoosstrasse 3", "6418 Rothenthurm", "Switzerland"];

const content: Record<LegalKind, Record<Lang, { title: string; blocks: Block[] }>> = {
  imprint: {
    de: {
      title: "Impressum",
      blocks: [
        { h: "Betreiberin der Website", p: ["StartSaldo ist die Marke für den Accounting-Bereich der Digital Trust Solutions GmbH.", company] },
        { h: "Kontakt", p: [["Telefon: +41 76 629 50 56", "E-Mail: info@startsaldo.ch"]] },
        { h: "Vertretungsberechtigte Personen", p: ["Daniel Babbev, Audelia Babbev"] },
        { h: "Unternehmens-Identifikationsnummer (UID)", p: ["CHE-147.018.858"] },
        { h: "Haftungsausschluss", p: ["Die Inhalte dieser Website wurden sorgfältig erstellt. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr. Die Informationen ersetzen keine individuelle Beratung. Für Inhalte verlinkter Websites Dritter sind ausschliesslich deren Betreiber verantwortlich."] },
        { h: "Urheberrechte", p: ["Texte, Fotos und Gestaltung dieser Website gehören der Digital Trust Solutions GmbH bzw. den genannten Rechteinhabern. Eine Verwendung ist nur mit vorgängiger schriftlicher Zustimmung erlaubt."] },
      ],
    },
    en: {
      title: "Legal notice",
      blocks: [
        { h: "Website operator", p: ["StartSaldo is the accounting brand of Digital Trust Solutions GmbH.", companyEn] },
        { h: "Contact", p: [["Phone: +41 76 629 50 56", "Email: info@startsaldo.ch"]] },
        { h: "Authorised representatives", p: ["Daniel Babbev, Audelia Babbev"] },
        { h: "Business identification number (UID)", p: ["CHE-147.018.858"] },
        { h: "Disclaimer", p: ["The content of this website has been prepared with care. However, we accept no liability for its accuracy, completeness or timeliness. The information does not replace individual advice. The operators of linked third-party websites are solely responsible for their content."] },
        { h: "Copyright", p: ["Texts, photos and design on this website belong to Digital Trust Solutions GmbH or the named rights holders. Any use requires prior written consent."] },
      ],
    },
  },
  privacy: {
    de: {
      title: "Datenschutzerklärung",
      blocks: [
        { h: "Verantwortliche Stelle", p: ["Verantwortlich für die Bearbeitung von Personendaten auf dieser Website ist:", [...company, "info@startsaldo.ch"]] },
        { h: "Grundsatz", p: ["Wir bearbeiten Personendaten gemäss dem Schweizer Bundesgesetz über den Datenschutz (DSG). Wir bearbeiten nur die Daten, die für unsere Dienstleistungen und die Kommunikation mit Ihnen nötig sind, und geben sie nicht zu Werbezwecken weiter."] },
        { h: "Kontaktformular und E-Mail", p: ["Wenn Sie uns über das Kontaktformular oder per E-Mail schreiben, bearbeiten wir Ihre Angaben (Name, Firma, E-Mail, Telefon, Nachricht), um Ihre Anfrage zu beantworten. Die Nachrichten aus dem Kontaktformular werden über den E-Mail-Dienst Resend an uns zugestellt. Unsere E-Mails laufen über Proton (Proton AG, Genf)."] },
        { h: "WhatsApp", p: ["Für kurze Rückfragen können Sie uns über WhatsApp (Meta Platforms, USA) erreichen. Bitte senden Sie uns keine sensiblen Finanz- oder Lohnunterlagen über WhatsApp – dafür nutzen wir den verschlüsselten Austausch über Proton."] },
        { h: "Terminbuchung", p: ["Für Terminbuchungen nutzen wir Proton Calendar der Proton AG, Genf. Wenn Sie einen Termin buchen, gelten zusätzlich die Datenschutzbestimmungen von Proton."] },
        { h: "Dokumentenaustausch", p: ["Für den sicheren Austausch und die Ablage von Unterlagen nutzen wir Proton. Die Daten werden verschlüsselt auf Proton-Infrastruktur in der Schweiz, in Deutschland oder Norwegen gespeichert."] },
        { h: "Buchhaltungssoftware", p: ["Für die laufende Buchhaltung setzen wir standardmässig Banana (banana.ch SA, Lugano) ein. Die Buchhaltungsdateien werden verschlüsselt auf Proton-Infrastruktur abgelegt. Wenn ein Kunde es ausdrücklich wünscht, arbeiten wir auch mit Bexio (bexio AG, Rapperswil-Jona), Swiss21 (Swiss21.org AG, St. Gallen) oder Abacus (Abacus Research AG, Wittenbach). Ihre Daten werden dort nur im Rahmen des jeweiligen Auftrags bearbeitet."] },
        { h: "Hosting und Server-Logdateien", p: ["Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf werden technisch notwendige Daten wie IP-Adresse, Datum, Uhrzeit und aufgerufene Seite kurzzeitig in Logdateien gespeichert, um den sicheren Betrieb zu gewährleisten."] },
        { h: "Schriftarten", p: ["Die Schrift «Manrope» wird direkt von dieser Website ausgeliefert. Beim Aufruf der Seite werden deshalb keine Personendaten an Dritte übertragen."] },
        { h: "Google-Unternehmensprofil", p: ["Wir verlinken auf unser Profil bei Google Maps. Erst wenn Sie diesen Link anklicken, werden Daten an Google übermittelt."] },
        { h: "Datenübermittlung ins Ausland", p: ["Personendaten können in der Schweiz, in Deutschland (EU), in Norwegen und in den USA bearbeitet werden. Beim Aufruf der Website (Vercel Inc.) und beim Absenden des Kontaktformulars (Resend Inc.) werden technisch notwendige Daten an Dienstleister mit Sitz in den USA übermittelt. Diese Übermittlung stützt sich auf das Swiss-U.S. Data Privacy Framework oder Standardvertragsklauseln."] },
        { h: "Aufbewahrungsdauer", p: ["Anfragen über das Kontaktformular bewahren wir nur so lange auf, wie es für die Bearbeitung Ihrer Anfrage nötig ist. Kommt ein Auftrag zustande, bewahren wir Geschäftsbücher, Buchungsbelege und weitere Unterlagen während der gesetzlichen Frist von 10 Jahren auf (Art. 958f OR)."] },
        { h: "Speicherung im Browser", p: ["Wir verwenden keine Tracking- oder Werbe-Cookies. Im Browser wird lediglich Ihre Wahl zwischen hellem und dunklem Modus gespeichert."] },
        { h: "Ihre Rechte", p: ["Sie können jederzeit Auskunft über Ihre gespeicherten Daten verlangen sowie deren Berichtigung oder Löschung beantragen. Schreiben Sie uns dazu an info@startsaldo.ch."] },
        { h: "Änderungen", p: ["Wir können diese Datenschutzerklärung anpassen. Es gilt die jeweils auf dieser Website veröffentlichte Fassung. Stand: Oktober 2026."] },
      ],
    },
    en: {
      title: "Privacy policy",
      blocks: [
        { h: "Controller", p: ["The controller for processing personal data on this website is:", [...companyEn, "info@startsaldo.ch"]] },
        { h: "Principle", p: ["We process personal data in accordance with the Swiss Federal Act on Data Protection (FADP). We only process data needed for our services and for communicating with you, and we do not share it for advertising purposes."] },
        { h: "Contact form and email", p: ["When you write to us via the contact form or by email, we process your details (name, company, email, phone, message) to answer your enquiry. Messages from the contact form are delivered to us via the email service Resend. Our emails run on Proton (Proton AG, Geneva)."] },
        { h: "WhatsApp", p: ["For quick questions you can reach us via WhatsApp (Meta Platforms, USA). Please do not send sensitive financial or payroll documents via WhatsApp – for those we use encrypted exchange via Proton."] },
        { h: "Appointment booking", p: ["For appointment bookings we use Proton Calendar by Proton AG, Geneva. When you book an appointment, Proton's privacy policy also applies."] },
        { h: "Document exchange", p: ["For the secure exchange and storage of documents we use Proton. The data is stored encrypted on Proton infrastructure in Switzerland, Germany or Norway."] },
        { h: "Accounting software", p: ["For ongoing bookkeeping we use Banana (banana.ch SA, Lugano) as standard. The accounting files are stored encrypted on Proton infrastructure. If a client explicitly asks for it, we also work with Bexio (bexio AG, Rapperswil-Jona), Swiss21 (Swiss21.org AG, St. Gallen) or Abacus (Abacus Research AG, Wittenbach). Your data is processed there only within the scope of the respective engagement."] },
        { h: "Hosting and server logs", p: ["This website is hosted by Vercel Inc. (USA). When you visit, technically necessary data such as IP address, date, time and the page requested are briefly stored in log files to ensure secure operation."] },
        { h: "Fonts", p: ["The font \u201cManrope\u201d is delivered directly by this website. No personal data is therefore passed on to third parties when you visit the page."] },
        { h: "Google Business Profile", p: ["We link to our profile on Google Maps. Data is only transmitted to Google once you click this link."] },
        { h: "Transfers abroad", p: ["Personal data may be processed in Switzerland, Germany (EU), Norway and the USA. When you visit the website (Vercel Inc.) and submit the contact form (Resend Inc.), technically necessary data is transferred to providers based in the USA. These transfers rely on the Swiss-U.S. Data Privacy Framework or standard contractual clauses."] },
        { h: "Retention period", p: ["We keep contact form enquiries only as long as needed to handle your request. If an engagement follows, we retain business records, accounting vouchers and related documents for the statutory period of 10 years (Art. 958f Swiss Code of Obligations)."] },
        { h: "Browser storage", p: ["We do not use tracking or advertising cookies. Only your choice between light and dark mode is stored in your browser."] },
        { h: "Your rights", p: ["You may request information about your stored data at any time and ask for it to be corrected or deleted. Please write to info@startsaldo.ch."] },
        { h: "Changes", p: ["We may update this privacy policy. The version published on this website applies. Last updated: October 2026."] },
      ],
    },
  },
};

export function LegalPage({ kind, lang }: { kind: LegalKind; lang: Lang }) {
  const c = content[kind][lang];
  return (
    <>
      <SiteHeader lang={lang} />
      <main className="bg-background text-foreground">
        <section className="section-pad bg-sage-soft">
          <div className="section-shell max-w-[760px]">
            <h1 className="heading-lg">{c.title}</h1>
            <div className="mt-10 space-y-8">
              {c.blocks.map((b) => (
                <div key={b.h}>
                  <h2 className="text-lg font-semibold">{b.h}</h2>
                  {b.p.map((para, i) =>
                    Array.isArray(para)
                      ? <p key={i} className="mt-2 leading-7 text-muted-foreground">{para.map((line, j) => <span key={j}>{line}<br /></span>)}</p>
                      : <p key={i} className="mt-2 leading-7 text-muted-foreground">{para}</p>,
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </>
  );
}

export function legalHead(kind: LegalKind, lang: Lang) {
  const title = `${content[kind][lang].title} | StartSaldo`;
  const description = kind === "imprint"
    ? (lang === "de" ? "Impressum von StartSaldo, einer Marke der Digital Trust Solutions GmbH in Rothenthurm." : "Legal notice of StartSaldo, a brand of Digital Trust Solutions GmbH in Rothenthurm.")
    : (lang === "de" ? "Datenschutzerklärung von StartSaldo: wie wir Ihre Personendaten nach Schweizer DSG bearbeiten." : "StartSaldo privacy policy: how we process your personal data under Swiss data protection law.");
  const other: Lang = lang === "de" ? "en" : "de";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE + legalPaths[kind][lang] },
      ...shareMeta(lang),
    ],
    links: [
      { rel: "canonical", href: SITE + legalPaths[kind][lang] },
      { rel: "alternate", hrefLang: other, href: SITE + legalPaths[kind][other] },
    ],
  };
}
