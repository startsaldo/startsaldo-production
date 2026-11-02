import { shareMeta } from "@/components/structured-data";
import type { Lang } from "@/components/home-copy";
import { payrollCopy } from "@/components/payroll-page";

export type ServiceSlug = "finanzbuchhaltung" | "lohnbuchhaltung" | "mwst" | "steuern" | "jahresabschluss" | "krypto" | "startups" | "schwyz" | "zug" | "hoefe";
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
  /** Optional extra section (used by the start-ups page). */
  checklist?: { title: string; sub: string; items: string[] };
};

/** Route paths per page and language. Kept literal so Link stays type-safe. */
export const servicePaths = {
  finanzbuchhaltung: { de: "/finanzbuchhaltung", en: "/en/accounting" },
  lohnbuchhaltung: { de: "/lohnbuchhaltung", en: "/en/payroll" },
  mwst: { de: "/mwst", en: "/en/vat" },
  steuern: { de: "/steuern", en: "/en/tax" },
  jahresabschluss: { de: "/jahresabschluss", en: "/en/annual-accounts" },
  krypto: { de: "/krypto", en: "/en/crypto" },
  startups: { de: "/gruendung-startups", en: "/en/startups" },
  schwyz: { de: "/buchhaltung-schwyz", en: "/en/accounting-schwyz" },
  zug: { de: "/buchhaltung-zug", en: "/en/accounting-zug" },
  hoefe: { de: "/buchhaltung-ausserschwyz", en: "/en/accounting-ausserschwyz" },
} as const;

export const serviceOrder: ServiceSlug[] = ["finanzbuchhaltung", "lohnbuchhaltung", "mwst", "steuern", "jahresabschluss", "krypto", "startups", "schwyz", "zug", "hoefe"];
/** Region pages: footer shows them as one compact line. */
export const regionOrder: ServiceSlug[] = ["schwyz", "zug", "hoefe"];
/** Header menu: core services only; start-up and region pages stay footer-only. */
export const navOrder: ServiceSlug[] = serviceOrder.filter((s) => s !== "startups" && !regionOrder.includes(s));

const stdProcess = {
  de: [
    ["Erstgespräch", "Wir lernen Ihr Unternehmen, Ihre Abläufe und Ihre Fragen kennen."],
    ["Übernahme", "Wir übernehmen Ihre Unterlagen und richten alles sauber ein."],
    ["Laufend", "Sie senden uns Belege und Informationen über einen sicheren Proton-Freigabelink. Wir erledigen den Rest."],
    ["Termine im Griff", "Fristen behalten wir im Blick und melden uns rechtzeitig bei Ihnen."],
  ] as [string, string][],
  en: [
    ["Initial meeting", "We get to know your business, your processes and your questions."],
    ["Onboarding", "We take over your documents and set everything up properly."],
    ["Ongoing", "You send us receipts and information via a secure Proton share link. We do the rest."],
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
      title: "Finanzbuchhaltung für Schweizer KMU und Start-ups",
      titleAccent: "Sauber gebucht, klar erklärt.",
      sub: "Von den laufenden Belegen bis zur Bankabstimmung.",
      blocks: [
        { title: "Laufende Buchhaltung", items: ["Erfassung Ihrer Geschäftsfälle", "Bank- und Kontenabstimmungen", "Kassabuch und Spesen", "Digitale Ablage Ihrer Belege", "Verbuchung Ihrer Krypto-Transaktionen"] },
        { title: "Debitoren und Kreditoren", items: ["Verbuchung von Kunden- und Lieferantenrechnungen", "Übersicht über offene Posten", "Vorbereitung von Zahlungen", "Abstimmung der Konten"] },
        { title: "Abschlüsse", items: ["Monats- und Quartalsabschlüsse", "Jahresabschluss", "Abgrenzungen und Rückstellungen", "Übersichtliche Auswertungen"] },
        { title: "Aus einer Hand", items: ["MWST-Abrechnungen", "Steuererklärung Ihres Unternehmens", "Abstimmung mit der Lohnbuchhaltung", "Feste Ansprechpartnerin"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Sie haben eine feste Ansprechpartnerin, die Ihre Zahlen kennt, Fragen verständlich beantwortet und den Austausch von Belegen so einfach wie möglich macht.",
      faqTitle: "Häufige Fragen zur Finanzbuchhaltung",
      faq: [
        ["Wie übermittle ich meine Belege?", "Verschlüsselt über Proton – wir richten Ihnen den Zugang im Erstgespräch ein."],
        ["Kann ich nur einen Teil auslagern?", "Ja. Sie können die ganze Buchhaltung oder einzelne Aufgaben an uns übergeben."],
        ["Arbeiten Sie mit meiner bestehenden Software?", "Wir arbeiten standardmässig mit Banana, weil wir Ihre Daten bei uns auf Proton halten. Wenn Sie ausdrücklich ein anderes Programm wünschen, arbeiten wir auf Wunsch auch mit Bexio, Swiss21 oder Abacus."],
      ],
      endTitle: "Bereit, die Buchhaltung abzugeben?",
      endSub: "Erzählen Sie uns in einem kostenlosen und unverbindlichen Gespräch, wie Ihr Unternehmen aufgestellt ist.",
      metaTitle: "Finanzbuchhaltung für KMU und Start-ups in Schwyz & der Schweiz | StartSaldo",
      metaDesc: "Laufende Buchhaltung, Debitoren, Kreditoren, Bankabstimmungen und Abschlüsse für Schweizer KMU und Start-ups – persönlich betreut von StartSaldo aus Rothenthurm.",
    },
    en: {
      ...en,
      menu: "Financial accounting",
      title: "Financial accounting for Swiss SMEs and start-ups",
      titleAccent: "Booked properly, explained clearly.",
      sub: "From day-to-day bookkeeping to bank reconciliations.",
      blocks: [
        { title: "Ongoing bookkeeping", items: ["Recording your business transactions", "Bank and account reconciliations", "Cash book and expenses", "Digital filing of your receipts", "Recording crypto transactions"] },
        { title: "Receivables and payables", items: ["Booking customer and supplier invoices", "Overview of open items", "Preparing payments", "Account reconciliation"] },
        { title: "Closings", items: ["Monthly and quarterly closings", "Annual accounts", "Accruals and provisions", "Clear reports"] },
        { title: "All from one source", items: ["VAT returns", "Your company's tax return", "Reconciliation with payroll", "One fixed contact person"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "You have one fixed contact person who knows your figures, answers questions clearly and makes exchanging receipts as easy as possible.",
      faqTitle: "Frequently asked questions on accounting",
      faq: [
        ["How do I send my receipts?", "Encrypted via Proton – we set up your access in the initial meeting."],
        ["Can I outsource only part of it?", "Yes. You can hand over all of your accounting or individual tasks."],
        ["Do you work with my existing software?", "We work with Banana as standard, because we keep your data with us on Proton. If you explicitly prefer another programme, we are also happy to work with Bexio, Swiss21 or Abacus."],
      ],
      endTitle: "Ready to hand over your accounting?",
      endSub: "Tell us about your business in a free, no-obligation conversation.",
      metaTitle: "Financial accounting for Swiss SMEs and start-ups | StartSaldo",
      metaDesc: "Bookkeeping, receivables, payables, bank reconciliations and closings for Swiss SMEs and start-ups – personally handled by StartSaldo.",
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
      metaTitle: "Lohnbuchhaltung für KMU und Start-ups in Schwyz & der Schweiz | StartSaldo",
      metaDesc: "Lohnabrechnung, Sozialversicherungen, Ein- und Austritte, Quellensteuer und Lohnausweise für Schweizer KMU und Start-ups – persönlich betreut von StartSaldo aus Rothenthurm.",
    },
    en: {
      ...payrollCopy.en,
      menu: "Payroll",
      blocks: payrollCopy.en.blocks.map((b) => ({ title: b.title, items: [...b.items] })),
      process: payrollCopy.en.process.map(([a, b]) => [a, b] as [string, string]),
      faq: payrollCopy.en.faq.map(([a, b]) => [a, b] as [string, string]),
      people: ["sarah"],
      metaTitle: "Payroll services for Swiss SMEs and start-ups | StartSaldo",
      metaDesc: "Payroll, social insurance, employee onboarding and offboarding, withholding tax and salary certificates for Swiss SMEs and start-ups – personally handled by StartSaldo.",
    },
  },
  mwst: {
    de: {
      ...de,
      menu: "MWST",
      title: "MWST-Abrechnung für Schweizer KMU und Start-ups",
      titleAccent: "Fristgerecht und nachvollziehbar.",
      sub: "Von der Anmeldung bis zur periodischen Abrechnung mit der ESTV.",
      blocks: [
        { title: "Anmeldung und Abklärung", items: ["Abklärung der MWST-Pflicht", "Anmeldung bei der ESTV", "Wahl der Abrechnungsmethode", "Effektive Methode oder Saldosteuersatz"] },
        { title: "Periodische Abrechnung", items: ["Erstellung der MWST-Abrechnung", "Einreichung innert Frist", "Korrekte Berücksichtigung der Vorsteuer je nach Abrechnungsmethode", "Abstimmung mit der Buchhaltung"] },
        { title: "Jahresabstimmung", items: ["Umsatzabstimmung", "Korrekturen und Berichtigungen", "Vorbereitung auf Kontrollen", "Saubere Dokumentation"] },
        { title: "Beratung im Alltag", items: ["Fragen zu Steuersätzen", "Rechnungen mit korrekten Angaben", "Leistungen ins Ausland", "Verständliche Antworten"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Bei MWST-Fragen müssen Sie nicht lange suchen: Ihre Ansprechpartnerin kennt Ihre Buchhaltung und sorgt dafür, dass die Abrechnung stimmt.",
      faqTitle: "Häufige Fragen zur MWST",
      faq: [
        ["Ab wann bin ich mehrwertsteuerpflichtig?", "In der Regel ab einem Jahresumsatz von CHF 100'000 aus steuerbaren Leistungen. Wir klären gerne mit Ihnen ab, ob und ab wann das für Sie gilt."],
        ["Effektive Methode oder Saldosteuersatz?", "Das hängt von Ihrer Branche, Ihren Kosten und Ihrem Aufwand ab. Der Saldosteuersatz entlastet Sie administrativ: Sie rechnen mit einer pauschalen Ersatzrate ab und erfassen die Vorsteuern nicht einzeln. Die effektive Methode lohnt sich, wenn Sie hohe Vorsteuern haben – etwa bei grösseren Investitionen in Maschinen, Fahrzeuge oder Immobilien. Wir zeigen Ihnen die Unterschiede und was für Sie sinnvoll ist."],
        ["Können Sie nur die MWST übernehmen?", "Ja. Sie können die MWST-Abrechnung einzeln oder zusammen mit der Buchhaltung an uns übergeben."],
        ["Ist auch eine jährliche Abrechnung möglich?", "Ja. Seit 2025 können berechtigte Unternehmen auf Antrag bei der ESTV jährlich statt vierteljährlich abrechnen. Ob das für Sie in Frage kommt, klären wir gerne mit Ihnen ab."],
      ],
      endTitle: "MWST abgeben und Ruhe haben?",
      endSub: "Wir schauen gemeinsam, was Ihr Unternehmen braucht.",
      metaTitle: "MWST-Abrechnung für KMU und Start-ups in Schwyz & der Schweiz | StartSaldo",
      metaDesc: "MWST-Anmeldung, Abrechnung mit der ESTV, Saldosteuersatz oder effektive Methode – für Schweizer KMU und Start-ups, persönlich betreut von StartSaldo.",
    },
    en: {
      ...en,
      menu: "VAT",
      title: "VAT returns for Swiss SMEs and start-ups",
      titleAccent: "Accurate, timely and transparent.",
      sub: "From registration to periodic returns with the Federal Tax Administration.",
      blocks: [
        { title: "Registration and assessment", items: ["Checking whether you are liable for VAT", "Registration with the FTA", "Choice of settlement method", "Effective method or net tax rate"] },
        { title: "Periodic returns", items: ["Preparing the VAT return", "Filing on time", "Correct VAT treatment according to the applicable reporting method", "Reconciliation with accounting"] },
        { title: "Annual reconciliation", items: ["Turnover reconciliation", "Corrections and adjustments", "Preparation for audits", "Clean documentation"] },
        { title: "Everyday advice", items: ["Questions on tax rates", "Invoices with correct details", "Services abroad", "Clear answers"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "You don't have to search long for answers on VAT: your contact person knows your accounts and makes sure the return is correct.",
      faqTitle: "Frequently asked questions on VAT",
      faq: [
        ["When do I become liable for VAT?", "Generally from an annual turnover of CHF 100,000 from taxable supplies. We are happy to check whether and from when this applies to you."],
        ["Effective method or net tax rate?", "It depends on your industry, your costs and your effort. The net tax rate reduces your administration: you settle at a flat replacement rate and do not record input tax individually. The effective method is worthwhile when you have high input tax – for example with larger investments in machines, vehicles or property. We explain the differences and what makes sense for you."],
        ["Can you take over VAT only?", "Yes. You can hand over the VAT return on its own or together with your accounting."],
        ["Is annual settlement possible?", "Yes. Since 2025, eligible companies can apply to the FTA to settle annually instead of quarterly. We are happy to check with you whether this is an option for you."],
      ],
      endTitle: "Hand over VAT and relax?",
      endSub: "Let's look together at what your business needs.",
      metaTitle: "VAT returns for Swiss SMEs and start-ups | StartSaldo",
      metaDesc: "VAT registration, returns with the FTA, net tax rate or effective method – for Swiss SMEs and start-ups, personally handled by StartSaldo.",
    },
  },
  steuern: {
    de: {
      ...de,
      menu: "Steuern",
      title: "Steuererklärung für Schweizer KMU und Start-ups",
      titleAccent: "Vollständig und rechtzeitig eingereicht.",
      sub: "Wir erstellen die Steuererklärung Ihrer Firma auf Basis einer sauberen Buchhaltung.",
      blocks: [
        { title: "Steuererklärung", items: ["Ausfüllen der Steuererklärung", "Zusammenstellen der Beilagen", "Einreichung innert Frist", "Fristerstreckungen bei Bedarf"] },
        { title: "Vorbereitung", items: ["Abstimmung mit dem Jahresabschluss", "Aufstellung von Beteiligungen und Bankkonten der Firma", "Übersicht über abzugsfähige Aufwände", "Klare Liste der benötigten Unterlagen"] },
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
        ["Was gilt für Einzelunternehmen?", "Ein Einzelunternehmen ist keine eigene steuerpflichtige Person: Das Geschäftsergebnis fliesst in Ihre persönliche Steuererklärung ein. Wir bereiten die geschäftlichen Zahlen dafür vollständig auf."],
      ],
      endTitle: "Die nächste Steuererklärung abgeben?",
      endSub: "Wir besprechen in einem kostenlosen und unverbindlichen Gespräch, was Sie brauchen.",
      metaTitle: "Steuererklärung für KMU und Start-ups in Schwyz | StartSaldo",
      metaDesc: "Steuererklärung für Schweizer KMU und Start-ups – vorbereitet, ausgefüllt und fristgerecht eingereicht. Persönlich betreut von StartSaldo aus Rothenthurm.",
    },
    en: {
      ...en,
      menu: "Taxes",
      title: "Tax returns for Swiss SMEs and start-ups",
      titleAccent: "Complete and filed on time.",
      sub: "We prepare your company's tax return based on clean accounts.",
      blocks: [
        { title: "Tax return", items: ["Completing the tax return", "Compiling the attachments", "Filing on time", "Deadline extensions if needed"] },
        { title: "Preparation", items: ["Reconciliation with the annual accounts", "Schedule of company shareholdings and bank accounts", "Overview of deductible expenses", "Clear list of required documents"] },
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
        ["What applies to sole proprietorships?", "A sole proprietorship is not a separate taxable entity: the business result flows into your personal tax return. We prepare the business figures for it in full."],
      ],
      endTitle: "Hand over your next tax return?",
      endSub: "Let's discuss what you need in a free, no-obligation conversation.",
      metaTitle: "Tax returns for Swiss SMEs and start-ups | StartSaldo",
      metaDesc: "Tax returns for Swiss SMEs and start-ups – prepared, completed and filed on time. Personally handled by StartSaldo.",
    },
  },
  jahresabschluss: {
    de: {
      ...de,
      menu: "Jahresabschluss",
      title: "Jahresabschluss für Schweizer KMU und Start-ups",
      titleAccent: "Klar, korrekt und termingerecht.",
      sub: "Bilanz und Erfolgsrechnung, die Sie verstehen.",
      blocks: [
        { title: "Abschlussarbeiten", items: ["Abstimmung aller Konten", "Abgrenzungen und Rückstellungen", "Abschreibungen", "Inventar und Warenlager"] },
        { title: "Jahresrechnung", items: ["Bilanz und Erfolgsrechnung", "Anhang nach Obligationenrecht", "Unterlagen für die General- bzw. Gesellschafterversammlung (AG/GmbH)", "Vorbereitung für die Revision"] },
        { title: "Auswertung", items: ["Verständliche Erklärung Ihrer Zahlen", "Vergleich mit dem Vorjahr", "Grundlage für die Steuererklärung", "Hinweise für das neue Jahr"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Wir erklären Ihnen Ihren Abschluss in verständlichen Worten – damit Sie wissen, wo Ihr Unternehmen steht.",
      faqTitle: "Häufige Fragen zum Jahresabschluss",
      faq: [
        ["Bis wann muss der Jahresabschluss fertig sein?", "Die Jahresrechnung einer GmbH oder AG muss innert sechs Monaten nach Geschäftsjahresende der General- bzw. Gesellschafterversammlung vorgelegt werden. Wir planen die Arbeiten rechtzeitig mit Ihnen."],
        ["Übernehmen Sie auch die Revision?", "Nein. Wir bereiten den Abschluss so vor, dass Ihre Revisionsstelle effizient prüfen kann."],
        ["Kann ich nur den Abschluss bei Ihnen machen?", "Ja. Auch wenn Sie die Buchhaltung unter dem Jahr selbst führen, übernehmen wir gerne den Abschluss."],
      ],
      endTitle: "Den nächsten Abschluss entspannt angehen?",
      endSub: "Erzählen Sie uns in einem kostenlosen und unverbindlichen Gespräch, was Sie brauchen.",
      metaTitle: "Jahresabschluss für KMU und Start-ups in Schwyz & der Schweiz | StartSaldo",
      metaDesc: "Jahresabschluss mit Bilanz, Erfolgsrechnung und Anhang für Schweizer KMU und Start-ups – persönlich und verständlich erklärt von StartSaldo.",
    },
    en: {
      ...en,
      menu: "Annual accounts",
      title: "Annual accounts for Swiss SMEs and start-ups",
      titleAccent: "Clear, correct and on time.",
      sub: "A balance sheet and income statement you understand.",
      blocks: [
        { title: "Closing work", items: ["Reconciliation of all accounts", "Accruals and provisions", "Depreciation", "Inventory and stock"] },
        { title: "Financial statements", items: ["Balance sheet and income statement", "Notes to the financial statements (Swiss Code of Obligations)", "Documents for the general meeting (AG) or shareholders' meeting (GmbH)", "Preparation for the audit"] },
        { title: "Review", items: ["Clear explanation of your figures", "Comparison with the previous year", "Basis for the tax return", "Pointers for the new year"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "We explain your annual accounts in plain words – so you know where your business stands.",
      faqTitle: "Frequently asked questions on annual accounts",
      faq: [
        ["When must the annual accounts be ready?", "The accounts of a GmbH or AG must be presented to the general meeting (AG) or shareholders' meeting (GmbH) within six months of the financial year end. We plan the work with you in good time."],
        ["Do you also do the audit?", "No. We prepare the accounts so that your auditor can review them efficiently."],
        ["Can I just have the closing done by you?", "Yes. Even if you keep the books yourself during the year, we are happy to do the closing."],
      ],
      endTitle: "Approach your next closing with ease?",
      endSub: "Tell us what you need in a free, no-obligation conversation.",
      metaTitle: "Annual accounts for Swiss SMEs and start-ups | StartSaldo",
      metaDesc: "Annual accounts with balance sheet, income statement and notes for Swiss SMEs and start-ups – personal and clearly explained by StartSaldo.",
    },
  },
  krypto: {
    de: {
      ...de,
      menu: "Krypto",
      title: "Buchhaltung und Steuern für Krypto-Trading",
      titleAccent: "Spezialisiert auf Kryptowährungen.",
      sub: "Für KMU und Start-ups, die Kryptowährungen halten oder damit handeln.",
      blocks: [
        { title: "Krypto in der Buchhaltung", items: ["Verbuchung von Käufen, Verkäufen und Tauschgeschäften", "Abstimmung von Wallets und Börsenkonten", "Bewertung per Stichtag", "Saubere Dokumentation der Transaktionen"] },
        { title: "Krypto in den Firmensteuern", items: ["Ausweis in der Bilanz nach Obligationenrecht", "Bewertung per Bilanzstichtag", "Erträge aus Staking und Lending", "Klare Unterlagen für die Steuerbehörde"] },
        { title: "Abklärung Ihrer Situation", items: ["Steuerliche Einordnung von Krypto-Transaktionen im Unternehmen", "Auswirkungen auf Steuern und Sozialversicherungen", "Bewertung und Dokumentation am Bilanzstichtag", "Verständliche Antworten"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Krypto-Trading ist eines unserer Spezialgebiete. Wir verstehen, wie Wallets, Börsen und Transaktionen funktionieren, und übersetzen das in eine saubere Buchhaltung und Steuererklärung.",
      faqTitle: "Häufige Fragen zu Krypto",
      faq: [
        ["Wie werden Kryptowährungen in der Firma verbucht?", "Sie werden in der Bilanz Ihrer Firma ausgewiesen und per Bilanzstichtag bewertet. Wir sorgen dafür, dass Buchhaltung und Steuererklärung übereinstimmen."],
        ["Können Sie auch grosse Transaktionsvolumina verarbeiten?", "Ja. Wir arbeiten mit Exporten aus Ihren Börsen und Wallets und bringen auch viele Transaktionen sauber in die Buchhaltung."],
        ["Welche Unterlagen brauchen Sie?", "Zum Beispiel Exporte Ihrer Börsen und Wallet-Adressen. Sie erhalten von uns eine klare Liste."],
      ],
      endTitle: "Krypto sauber abgerechnet?",
      endSub: "Erzählen Sie uns in einem kostenlosen und unverbindlichen Gespräch, womit Sie handeln.",
      metaTitle: "Krypto-Buchhaltung & Krypto-Steuern Schweiz | StartSaldo",
      metaDesc: "Buchhaltung und Steuererklärung für Krypto-Trading: Wallets, Börsen, Bewertung und Deklaration – spezialisiert und persönlich betreut von StartSaldo.",
    },
    en: {
      ...en,
      menu: "Crypto",
      title: "Accounting and taxes for crypto trading",
      titleAccent: "Specialised in cryptocurrencies.",
      sub: "For SMEs and start-ups that hold or trade cryptocurrencies.",
      blocks: [
        { title: "Crypto in your accounts", items: ["Booking purchases, sales and swaps", "Reconciling wallets and exchange accounts", "Valuation at the reporting date", "Clean documentation of transactions"] },
        { title: "Crypto in your company taxes", items: ["Presentation in the balance sheet under Swiss law", "Valuation at the balance sheet date", "Income from staking and lending", "Clear documents for the tax office"] },
        { title: "Assessing your situation", items: ["Tax classification of crypto transactions in your company", "Impact on taxes and social insurance", "Valuation and documentation at the balance sheet date", "Clear answers"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "Crypto trading is one of our specialities. We understand how wallets, exchanges and transactions work, and turn them into clean accounts and tax returns.",
      faqTitle: "Frequently asked questions on crypto",
      faq: [
        ["How are cryptocurrencies accounted for in a company?", "They are shown in your company's balance sheet and valued at the balance sheet date. We make sure your accounts and tax return match."],
        ["Can you handle large transaction volumes?", "Yes. We work with exports from your exchanges and wallets and bring even large numbers of transactions cleanly into your accounts."],
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
      sub: "Persönliche Finanz- und Lohnbuchhaltung für KMU und Start-ups in Schwyz und Umgebung.",
      blocksTitle: "Für KMU und Start-ups in der Region",
      blocks: [
        { title: "Wo wir für Sie da sind", items: ["Rothenthurm und Biberbrugg", "Einsiedeln und Sattel", "Schwyz und Brunnen", "Pfäffikon SZ, Lachen und Ausserschwyz", "Zug und die ganze Schweiz – digital"] },
        { title: "Ihr Alltag mit uns", items: ["Laufende Finanzbuchhaltung", "Monatlicher Lohnlauf und Sozialversicherungen", "MWST-Abrechnungen innert Frist", "Jahresabschluss und Steuererklärung", "Krypto-Transaktionen"] },
        { title: "Warum lokal", items: ["Wir kennen die Schwyzer Steuerbehörde und Ausgleichskassen aus der täglichen Arbeit", "Vom Gewerbebetrieb bis zum Start-up", "Feste Ansprechpartnerinnen", "Volldigital in der ganzen Schweiz"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Wir sind in Rothenthurm zu Hause und kennen den Kanton Schwyz von Schwyz und Brunnen über Einsiedeln bis Pfäffikon SZ. KMU und Start-ups aus der Region betreuen wir volldigital – mit festen Ansprechpartnerinnen und klaren Terminen.",
      faqTitle: "Häufige Fragen",
      faq: [
        ["Arbeiten Sie nur im Kanton Schwyz?", "Nein. Wir betreuen Kunden in der ganzen Schweiz – digital und unkompliziert."],
        ["Können Sie auch nur die Lohnbuchhaltung übernehmen?", "Ja. Sie können auch nur die Löhne an uns geben und Ihre Finanzbuchhaltung selbst behalten. Wir legen den Umfang gemeinsam fest."],
        ["Wo finde ich Sie?", "An der Schoosstrasse 3 in 6418 Rothenthurm."],
        ["Wie starte ich?", "Mit einem kostenlosen und unverbindlichen Erstgespräch. Buchen Sie einfach einen Termin."],
      ],
      endTitle: "Lernen wir uns kennen?",
      endSub: "Buchen Sie ein kostenloses und unverbindliches Erstgespräch.",
      metaTitle: "Buchhaltung Schwyz, Einsiedeln & Rothenthurm | StartSaldo",
      metaDesc: "Finanz- und Lohnbuchhaltung für KMU und Start-ups im Kanton Schwyz: Rothenthurm, Einsiedeln, Schwyz, Pfäffikon SZ und Umgebung – persönlich von StartSaldo.",
    },
    en: {
      ...en,
      menu: "Schwyz region",
      title: "Accounting in the canton of Schwyz",
      titleAccent: "From Rothenthurm, for the region.",
      sub: "Personal financial accounting and payroll for SMEs and start-ups in Schwyz and the surrounding area.",
      blocksTitle: "For SMEs and start-ups in the region",
      blocks: [
        { title: "Areas we serve", items: ["Rothenthurm and Biberbrugg", "Einsiedeln and Sattel", "Schwyz and Brunnen", "Pfäffikon SZ, Lachen and Ausserschwyz", "Zug and all of Switzerland – digitally"] },
        { title: "Your day to day with us", items: ["Ongoing financial accounting", "Monthly payroll and social insurance", "VAT returns filed on time", "Annual accounts and tax return", "Crypto transactions"] },
        { title: "Why local", items: ["We know the Schwyz tax office and compensation funds from our day-to-day work", "From trades businesses to start-ups", "Fixed contact persons", "Fully digital across Switzerland"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "We are based in Rothenthurm and know the canton of Schwyz from Schwyz and Brunnen via Einsiedeln to Pfäffikon SZ. We look after SMEs and start-ups from the region fully digitally – with fixed contact persons and clear deadlines.",
      faqTitle: "Frequently asked questions",
      faq: [
        ["Do you only work in the canton of Schwyz?", "No. We serve clients throughout Switzerland – digitally and easily."],
        ["Can you take over payroll only?", "Yes. You can hand over just payroll and keep your own financial accounting. We agree on the scope together."],
        ["Where can I find you?", "At Schoosstrasse 3, 6418 Rothenthurm."],
        ["How do I start?", "With a free initial consultation. Simply book an appointment."],
      ],
      endTitle: "Shall we meet?",
      endSub: "Book a free initial consultation.",
      metaTitle: "Accounting in Schwyz, Einsiedeln & Rothenthurm | StartSaldo",
      metaDesc: "Financial accounting and payroll for SMEs and start-ups in the canton of Schwyz: Rothenthurm, Einsiedeln, Schwyz, Pfäffikon SZ and surroundings – personally by StartSaldo.",
    },
  },
  startups: {
    de: {
      ...de,
      menu: "Gründung & Start-ups",
      title: "Buchhaltung für Neugründer",
      titleAccent: "Von Anfang an sauber aufgestellt.",
      sub: "Wir begleiten Start-ups und Neugründungen ab dem ersten Beleg – persönlich und digital.",
      blocksTitle: "Was wir für Sie übernehmen",
      blocks: [
        { title: "Die Gründung", items: ["Begleitung bei der Gründung bis zum Handelsregistereintrag", "Eröffnungsbilanz", "Passender Kontenplan und digitale Buchhaltung", "Klärung der MWST-Pflicht"] },
        { title: "Die ersten Mitarbeitenden", items: ["Anmeldung bei der Ausgleichskasse (AHV)", "Klärung von BVG und UV", "Erste Lohnabrechnungen", "Ein- und Austritte"] },
        { title: "Laufend", items: ["Laufende Buchhaltung", "MWST-Abrechnungen", "Jahresabschluss", "Steuererklärung"] },
      ],
      checklist: {
        title: "Checkliste für die Gründung",
        sub: "Diese Punkte sind vor, während und nach einer Firmengründung wichtig. Wir prüfen sie gemeinsam und übernehmen die Aufgaben, bei denen Sie Unterstützung wünschen.",
        items: [
          "Rechtsform festlegen und Gesellschaft gründen",
          "Eintrag ins Handelsregister",
          "Geschäftskonto bei der Bank eröffnen",
          "Buchhaltung und digitale Belegablage einrichten",
          "MWST-Pflicht prüfen und gegebenenfalls anmelden",
          "Ausgleichskasse (AHV) als Arbeitgeber anmelden",
          "Vorsorge (BVG) und Unfallversicherung (UV) klären",
          "Termine für MWST, Löhne und Steuererklärung festhalten",
        ],
      },
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Gerade am Anfang gibt es viele Fragen. Wir nehmen uns Zeit und sorgen dafür, dass Ihre Buchhaltung von Beginn an stimmt.",
      faqTitle: "Häufige Fragen",
      faq: [
        ["Ab wann brauche ich eine Buchhaltung?", "Ab der Gründung. Je früher alles sauber eingerichtet ist, desto einfacher wird später der Jahresabschluss."],
        ["Muss ich mich für die MWST anmelden?", "Das hängt von Ihrem Umsatz und Ihrer Tätigkeit ab. Wir klären das gemeinsam mit Ihnen."],
        ["Helfen Sie auch bei der Wahl der Rechtsform?", "Die Rechtsform wählen Sie selbst. Sobald diese feststeht, begleiten wir Sie durch die Gründung bis zum Handelsregistereintrag."],
        ["Wie starte ich?", "Mit einem kostenlosen und unverbindlichen Erstgespräch. Buchen Sie einfach einen Termin."],
      ],
      endTitle: "Sie gründen gerade?",
      endSub: "Lassen Sie uns im kostenlosen und unverbindlichen Erstgespräch über Ihren Start sprechen.",
      metaTitle: "Buchhaltung für Start-ups & Neugründungen Schweiz | StartSaldo",
      metaDesc: "Buchhaltung für Start-ups und Neugründungen in der Schweiz: Eröffnungsbilanz, MWST-Pflicht, AHV-Anmeldung und digitale Buchhaltung – persönlich von StartSaldo.",
    },
    en: {
      ...en,
      menu: "Founders & start-ups",
      title: "Accounting for founders",
      titleAccent: "Set up properly from day one.",
      sub: "We support start-ups and new companies from the very first receipt – personally and digitally.",
      blocksTitle: "What we take care of",
      blocks: [
        { title: "Founding", items: ["Support with founding up to the commercial register entry", "Opening balance sheet", "Suitable chart of accounts and digital accounting", "Clarifying VAT liability"] },
        { title: "Your first employees", items: ["Registration with the compensation fund (AHV)", "Clarifying BVG and UV", "First payslips", "Onboarding and offboarding"] },
        { title: "Ongoing", items: ["Ongoing bookkeeping", "VAT returns", "Annual accounts", "Tax returns"] },
      ],
      checklist: {
        title: "Checklist for founders",
        sub: "These steps are relevant before, during and after setting up a company. We review them together and support you where needed.",
        items: [
          "Choose the legal form and found the company",
          "Entry in the commercial register",
          "Open a business bank account",
          "Set up accounting and digital filing of receipts",
          "Check VAT liability and register if needed",
          "Register as an employer with the compensation fund (AHV)",
          "Clarify pension (BVG) and accident insurance (UV)",
          "Set dates for VAT, payroll and the tax return",
        ],
      },
      process: stdProcess.en,
      people: ["audelia"],
      personText: "There are many questions at the beginning. We take our time and make sure your accounting is right from the start.",
      faqTitle: "Frequently asked questions",
      faq: [
        ["When do I need accounting?", "From the moment you found your company. The earlier everything is set up properly, the easier the annual accounts will be."],
        ["Do I have to register for VAT?", "That depends on your turnover and activity. We clarify this together with you."],
        ["Do you help choose the legal form?", "You choose the legal form yourself. Once it is decided, we support you through the founding process up to the commercial register entry."],
        ["How do I start?", "With a free initial consultation. Simply book an appointment."],
      ],
      endTitle: "Founding a company?",
      endSub: "Let's talk about your start in a free initial consultation.",
      metaTitle: "Accounting for start-ups & new companies Switzerland | StartSaldo",
      metaDesc: "Accounting for start-ups and new companies in Switzerland: opening balance, VAT liability, AHV registration and digital accounting – personally by StartSaldo.",
    },
  },
  zug: {
    de: {
      ...de,
      menu: "Region Zug",
      title: "Buchhaltung im Kanton Zug",
      titleAccent: "Krypto, Start-ups und KMU – volldigital betreut.",
      sub: "Finanz- und Lohnbuchhaltung für KMU und Start-ups im Kanton Zug – mit Spezialisierung auf Krypto-Transaktionen.",
      blocksTitle: "Für KMU und Start-ups in Zug",
      blocks: [
        { title: "Wo wir für Sie da sind", items: ["Stadt Zug und Baar", "Cham und Steinhausen", "Rotkreuz und Risch", "Unterägeri und Oberägeri", "Die ganze Schweiz – digital"] },
        { title: "Womit wir Zuger Firmen entlasten", items: ["Finanzbuchhaltung und Jahresrechnung", "Löhne und Sozialversicherungen", "MWST-Abrechnungen", "Steuererklärung Ihrer Firma", "Krypto-Buchhaltung und steuerliche Dokumentation"] },
        { title: "Warum StartSaldo", items: ["Spezialisiert auf Krypto-Transaktionen", "Erfahrung mit Start-ups", "Feste Ansprechpartnerinnen", "Volldigital im ganzen Kanton"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Der Kanton Zug zieht Start-ups und Handelsfirmen an. Wir betreuen Zuger KMU und Start-ups volldigital – von der laufenden Buchhaltung bis zur Verbuchung von Krypto-Transaktionen.",
      faqTitle: "Häufige Fragen",
      faq: [
        ["Betreuen Sie Unternehmen im Kanton Zug?", "Ja. Wir arbeiten digital und unkompliziert mit Kunden aus Zug und der ganzen Schweiz zusammen."],
        ["Muss ich für die Zusammenarbeit vor Ort sein?", "Nein. Wir arbeiten volldigital: Sie senden uns Ihre Unterlagen über einen sicheren Proton-Freigabelink, wir erledigen den Rest."],
        ["Kennen Sie sich mit Krypto aus?", "Ja, wir sind auf die Buchhaltung und Steuererklärung von Krypto-Transaktionen spezialisiert."],
        ["Wie starte ich?", "Mit einem kostenlosen und unverbindlichen Erstgespräch. Buchen Sie einfach einen Termin."],
      ],
      endTitle: "Lernen wir uns kennen?",
      endSub: "Buchen Sie ein kostenloses und unverbindliches Erstgespräch.",
      metaTitle: "Buchhaltung Zug, Baar & Cham | StartSaldo",
      metaDesc: "Finanz- und Lohnbuchhaltung für KMU und Start-ups im Kanton Zug: Zug, Baar, Cham, Steinhausen – spezialisiert auf Krypto-Transaktionen. Persönlich von StartSaldo.",
    },
    en: {
      ...en,
      menu: "Zug region",
      title: "Accounting in the canton of Zug",
      titleAccent: "Crypto, start-ups and SMEs – handled digitally.",
      sub: "Financial accounting and payroll for SMEs and start-ups in the canton of Zug – specialised in crypto transactions.",
      blocksTitle: "For SMEs and start-ups in Zug",
      blocks: [
        { title: "Areas we serve", items: ["Zug and Baar", "Cham and Steinhausen", "Rotkreuz and Risch", "Unterägeri and Oberägeri", "All of Switzerland – digitally"] },
        { title: "How we take the load off Zug companies", items: ["Financial accounting and annual accounts", "Payroll and social insurance", "VAT returns", "Your company's tax return", "Crypto accounting and tax documentation"] },
        { title: "Why StartSaldo", items: ["Specialised in crypto transactions", "Experience with start-ups", "Fixed contact persons", "Fully digital across the canton"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "The canton of Zug attracts start-ups and trading companies. We look after SMEs and start-ups from Zug fully digitally – from day-to-day bookkeeping to crypto transaction accounting.",
      faqTitle: "Frequently asked questions",
      faq: [
        ["Do you serve companies in the canton of Zug?", "Yes. We work digitally and easily with clients from Zug and all of Switzerland."],
        ["Do I have to be on site to work with you?", "No. We work fully digitally: you send us your documents via a secure Proton share link and we handle the rest."],
        ["Do you know crypto?", "Yes, we specialise in accounting and tax returns for crypto trades."],
        ["How do I start?", "With a free initial consultation. Simply book an appointment."],
      ],
      endTitle: "Shall we meet?",
      endSub: "Book a free initial consultation.",
      metaTitle: "Accounting in Zug, Baar & Cham | StartSaldo",
      metaDesc: "Financial accounting and payroll for SMEs and start-ups in the canton of Zug: Zug, Baar, Cham, Steinhausen – specialised in crypto trading. Personally by StartSaldo.",
    },
  },
  hoefe: {
    de: {
      ...de,
      menu: "Region Ausserschwyz & Höfe",
      title: "Buchhaltung in Ausserschwyz und Höfe",
      titleAccent: "Am oberen Zürichsee – volldigital betreut.",
      sub: "Finanz- und Lohnbuchhaltung für KMU und Start-ups in Wollerau, Freienbach und Pfäffikon SZ – betreut aus dem Kanton Schwyz.",
      blocksTitle: "Für KMU und Start-ups am oberen Zürichsee",
      blocks: [
        { title: "Wo wir für Sie da sind", items: ["Wollerau und Feusisberg", "Freienbach und Pfäffikon SZ", "Bäch, Wilen und Hurden", "Lachen, Altendorf und die March", "Die ganze Schweiz – digital"] },
        { title: "Womit wir Sie am oberen Zürichsee entlasten", items: ["Laufende Buchhaltung", "Lohnabrechnungen und Sozialversicherungen", "MWST-Abrechnungen", "Steuererklärung der Firma", "Krypto in Buchhaltung und Steuern"] },
        { title: "Warum StartSaldo", items: ["Persönliche Betreuung – Dokumentenaustausch über Proton", "Spezialisiert auf Krypto-Transaktionen", "Feste Ansprechpartnerinnen", "Alles volldigital"] },
      ],
      process: stdProcess.de,
      people: ["audelia"],
      personText: "Wir sind im Kanton Schwyz zu Hause und kennen den Bezirk Höfe mit Wollerau, Freienbach und Pfäffikon SZ. KMU und Start-ups am oberen Zürichsee betreuen wir volldigital – vom monatlichen Lohnlauf bis zum Jahresabschluss.",
      faqTitle: "Häufige Fragen",
      faq: [
        ["Betreuen Sie Unternehmen in Wollerau, Freienbach und Pfäffikon SZ?", "Ja. Wir arbeiten digital und unkompliziert mit Kunden aus dem Bezirk Höfe, der March und der ganzen Schweiz zusammen."],
        ["Wir sitzen im Bezirk Höfe – passt das zu Rothenthurm?", "Ja. Der Austausch läuft volldigital über Proton, deshalb spielt der Standort Ihrer Firma keine Rolle."],
        ["Kennen Sie sich mit Krypto aus?", "Ja, wir sind auf die Buchhaltung und Steuererklärung von Krypto-Transaktionen spezialisiert."],
        ["Wie starte ich?", "Mit einem kostenlosen und unverbindlichen Erstgespräch. Buchen Sie einfach einen Termin."],
      ],
      endTitle: "Lernen wir uns kennen?",
      endSub: "Buchen Sie ein kostenloses und unverbindliches Erstgespräch.",
      metaTitle: "Buchhaltung Wollerau, Freienbach & Pfäffikon SZ | StartSaldo",
      metaDesc: "Finanz- und Lohnbuchhaltung für KMU und Start-ups in Ausserschwyz und Höfe: Wollerau, Freienbach, Pfäffikon SZ, Lachen – spezialisiert auf Krypto-Transaktionen.",
    },
    en: {
      ...en,
      menu: "Ausserschwyz & Höfe region",
      title: "Accounting in Ausserschwyz and Höfe",
      titleAccent: "On Upper Lake Zurich – handled digitally.",
      sub: "Financial accounting and payroll for SMEs and start-ups in Wollerau, Freienbach and Pfäffikon SZ – supported from the canton of Schwyz.",
      blocksTitle: "For SMEs and start-ups on Upper Lake Zurich",
      blocks: [
        { title: "Areas we serve", items: ["Wollerau and Feusisberg", "Freienbach and Pfäffikon SZ", "Bäch, Wilen and Hurden", "Lachen, Altendorf and the March district", "All of Switzerland – digitally"] },
        { title: "How we lighten your load on Upper Lake Zurich", items: ["Ongoing bookkeeping", "Payslips and social insurance", "VAT returns", "Your company's tax return", "Crypto in accounting and taxes"] },
        { title: "Why StartSaldo", items: ["Personal support – document exchange via Proton", "Specialised in crypto transactions", "Fixed contact persons", "Everything fully digital"] },
      ],
      process: stdProcess.en,
      people: ["audelia"],
      personText: "We are based in the canton of Schwyz and know the Höfe district with Wollerau, Freienbach and Pfäffikon SZ. We look after SMEs and start-ups on Upper Lake Zurich fully digitally – from the monthly payroll run to the annual accounts.",
      faqTitle: "Frequently asked questions",
      faq: [
        ["Do you serve companies in Wollerau, Freienbach and Pfäffikon SZ?", "Yes. We work digitally and easily with clients from the Höfe district, the March and all of Switzerland."],
        ["Our company is in the Höfe district – does Rothenthurm still work?", "Yes. Exchange runs fully digitally via Proton, so your company's location does not matter."],
        ["Do you know crypto?", "Yes, we specialise in accounting and tax returns for crypto trades."],
        ["How do I start?", "With a free initial consultation. Simply book an appointment."],
      ],
      endTitle: "Shall we meet?",
      endSub: "Book a free initial consultation.",
      metaTitle: "Accounting in Wollerau, Freienbach & Pfäffikon SZ | StartSaldo",
      metaDesc: "Financial accounting and payroll for SMEs and start-ups in Ausserschwyz and Höfe: Wollerau, Freienbach, Pfäffikon SZ, Lachen – specialised in crypto trading.",
    },
  },
};

export const SITE = "https://www.startsaldo.ch";

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
      ...shareMeta(lang),
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: other, href: SITE + servicePaths[slug][other] },
    ],
  };
}
