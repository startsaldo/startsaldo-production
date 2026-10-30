import type { Lang } from "@/components/home-copy";
import { payrollCopy } from "@/components/payroll-page";

export type ServiceSlug = "finanzbuchhaltung" | "lohnbuchhaltung" | "mwst" | "steuern" | "jahresabschluss" | "krypto" | "schwyz";
export type Person = "sarah" | "audelia";

export type ServiceCopy = {
  menu: string;
  title: string;
  titleAccent: string;
  sub: string;
  blocksTitle: string;
  blocks: { title: string; items: string[] }[];
  processTitle: string;
  process: [string, string][];
  people: Person[];
  personText: string;
  faqTitle: string;
  faq: [string, string][];
  endTitle: string;
  endSub: string;
  metaTitle: string;
  metaDesc: string;
};

/** Route paths per page and language. Kept literal so Link stays type-safe. */
export const servicePaths = {
  finanzbuchhaltung: { de: "/finanzbuchhaltung", en: "/en/accounting" },
  lohnbuchhaltung: { de: "/lohnbuchhaltung", en: "/en/payroll" },
  mwst: { de: "/mwst", en: "/en/vat" },
  steuern: { de: "/steuern", en: "/en/tax" },
  jahresabschluss: { de: "/jahresabschluss", en: "/en/annual-accounts" },
  krypto: { de: "/krypto", en: "/en/crypto" },
  schwyz: { de: "/buchhaltung-schwyz", en: "/en/accounting-schwyz" },
} as const;

export const serviceOrder: ServiceSlug[] = ["finanzbuchhaltung", "lohnbuchhaltung", "mwst", "steuern", "jahresabschluss", "krypto", "schwyz"];

const stdProcess = {
  de: [
    ["Erstgespräch", "Wir lernen Ihr Unternehmen, Ihre Abläufe und Ihre Fragen kennen."],
    ["Übernahme", "Wir übernehmen Ihre Unterlagen und richten alles sauber ein."],
    ["Laufend", "Sie senden uns Belege und Informationen – per E-Mail oder digital. Wir erledigen den Rest."],
    ["Termine im Griff", "Fristen behalten wir im Blick und melden uns rechtzeitig bei Ihnen."],
  ] as [string, string][],
  en: [
    ["Initial meeting", "We get to know your business, your processes and your questions."],
    ["Onboarding", "We take over your documents and set everything up properly."],
    ["Ongoing", "You send us receipts and information – by e-mail or digitally. We do the rest."],
    ["Deadlines covered", "We keep track of deadlines and get in touch with you in good time."],
  ] as [string, string][],
};

const de = {
  processTitle: "So läuft die Zusammenarbeit",
  blocksTitle: "Was wir für Sie übernehmen",
};
const en = {
  processTitle: "How we work together",
  blocksTitle: "What we take care of",
};

export const services: Record<ServiceSlug, Record<Lang, ServiceCopy>> = {
  finanzbuchhaltung: {
    de: {
      ...de,
      menu: "Finanzbuchhaltung",
      title: "Finanzbuchhaltung für Schweizer KMU",
      titleAccent: "Sauber gebucht, klar erklärt.",
      sub: "Von den laufenden Belegen bis zur Bankabstimmung.",
      blocks: [
        { title: "Laufende Buchhaltung", items: ["Erfassung Ihrer Geschäftsfälle", "Bank- und Kontenabstimmungen", "Kassabuch und Spesen", "Digitale Ablage Ihrer Belege", "Verbuchung Ihrer Crypto Trades"] },
        { title: "Debitoren und Kreditoren", items: ["Verbuchung von Kunden- und Lieferantenrechnungen", "Übersicht über offene Posten", "Vorbereitung von Zahlungen", "Abstimmung der Konten"] },
        { title: "Abschlüsse", items: ["Monats- und Quartalsabschlüsse", "Jahresabschluss", "Abgrenzungen und Rückstellungen", "Übersichtliche Auswertungen"] },
        { title: "Aus einer Hand", items: ["MWST-Abrechnungen", "Steuererklärung Ihres Unternehmens", "Abstimmung mit der Lohnbuchhaltung", "Feste Ansprechpartnerin"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Sie haben eine feste Ansprechpartnerin, die Ihre Zahlen kennt, Fragen verständlich beantwortet und den Austausch von Belegen so einfach wie möglich macht.",
      faqTitle: "Häufige Fragen zur Finanzbuchhaltung",
      faq: [
        ["Wie übermittle ich meine Belege?", "So, wie es für Sie am einfachsten ist – per E-Mail, als Scan oder digital. Wir besprechen das im Erstgespräch."],
        ["Kann ich nur einen Teil auslagern?", "Ja. Sie können die ganze Buchhaltung oder einzelne Aufgaben an uns übergeben."],
        ["Arbeiten Sie mit meiner bestehenden Software?", "Sprechen Sie uns darauf an. Wir klären im Erstgespräch, welche Lösung zu Ihrem Unternehmen passt."],
      ],
      endTitle: "Bereit, die Buchhaltung abzugeben?",
      endSub: "Erzählen Sie uns in einem unverbindlichen Gespräch, wie Ihr Unternehmen aufgestellt ist.",
      metaTitle: "Finanzbuchhaltung für KMU in Schwyz & der Schweiz | StartSaldo",
      metaDesc: "Laufende Buchhaltung, Debitoren, Kreditoren, Bankabstimmungen und Abschlüsse für Schweizer KMU – persönlich betreut von StartSaldo aus Rothenthurm.",
    },
    en: {
      ...en,
      menu: "Financial accounting",
      title: "Financial accounting for Swiss SMEs",
      titleAccent: "Booked properly, explained clearly.",
      sub: "From ongoing receipts to bank reconciliation.",
      blocks: [
        { title: "Ongoing bookkeeping", items: ["Recording your business transactions", "Bank and account reconciliations", "Cash book and expenses", "Digital filing of your receipts", "Booking your crypto trades"] },
        { title: "Receivables and payables", items: ["Booking customer and supplier invoices", "Overview of open items", "Preparing payments", "Account reconciliation"] },
        { title: "Closings", items: ["Monthly and quarterly closings", "Annual accounts", "Accruals and provisions", "Clear reports"] },
        { title: "All from one source", items: ["VAT returns", "Your company's tax return", "Reconciliation with payroll", "One fixed contact person"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "You have one fixed contact person who knows your figures, answers questions clearly and makes exchanging receipts as easy as possible.",
      faqTitle: "Frequently asked questions on accounting",
      faq: [
        ["How do I send my receipts?", "Whichever way is easiest for you – by e-mail, as a scan or digitally. We discuss this in the initial meeting."],
        ["Can I outsource only part of it?", "Yes. You can hand over all of your accounting or individual tasks."],
        ["Do you work with my existing software?", "Just ask us. In the initial meeting we clarify which solution fits your business."],
      ],
      endTitle: "Ready to hand over your accounting?",
      endSub: "Tell us about your business in a free, no-obligation conversation.",
      metaTitle: "Financial accounting for Swiss SMEs | StartSaldo",
      metaDesc: "Bookkeeping, receivables, payables, bank reconciliations and closings for Swiss SMEs – personally handled by StartSaldo.",
    },
  },
  lohnbuchhaltung: {
    de: {
      ...payrollCopy.de,
      menu: "Lohnbuchhaltung",
      blocks: payrollCopy.de.blocks.map((b) => ({ title: b.title, items: [...b.items] })),
      process: payrollCopy.de.process.map(([a, b]) => [a, b] as [string, string]),
      faq: payrollCopy.de.faq.map(([a, b]) => [a, b] as [string, string]),
      people: ["sarah"],
      metaTitle: "Lohnbuchhaltung für KMU in Schwyz & der Schweiz | StartSaldo",
      metaDesc: "Lohnabrechnung, Sozialversicherungen, Ein- und Austritte, Quellensteuer und Lohnausweise für Schweizer KMU – persönlich betreut von StartSaldo aus Rothenthurm.",
    },
    en: {
      ...payrollCopy.en,
      menu: "Payroll",
      blocks: payrollCopy.en.blocks.map((b) => ({ title: b.title, items: [...b.items] })),
      process: payrollCopy.en.process.map(([a, b]) => [a, b] as [string, string]),
      faq: payrollCopy.en.faq.map(([a, b]) => [a, b] as [string, string]),
      people: ["sarah"],
      metaTitle: "Payroll services for Swiss SMEs | StartSaldo",
      metaDesc: "Payroll, social insurances, employee onboarding and offboarding, withholding tax and salary certificates for Swiss SMEs – personally handled by StartSaldo.",
    },
  },
  mwst: {
    de: {
      ...de,
      menu: "MWST",
      title: "MWST-Abrechnung für Schweizer KMU",
      titleAccent: "Fristgerecht und nachvollziehbar.",
      sub: "Von der Anmeldung bis zur periodischen Abrechnung mit der ESTV.",
      blocks: [
        { title: "Anmeldung und Abklärung", items: ["Abklärung der MWST-Pflicht", "Anmeldung bei der ESTV", "Wahl der Abrechnungsmethode", "Effektive Methode oder Saldosteuersatz"] },
        { title: "Periodische Abrechnung", items: ["Erstellung der MWST-Abrechnung", "Einreichung innert Frist", "Vorsteuerabzug korrekt erfasst", "Abstimmung mit der Buchhaltung"] },
        { title: "Jahresabstimmung", items: ["Umsatzabstimmung", "Korrekturen und Berichtigungen", "Vorbereitung auf Kontrollen", "Saubere Dokumentation"] },
        { title: "Beratung im Alltag", items: ["Fragen zu Steuersätzen", "Rechnungen mit korrekten Angaben", "Leistungen ins Ausland", "Verständliche Antworten"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Bei MWST-Fragen müssen Sie nicht lange suchen: Ihre Ansprechpartnerin kennt Ihre Buchhaltung und sorgt dafür, dass die Abrechnung stimmt.",
      faqTitle: "Häufige Fragen zur MWST",
      faq: [
        ["Ab wann bin ich mehrwertsteuerpflichtig?", "In der Regel ab einem Jahresumsatz von CHF 100'000 aus steuerbaren Leistungen. Wir klären gerne mit Ihnen ab, ob und ab wann das für Sie gilt."],
        ["Effektive Methode oder Saldosteuersatz?", "Das hängt von Ihrer Branche, Ihren Kosten und Ihrem Aufwand ab. Wir zeigen Ihnen die Unterschiede und was für Sie sinnvoll ist."],
        ["Können Sie nur die MWST übernehmen?", "Ja. Sie können die MWST-Abrechnung einzeln oder zusammen mit der Buchhaltung an uns übergeben."],
      ],
      endTitle: "MWST abgeben und Ruhe haben?",
      endSub: "Wir schauen gemeinsam, was Ihr Unternehmen braucht.",
      metaTitle: "MWST-Abrechnung für KMU in Schwyz & der Schweiz | StartSaldo",
      metaDesc: "MWST-Anmeldung, Abrechnung mit der ESTV, Saldosteuersatz oder effektive Methode – für Schweizer KMU, persönlich betreut von StartSaldo.",
    },
    en: {
      ...en,
      menu: "VAT",
      title: "VAT returns for Swiss SMEs",
      titleAccent: "On time and traceable.",
      sub: "From registration to periodic returns with the Federal Tax Administration.",
      blocks: [
        { title: "Registration and assessment", items: ["Checking whether you are liable for VAT", "Registration with the FTA", "Choice of settlement method", "Effective method or net tax rate"] },
        { title: "Periodic returns", items: ["Preparing the VAT return", "Filing on time", "Correct input tax deduction", "Reconciliation with accounting"] },
        { title: "Annual reconciliation", items: ["Turnover reconciliation", "Corrections and adjustments", "Preparation for audits", "Clean documentation"] },
        { title: "Everyday advice", items: ["Questions on tax rates", "Invoices with correct details", "Services abroad", "Clear answers"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "You don't have to search long for answers on VAT: your contact person knows your accounts and makes sure the return is correct.",
      faqTitle: "Frequently asked questions on VAT",
      faq: [
        ["When do I become liable for VAT?", "Generally from an annual turnover of CHF 100,000 from taxable supplies. We are happy to check whether and from when this applies to you."],
        ["Effective method or net tax rate?", "It depends on your industry, your costs and your effort. We explain the differences and what makes sense for you."],
        ["Can you take over VAT only?", "Yes. You can hand over the VAT return on its own or together with your accounting."],
      ],
      endTitle: "Hand over VAT and relax?",
      endSub: "Let's look together at what your business needs.",
      metaTitle: "VAT returns for Swiss SMEs | StartSaldo",
      metaDesc: "VAT registration, returns with the FTA, net tax rate or effective method – for Swiss SMEs, personally handled by StartSaldo.",
    },
  },
  steuern: {
    de: {
      ...de,
      menu: "Steuern",
      title: "Steuererklärung für Schweizer KMU",
      titleAccent: "Vollständig und rechtzeitig eingereicht.",
      sub: "Wir erstellen Ihre Steuererklärung auf Basis einer sauberen Buchhaltung.",
      blocks: [
        { title: "Steuererklärung", items: ["Ausfüllen der Steuererklärung", "Zusammenstellen der Beilagen", "Einreichung innert Frist", "Fristerstreckungen bei Bedarf"] },
        { title: "Vorbereitung", items: ["Abstimmung mit dem Jahresabschluss", "Wertschriften- und Kontenverzeichnis", "Übersicht über abzugsfähige Aufwände", "Klare Liste der benötigten Unterlagen"] },
        { title: "Nach der Einreichung", items: ["Prüfung der Veranlagung", "Kontrolle der Steuerrechnungen", "Rückfragen der Steuerbehörde", "Planung von Vorauszahlungen"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Weil wir Ihre Buchhaltung kennen, wird die Steuererklärung kein Extraprojekt. Sie erhalten eine klare Liste, was wir von Ihnen brauchen – den Rest erledigen wir.",
      faqTitle: "Häufige Fragen zur Steuererklärung",
      faq: [
        ["Welche Unterlagen brauchen Sie?", "Das hängt von Ihrer Situation ab. Sie erhalten von uns eine übersichtliche Liste."],
        ["Was, wenn die Frist knapp wird?", "Wir kümmern uns bei Bedarf um eine Fristerstreckung bei der Steuerbehörde."],
        ["Machen Sie die Steuererklärung auch ohne Buchhaltung?", "Sprechen Sie uns darauf an – wir klären im Erstgespräch, was in Ihrem Fall möglich ist."],
      ],
      endTitle: "Die nächste Steuererklärung abgeben?",
      endSub: "Wir besprechen in einem unverbindlichen Gespräch, was Sie brauchen.",
      metaTitle: "Steuererklärung für KMU in Schwyz | StartSaldo",
      metaDesc: "Steuererklärung für Schweizer KMU – vorbereitet, ausgefüllt und fristgerecht eingereicht. Persönlich betreut von StartSaldo aus Rothenthurm.",
    },
    en: {
      ...en,
      menu: "Taxes",
      title: "Tax returns for Swiss SMEs",
      titleAccent: "Complete and filed on time.",
      sub: "We prepare your tax return based on clean accounts.",
      blocks: [
        { title: "Tax return", items: ["Completing the tax return", "Compiling the attachments", "Filing on time", "Deadline extensions if needed"] },
        { title: "Preparation", items: ["Reconciliation with the annual accounts", "Securities and account statement", "Overview of deductible expenses", "Clear list of required documents"] },
        { title: "After filing", items: ["Checking the assessment", "Checking tax invoices", "Queries from the tax office", "Planning advance payments"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "Because we know your accounts, the tax return is not an extra project. You get a clear list of what we need from you – we do the rest.",
      faqTitle: "Frequently asked questions on taxes",
      faq: [
        ["Which documents do you need?", "That depends on your situation. We give you a clear list."],
        ["What if the deadline is close?", "If needed, we request a deadline extension from the tax office."],
        ["Do you do tax returns without accounting?", "Just ask us – in the initial meeting we clarify what is possible in your case."],
      ],
      endTitle: "Hand over your next tax return?",
      endSub: "Let's discuss what you need in a free, no-obligation conversation.",
      metaTitle: "Tax returns for Swiss SMEs | StartSaldo",
      metaDesc: "Tax returns for Swiss SMEs – prepared, completed and filed on time. Personally handled by StartSaldo.",
    },
  },
  jahresabschluss: {
    de: {
      ...de,
      menu: "Jahresabschluss",
      title: "Jahresabschluss für Schweizer KMU",
      titleAccent: "Klar, korrekt und termingerecht.",
      sub: "Bilanz und Erfolgsrechnung, die Sie verstehen.",
      blocks: [
        { title: "Abschlussarbeiten", items: ["Abstimmung aller Konten", "Abgrenzungen und Rückstellungen", "Abschreibungen", "Inventar und Warenlager"] },
        { title: "Jahresrechnung", items: ["Bilanz und Erfolgsrechnung", "Anhang nach Obligationenrecht", "Unterlagen für die Generalversammlung", "Vorbereitung für die Revision"] },
        { title: "Auswertung", items: ["Verständliche Erklärung Ihrer Zahlen", "Vergleich mit dem Vorjahr", "Grundlage für die Steuererklärung", "Hinweise für das neue Jahr"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Wir erklären Ihnen Ihren Abschluss in verständlichen Worten – damit Sie wissen, wo Ihr Unternehmen steht.",
      faqTitle: "Häufige Fragen zum Jahresabschluss",
      faq: [
        ["Bis wann muss der Jahresabschluss fertig sein?", "Die Jahresrechnung einer GmbH oder AG muss innert sechs Monaten nach Geschäftsjahresende der Generalversammlung vorgelegt werden. Wir planen die Arbeiten rechtzeitig mit Ihnen."],
        ["Übernehmen Sie auch die Revision?", "Nein. Wir bereiten den Abschluss so vor, dass Ihre Revisionsstelle effizient prüfen kann."],
        ["Kann ich nur den Abschluss bei Ihnen machen?", "Ja. Auch wenn Sie die Buchhaltung unter dem Jahr selbst führen, übernehmen wir gerne den Abschluss."],
      ],
      endTitle: "Den nächsten Abschluss entspannt angehen?",
      endSub: "Erzählen Sie uns in einem unverbindlichen Gespräch, was Sie brauchen.",
      metaTitle: "Jahresabschluss für KMU in Schwyz & der Schweiz | StartSaldo",
      metaDesc: "Jahresabschluss mit Bilanz, Erfolgsrechnung und Anhang für Schweizer KMU – persönlich und verständlich erklärt von StartSaldo.",
    },
    en: {
      ...en,
      menu: "Annual accounts",
      title: "Annual accounts for Swiss SMEs",
      titleAccent: "Clear, correct and on time.",
      sub: "A balance sheet and income statement you understand.",
      blocks: [
        { title: "Closing work", items: ["Reconciliation of all accounts", "Accruals and provisions", "Depreciation", "Inventory and stock"] },
        { title: "Financial statements", items: ["Balance sheet and income statement", "Notes under the Code of Obligations", "Documents for the general meeting", "Preparation for the audit"] },
        { title: "Review", items: ["Clear explanation of your figures", "Comparison with the previous year", "Basis for the tax return", "Pointers for the new year"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "We explain your annual accounts in plain words – so you know where your business stands.",
      faqTitle: "Frequently asked questions on annual accounts",
      faq: [
        ["When must the annual accounts be ready?", "The accounts of a GmbH or AG must be presented to the general meeting within six months of the financial year end. We plan the work with you in good time."],
        ["Do you also do the audit?", "No. We prepare the accounts so that your auditor can review them efficiently."],
        ["Can I just have the closing done by you?", "Yes. Even if you keep the books yourself during the year, we are happy to do the closing."],
      ],
      endTitle: "Approach your next closing with ease?",
      endSub: "Tell us what you need in a free, no-obligation conversation.",
      metaTitle: "Annual accounts for Swiss SMEs | StartSaldo",
      metaDesc: "Annual accounts with balance sheet, income statement and notes for Swiss SMEs – personal and clearly explained by StartSaldo.",
    },
  },
  krypto: {
    de: {
      ...de,
      menu: "Krypto",
      title: "Buchhaltung und Steuern für Krypto-Trading",
      titleAccent: "Spezialisiert auf Kryptowährungen.",
      sub: "Für Unternehmen und Trader, die mit Kryptowährungen handeln.",
      blocks: [
        { title: "Krypto in der Buchhaltung", items: ["Verbuchung von Käufen, Verkäufen und Tauschgeschäften", "Abstimmung von Wallets und Börsenkonten", "Bewertung per Stichtag", "Saubere Dokumentation der Transaktionen"] },
        { title: "Krypto in der Steuererklärung", items: ["Deklaration im Wertschriftenverzeichnis", "Bewertung per 31. Dezember", "Erträge aus Staking und Lending", "Klare Unterlagen für die Steuerbehörde"] },
        { title: "Abklärung Ihrer Situation", items: ["Private Vermögensverwaltung oder gewerbsmässiger Handel", "Auswirkungen auf Steuern und Sozialversicherungen", "Krypto im Unternehmen", "Verständliche Antworten"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Krypto-Trading ist eines unserer Spezialgebiete. Wir verstehen, wie Wallets, Börsen und Transaktionen funktionieren, und übersetzen das in eine saubere Buchhaltung und Steuererklärung.",
      faqTitle: "Häufige Fragen zu Krypto",
      faq: [
        ["Muss ich Kryptowährungen in der Steuererklärung angeben?", "Ja. In der Schweiz gehören Kryptowährungen zum Vermögen und werden per Ende Jahr deklariert. Wir helfen Ihnen, das korrekt zu machen."],
        ["Bin ich privater Anleger oder gewerbsmässiger Händler?", "Das hängt unter anderem von Haltedauer, Volumen und Finanzierung ab. Wir schauen Ihre Situation gemeinsam an."],
        ["Welche Unterlagen brauchen Sie?", "Zum Beispiel Exporte Ihrer Börsen und Wallet-Adressen. Sie erhalten von uns eine klare Liste."],
      ],
      endTitle: "Krypto sauber abgerechnet?",
      endSub: "Erzählen Sie uns in einem unverbindlichen Gespräch, womit Sie handeln.",
      metaTitle: "Krypto-Buchhaltung & Krypto-Steuern Schweiz | StartSaldo",
      metaDesc: "Buchhaltung und Steuererklärung für Krypto-Trading: Wallets, Börsen, Bewertung und Deklaration – spezialisiert und persönlich betreut von StartSaldo.",
    },
    en: {
      ...en,
      menu: "Crypto",
      title: "Accounting and taxes for crypto trading",
      titleAccent: "Specialised in cryptocurrencies.",
      sub: "For businesses and traders dealing in cryptocurrencies.",
      blocks: [
        { title: "Crypto in your accounts", items: ["Booking purchases, sales and swaps", "Reconciling wallets and exchange accounts", "Valuation at the reporting date", "Clean documentation of transactions"] },
        { title: "Crypto in your tax return", items: ["Declaration in the securities statement", "Valuation as of 31 December", "Income from staking and lending", "Clear documents for the tax office"] },
        { title: "Assessing your situation", items: ["Private wealth management or professional trading", "Impact on taxes and social insurances", "Crypto in your company", "Clear answers"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "Crypto trading is one of our specialities. We understand how wallets, exchanges and transactions work, and turn them into clean accounts and tax returns.",
      faqTitle: "Frequently asked questions on crypto",
      faq: [
        ["Do I have to declare cryptocurrencies?", "Yes. In Switzerland, cryptocurrencies are part of your assets and are declared as of year end. We help you do this correctly."],
        ["Am I a private investor or a professional trader?", "This depends on factors such as holding period, volume and financing. We look at your situation together."],
        ["Which documents do you need?", "For example exports from your exchanges and wallet addresses. We give you a clear list."],
      ],
      endTitle: "Crypto properly accounted for?",
      endSub: "Tell us what you trade in a free, no-obligation conversation.",
      metaTitle: "Crypto accounting & crypto taxes Switzerland | StartSaldo",
      metaDesc: "Accounting and tax returns for crypto trading: wallets, exchanges, valuation and declaration – specialised and personally handled by StartSaldo.",
    },
  },
  schwyz: {
    de: {
      ...de,
      menu: "Region Schwyz",
      title: "Buchhaltung im Kanton Schwyz",
      titleAccent: "Aus Rothenthurm, für die Region.",
      sub: "Persönliche Finanz- und Lohnbuchhaltung für KMU in Schwyz und Umgebung.",
      blocksTitle: "Für KMU in der Region",
      blocks: [
        { title: "Wo wir für Sie da sind", items: ["Rothenthurm und Biberbrugg", "Einsiedeln und Sattel", "Schwyz und Brunnen", "Pfäffikon SZ, Lachen und Ausserschwyz", "Zug und die ganze Schweiz – digital"] },
        { title: "Was wir übernehmen", items: ["Finanzbuchhaltung und Jahresabschluss", "Lohnbuchhaltung und Sozialversicherungen", "MWST-Abrechnungen", "Steuererklärung", "Krypto-Buchhaltung"] },
        { title: "Warum lokal", items: ["Persönliche Treffen möglich", "Kenntnis der regionalen Gegebenheiten", "Kurze Wege und schnelle Antworten", "Feste Ansprechpartnerinnen"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Wir sind in Rothenthurm zu Hause und betreuen KMU aus der Region persönlich. Gerne lernen wir Sie kennen.",
      faqTitle: "Häufige Fragen",
      faq: [
        ["Arbeiten Sie nur im Kanton Schwyz?", "Nein. Wir betreuen Kunden in der ganzen Schweiz – digital und unkompliziert. Für KMU aus der Region sind auch persönliche Treffen einfach möglich."],
        ["Wo finde ich Sie?", "An der Schosstrasse 3 in 6418 Rothenthurm."],
        ["Wie starte ich?", "Mit einem unverbindlichen Erstgespräch. Buchen Sie einfach einen Termin."],
      ],
      endTitle: "Lernen wir uns kennen?",
      endSub: "Buchen Sie ein unverbindliches Erstgespräch – vor Ort oder online.",
      metaTitle: "Buchhaltung Schwyz, Einsiedeln & Rothenthurm | StartSaldo",
      metaDesc: "Finanz- und Lohnbuchhaltung für KMU im Kanton Schwyz: Rothenthurm, Einsiedeln, Schwyz, Pfäffikon SZ und Umgebung – persönlich von StartSaldo.",
    },
    en: {
      ...en,
      menu: "Schwyz region",
      title: "Accounting in the canton of Schwyz",
      titleAccent: "From Rothenthurm, for the region.",
      sub: "Personal financial accounting and payroll for SMEs in Schwyz and the surrounding area.",
      blocksTitle: "For SMEs in the region",
      blocks: [
        { title: "Where we are there for you", items: ["Rothenthurm and Biberbrugg", "Einsiedeln and Sattel", "Schwyz and Brunnen", "Pfäffikon SZ, Lachen and Ausserschwyz", "Zug and all of Switzerland – digitally"] },
        { title: "What we take care of", items: ["Financial accounting and annual accounts", "Payroll and social insurances", "VAT returns", "Tax returns", "Crypto accounting"] },
        { title: "Why local", items: ["Personal meetings possible", "Knowledge of the region", "Short distances and quick answers", "Fixed contact persons"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "We are based in Rothenthurm and personally look after SMEs from the region. We look forward to meeting you.",
      faqTitle: "Frequently asked questions",
      faq: [
        ["Do you only work in the canton of Schwyz?", "No. We serve clients throughout Switzerland – digitally and easily. For SMEs in the region, personal meetings are also easy."],
        ["Where can I find you?", "At Schosstrasse 3, 6418 Rothenthurm."],
        ["How do I start?", "With a free initial consultation. Simply book an appointment."],
      ],
      endTitle: "Shall we meet?",
      endSub: "Book a free initial consultation – in person or online.",
      metaTitle: "Accounting in Schwyz, Einsiedeln & Rothenthurm | StartSaldo",
      metaDesc: "Financial accounting and payroll for SMEs in the canton of Schwyz: Rothenthurm, Einsiedeln, Schwyz, Pfäffikon SZ and surroundings – personally by StartSaldo.",
    },
  },
};

export const SITE = "https://swiss-ledger-boutique.lovable.app";

export function serviceHead(slug: ServiceSlug, lang: Lang) {
  const c = services[slug][lang];
  const other: Lang = lang === "de" ? "en" : "de";
  const url = SITE + servicePaths[slug][lang];
  return {
    meta: [
      { title: c.metaTitle },
      { name: "description", content: c.metaDesc },
      { property: "og:title", content: c.metaTitle },
      { property: "og:description", content: c.metaDesc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: other, href: SITE + servicePaths[slug][other] },
    ],
  };
}
