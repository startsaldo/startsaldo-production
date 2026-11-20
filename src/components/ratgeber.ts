/** Ratgeber (blog) articles. Add an article by adding an entry here; routes, sitemap and llms.txt list it. */
export type Article = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  date: string; // ISO
  sections: { h: string; p: string[] }[];
  en: { title: string; desc: string; category: string; sections: { h: string; p: string[] }[] };
};

export const articles: Article[] = [
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
export const localize = (a: Article, lang: GuideLang) => (lang === "de" ? { slug: a.slug, date: a.date, title: a.title, desc: a.desc, category: a.category, sections: a.sections } : { slug: a.slug, date: a.date, ...a.en });
export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
