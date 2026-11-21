import { shareMeta } from "@/components/structured-data";
import type { Lang } from "@/components/home-copy";
import { payrollCopy } from "@/components/payroll-page";

export type ServiceSlug = "finanzbuchhaltung" | "lohnbuchhaltung" | "mwst" | "steuern" | "jahresabschluss" | "krypto" | "startups" | "schwyz" | "zug" | "hoefe" | "zuerich" | "luzern" | "aargau" | "st-gallen" | "bern" | "basel";
export type Person = "sarah" | "audelia";

export type ServiceCopy = {
  menu: string;
  title: string;
  titleAccent: string;
  sub: string;
  blocksTitle: string;
  blocks: { title: string; description?: string; source?: { label: string; href: string }; items: string[] }[];
  taskTable?: { title: string; headers: [string, string]; rows: [string, string][]; note: string };
  processTitle: string;
  process: [string, string][];
  people: Person[];
  personText: string;
  faqTitle: string;
  faq: [string, string][];
  faqGuide?: { question: string; slug: string; label: string };
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
  zuerich: { de: "/buchhaltung-zuerich", en: "/en/accounting-zurich" },
  luzern: { de: "/buchhaltung-luzern", en: "/en/accounting-lucerne" },
  "aargau": { de: "/buchhaltung-aargau", en: "/en/accounting-aargau" },
  "st-gallen": { de: "/buchhaltung-st-gallen", en: "/en/accounting-st-gallen" },
  "bern": { de: "/buchhaltung-bern", en: "/en/accounting-bern" },
  "basel": { de: "/buchhaltung-basel", en: "/en/accounting-basel" },

} as const;

export const serviceOrder: ServiceSlug[] = ["finanzbuchhaltung", "lohnbuchhaltung", "mwst", "steuern", "jahresabschluss", "krypto", "startups", "schwyz", "zug", "hoefe", "zuerich", "luzern", "aargau", "st-gallen", "bern", "basel"];
/** Region pages: footer shows them as one compact line. */
export const regionOrder: ServiceSlug[] = ["schwyz", "zug", "hoefe", "zuerich", "luzern", "aargau", "st-gallen", "bern", "basel"];
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
      ],
      endTitle: "Ready to hand over your accounting?",
      endSub: "Tell us about your business in a free, no-obligation conversation.",
      metaTitle: "Financial accounting for SMEs in Schwyz & Zug | StartSaldo",
      metaDesc: "Bookkeeping, receivables, payables, bank reconciliations and closings for Swiss SMEs and start-ups – personally handled by StartSaldo from Rothenthurm (canton of Schwyz).",
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
      metaTitle: "Payroll services for SMEs in Schwyz & Zug | StartSaldo",
      metaDesc: "Payroll, social insurance, employee onboarding and offboarding, withholding tax and salary certificates for Swiss SMEs and start-ups – personally handled by StartSaldo from Rothenthurm (canton of Schwyz).",
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
      metaDesc: "VAT registration, returns with the FTA, net tax rate or effective method – for Swiss SMEs and start-ups, personally handled by StartSaldo from Rothenthurm (canton of Schwyz).",
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
      metaDesc: "Accounting and tax returns for crypto trading: wallets, exchanges, valuation and declaration – specialised and personally handled by StartSaldo from Rothenthurm (canton of Schwyz).",
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
      metaTitle: "Buchhaltung & Treuhand Schwyz, Einsiedeln, Rothenthurm | StartSaldo",
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
      metaTitle: "Accountant in Schwyz, Einsiedeln & Rothenthurm | StartSaldo",
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
      metaTitle: "Accountant in Zug, Baar & Cham | StartSaldo",
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
  zuerich: {
  "de": {
    "menu": "Region Zürich",
    "title": "Treuhänder für GmbHs, KMU und Start-ups in Zürich",
    "titleAccent": "Persönlich und digital.",
    "sub": "Sie führen eine GmbH, ein KMU oder ein Start-up in Zürich und möchten Ihre Buchhaltung professionell organisieren? StartSaldo unterstützt Zürcher Unternehmen bei der laufenden Finanzbuchhaltung, MWST, Lohnbuchhaltung und beim Jahresabschluss. Digital organisiert, mit persönlicher Betreuung – auch ohne Treuhandbüro in Zürich.",
    "blocksTitle": "Was braucht eine GmbH für eine gut organisierte Buchhaltung?",
    "blocks": [
      {
        "title": "Zuständigkeiten früh klären",
        "description": "Eine Buchhaltungssoftware allein genügt nicht. Wichtig ist, dass Geschäftsfälle vollständig erfasst, Konten abgestimmt und die notwendigen Unterlagen für den Jahresabschluss vorhanden sind. Gerade bei jungen GmbHs sollten die Zuständigkeiten früh geklärt werden:",
        "items": [
          "Wer erfasst Kunden- und Lieferantenrechnungen?",
          "Wer kontrolliert Bankkonten und offene Posten?",
          "Wer bereitet die MWST-Abrechnung vor?",
          "Wer erstellt den Jahresabschluss und die Steuererklärung?"
        ]
      },
      {
        "title": "Ganz oder teilweise übernehmen",
        "description": "StartSaldo kann diese Arbeiten ganz oder teilweise übernehmen. Gemeinsam bestimmen wir, welche Aufgaben Sie selbst erledigen möchten.",
        "items": [
          "Laufende Finanzbuchhaltung",
          "MWST-Abrechnungen",
          "Lohnbuchhaltung",
          "Jahresabschluss und Unternehmenssteuererklärung im vereinbarten Leistungsumfang"
        ]
      },
      {
        "title": "Jahresabschluss und Unternehmenssteuern in Zürich",
        "description": "GmbHs mit Sitz im Kanton Zürich müssen grundsätzlich eine Unternehmenssteuererklärung einreichen. Der Kanton stellt dafür die elektronische Lösung ZHcorporateTax bereit. Für eine korrekte Deklaration braucht es eine nachvollziehbare Buchhaltung und die notwendigen Abschlussunterlagen.",
        "items": [
          "Vorbereitung Ihrer Buchhaltung",
          "Abschlussarbeiten",
          "Unternehmenssteuererklärung im vereinbarten Leistungsumfang"
        ],
        "source": {
          "label": "Kanton Zürich – Steuererklärung für Unternehmen",
          "href": "https://www.zh.ch/de/steuern-finanzen/steuern/steuern-juristische-personen/steuererklaerung-juristische-personen.html"
        }
      },
      {
        "title": "Neu gegründet oder Treuhänder wechseln?",
        "description": "Bei einer neu gegründeten GmbH helfen wir, die Buchhaltungsorganisation von Anfang an sinnvoll aufzusetzen. Wenn bereits eine Buchhaltung besteht, prüfen wir gemeinsam die vorhandenen Unterlagen und klären, wie die Zusammenarbeit künftig aussehen soll.",
        "items": [
          "Ihre Unterlagen werden bei Proton gespeichert. Proton ist ein Schweizer Anbieter für verschlüsselte E-Mail- und Cloud-Speicherdienste.",
          "Ihre Unterlagen werden streng vertraulich behandelt."
        ]
      }
    ],
    "processTitle": "So starten wir die Zusammenarbeit",
    "process": [
      [
        "Erstgespräch",
        "Wir besprechen Ihre bestehende Buchhaltung und die Aufgaben, die Sie abgeben möchten."
      ],
      [
        "Aufgabenverteilung",
        "Gemeinsam bestimmen wir, welche Aufgaben Sie selbst erledigen möchten."
      ],
      [
        "Laufende Betreuung",
        "Wir organisieren den digitalen Austausch Ihrer Unterlagen und betreuen Ihre Buchhaltung im vereinbarten Umfang."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Ihre feste Ansprechpartnerin in Rothenthurm unterstützt Zürcher KMU und Start-ups beim Aufbau und bei der laufenden Betreuung ihrer Buchhaltung – digital organisiert und persönlich betreut.",
    "faqTitle": "Häufige Fragen zur Treuhand in Zürich",
    "faq": [
      [
        "Muss mein Treuhänder in Zürich sitzen?",
        "Nein. Sie können Ihre Buchhaltung auch einem Treuhandunternehmen ausserhalb des Kantons anvertrauen. StartSaldo betreut KMU und Start-ups digital von seinem Standort im Kanton Schwyz aus."
      ],
      [
        "Was kostet ein Treuhänder für eine GmbH in Zürich?",
        "Die Kosten hängen vor allem von den Geschäftsfällen und dem Leistungsumfang ab. In unserem Ratgeber zu Treuhandkosten für GmbHs finden Sie eine erste Orientierung."
      ]
    ],
    "faqGuide": {
      "question": "Was kostet ein Treuhänder für eine GmbH in Zürich?",
      "slug": "treuhaender-kosten-gmbh-schweiz",
      "label": "Ratgeber zu Treuhandkosten für GmbHs"
    },
    "endTitle": "Buchhaltung für Ihre Zürcher GmbH organisieren",
    "endSub": "Sie suchen eine persönliche Treuhandbetreuung, die sich mit digitalen Abläufen verbinden lässt? Besprechen wir gemeinsam, welche Aufgaben StartSaldo für Ihre GmbH übernehmen kann.",
    "metaTitle": "Treuhänder Zürich für GmbHs, KMU und Start-ups | StartSaldo",
    "metaDesc": "Finanzbuchhaltung, MWST, Lohnbuchhaltung, Jahresabschluss und Unternehmenssteuern für KMU und Start-ups in Zürich. Persönliche digitale Betreuung aus Rothenthurm."
  },
  "en": {
    "menu": "Zurich region",
    "title": "Accountant for GmbHs, SMEs and start-ups in Zurich",
    "titleAccent": "Personal and digital.",
    "sub": "Do you run a GmbH, SME or start-up in Zurich and want to organise your accounting professionally? StartSaldo supports Zurich businesses with ongoing financial accounting, VAT, payroll and annual accounts. Digitally organised with personal support – without an accounting office in Zurich.",
    "blocksTitle": "What does a GmbH need for well-organised accounting?",
    "blocks": [
      {
        "title": "Clarify responsibilities early",
        "description": "Accounting software alone is not enough. Transactions must be recorded in full, accounts reconciled and the documents needed for annual accounts available. Newly founded GmbHs should clarify responsibilities early:",
        "items": [
          "Who records customer and supplier invoices?",
          "Who checks bank accounts and outstanding balances?",
          "Who prepares VAT returns?",
          "Who prepares annual accounts and the tax return?"
        ]
      },
      {
        "title": "Take over all or part of the work",
        "description": "StartSaldo can take over all or part of these tasks. Together, we decide which responsibilities you want to keep in-house.",
        "items": [
          "Ongoing financial accounting",
          "VAT returns",
          "Payroll",
          "Annual accounts and corporate tax returns within the agreed scope"
        ]
      },
      {
        "title": "Annual accounts and corporate taxes in Zurich",
        "description": "GmbHs based in the canton of Zurich generally have to submit a corporate tax return. The canton provides the electronic ZHcorporateTax service. A correct declaration requires traceable accounting and the necessary closing documents.",
        "items": [
          "Preparing your accounting records",
          "Closing work",
          "Corporate tax return within the agreed scope"
        ],
        "source": {
          "label": "Canton Zurich – Corporate tax returns (German)",
          "href": "https://www.zh.ch/de/steuern-finanzen/steuern/steuern-juristische-personen/steuererklaerung-juristische-personen.html"
        }
      },
      {
        "title": "Newly founded or changing accountants?",
        "description": "For a newly founded GmbH, we help establish a sensible accounting setup from the start. If accounts already exist, we review the available records together and agree on how future cooperation should work.",
        "items": [
          "Your documents are stored with Proton. Proton is a Swiss provider of encrypted email and cloud storage services.",
          "Your documents are treated as strictly confidential."
        ]
      }
    ],
    "processTitle": "Getting started together",
    "process": [
      [
        "Initial consultation",
        "We discuss your existing accounts and the tasks you want to hand over."
      ],
      [
        "Responsibilities",
        "Together, we decide which tasks you want to keep in-house."
      ],
      [
        "Ongoing support",
        "We organise the digital exchange of your documents and look after your accounts within the agreed scope."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Your fixed contact person in Rothenthurm supports SMEs and start-ups in Zurich with setting up and maintaining their accounting – digitally organised with personal support.",
    "faqTitle": "Frequently asked questions about accounting in Zurich",
    "faq": [
      [
        "Does my accountant need to be based in Zurich?",
        "No. You can entrust your accounting to a firm outside the canton. StartSaldo supports SMEs and start-ups digitally from its base in the canton of Schwyz."
      ],
      [
        "What does an accountant cost for a GmbH in Zurich?",
        "Costs depend mainly on your transactions and the scope of services. We discuss your needs in a free, no-obligation initial consultation."
      ]
    ],
    "endTitle": "Organise the accounting for your Zurich GmbH",
    "endSub": "Looking for personal accounting support combined with digital processes? Let us discuss which tasks StartSaldo can take over for your GmbH.",
    "metaTitle": "Accountant in Zurich for GmbHs, SMEs and Start-ups | StartSaldo",
    "metaDesc": "Financial accounting, VAT, payroll, annual accounts and corporate taxes for SMEs and start-ups in Zurich. Personal digital support from Rothenthurm."
  }
},
  luzern: {
  "de": {
    "menu": "Region Luzern",
    "title": "Buchhaltung in Luzern auslagern",
    "titleAccent": "Mehr Zeit fürs Unternehmen.",
    "sub": "Sie führen ein KMU, ein Start-up oder eine GmbH im Kanton Luzern und möchten weniger Zeit mit Buchungsbelegen, Kontenabstimmungen und Abschlussarbeiten verbringen? StartSaldo unterstützt Luzerner Unternehmen bei der Finanzbuchhaltung, MWST und beim Jahresabschluss. Sie entscheiden, welche Arbeiten Sie selbst übernehmen und welche Sie uns übergeben.",
    "blocksTitle": "Wann lohnt es sich, die Buchhaltung auszulagern?",
    "blocks": [
      {
        "title": "Die bisherige Organisation überprüfen",
        "description": "Die Buchhaltung selbst zu führen kann sinnvoll sein, solange genügend Zeit und Fachwissen vorhanden sind. Wenn Belege liegen bleiben, Abstimmungen immer wieder verschoben werden oder der Jahresabschluss viel Zeit beansprucht, lohnt es sich, die bisherige Organisation zu überprüfen.",
        "items": [
          "Eine vollständige Auslagerung ist nicht immer notwendig.",
          "Sie entscheiden, welche Arbeiten Sie selbst übernehmen und welche Sie uns übergeben."
        ]
      },
      {
        "title": "Den Jahresabschluss rechtzeitig vorbereiten",
        "description": "Bei einer GmbH sollten die Abschlussarbeiten nicht erst beginnen, wenn die Steuererklärung ansteht. Hilfreich sind insbesondere:",
        "items": [
          "Abgestimmte Bank- und Kassenkonten",
          "Vollständige Kunden- und Lieferantenrechnungen",
          "Eine Übersicht über offene Forderungen und Verbindlichkeiten",
          "Unterlagen zu Anlagegütern und Abschreibungen",
          "Relevante Lohn- und MWST-Unterlagen"
        ]
      },
      {
        "title": "Jahresabschluss und Unternehmenssteuererklärung",
        "description": "Im Kanton Luzern entspricht die Steuerperiode einer juristischen Person grundsätzlich ihrem Geschäftsjahr. Die Abschlussorganisation ist daher auch für die Unternehmenssteuererklärung wichtig.",
        "items": [
          "Abschlussunterlagen vollständig und nachvollziehbar vorbereiten"
        ],
        "source": {
          "label": "Kanton Luzern – Steuererklärung für juristische Personen",
          "href": "https://steuern.lu.ch/juristischepersonen"
        }
      },
      {
        "title": "Persönliche Betreuung, digitale Zusammenarbeit",
        "description": "StartSaldo arbeitet von seinem Standort in Rothenthurm im Kanton Schwyz aus und unterstützt KMU und Start-ups in Luzern und der Zentralschweiz. Wir stimmen die digitale Zusammenarbeit auf Ihre bestehende Buchhaltungsorganisation ab.",
        "items": [
          "Ihre Unterlagen werden bei Proton gespeichert. Proton ist ein Schweizer Anbieter für verschlüsselte E-Mail- und Cloud-Speicherdienste.",
          "Ihre Unterlagen werden streng vertraulich behandelt."
        ]
      }
    ],
    "taskTable": {
      "title": "Eine mögliche Aufgabenteilung",
      "headers": [
        "Ihr Unternehmen",
        "StartSaldo"
      ],
      "rows": [
        [
          "Rechnungen erstellen",
          "Laufende Buchungen bearbeiten"
        ],
        [
          "Belege digital bereitstellen",
          "Konten abstimmen"
        ],
        [
          "Offene Zahlungen überwachen",
          "MWST-Abrechnungen erstellen"
        ],
        [
          "Geschäftliche Rückfragen beantworten",
          "Jahresabschluss vorbereiten und erstellen"
        ]
      ],
      "note": "Die genaue Aufteilung vereinbaren wir individuell."
    },
    "processTitle": "So organisieren wir Ihre Buchhaltung",
    "process": [
      [
        "Bedarf klären",
        "Wir besprechen Ihre aktuelle Buchhaltung und die gewünschten Dienstleistungen."
      ],
      [
        "Aufgaben aufteilen",
        "Gemeinsam bestimmen wir, welche Tätigkeiten Sie behalten und welche StartSaldo übernimmt."
      ],
      [
        "Abschluss vorbereiten",
        "Wir betreuen die vereinbarten Arbeiten und bereiten den Jahresabschluss anhand vollständiger Unterlagen vor."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Ihre Ansprechpartnerin in Rothenthurm unterstützt Luzerner KMU und Start-ups dabei, die Buchhaltung zu entlasten und den Jahresabschluss besser vorzubereiten.",
    "faqTitle": "Häufige Fragen zur Buchhaltung in Luzern",
    "faq": [
      [
        "Kann ich nur den Jahresabschluss auslagern?",
        "Ja. Auch einzelne Arbeiten können übernommen werden. Dafür benötigen wir vollständige und nachvollziehbare Buchhaltungsunterlagen."
      ],
      [
        "Muss ich meine Buchhaltung vollständig abgeben?",
        "Nein. Wir können auch eine Aufgabenteilung vereinbaren, bei der Sie bestimmte Tätigkeiten weiterhin selbst erledigen."
      ]
    ],
    "endTitle": "Ihre Buchhaltung neu organisieren",
    "endSub": "Sie möchten Ihre Buchhaltung entlasten und den Jahresabschluss besser vorbereiten? Wir besprechen gerne, welche Lösung für Ihr Unternehmen sinnvoll ist.",
    "metaTitle": "Buchhaltung in Luzern auslagern für KMU und Start-ups | StartSaldo",
    "metaDesc": "Buchhaltung für KMU und Start-ups in Luzern ganz oder teilweise auslagern. Klare Aufgabenteilung, MWST und Jahresabschluss – digital betreut aus Rothenthurm."
  },
  "en": {
    "menu": "Lucerne region",
    "title": "Outsource accounting in Lucerne",
    "titleAccent": "More time for your business.",
    "sub": "Do you run an SME, start-up or GmbH in the canton of Lucerne and want to spend less time on receipts, account reconciliations and closing work? StartSaldo supports Lucerne businesses with financial accounting, VAT and annual accounts. You decide which tasks to keep and which to hand over.",
    "blocksTitle": "When does outsourcing your accounting make sense?",
    "blocks": [
      {
        "title": "Review your current setup",
        "description": "Keeping your own books can make sense when you have enough time and expertise. If receipts pile up, reconciliations keep being postponed or annual accounts take up a lot of time, it is worth reviewing your current setup.",
        "items": [
          "You do not always need to outsource everything.",
          "You decide which tasks to keep and which to hand over."
        ]
      },
      {
        "title": "Prepare annual accounts in good time",
        "description": "For a GmbH, closing work should not begin only when the tax return is due. Useful records include:",
        "items": [
          "Reconciled bank and cash accounts",
          "Complete customer and supplier invoices",
          "An overview of outstanding receivables and liabilities",
          "Records of fixed assets and depreciation",
          "Relevant payroll and VAT documents"
        ]
      },
      {
        "title": "Annual accounts and corporate tax returns",
        "description": "In the canton of Lucerne, a legal entity’s tax period generally corresponds to its financial year. Organising the closing is therefore important for the corporate tax return too.",
        "items": [
          "Prepare complete, traceable closing documents"
        ],
        "source": {
          "label": "Canton Lucerne – Tax returns for legal entities (German)",
          "href": "https://steuern.lu.ch/juristischepersonen"
        }
      },
      {
        "title": "Personal support, digital cooperation",
        "description": "StartSaldo is based in Rothenthurm in the canton of Schwyz and supports SMEs and start-ups in Lucerne and Central Switzerland. We adapt digital cooperation to your existing accounting setup.",
        "items": [
          "Your documents are stored with Proton. Proton is a Swiss provider of encrypted email and cloud storage services.",
          "Your documents are treated as strictly confidential."
        ]
      }
    ],
    "taskTable": {
      "title": "One possible division of tasks",
      "headers": [
        "Your company",
        "StartSaldo"
      ],
      "rows": [
        [
          "Issue invoices",
          "Handle ongoing bookkeeping"
        ],
        [
          "Provide receipts digitally",
          "Reconcile accounts"
        ],
        [
          "Monitor outstanding payments",
          "Prepare VAT returns"
        ],
        [
          "Answer business-related queries",
          "Prepare and complete annual accounts"
        ]
      ],
      "note": "We agree on the exact division of tasks individually."
    },
    "processTitle": "How we organise your accounting",
    "process": [
      [
        "Understand your needs",
        "We discuss your current accounting and the services you need."
      ],
      [
        "Share responsibilities",
        "Together, we decide which tasks you retain and which StartSaldo takes over."
      ],
      [
        "Prepare the closing",
        "We handle the agreed tasks and prepare annual accounts using complete records."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Your contact person in Rothenthurm helps SMEs and start-ups in Lucerne reduce their accounting workload and prepare their annual accounts.",
    "faqTitle": "Frequently asked questions about accounting in Lucerne",
    "faq": [
      [
        "Can I outsource only the annual accounts?",
        "Yes. We can also take over individual tasks. We need complete, traceable accounting records for this."
      ],
      [
        "Do I have to outsource all my accounting?",
        "No. We can agree on a division of tasks in which you continue handling certain activities yourself."
      ]
    ],
    "endTitle": "Reorganise your accounting",
    "endSub": "Want to reduce your accounting workload and prepare annual accounts more effectively? We would be happy to discuss a suitable solution for your business.",
    "metaTitle": "Outsource Accounting in Lucerne for SMEs and Start-ups | StartSaldo",
    "metaDesc": "Outsource all or part of your accounting in Lucerne. Clear responsibilities, VAT and annual accounts for SMEs and start-ups – digital support from Rothenthurm."
  }
},

  "aargau": {
  "de": {
    "menu": "Region Aargau",
    "title": "Treuhänder im Aargau",
    "titleAccent": "Buchhaltung auslagern oder wechseln.",
    "sub": "Sie führen eine GmbH, ein KMU oder ein Start-up im Aargau und möchten Ihre Buchhaltung professionell betreuen lassen? StartSaldo unterstützt Aargauer Unternehmen bei der Finanzbuchhaltung, MWST, Lohnadministration und beim Jahresabschluss. Persönlich betreut und digital organisiert – auch wenn Sie Ihre bisherige Treuhandlösung wechseln möchten.",
    "blocksTitle": "Treuhänder wechseln: Worauf sollten Sie achten?",
    "blocks": [
      {
        "title": "Treuhänder wechseln: Worauf sollten Sie achten?",
        "description": "Ein Treuhänderwechsel kann sinnvoll sein, wenn sich die Anforderungen Ihres Unternehmens verändern, Sie sich mehr persönliche Betreuung wünschen oder Ihre Buchhaltung effizienter organisieren möchten. Damit die Übernahme reibungslos gelingt, sollten die bisherigen Geschäftsfälle und bereits erledigten Arbeiten nachvollziehbar dokumentiert sein.",
        "items": []
      },
      {
        "title": "Checkliste für die Buchhaltungsübergabe",
        "description": "Diese Unterlagen sind besonders wichtig: Klären Sie ausserdem, welche Arbeiten das bisherige Treuhandbüro noch abschliesst und ab wann die neue Betreuung beginnt.",
        "items": [
          "Letzter Jahresabschluss mit Bilanz und Erfolgsrechnung",
          "Aktuelle Buchhaltungsdaten und Kontenblätter",
          "Offene Kunden- und Lieferantenrechnungen",
          "Bank- und Kontenabstimmungen",
          "Bisherige MWST-Abrechnungen",
          "Eingereichte Unternehmenssteuererklärungen",
          "Lohn- und Sozialversicherungsunterlagen, sofern Mitarbeitende beschäftigt werden"
        ]
      },
      {
        "title": "Ist ein Treuhänderwechsel während des Jahres möglich?",
        "description": "Ja, grundsätzlich kann die Buchhaltungsbetreuung auch während eines laufenden Geschäftsjahres gewechselt werden. Dabei müssen insbesondere die vertraglichen Bedingungen, der aktuelle Buchhaltungsstand und die Zuständigkeiten für offene Arbeiten geklärt werden. StartSaldo unterstützt Sie bei der Organisation der vereinbarten Übernahme und der weiteren Buchhaltungsbetreuung.",
        "items": []
      },
      {
        "title": "Digitale Zusammenarbeit mit geschützter Datenablage",
        "description": "Für die Speicherung von Dokumenten und Daten nutzen wir Proton. Proton ist ein Schweizer Anbieter für datenschutzorientierte digitale Dienste. Sein Cloud-Speicher Proton Drive schützt Dateien durch Ende-zu-Ende-Verschlüsselung. So verbinden wir eine geschützte digitale Dokumentenablage mit persönlicher Buchhaltungsbetreuung. Unser Unternehmensstandort liegt im Kanton Schwyz. Wir unterstützen auch Unternehmen aus dem Aargau digital.",
        "items": []
      },
      {
        "title": "Jahresabschluss und Unternehmenssteuern",
        "description": "Neben der laufenden Finanzbuchhaltung unterstützen wir Sie bei den Abschlussarbeiten und der Unternehmenssteuererklärung. Für juristische Personen stellt der Kanton Aargau eigene Möglichkeiten zur elektronischen Steuerdeklaration bereit. Eine vollständige und nachvollziehbare Buchhaltung bildet dafür eine wichtige Grundlage.",
        "items": [],
        "source": {
          "label": "Kanton Aargau – Steuererklärung für juristische Personen",
          "href": "https://www.ag.ch/de/themen/steuern-finanzen/steuern/steuererklaerung-einreichen/etax-aargau/etax-aargau-juristische-personen"
        }
      }
    ],
    "processTitle": "So starten wir die Zusammenarbeit",
    "process": [
      [
        "Erstgespräch",
        "Wir lernen uns kennen und klären Ihre Bedürfnisse – und wie wir Sie am besten entlasten können."
      ],
      [
        "Aufgaben vereinbaren",
        "Wir besprechen Ihre Unterlagen und legen Umfang und Zuständigkeiten gemeinsam fest."
      ],
      [
        "Digitale Betreuung",
        "Sie stellen Ihre Unterlagen digital bereit. Wir übernehmen die vereinbarten Arbeiten."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Ihre feste Ansprechpartnerin in Rothenthurm betreut KMU und Start-ups in Aargau digital und persönlich – mit klaren Zuständigkeiten und nachvollziehbaren Unterlagen.",
    "faqTitle": "Häufige Fragen",
    "faq": [
      [
        "Kann ich meine Buchhaltung während des Jahres an StartSaldo übergeben?",
        "Grundsätzlich ja. Wir besprechen die vorhandenen Unterlagen, den gewünschten Übernahmezeitpunkt und die noch offenen Arbeiten."
      ],
      [
        "Was passiert, wenn Buchhaltungsunterlagen fehlen?",
        "Zunächst klären wir, welche Informationen fehlen und welche Abstimmungen oder Nachbuchungen notwendig sind. Der zusätzliche Aufwand wird vor der Übernahme besprochen."
      ],
      [
        "Was kostet ein Treuhänder für meine GmbH?",
        "Die Kosten hängen vom Umfang der Buchhaltung und den benötigten Dienstleistungen ab. Erste Richtwerte finden Sie in unserem Ratgeber zu Treuhandkosten für GmbHs."
      ]
    ],
    "endTitle": "Persönliche Treuhandbetreuung für Ihr Unternehmen",
    "endSub": "Sie möchten Ihre Buchhaltung auslagern oder Ihre bisherige Treuhandbetreuung wechseln? Wir besprechen gerne, wie sich Ihre Buchhaltung mit StartSaldo zuverlässig und digital organisieren lässt.",
    "metaTitle": "Treuhänder im Aargau | StartSaldo",
    "metaDesc": "Finanzbuchhaltung, MWST, Löhne und Jahresabschluss für KMU und Start-ups in Aargau. Digital und persönlich betreut aus Rothenthurm. Kostenloses Erstgespräch.",
    "faqGuide": {
      "question": "Was kostet ein Treuhänder für meine GmbH?",
      "slug": "treuhaender-kosten-gmbh-schweiz",
      "label": "Ratgeber zu Treuhandkosten für GmbHs"
    }
  },
  "en": {
    "menu": "Aargau region",
    "title": "Accountant in Aargau",
    "titleAccent": "Outsource accounting or change providers.",
    "sub": "Do you run a GmbH, SME or start-up in Aargau and want professional accounting support? StartSaldo supports Aargau businesses with financial accounting, VAT, payroll and annual accounts. Personal support and digital organisation – including when you want to change your current accountant.",
    "blocksTitle": "Changing accountants: what should you consider?",
    "blocks": [
      {
        "title": "Changing accountants: what should you consider?",
        "description": "A change can make sense if your business requirements change, you want more personal support or you want to organise accounting more efficiently. For a smooth handover, previous transactions and completed work should be clearly documented.",
        "items": []
      },
      {
        "title": "Accounting handover checklist",
        "description": "These records are especially important. Also clarify which tasks your previous accountant will complete and when the new support starts.",
        "items": [
          "Latest annual accounts with balance sheet and income statement",
          "Current accounting data and account ledgers",
          "Outstanding customer and supplier invoices",
          "Bank and account reconciliations",
          "Previous VAT returns",
          "Submitted corporate tax returns",
          "Payroll and social insurance records if you have employees"
        ]
      },
      {
        "title": "Can you change accountants during the year?",
        "description": "Yes, in principle you can change accounting support during an ongoing financial year. Contractual terms, the current state of the accounts and responsibilities for unfinished work must be clarified. StartSaldo helps organise the agreed handover and subsequent accounting support.",
        "items": []
      },
      {
        "title": "Digital cooperation with protected data storage",
        "description": "We use Proton to store documents and data. Proton is a Swiss provider of privacy-focused digital services. Its Proton Drive cloud storage protects files with end-to-end encryption. This combines protected digital document storage with personal accounting support. We are based in the canton of Schwyz and also support businesses in Aargau digitally.",
        "items": []
      },
      {
        "title": "Annual accounts and corporate taxes",
        "description": "Alongside ongoing financial accounting, we support closing work and corporate tax returns. The canton of Aargau provides electronic tax declaration options for legal entities. Complete and traceable accounting is an important foundation.",
        "items": [],
        "source": {
          "label": "Kanton Aargau – Steuererklärung für juristische Personen (German)",
          "href": "https://www.ag.ch/de/themen/steuern-finanzen/steuern/steuererklaerung-einreichen/etax-aargau/etax-aargau-juristische-personen"
        }
      }
    ],
    "processTitle": "Getting started together",
    "process": [
      [
        "Initial consultation",
        "We get to know each other, discuss your needs and how we can best support you."
      ],
      [
        "Agree responsibilities",
        "We discuss your records and agree on the scope and responsibilities together."
      ],
      [
        "Digital support",
        "You provide your documents digitally. We take over the agreed tasks."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Your fixed contact person in Rothenthurm supports SMEs and start-ups in Aargau digitally and personally, with clear responsibilities and traceable records.",
    "faqTitle": "Frequently asked questions",
    "faq": [
      [
        "Can I hand over my accounting to StartSaldo during the year?",
        "In principle, yes. We discuss the available records, desired handover date and unfinished work."
      ],
      [
        "What happens if accounting records are missing?",
        "We first clarify which information is missing and which reconciliations or additional entries are needed. We discuss the additional work before the handover."
      ],
      [
        "What does an accountant cost for my GmbH?",
        "Costs depend on the scope of accounting and the services you need. We discuss your needs in a free initial consultation."
      ]
    ],
    "endTitle": "Organise your accounting with personal support",
    "endSub": "Would you like to reduce your administrative workload? We would be happy to discuss which tasks StartSaldo can take over for your business.",
    "metaTitle": "Accountant in Aargau | StartSaldo",
    "metaDesc": "Financial accounting, VAT, payroll and annual accounts for SMEs and start-ups in Aargau. Personal digital support from Rothenthurm. Free initial consultation."
  }
},
  "st-gallen": {
  "de": {
    "menu": "Region St. Gallen",
    "title": "Digitale Treuhand für KMU und Start-ups in St. Gallen",
    "titleAccent": "Persönlich betreut.",
    "sub": "Sie führen ein Unternehmen im Kanton St. Gallen und möchten Ihre Buchhaltung effizienter organisieren? StartSaldo unterstützt GmbHs, KMU und Start-ups bei der Finanzbuchhaltung, MWST, Lohnadministration und beim Jahresabschluss. Persönliche Betreuung und digitale Abläufe stehen dabei im Mittelpunkt.",
    "blocksTitle": "Digitale Buchhaltung bedeutet nicht, alles selbst zu erledigen",
    "blocks": [
      {
        "title": "Digitale Buchhaltung bedeutet nicht, alles selbst zu erledigen",
        "description": "Belege digital abzulegen ist ein guter Anfang. Entscheidend ist aber, dass daraus eine vollständige und nachvollziehbare Buchhaltung entsteht. Gerade in kleineren Unternehmen fehlt im Tagesgeschäft oft die Zeit, sich zusätzlich um Kontenabstimmungen, MWST-Abrechnungen und Abschlussarbeiten zu kümmern. StartSaldo unterstützt Sie dabei, diese Aufgaben sinnvoll aufzuteilen.",
        "items": []
      },
      {
        "title": "Welche Arbeiten können Sie auslagern?",
        "description": "Diese Aufteilung ist ein Beispiel und wird auf Ihre Bedürfnisse abgestimmt.",
        "items": []
      },
      {
        "title": "Dokumente und Daten geschützt speichern",
        "description": "Bei der digitalen Buchhaltung spielt der sorgfältige Umgang mit Unternehmensdaten eine wichtige Rolle. Deshalb nutzen wir für die Speicherung von Dokumenten und Daten Proton. Der Schweizer Anbieter entwickelt datenschutzorientierte digitale Dienste. Sein Cloud-Speicher Proton Drive verwendet Ende-zu-Ende-Verschlüsselung, um gespeicherte Dateien zu schützen. Für Sie bedeutet die digitale Zusammenarbeit mit StartSaldo: klare Zuständigkeiten, eine organisierte Dokumentenablage und persönliche Ansprechpartner.",
        "items": []
      },
      {
        "title": "Jahresabschluss und Steuererklärung in St. Gallen",
        "description": "Auch bei einer digital geführten Buchhaltung müssen die Abschlussunterlagen vollständig sein. Wichtig sind insbesondere abgestimmte Konten, nachvollziehbare Geschäftsfälle sowie die notwendigen Unterlagen für die Unternehmenssteuererklärung. Der Kanton St. Gallen stellt für juristische Personen elektronische Deklarationsmöglichkeiten bereit. Ab der Steuerperiode 2026 ist die vollständige digitale Einreichung über die neue kantonale Webanwendung vorgesehen.",
        "items": [],
        "source": {
          "label": "Kanton St. Gallen – Elektronische Steuererklärung für juristische Personen",
          "href": "https://www.sg.ch/steuern-finanzen/steuern/elektronische-steuererklaerung/etaxes-juristische-personen.html"
        }
      }
    ],
    "processTitle": "So starten wir die Zusammenarbeit",
    "process": [
      [
        "Erstgespräch",
        "Wir lernen uns kennen und klären Ihre Bedürfnisse – und wie wir Sie am besten entlasten können."
      ],
      [
        "Aufgaben vereinbaren",
        "Wir besprechen Ihre Unterlagen und legen Umfang und Zuständigkeiten gemeinsam fest."
      ],
      [
        "Digitale Betreuung",
        "Sie stellen Ihre Unterlagen digital bereit. Wir übernehmen die vereinbarten Arbeiten."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Ihre feste Ansprechpartnerin in Rothenthurm betreut KMU und Start-ups in St. Gallen digital und persönlich – mit klaren Zuständigkeiten und nachvollziehbaren Unterlagen.",
    "faqTitle": "Häufige Fragen",
    "faq": [
      [
        "Kann ich meine Buchhaltung vollständig auslagern?",
        "Ja. Je nach vereinbartem Leistungsumfang können wir die laufende Buchhaltung und weitere administrative Aufgaben übernehmen."
      ],
      [
        "Muss ich meine Belege persönlich vorbeibringen?",
        "Nein. Die Zusammenarbeit kann digital organisiert werden. StartSaldo betreut Unternehmen von seinem Standort im Kanton Schwyz aus."
      ],
      [
        "Kann ich bestimmte Arbeiten weiterhin selbst erledigen?",
        "Ja. Eine teilweise Auslagerung ist möglich. Wichtig ist, dass die Aufgaben und Verantwortlichkeiten klar vereinbart werden."
      ]
    ],
    "endTitle": "Ihre Buchhaltung digital organisieren",
    "endSub": "Sie möchten weniger administrativen Aufwand und gleichzeitig eine persönliche Ansprechperson für Ihre Buchhaltung? Wir besprechen gerne, welche Arbeiten StartSaldo für Ihr Unternehmen übernehmen kann.",
    "metaTitle": "Digitale Treuhand für KMU und Start-ups in St. Gallen | StartSaldo",
    "metaDesc": "Finanzbuchhaltung, MWST, Löhne und Jahresabschluss für KMU und Start-ups in St. Gallen. Digital und persönlich betreut aus Rothenthurm. Kostenloses Erstgespräch.",
    "taskTable": {
      "title": "Welche Arbeiten können Sie auslagern?",
      "headers": [
        "Ihr Unternehmen",
        "StartSaldo"
      ],
      "rows": [
        [
          "Geschäftliche Unterlagen bereitstellen",
          "Laufende Finanzbuchhaltung"
        ],
        [
          "Kundenrechnungen und Zahlungen im Blick behalten",
          "Konten abstimmen"
        ],
        [
          "Informationen zu Geschäftsfällen liefern",
          "MWST-Abrechnungen"
        ],
        [
          "Unternehmensentscheidungen treffen",
          "Jahresabschluss und vereinbarte Auswertungen"
        ]
      ],
      "note": "Diese Aufteilung ist ein Beispiel und wird auf Ihre Bedürfnisse abgestimmt."
    }
  },
  "en": {
    "menu": "St. Gallen region",
    "title": "Digital accounting for SMEs and start-ups in St. Gallen",
    "titleAccent": "Personal support, clear processes.",
    "sub": "Do you run a business in the canton of St. Gallen and want to organise accounting more efficiently? StartSaldo supports GmbHs, SMEs and start-ups with financial accounting, VAT, payroll and annual accounts. Personal support and digital processes are at the heart of our work.",
    "blocksTitle": "Digital accounting does not mean doing everything yourself",
    "blocks": [
      {
        "title": "Digital accounting does not mean doing everything yourself",
        "description": "Filing receipts digitally is a good start. What matters is turning them into complete, traceable accounts. Smaller companies often lack time for account reconciliations, VAT returns and closing work alongside day-to-day business. StartSaldo helps you divide these tasks sensibly.",
        "items": []
      },
      {
        "title": "Protected storage for documents and data",
        "description": "Handling company data carefully matters in digital accounting. We therefore use Proton to store documents and data. This Swiss provider develops privacy-focused digital services. Proton Drive cloud storage uses end-to-end encryption to protect stored files. Working digitally with StartSaldo means clear responsibilities, organised document storage and personal contact persons.",
        "items": []
      },
      {
        "title": "Annual accounts and tax returns in St. Gallen",
        "description": "Closing records must be complete even when accounting is digital. Reconciled accounts, traceable transactions and the necessary corporate tax return documents are particularly important. The canton provides electronic declaration options for legal entities. The new E-Tax SG web application is available for tax returns from 2026.",
        "items": [],
        "source": {
          "label": "Kanton St. Gallen – Elektronische Steuererklärung für juristische Personen (German)",
          "href": "https://www.sg.ch/steuern-finanzen/steuern/elektronische-steuererklaerung/etaxes-juristische-personen.html"
        }
      }
    ],
    "processTitle": "Getting started together",
    "process": [
      [
        "Initial consultation",
        "We get to know each other, discuss your needs and how we can best support you."
      ],
      [
        "Agree responsibilities",
        "We discuss your records and agree on the scope and responsibilities together."
      ],
      [
        "Digital support",
        "You provide your documents digitally. We take over the agreed tasks."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Your fixed contact person in Rothenthurm supports SMEs and start-ups in St. Gallen digitally and personally, with clear responsibilities and traceable records.",
    "faqTitle": "Frequently asked questions",
    "faq": [
      [
        "Can I outsource all my accounting?",
        "Yes. Depending on the agreed scope, we can take over ongoing accounting and further administrative tasks."
      ],
      [
        "Do I need to bring my receipts in person?",
        "No. Cooperation can be organised digitally. StartSaldo supports businesses from its base in the canton of Schwyz."
      ],
      [
        "Can I continue handling certain tasks myself?",
        "Yes. Partial outsourcing is possible. Tasks and responsibilities must be clearly agreed."
      ]
    ],
    "endTitle": "Organise your accounting with personal support",
    "endSub": "Would you like to reduce your administrative workload? We would be happy to discuss which tasks StartSaldo can take over for your business.",
    "metaTitle": "Digital accounting for SMEs and start-ups in St. Gallen | StartSaldo",
    "metaDesc": "Financial accounting, VAT, payroll and annual accounts for SMEs and start-ups in St. Gallen. Personal digital support from Rothenthurm. Free initial consultation.",
    "taskTable": {
      "title": "Which tasks can you outsource?",
      "headers": [
        "Your company",
        "StartSaldo"
      ],
      "rows": [
        [
          "Provide business records",
          "Ongoing financial accounting"
        ],
        [
          "Keep track of customer invoices and payments",
          "Reconcile accounts"
        ],
        [
          "Provide transaction details",
          "VAT returns"
        ],
        [
          "Make business decisions",
          "Annual accounts and agreed reports"
        ]
      ],
      "note": "This division is an example and is tailored to your needs."
    }
  }
},
  "bern": {
  "de": {
    "menu": "Region Bern",
    "title": "Buchhaltung für KMU und Start-ups in Bern",
    "titleAccent": "Persönlich und digital.",
    "sub": "Ihr Unternehmen wächst und mit ihm der administrative Aufwand? StartSaldo unterstützt GmbHs, KMU und Start-ups im Kanton Bern bei der Finanzbuchhaltung, Lohnadministration, MWST und beim Jahresabschluss. Wir helfen Ihnen, Ihre Buchhaltung zuverlässig zu organisieren, damit Sie sich stärker auf Ihr Unternehmen konzentrieren können.",
    "blocksTitle": "Wenn das Unternehmen wächst, wächst auch die Buchhaltung",
    "blocks": [
      {
        "title": "Wenn das Unternehmen wächst, wächst auch die Buchhaltung",
        "description": "Neue Mitarbeitende, zusätzliche Kunden und mehr Geschäftsfälle bringen häufig neue administrative Aufgaben mit sich. Was zu Beginn noch nebenbei erledigt werden konnte, benötigt zunehmend klare Abläufe und Verantwortlichkeiten. StartSaldo unterstützt Sie unter anderem bei: Sie können einzelne Aufgaben auslagern oder eine umfassendere Betreuung vereinbaren.",
        "items": [
          "Laufender Finanzbuchhaltung und Kontenabstimmungen",
          "MWST-Abrechnungen",
          "Lohnbuchhaltung und Sozialversicherungsadministration",
          "Jahresabschluss und Unternehmenssteuererklärung"
        ]
      },
      {
        "title": "Den ersten Mitarbeiter einstellen: Was kommt dazu?",
        "description": "Mit der Anstellung von Mitarbeitenden entstehen für eine GmbH zusätzliche Pflichten. Dazu gehören insbesondere: Ob und in welchem Umfang die berufliche Vorsorge obligatorisch ist, hängt von den gesetzlichen Voraussetzungen ab. StartSaldo unterstützt Sie bei der Organisation der Lohnbuchhaltung und der vereinbarten Sozialversicherungsadministration.",
        "items": [
          "Anmeldung und Abrechnung bei der zuständigen AHV-Ausgleichskasse",
          "Abschluss der obligatorischen Unfallversicherung",
          "Prüfung der Versicherungspflicht in der beruflichen Vorsorge",
          "Laufende Lohnabrechnungen und jährliche Deklarationen"
        ],
        "source": {
          "label": "ch.ch – Unfallversicherung",
          "href": "https://www.ch.ch/de/unfallversicherung-uvg/"
        }
      },
      {
        "title": "Jahresabschluss und Steuererklärung im Kanton Bern",
        "description": "Neben den laufenden Buchungen benötigen GmbHs eine ordnungsgemässe Jahresrechnung. Die Steuerverwaltung des Kantons Bern bietet eine elektronische Steuererklärung für juristische Personen an. Für die Vorbereitung sind unter anderem die Bilanz, Erfolgsrechnung und die steuerlich relevanten Unterlagen erforderlich.",
        "items": [],
        "source": {
          "label": "Kanton Bern – Steuererklärung für juristische Personen",
          "href": "https://www.sv.fin.be.ch/de/start/themen/steuererklaerung/steuererklaerung-ausfuellen-juristische-personen.html"
        }
      },
      {
        "title": "Digitale Zusammenarbeit und geschützte Dokumentenablage",
        "description": "Wir speichern Dokumente und Daten über Proton, einen Schweizer Anbieter für datenschutzorientierte digitale Dienste. Der Cloud-Speicher Proton Drive nutzt Ende-zu-Ende-Verschlüsselung zum Schutz gespeicherter Dateien. Die Zusammenarbeit mit StartSaldo kann digital organisiert werden. Persönliche Betreuung bleibt dabei ein wichtiger Bestandteil. Unser Unternehmensstandort liegt im Kanton Schwyz. Wir betreuen auch Unternehmen im Kanton Bern.",
        "items": []
      }
    ],
    "processTitle": "So starten wir die Zusammenarbeit",
    "process": [
      [
        "Erstgespräch",
        "Wir lernen uns kennen und klären Ihre Bedürfnisse – und wie wir Sie am besten entlasten können."
      ],
      [
        "Aufgaben vereinbaren",
        "Wir besprechen Ihre Unterlagen und legen Umfang und Zuständigkeiten gemeinsam fest."
      ],
      [
        "Digitale Betreuung",
        "Sie stellen Ihre Unterlagen digital bereit. Wir übernehmen die vereinbarten Arbeiten."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Ihre feste Ansprechpartnerin in Rothenthurm betreut KMU und Start-ups in Bern digital und persönlich – mit klaren Zuständigkeiten und nachvollziehbaren Unterlagen.",
    "faqTitle": "Häufige Fragen",
    "faq": [
      [
        "Kann ich Finanz- und Lohnbuchhaltung gemeinsam auslagern?",
        "Ja. Beide Bereiche können im Rahmen einer gemeinsamen Betreuung organisiert werden. Den genauen Leistungsumfang vereinbaren wir individuell."
      ],
      [
        "Unterstützt StartSaldo auch kleine GmbHs mit wenigen Mitarbeitenden?",
        "Ja. Unsere Dienstleistungen richten sich auch an kleine Unternehmen und neu gegründete GmbHs."
      ],
      [
        "Welche Informationen werden für eine erste Offerte benötigt?",
        "Hilfreich sind Angaben zur Unternehmensgrösse, der ungefähren Belegmenge, der Anzahl Mitarbeitenden und den gewünschten Leistungen."
      ]
    ],
    "endTitle": "Buchhaltung und Löhne zuverlässig organisieren",
    "endSub": "Sie möchten Ihre Finanz- und Lohnbuchhaltung professionell betreuen lassen? Wir besprechen gerne, welche Aufgaben StartSaldo für Ihr Unternehmen übernehmen kann.",
    "metaTitle": "Buchhaltung für KMU und Start-ups in Bern | StartSaldo",
    "metaDesc": "Finanzbuchhaltung, MWST, Löhne und Jahresabschluss für KMU und Start-ups in Bern. Digital und persönlich betreut aus Rothenthurm. Kostenloses Erstgespräch."
  },
  "en": {
    "menu": "Bern region",
    "title": "Accounting for SMEs and start-ups in Bern",
    "titleAccent": "Personal and digital.",
    "sub": "Is your business growing, along with its administrative workload? StartSaldo supports GmbHs, SMEs and start-ups in the canton of Bern with financial accounting, payroll, VAT and annual accounts. We help organise reliable accounts so you can focus more on your business.",
    "blocksTitle": "As your business grows, so does your accounting",
    "blocks": [
      {
        "title": "As your business grows, so does your accounting",
        "description": "New employees, additional customers and more transactions often bring new administrative tasks. What you once handled on the side increasingly needs clear processes and responsibilities. You can outsource individual tasks or agree on more comprehensive support.",
        "items": [
          "Ongoing financial accounting and account reconciliations",
          "VAT returns",
          "Payroll and social insurance administration",
          "Annual accounts and corporate tax returns"
        ]
      },
      {
        "title": "Hiring your first employee: what changes?",
        "description": "Hiring employees brings additional obligations for a GmbH. Whether and to what extent occupational pension coverage is compulsory depends on the legal requirements. StartSaldo helps organise payroll and the agreed social insurance administration.",
        "items": [
          "Registration and contributions with the responsible AHV compensation fund",
          "Taking out compulsory accident insurance",
          "Checking compulsory occupational pension coverage",
          "Ongoing payslips and annual declarations"
        ],
        "source": {
          "label": "ch.ch – Unfallversicherung (German)",
          "href": "https://www.ch.ch/de/unfallversicherung-uvg/"
        }
      },
      {
        "title": "Annual accounts and tax returns in the canton of Bern",
        "description": "Alongside ongoing bookkeeping, GmbHs need proper annual financial statements. The canton of Bern tax administration offers an electronic tax return for legal entities. Preparation requires the balance sheet, income statement and tax-relevant records, among other documents.",
        "items": [],
        "source": {
          "label": "Kanton Bern – Steuererklärung für juristische Personen (German)",
          "href": "https://www.sv.fin.be.ch/de/start/themen/steuererklaerung/steuererklaerung-ausfuellen-juristische-personen.html"
        }
      },
      {
        "title": "Digital cooperation and protected document storage",
        "description": "We store documents and data with Proton, a Swiss provider of privacy-focused digital services. Proton Drive cloud storage uses end-to-end encryption to protect stored files. Cooperation can be organised digitally, with personal support remaining an important part. We are based in the canton of Schwyz and also support businesses in the canton of Bern.",
        "items": []
      }
    ],
    "processTitle": "Getting started together",
    "process": [
      [
        "Initial consultation",
        "We get to know each other, discuss your needs and how we can best support you."
      ],
      [
        "Agree responsibilities",
        "We discuss your records and agree on the scope and responsibilities together."
      ],
      [
        "Digital support",
        "You provide your documents digitally. We take over the agreed tasks."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Your fixed contact person in Rothenthurm supports SMEs and start-ups in Bern digitally and personally, with clear responsibilities and traceable records.",
    "faqTitle": "Frequently asked questions",
    "faq": [
      [
        "Can I outsource financial accounting and payroll together?",
        "Yes. Both areas can be organised within a shared support arrangement. We agree on the exact scope individually."
      ],
      [
        "Does StartSaldo support small GmbHs with few employees?",
        "Yes. Our services also support small businesses and newly founded GmbHs."
      ],
      [
        "What information is needed for an initial quote?",
        "Company size, approximate number of receipts, number of employees and the services required are helpful."
      ]
    ],
    "endTitle": "Organise your accounting with personal support",
    "endSub": "Would you like to reduce your administrative workload? We would be happy to discuss which tasks StartSaldo can take over for your business.",
    "metaTitle": "Accounting for SMEs and start-ups in Bern | StartSaldo",
    "metaDesc": "Financial accounting, VAT, payroll and annual accounts for SMEs and start-ups in Bern. Personal digital support from Rothenthurm. Free initial consultation."
  }
},
  "basel": {
  "de": {
    "menu": "Region Basel",
    "title": "Treuhand für KMU und Start-ups in Basel",
    "titleAccent": "Buchhaltung und MWST.",
    "sub": "Sie führen eine GmbH, ein KMU oder ein Start-up in Basel-Stadt oder Basel-Landschaft und möchten Ihre Buchhaltung professionell organisieren? StartSaldo unterstützt Unternehmen bei der Finanzbuchhaltung, MWST, Lohnadministration und beim Jahresabschluss. Auch bei Geschäftsfällen mit ausländischen Kunden oder Lieferanten ist eine nachvollziehbare Buchhaltung besonders wichtig.",
    "blocksTitle": "Buchhaltung für Unternehmen mit Auslandgeschäften",
    "blocks": [
      {
        "title": "Buchhaltung für Unternehmen mit Auslandgeschäften",
        "description": "Rechnungen in Euro, Zahlungen in Fremdwährungen oder Dienstleistungen aus dem Ausland können zusätzliche buchhalterische Fragen aufwerfen. Dabei sind insbesondere diese Punkte wichtig: Welche Regeln anzuwenden sind, hängt vom konkreten Geschäftsvorfall ab.",
        "items": [
          "Vollständige Dokumentation der Geschäftsvorfälle",
          "Korrekte Verbuchung von Fremdwährungsbeträgen",
          "Nachvollziehbare Behandlung von Wechselkursdifferenzen",
          "Prüfung der MWST-Behandlung bei grenzüberschreitenden Leistungen",
          "Vollständige Unterlagen für den Jahresabschluss"
        ]
      },
      {
        "title": "Fremdwährungen und Schweizer MWST",
        "description": "Eine Rechnung in Euro bedeutet nicht automatisch, dass sie mehrwertsteuerfrei ist. Bei Leistungen an ausländische Kunden oder beim Bezug ausländischer Dienstleistungen muss insbesondere geprüft werden, welche MWST-Regeln anwendbar sind. Für die Umrechnung von Fremdwährungsentgelten in der MWST-Abrechnung veröffentlicht die Eidgenössische Steuerverwaltung offizielle Wechselkurse und Vorgaben. Bei StartSaldo besprechen wir solche Geschäftsfälle individuell und klären den erforderlichen buchhalterischen Betreuungs- und Abklärungsumfang.",
        "items": [],
        "source": {
          "label": "ESTV – Fremdwährungskurse für die MWST",
          "href": "https://www.estv.admin.ch/de/mwst-fremdwaehrungskurse"
        }
      },
      {
        "title": "Finanzbuchhaltung, Löhne und Jahresabschluss",
        "description": "Auch ohne internationale Geschäftsfälle benötigen KMU eine zuverlässige laufende Buchhaltung. Unsere Dienstleistungen umfassen: Die Betreuung kann vollständig oder für einzelne Aufgaben vereinbart werden.",
        "items": [
          "Finanzbuchhaltung und Kontenabstimmungen",
          "MWST-Abrechnungen",
          "Lohnbuchhaltung und Sozialversicherungsadministration",
          "Jahresabschluss und Unternehmenssteuererklärung"
        ]
      },
      {
        "title": "Basel-Stadt und Basel-Landschaft: Steuererklärung für GmbHs",
        "description": "Für Unternehmen mit Sitz in Basel-Stadt beziehungsweise Basel-Landschaft gelten die jeweiligen kantonalen Steuerverfahren. Eine vollständige Jahresrechnung und die erforderlichen steuerlichen Unterlagen bilden die Grundlage für die Unternehmenssteuererklärung. Offizielle Informationen:",
        "items": [],
        "source": {
          "label": "Kanton Basel-Stadt – Steuererklärung für juristische Personen",
          "href": "https://www.bs.ch/themen/arbeit-und-steuern/steuererklaerung/steuererklaerung-als-juristische-person-einreichen"
        }
      },
      {
        "title": "Kanton Basel-Landschaft – Steuererklärung für juristische Personen",
        "description": "Offizielle Informationen zu den kantonalen Steuerverfahren.",
        "items": [],
        "source": {
          "label": "Kanton Basel-Landschaft – Steuererklärung für juristische Personen",
          "href": "https://konto.bl.ch/ExternalServices/EgovHubServicePage/EgovHubServicePage.aspx?externalId=626"
        }
      },
      {
        "title": "Digitale Zusammenarbeit mit geschützter Datenablage",
        "description": "Für die Speicherung von Dokumenten und Daten nutzen wir Proton. Proton ist ein Schweizer Anbieter für datenschutzorientierte digitale Dienste. Der Cloud-Speicher Proton Drive schützt Dateien durch Ende-zu-Ende-Verschlüsselung. StartSaldo betreut Unternehmen digital von seinem Standort im Kanton Schwyz aus. Auch für Unternehmen in Basel-Stadt und Basel-Landschaft ist eine Zusammenarbeit möglich.",
        "items": []
      }
    ],
    "processTitle": "So starten wir die Zusammenarbeit",
    "process": [
      [
        "Erstgespräch",
        "Wir lernen uns kennen und klären Ihre Bedürfnisse – und wie wir Sie am besten entlasten können."
      ],
      [
        "Aufgaben vereinbaren",
        "Wir besprechen Ihre Unterlagen und legen Umfang und Zuständigkeiten gemeinsam fest."
      ],
      [
        "Digitale Betreuung",
        "Sie stellen Ihre Unterlagen digital bereit. Wir übernehmen die vereinbarten Arbeiten."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Ihre feste Ansprechpartnerin in Rothenthurm betreut KMU und Start-ups in Basel digital und persönlich – mit klaren Zuständigkeiten und nachvollziehbaren Unterlagen.",
    "faqTitle": "Häufige Fragen",
    "faq": [
      [
        "Kann StartSaldo Rechnungen in Fremdwährungen verbuchen?",
        "Wir unterstützen bei der Finanzbuchhaltung und besprechen Geschäftsfälle mit Fremdwährungen individuell. Der erforderliche Aufwand richtet sich nach Art und Umfang der Transaktionen."
      ],
      [
        "Ist eine Rechnung an einen ausländischen Kunden automatisch von der MWST befreit?",
        "Nein. Die MWST-Behandlung hängt unter anderem von der Art der Leistung und dem anwendbaren Leistungsort ab. Jeder Sachverhalt muss entsprechend beurteilt werden."
      ],
      [
        "Betreut StartSaldo sowohl Basel-Stadt als auch Basel-Landschaft?",
        "Ja. Unsere digitalen Treuhanddienstleistungen richten sich an Unternehmen in beiden Kantonen."
      ]
    ],
    "endTitle": "Ihre Buchhaltung professionell organisieren",
    "endSub": "Sie suchen eine persönliche Treuhandbetreuung für Ihr Unternehmen in Basel? Wir besprechen gerne, wie StartSaldo Sie bei Ihrer Buchhaltung und Ihren administrativen Aufgaben unterstützen kann.",
    "metaTitle": "Treuhand für KMU und Start-ups in Basel | StartSaldo",
    "metaDesc": "Finanzbuchhaltung, MWST, Löhne und Jahresabschluss für KMU und Start-ups in Basel. Digital und persönlich betreut aus Rothenthurm. Kostenloses Erstgespräch."
  },
  "en": {
    "menu": "Basel region",
    "title": "Accounting for SMEs and start-ups in Basel",
    "titleAccent": "Bookkeeping and VAT.",
    "sub": "Do you run a GmbH, SME or start-up in Basel-Stadt or Basel-Landschaft and want to organise your accounting professionally? StartSaldo supports businesses with financial accounting, VAT, payroll and annual accounts. Traceable accounting is particularly important for transactions with foreign customers or suppliers.",
    "blocksTitle": "Accounting for businesses with international transactions",
    "blocks": [
      {
        "title": "Accounting for businesses with international transactions",
        "description": "Euro invoices, foreign-currency payments and services from abroad can raise additional accounting questions. The applicable rules depend on the specific transaction.",
        "items": [
          "Complete documentation of business transactions",
          "Correct recording of foreign-currency amounts",
          "Traceable treatment of exchange-rate differences",
          "Checking VAT treatment of cross-border services",
          "Complete records for annual accounts"
        ]
      },
      {
        "title": "Foreign currencies and Swiss VAT",
        "description": "An invoice in euros is not automatically exempt from VAT. For services to foreign customers or services purchased from abroad, the applicable VAT rules must be checked. The Federal Tax Administration publishes official exchange rates and requirements for converting foreign-currency amounts in VAT returns. At StartSaldo, we discuss these transactions individually and clarify the accounting support and assessment required.",
        "items": [],
        "source": {
          "label": "ESTV – Fremdwährungskurse für die MWST (German)",
          "href": "https://www.estv.admin.ch/de/mwst-fremdwaehrungskurse"
        }
      },
      {
        "title": "Financial accounting, payroll and annual accounts",
        "description": "SMEs and start-ups need reliable ongoing accounting even without international transactions. Support can cover all or individual tasks.",
        "items": [
          "Financial accounting and account reconciliations",
          "VAT returns",
          "Payroll and social insurance administration",
          "Annual accounts and corporate tax returns"
        ]
      },
      {
        "title": "Basel-Stadt and Basel-Landschaft: tax returns for GmbHs",
        "description": "Companies based in Basel-Stadt or Basel-Landschaft follow the respective cantonal tax procedures. Complete annual accounts and the required tax records form the basis for the corporate tax return.",
        "items": [],
        "source": {
          "label": "Kanton Basel-Stadt – Steuererklärung für juristische Personen (German)",
          "href": "https://www.bs.ch/themen/arbeit-und-steuern/steuererklaerung/steuererklaerung-als-juristische-person-einreichen"
        }
      },
      {
        "title": "Basel-Landschaft corporate tax information",
        "description": "Official information on the cantonal tax procedure.",
        "items": [],
        "source": {
          "label": "Kanton Basel-Landschaft – Steuererklärung für juristische Personen (German)",
          "href": "https://konto.bl.ch/ExternalServices/EgovHubServicePage/EgovHubServicePage.aspx?externalId=626"
        }
      },
      {
        "title": "Digital cooperation with protected data storage",
        "description": "We use Proton to store documents and data. Proton is a Swiss provider of privacy-focused digital services. Proton Drive cloud storage protects files with end-to-end encryption. StartSaldo supports businesses digitally from its base in the canton of Schwyz. Cooperation is also possible for businesses in Basel-Stadt and Basel-Landschaft.",
        "items": []
      }
    ],
    "processTitle": "Getting started together",
    "process": [
      [
        "Initial consultation",
        "We get to know each other, discuss your needs and how we can best support you."
      ],
      [
        "Agree responsibilities",
        "We discuss your records and agree on the scope and responsibilities together."
      ],
      [
        "Digital support",
        "You provide your documents digitally. We take over the agreed tasks."
      ]
    ],
    "people": [
      "audelia"
    ],
    "personText": "Your fixed contact person in Rothenthurm supports SMEs and start-ups in Basel digitally and personally, with clear responsibilities and traceable records.",
    "faqTitle": "Frequently asked questions",
    "faq": [
      [
        "Can StartSaldo record foreign-currency invoices?",
        "We support financial accounting and discuss foreign-currency transactions individually. The work required depends on the type and volume of transactions."
      ],
      [
        "Is an invoice to a foreign customer automatically exempt from VAT?",
        "No. VAT treatment depends on the type of service and applicable place of supply, among other factors. Each situation must be assessed accordingly."
      ],
      [
        "Does StartSaldo support both Basel-Stadt and Basel-Landschaft?",
        "Yes. Our digital accounting services support businesses in both cantons."
      ]
    ],
    "endTitle": "Organise your accounting with personal support",
    "endSub": "Would you like to reduce your administrative workload? We would be happy to discuss which tasks StartSaldo can take over for your business.",
    "metaTitle": "Accounting for SMEs and start-ups in Basel | StartSaldo",
    "metaDesc": "Financial accounting, VAT, payroll and annual accounts for SMEs and start-ups in Basel. Personal digital support from Rothenthurm. Free initial consultation."
  }
},
};

export const SITE = "https://www.startsaldo.ch";

/** Region served, per page – used in the structured data of service pages. */
const regionArea: Partial<Record<ServiceSlug, { de: string; en: string }>> = {
  "aargau": { de: "Kanton Aargau", en: "Canton of Aargau" },
  "st-gallen": { de: "Kanton St. Gallen", en: "Canton of St. Gallen" },
  "bern": { de: "Kanton Bern", en: "Canton of Bern" },
  "basel": { de: "Basel-Stadt und Basel-Landschaft", en: "Basel-Stadt and Basel-Landschaft" },

  zuerich: { de: "Kanton Zürich", en: "Canton of Zurich" },
  luzern: { de: "Kanton Luzern", en: "Canton of Lucerne" },
  schwyz: { de: "Kanton Schwyz", en: "Canton of Schwyz" },
  zug: { de: "Kanton Zug", en: "Canton of Zug" },
  hoefe: { de: "Ausserschwyz und Höfe", en: "Ausserschwyz and Höfe" },
};

/** Service and breadcrumb structured data (Google / AI assistants). */
export function serviceJsonLd(slug: ServiceSlug, lang: Lang) {
  const c = services[slug][lang];
  const url = SITE + servicePaths[slug][lang];
  const home = lang === "de" ? SITE + "/" : SITE + "/en";
  const area = regionArea[slug] ?? { de: "Schweiz", en: "Switzerland" };
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: c.title,
          description: c.metaDesc,
          url,
          inLanguage: lang,
          areaServed: { "@type": "Place", name: area[lang] },
          provider: {
            "@type": "AccountingService",
            name: "StartSaldo",
            url: home,
            email: "info@startsaldo.ch",
            telephone: "+41 76 629 50 56",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Schoosstrasse 3",
              postalCode: "6418",
              addressLocality: "Rothenthurm",
              addressRegion: "SZ",
              addressCountry: "CH",
            },
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: lang === "de" ? "Startseite" : "Home",
              item: home,
            },
            { "@type": "ListItem", position: 2, name: c.menu, item: url },
          ],
        },
      ],
    }),
  };
}


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
    scripts: [serviceJsonLd(slug, lang)],
  };
}

