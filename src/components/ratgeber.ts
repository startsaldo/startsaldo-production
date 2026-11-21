/** Ratgeber (blog) articles. Add an article by adding an entry here; routes, sitemap and llms.txt list it. */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "table"; label: string; headers: [string, string]; rows: [string, string][] }
  | { type: "list"; items: string[] }
  | { type: "faq"; items: { question: string; answer: string }[] }
  | { type: "cta"; label: string; to: "/termin" };

export type ArticleSection = {
  h: string;
  p: string[];
  blocks?: ArticleBlock[];
};

export type ArticleContent = {
  title: string;
  desc: string;
  category: string;
  sections: ArticleSection[];
  lead?: string[];
  seoTitle?: string;
  metaDescription?: string;
  cta?: string;
  defaultNote?: boolean;
};

export type Article = ArticleContent & {
  slug: string;
  date: string; // ISO
  en?: ArticleContent;
};

export const articles: Article[] = [
  {
    slug: "treuhaender-kosten-gmbh-schweiz",
    title: "Was kostet ein Treuhänder für eine GmbH in der Schweiz?",
    desc: "Was kostet ein Treuhänder für eine GmbH? Schweizer Richtpreise und die wichtigsten Faktoren für einen fairen Kostenvergleich.",
    seoTitle: "Treuhänder-Kosten für GmbHs in der Schweiz – StartSaldo",
    metaDescription: "Was kostet ein Treuhänder für eine GmbH in der Schweiz? Aktuelle Richtpreise, Kostenfaktoren und Tipps für die Wahl des passenden Treuhänders.",
    category: "Buchhaltung",
    date: "2026-11-21",
    cta: "Kostenloses Erstgespräch vereinbaren",
    defaultNote: false,
    lead: [
      "**Was kostet die Buchhaltung einer GmbH?** Für eine kleine Schweizer GmbH liegen die Treuhandkosten gemäss einer Preisübersicht von Gryps bei rund **CHF 1'500 bis CHF 3'800 pro Jahr**.",
      "Der tatsächliche Preis hängt davon ab, wie viele Geschäftsfälle anfallen und welche Arbeiten der Treuhänder übernimmt. Wir zeigen, welche Kosten üblich sind und worauf Sie bei einer Offerte achten sollten.",
    ],
    sections: [
      {
        h: "Treuhandkosten für eine GmbH im Überblick",
        p: [],
        blocks: [
          { type: "paragraph", text: "Eine 2026 aktualisierte Erhebung von Gryps unter über 70 Treuhändern in der Deutschschweiz nennt folgende Richtwerte:" },
          {
            type: "table",
            label: "Richtpreise für Treuhandkosten einer GmbH",
            headers: ["Leistung", "Richtpreis"],
            rows: [
              ["Kleine GmbH, laufende Buchhaltung inklusive Jahresabschluss", "CHF 1'500–3'800 pro Jahr"],
              ["Durchschnitt im untersuchten Beispiel", "CHF 2'400 pro Jahr"],
              ["Einmalige Einrichtung", "CHF 300–500"],
              ["Einfache Buchhaltungsarbeiten", "Ab ca. CHF 80 pro Stunde"],
              ["Anspruchsvollere Abschluss- und Beratungsarbeiten", "Ca. CHF 120–250 pro Stunde"],
            ],
          },
          { type: "paragraph", text: "Das Beispiel bezieht sich auf eine GmbH mit zwei Mitarbeitenden, 10–20 Belegen pro Monat, laufender Buchhaltung, Jahresabschluss, Steuererklärung und MWST-Abrechnung." },
          { type: "paragraph", text: "**Wichtig:** Die vollständige Lohnadministration ist im Beispiel nicht ausdrücklich als enthaltene Leistung ausgewiesen. Die Zahlen sind Markt-Richtwerte und keine Preisangaben von StartSaldo." },
          { type: "paragraph", text: "*Quelle: [Gryps – Treuhand-Preise in der Schweiz, aktualisiert im Mai 2026](https://www.gryps.ch/produkte/treuhaender-21/kosten-treuhaender/).*" },
        ],
      },
      {
        h: "Was beeinflusst die Kosten eines Treuhänders?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Nicht der Umsatz allein bestimmt die Buchhaltungskosten. Entscheidend ist vor allem der tatsächliche Arbeitsaufwand." },
          { type: "paragraph", text: "**1. Anzahl der Belege**" },
          { type: "paragraph", text: "Eine GmbH mit wenigen Rechnungen und übersichtlichen Bankbewegungen verursacht normalerweise weniger Aufwand als ein Unternehmen mit zahlreichen Transaktionen." },
          { type: "paragraph", text: "**2. Umfang der Dienstleistungen**" },
          { type: "paragraph", text: "Übernimmt der Treuhänder nur den Jahresabschluss oder die gesamte Finanzbuchhaltung? Sind die Steuererklärung und die [MWST-Abrechnungen](https://www.startsaldo.ch/mwst) ebenfalls enthalten?" },
          { type: "paragraph", text: "**3. Mitarbeitende und Lohnbuchhaltung**" },
          { type: "paragraph", text: "Lohnabrechnungen, Sozialversicherungsmeldungen und Ein- oder Austritte können zusätzliche Kosten verursachen. Diese Aufgaben sollten in der Offerte separat berücksichtigt werden." },
          { type: "paragraph", text: "**4. Qualität der Buchhaltungsunterlagen**" },
          { type: "paragraph", text: "Vollständige, geordnete und digital verfügbare Belege erleichtern die Zusammenarbeit. Fehlende Unterlagen und häufige Rückfragen erhöhen dagegen den Bearbeitungsaufwand." },
          { type: "paragraph", text: "Auch internationale Geschäftsfälle oder Kryptowährungen können zusätzliche Abklärungen erfordern." },
        ],
      },
      {
        h: "Muss eine GmbH einen Treuhänder beauftragen?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Nein. Eine Schweizer GmbH ist gemäss Art. 957 ff. Obligationenrecht zur ordnungsgemässen Buchführung und Rechnungslegung verpflichtet. Sie muss dafür aber keinen externen Treuhänder beauftragen." },
          { type: "paragraph", text: "Die Buchhaltung kann intern geführt, vollständig ausgelagert oder zwischen Unternehmen und Treuhandbüro aufgeteilt werden." },
          { type: "paragraph", text: "Ob sich das Selbermachen lohnt, hängt insbesondere von den vorhandenen Fachkenntnissen und der verfügbaren Zeit ab." },
          { type: "paragraph", text: "*Quelle: [SECO KMU-Portal – Buchhaltungspflicht für Handelsgesellschaften](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften).*" },
        ],
      },
      {
        h: "Pauschalpreis oder Stundenhonorar?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Beide Modelle haben Vorteile." },
          { type: "paragraph", text: "Bei einer **Pauschale** lassen sich wiederkehrende Kosten besser planen. Wichtig ist, welche Leistungen tatsächlich eingeschlossen sind." },
          { type: "paragraph", text: "Bei einer **Abrechnung nach Aufwand** bezahlen Sie die geleisteten Stunden. Dafür können die Gesamtkosten stärker schwanken." },
          { type: "paragraph", text: "Manche Treuhandbüros kombinieren beide Modelle: Wiederkehrende Arbeiten werden pauschal verrechnet, ausserordentliche Aufgaben nach Stundenaufwand." },
        ],
      },
      {
        h: "Worauf sollten Sie bei einer Treuhandofferte achten?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Bevor Sie zwei Angebote vergleichen, sollten Sie diese fünf Fragen klären:" },
          {
            type: "list",
            items: [
              "Ist die laufende Finanzbuchhaltung enthalten?",
              "Sind Jahresabschluss und Steuererklärung eingeschlossen?",
              "Werden MWST und Lohnbuchhaltung separat verrechnet?",
              "Sind Software, Einrichtung und Datenübernahme im Preis enthalten?",
              "Welche Arbeiten verursachen zusätzliche Kosten?",
            ],
          },
          { type: "paragraph", text: "**Tipp:** Vergleichen Sie möglichst die gesamten jährlichen Kosten und nicht nur die monatliche Pauschale." },
        ],
      },
      {
        h: "Häufige Fragen zu Treuhandkosten",
        p: [],
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Was kostet die Buchhaltung einer kleinen GmbH monatlich?",
                answer: "Der von Gryps für das untersuchte Beispiel ermittelte Durchschnitt von CHF 2'400 jährlich entspricht rechnerisch CHF 200 pro Monat. Das ist jedoch kein allgemein gültiger Monatstarif. Leistungsumfang und Zusatzkosten können erheblich abweichen.",
              },
              {
                question: "Ist der Jahresabschluss im Treuhandpreis enthalten?",
                answer: "Nicht immer. Manche Treuhandbüros bieten ein Gesamtpaket an, andere verrechnen den [Jahresabschluss](https://www.startsaldo.ch/jahresabschluss) separat. Der genaue Umfang sollte vor Vertragsabschluss feststehen.",
              },
              {
                question: "Kann ich mit digitaler Buchhaltung Geld sparen?",
                answer: "Digitale Abläufe können die Belegverarbeitung vereinfachen und Rückfragen reduzieren. Ob dadurch tatsächlich Kosten eingespart werden, hängt von der Organisation und der vereinbarten Zusammenarbeit ab.",
              },
              {
                question: "Kann ich nur einen Teil meiner Buchhaltung auslagern?",
                answer: "Ja. Sie können beispielsweise Rechnungen und Belege selbst vorbereiten und weitere Aufgaben an einen Treuhänder übergeben. Wichtig ist eine klare Aufteilung der Verantwortlichkeiten.",
              },
            ],
          },
        ],
      },
      {
        h: "Persönliche und digitale Buchhaltung mit StartSaldo",
        p: [],
        blocks: [
          { type: "paragraph", text: "StartSaldo unterstützt Schweizer GmbHs, KMU und Start-ups bei der laufenden Finanzbuchhaltung, MWST, Lohnadministration und beim Jahresabschluss." },
          { type: "paragraph", text: "Ihre Unterlagen werden bei Proton gespeichert. Proton ist ein Schweizer Anbieter für verschlüsselte E-Mail- und Cloud-Speicherdienste. Wir verbinden digitale Abläufe mit persönlichen Ansprechpartnerinnen. Unser Standort ist Rothenthurm im Kanton Schwyz. Wir betreuen auch Unternehmen aus Zug und der übrigen Schweiz." },
          { type: "paragraph", text: "Ob Sie Ihre gesamte Buchhaltung auslagern oder nur einzelne Aufgaben abgeben möchten: Gemeinsam klären wir, welche Lösung zu Ihrem Unternehmen passt." },
          { type: "paragraph", text: "**Möchten Sie die Buchhaltung Ihrer GmbH professionell organisieren und die Kosten besser einschätzen?**" },
          { type: "cta", label: "Jetzt kostenloses Erstgespräch mit StartSaldo vereinbaren", to: "/termin" },
          { type: "paragraph", text: "*Hinweis: Die genannten Preise sind unverbindliche Richtwerte eines externen Anbieters. Sie stellen keine StartSaldo-Offerte dar. Der Artikel dient der allgemeinen Information und ersetzt keine individuelle Beratung.*" },
        ],
      },
    ],
  },
  {
    slug: "gmbh-oder-einzelfirma",
    title: "GmbH oder Einzelfirma: Was passt zu Ihrem Start?",
    desc: "Haftung, Kapital, Buchführung und Handelsregister im Vergleich – die wichtigsten Unterschiede für Gründerinnen und Gründer in der Schweiz.",
    category: "Gründung",
    date: "2026-11-20",
    sections: [
      { h: "Kurz gesagt", p: ["Die Einzelfirma ist schnell und günstig gegründet, Sie haften aber mit Ihrem Privatvermögen. Die GmbH braucht mindestens CHF 20'000 Stammkapital und einen Handelsregistereintrag, dafür haftet grundsätzlich nur das Gesellschaftsvermögen."] },
      { h: "Haftung", p: ["Bei der Einzelfirma gibt es keine Trennung zwischen Geschäft und Privatperson: Schulden des Geschäfts sind Ihre persönlichen Schulden. Die GmbH ist eine eigene juristische Person – für ihre Verbindlichkeiten haftet das Gesellschaftsvermögen."] },
      { h: "Gründung und Handelsregister", p: ["Eine Einzelfirma muss ins Handelsregister, sobald sie einen Jahresumsatz von mindestens CHF 100'000 erzielt; darunter ist der Eintrag freiwillig. Eine GmbH entsteht erst mit dem Eintrag ins Handelsregister, die Gründung erfordert eine öffentliche Beurkundung."] },
      { h: "Buchführung", p: ["Einzelfirmen mit weniger als CHF 500'000 Umsatz im letzten Geschäftsjahr dürfen eine vereinfachte Buchhaltung über Einnahmen, Ausgaben und Vermögenslage führen. Eine GmbH ist immer zur doppelten Buchhaltung mit Jahresrechnung (Bilanz und Erfolgsrechnung) verpflichtet."] },
      { h: "Steuern", p: ["Der Gewinn einer Einzelfirma wird als Einkommen der Inhaberin oder des Inhabers besteuert und unterliegt den AHV-Beiträgen für Selbständige. Bei der GmbH werden Gewinn und Kapital der Gesellschaft besteuert, Sie selbst beziehen einen Lohn und allenfalls Dividenden. Welche Variante sich lohnt, hängt von Gewinn, Wohnkanton und Ihren Plänen ab – das rechnen wir gerne im Erstgespräch mit Ihnen durch."] },
    ],
    en: {
      title: "GmbH or sole proprietorship: which suits your start?",
      desc: "Liability, capital, bookkeeping and the commercial register compared – the key differences for founders in Switzerland.",
      category: "Formation",
      sections: [
        { h: "In short", p: ["A sole proprietorship is quick and cheap to set up, but you are liable with your private assets. A GmbH needs at least CHF 20,000 share capital and an entry in the commercial register; in return, only the company's assets are generally liable."] },
        { h: "Liability", p: ["With a sole proprietorship there is no separation between business and private person: the business's debts are your personal debts. A GmbH is a separate legal entity – its assets are liable for its obligations."] },
        { h: "Formation and commercial register", p: ["A sole proprietorship must be entered in the commercial register once it reaches annual turnover of at least CHF 100,000; below that, registration is voluntary. A GmbH only comes into existence with its entry in the commercial register, and formation requires a notarised deed."] },
        { h: "Bookkeeping", p: ["Sole proprietorships with turnover below CHF 500,000 in the last financial year may keep simplified accounts of income, expenses and financial position. A GmbH must always keep double-entry accounts with annual financial statements (balance sheet and income statement)."] },
        { h: "Taxes", p: ["The profit of a sole proprietorship is taxed as the owner's income and is subject to AHV contributions for the self-employed. With a GmbH, the company's profit and capital are taxed, and you draw a salary and possibly dividends. Which option pays off depends on profit, canton of residence and your plans – we are happy to work this out with you in the initial consultation."] },
      ],
    },
  },
  {
    slug: "mwst-pflicht-schweiz",
    title: "Ab wann muss mein Unternehmen MWST abrechnen?",
    desc: "Umsatzgrenze, freiwillige Unterstellung und Abrechnungsmethoden: so klären KMU und Start-ups ihre Mehrwertsteuerpflicht in der Schweiz.",
    category: "Steuern & MWST",
    date: "2026-11-20",
    sections: [
      { h: "Kurz gesagt", p: ["Steuerpflichtig wird, wer innerhalb eines Jahres mindestens CHF 100'000 Umsatz aus steuerbaren Leistungen erzielt. Massgebend ist der weltweite Umsatz, nicht nur jener in der Schweiz."] },
      { h: "Die Umsatzgrenze", p: ["Sobald die Grenze von CHF 100'000 erreicht ist, müssen Sie sich bei der Eidgenössischen Steuerverwaltung anmelden. Bei neu gegründeten Unternehmen zählt der voraussichtliche Umsatz der ersten zwölf Monate."] },
      { h: "Freiwillig unterstellen?", p: ["Auch unter der Grenze können Sie sich freiwillig der MWST unterstellen. Das lohnt sich vor allem, wenn Sie hohe Investitionen tätigen und die bezahlte Vorsteuer zurückfordern möchten, oder wenn Ihre Kundschaft überwiegend selbst MWST-pflichtig ist."] },
      { h: "Effektive Methode oder Saldosteuersatz", p: ["Bei der effektiven Methode rechnen Sie die geschuldete Steuer abzüglich Vorsteuer ab. Mit der Saldosteuersatzmethode wenden Sie einen branchenabhängigen Pauschalsatz auf den Umsatz an – das vereinfacht die Abrechnung, ist aber an Umsatz- und Steuergrenzen gebunden. Welche Methode günstiger ist, hängt von Ihrer Kostenstruktur ab."] },
      { h: "Was wir übernehmen", p: ["Wir klären mit Ihnen die Pflicht, melden Ihr Unternehmen an und erstellen die laufenden Abrechnungen termingerecht."] },
    ],
    en: {
      title: "When does my company have to register for VAT?",
      desc: "Turnover threshold, voluntary registration and settlement methods: how Swiss SMEs and start-ups clarify their VAT liability.",
      category: "Tax & VAT",
      sections: [
        { h: "In short", p: ["You become liable for VAT once you generate at least CHF 100,000 turnover from taxable supplies within a year. Worldwide turnover counts, not just turnover in Switzerland."] },
        { h: "The turnover threshold", p: ["As soon as the CHF 100,000 threshold is reached, you must register with the Federal Tax Administration. For newly founded companies, the expected turnover of the first twelve months counts."] },
        { h: "Register voluntarily?", p: ["Even below the threshold you can register for VAT voluntarily. This is worthwhile above all if you make large investments and want to reclaim input tax, or if most of your customers are themselves VAT-registered."] },
        { h: "Effective method or net tax rate", p: ["With the effective method you report the VAT owed minus input tax. With the net tax rate method you apply a sector-specific flat rate to turnover – this simplifies reporting but is tied to turnover and tax limits. Which method is cheaper depends on your cost structure."] },
        { h: "What we take over", p: ["We clarify your liability with you, register your company and prepare the ongoing returns on time."] },
      ],
    },
  },
  {
    slug: "aufbewahrungspflicht-geschaeftsunterlagen",
    title: "Wie lange müssen Geschäftsunterlagen aufbewahrt werden?",
    desc: "Zehn Jahre Aufbewahrungspflicht, elektronische Belege und was das für Ihre Buchhaltung bedeutet – ein Überblick für Schweizer KMU.",
    category: "Buchhaltung",
    date: "2026-11-20",
    sections: [
      { h: "Kurz gesagt", p: ["Geschäftsbücher, Buchungsbelege, Jahresrechnungen und Revisionsberichte müssen in der Schweiz während zehn Jahren aufbewahrt werden. Die Frist beginnt mit Ablauf des Geschäftsjahres."] },
      { h: "Papier oder elektronisch?", p: ["Belege dürfen auch elektronisch aufbewahrt werden, sofern sie vollständig, unverändert und jederzeit lesbar bleiben. Die Jahresrechnung (Bilanz und Erfolgsrechnung) muss zusätzlich unterzeichnet aufbewahrt werden."] },
      { h: "Längere Fristen bei Immobilien", p: ["Für Unterlagen zu Liegenschaften, etwa im Zusammenhang mit der MWST, gelten längere Fristen von bis zu 20 Jahren."] },
      { h: "So handhaben wir es", p: ["Ihre Unterlagen unterliegen dem Datenschutz und werden streng vertraulich behandelt. Wir legen mit Ihnen fest, wie Belege digital erfasst und geordnet abgelegt werden."] },
    ],
    en: {
      title: "How long must business records be kept?",
      desc: "A ten-year retention period, electronic records and what this means for your accounting – an overview for Swiss SMEs.",
      category: "Accounting",
      sections: [
        { h: "In short", p: ["In Switzerland, accounting records, vouchers, annual financial statements and audit reports must be kept for ten years. The period starts at the end of the financial year."] },
        { h: "Paper or electronic?", p: ["Records may also be kept electronically, provided they remain complete, unaltered and readable at any time. The annual financial statements (balance sheet and income statement) must additionally be kept in signed form."] },
        { h: "Longer periods for real estate", p: ["For documents relating to real estate, for example in connection with VAT, longer periods of up to 20 years apply."] },
        { h: "How we handle it", p: ["Your documents are subject to data protection and are treated in strict confidence. Together with you we define how records are captured digitally and filed in an orderly way."] },
      ],
    },
  },
];

export type GuideLang = "de" | "en";
export const articlesForLang = (lang: GuideLang) => articles.filter((a) => lang === "de" || a.en);
export const localize = (a: Article, lang: GuideLang) => {
  const content = lang === "en" && a.en ? a.en : a;
  return {
    slug: a.slug,
    date: a.date,
    title: content.title,
    desc: content.desc,
    category: content.category,
    sections: content.sections,
    lead: content.lead,
    seoTitle: content.seoTitle,
    metaDescription: content.metaDescription,
    cta: content.cta,
    defaultNote: content.defaultNote,
  };
};
export const articleBySlug = (slug: string, lang: GuideLang = "de") => articles.find((a) => a.slug === slug && (lang === "de" || a.en));
