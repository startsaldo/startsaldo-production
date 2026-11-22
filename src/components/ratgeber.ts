/** Ratgeber articles: shared summary, content, StartSaldo support and sources structure. */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "table"; label: string; headers: string[]; rows: string[][] }
  | { type: "list"; items: string[]; variant?: "check" | "numbered" }
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
  lead: string[];
  seoTitle?: string;
  metaDescription?: string;
  cta?: string;
  defaultNote?: boolean;
};

export type Article = ArticleContent & {
  slug: string;
  date: string;
  en?: ArticleContent;
};

export const articles: Article[] = [
  {
    slug: "buchhaltung-selber-machen-oder-auslagern",
    title: "Buchhaltung selber machen oder auslagern? Entscheidungshilfe für Schweizer KMU",
    desc: "Selber führen, teilweise oder vollständig auslagern? Eine Entscheidungshilfe für Schweizer KMU und Start-ups mit Vergleich und fünf Leitfragen.",
    seoTitle: "Buchhaltung selber machen oder auslagern? | StartSaldo",
    metaDescription: "Buchhaltung selber machen oder auslagern? Vergleichen Sie die drei Modelle und finden Sie mit fünf Fragen die passende Lösung für Ihr KMU.",
    category: "Buchhaltung",
    date: "2026-11-21",
    cta: "Kostenloses Erstgespräch vereinbaren",
    defaultNote: false,
    lead: [
      "Schweizer GmbHs und KMU können ihre Buchhaltung selbst führen oder an einen Treuhänder auslagern. Entscheidend sind die verfügbaren Fachkenntnisse, die Zeit und der tatsächliche Aufwand. Oft ist eine Kombination sinnvoll: Das Unternehmen übernimmt einfache administrative Aufgaben, während ein Treuhänder die fachlich anspruchsvolleren Arbeiten betreut.",
    ],
    sections: [
      {
        h: "Buchhaltung selber führen oder auslagern: Die drei Möglichkeiten",
        p: [],
        blocks: [
          {
            type: "table",
            label: "Vergleich: Buchhaltung selber machen, teilweise oder vollständig auslagern",
            headers: ["Modell", "Vorteile", "Zu beachten"],
            rows: [
              ["Selber machen", "Direkter Überblick, weniger externe Kosten", "Fachwissen und regelmässiger Zeitaufwand erforderlich"],
              ["Teilweise auslagern", "Flexible Aufgabenteilung, fachliche Unterstützung", "Klare Zuständigkeiten notwendig"],
              ["Vollständig auslagern", "Weniger interner Bearbeitungsaufwand", "Externe Kosten und laufende Informationsübergabe"],
            ],
          },
          { type: "paragraph", text: "Die passende Lösung hängt davon ab, wie Ihr Unternehmen organisiert ist und welche Arbeiten intern zuverlässig erledigt werden können." },
        ],
      },
      {
        h: "Buchhaltung selber machen: Gesetzliche Pflichten",
        p: [],
        blocks: [
          { type: "paragraph", text: "Eine Schweizer GmbH darf ihre Buchhaltung selbst führen. Sie ist jedoch gemäss Art. 957 ff. des Obligationenrechts zur ordnungsgemässen Buchführung und Rechnungslegung verpflichtet." },
          { type: "paragraph", text: "Dazu gehören insbesondere eine vollständige Bilanz, eine Erfolgsrechnung sowie die nachvollziehbare Dokumentation der Geschäftsfälle." },
          { type: "paragraph", text: "Die gesetzlichen Anforderungen gelten auch dann, wenn die Buchhaltung an einen externen Treuhänder ausgelagert wird. Die Verantwortung für die Organisation des Rechnungswesens bleibt bei der Unternehmensführung." },
        ],
      },
      {
        h: "Wann sich eine externe Buchhaltung lohnt",
        p: [],
        blocks: [
          { type: "paragraph", text: "Eine selbst geführte Buchhaltung kann sinnvoll sein, wenn die Geschäftsfälle überschaubar sind, ausreichend Fachwissen vorhanden ist und die notwendigen Arbeiten regelmässig erledigt werden können." },
          { type: "paragraph", text: "Professionelle Unterstützung wird besonders interessant, wenn:" },
          {
            type: "list",
            items: [
              "Die Anzahl der Geschäftsfälle zunimmt.",
              "Mitarbeitende beschäftigt werden und Lohnabrechnungen anfallen.",
              "MWST-Abrechnungen oder Jahresabschlussarbeiten mehr Fachwissen erfordern.",
              "Die Buchhaltung neben dem Tagesgeschäft zu viel Zeit beansprucht.",
              "Wiederholt Unsicherheiten oder Rückfragen auftreten.",
            ],
          },
          { type: "paragraph", text: "Ein Treuhänder kann interne Kapazitäten entlasten und fachliche Aufgaben übernehmen. Dafür benötigt er vollständige Unterlagen und eine klare Absprache über die Verantwortlichkeiten." },
        ],
      },
      {
        h: "Teilweise auslagern: Ein praktischer Mittelweg",
        p: [],
        blocks: [
          { type: "paragraph", text: "Nicht jede GmbH muss ihre gesamte Buchhaltung abgeben. Eine mögliche Aufteilung sieht so aus:" },
          { type: "paragraph", text: "**Ihr Unternehmen übernimmt:**" },
          { type: "list", items: ["Kundenrechnungen erstellen", "Belege sammeln und digital bereitstellen", "Offene Zahlungen überwachen"] },
          { type: "paragraph", text: "**Der Treuhänder übernimmt nach Vereinbarung:**" },
          { type: "list", items: ["Laufende Buchungen und Kontenabstimmungen", "MWST-Abrechnungen", "Lohnbuchhaltung", "Jahresabschluss und Unternehmenssteuererklärung"] },
          { type: "paragraph", text: "Das Schweizer KMU-Portal nennt solche Mischformen ausdrücklich als mögliche Lösung." },
        ],
      },
      {
        h: "Entscheidungshilfe für Ihr KMU",
        p: [],
        blocks: [
          { type: "paragraph", text: "Bevor Sie Ihre Buchhaltung neu organisieren, sollten Sie diese fünf Punkte prüfen:" },
          {
            type: "list",
            variant: "numbered",
            items: [
              "**Zeit:** Können Sie Ihre Buchhaltung laufend und fristgerecht bearbeiten?",
              "**Fachwissen:** Sind die notwendigen Buchhaltungskenntnisse vorhanden?",
              "**Aufwand:** Wie viele Geschäftsfälle, Mitarbeitende und besondere Anforderungen gibt es?",
              "**Kontrolle:** Sind Abstimmungen und notwendige fachliche Prüfungen gewährleistet?",
              "**Wirtschaftlichkeit:** Wäre Ihre Zeit im Kerngeschäft besser eingesetzt?",
            ],
          },
          { type: "paragraph", text: "Wenn Zeit oder Fachkenntnisse fehlen, lohnt es sich, eine externe Betreuung zu prüfen. Wenn Sie nicht alle Arbeiten abgeben möchten, kann eine teilweise Auslagerung die passende Lösung sein." },
          { type: "paragraph", text: "Auch die Kosten sollten berücksichtigt werden. Eine Orientierung bietet unser [Ratgeber zu den Treuhandkosten einer GmbH](/ratgeber/treuhaender-kosten-gmbh-schweiz)." },
        ],
      },
      {
        h: "Buchhaltung mit StartSaldo organisieren",
        p: [],
        blocks: [
          { type: "paragraph", text: "StartSaldo unterstützt Schweizer KMU, GmbHs und Start-ups bei der Finanzbuchhaltung, MWST, Lohnadministration und beim Jahresabschluss." },
          { type: "paragraph", text: "Wir bieten persönliche Betreuung und digital organisierte Zusammenarbeit. Gemeinsam klären wir, welche Aufgaben Sie intern behalten möchten und welche Arbeiten wir übernehmen können." },
          { type: "paragraph", text: "**Sie möchten Ihre Buchhaltung vereinfachen und den passenden Betreuungsumfang finden?**" },
          { type: "cta", label: "Jetzt kostenloses Erstgespräch vereinbaren", to: "/termin" },
        ],
      },
      {
        h: "Quellen und Stand",
        p: [],
        blocks: [
          { type: "paragraph", text: "[SECO KMU-Portal – Buchhaltung auslagern oder selbst führen?](https://www.kmu.admin.ch/de/buchhaltung-auslagern-oder-selbst-fuehren)" },
          { type: "paragraph", text: "[SECO KMU-Portal – Buchhaltungspflicht für Handelsgesellschaften](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften)" },
          { type: "paragraph", text: "*Stand: November 2026. Dieser Ratgeber bietet allgemeine Informationen und ersetzt keine individuelle Buchhaltungs- oder Steuerberatung.*" },
        ],
      },
    ],
    en: {
      title: "Doing your own bookkeeping or outsourcing it? A guide for Swiss SMEs",
      desc: "Do it yourself, outsource part of it or outsource it all? A guide for Swiss SMEs and start-ups, with a comparison and five key questions.",
      seoTitle: "Do your own bookkeeping or outsource it? | StartSaldo",
      metaDescription: "Should you do your own bookkeeping or outsource it? Compare three approaches and use five questions to find the right solution for your SME.",
      category: "Accounting",
      cta: "Book a free initial consultation",
      defaultNote: false,
      lead: [
        "Swiss GmbHs and SMEs can keep their own accounts or outsource their bookkeeping to an external accountant. The decisive factors are the available expertise, time and actual workload. A combination is often useful: the company handles simple administrative tasks while an external accountant takes care of the more specialised work.",
      ],
      sections: [
        {
          h: "Doing your own bookkeeping or outsourcing it: the three options",
          p: [],
          blocks: [
            {
              type: "table",
              label: "Comparison: doing your own bookkeeping, partial outsourcing and full outsourcing",
              headers: ["Approach", "Advantages", "Points to consider"],
              rows: [
                ["Do it yourself", "Direct overview, lower external costs", "Expertise and regular time commitment required"],
                ["Partial outsourcing", "Flexible division of tasks, professional support", "Clear responsibilities required"],
                ["Full outsourcing", "Less in-house processing work", "External costs and ongoing information handover"],
              ],
            },
            { type: "paragraph", text: "The right solution depends on how your company is organised and which tasks can reliably be completed in-house." },
          ],
        },
        {
          h: "Doing your own bookkeeping: legal obligations",
          p: [],
          blocks: [
            { type: "paragraph", text: "A Swiss GmbH may keep its own accounts. However, under Article 957 et seq. of the Swiss Code of Obligations, it must maintain proper bookkeeping and financial reporting." },
            { type: "paragraph", text: "This includes, in particular, a complete balance sheet, an income statement and traceable documentation of business transactions." },
            { type: "paragraph", text: "The statutory requirements also apply when bookkeeping is outsourced. Responsibility for organising the accounting system remains with the company's management." },
          ],
        },
        {
          h: "When external bookkeeping support is worthwhile",
          p: [],
          blocks: [
            { type: "paragraph", text: "Keeping your own accounts can make sense when business transactions are manageable, sufficient expertise is available and the necessary work can be completed regularly." },
            { type: "paragraph", text: "Professional support becomes particularly attractive when:" },
            {
              type: "list",
              items: [
                "The number of business transactions increases.",
                "Employees are hired and payroll must be prepared.",
                "VAT returns or year-end work require more expertise.",
                "Bookkeeping takes too much time alongside day-to-day business.",
                "Uncertainties or questions arise repeatedly.",
              ],
            },
            { type: "paragraph", text: "An external accountant can ease internal capacity constraints and take over specialist tasks. This requires complete documents and a clear agreement on responsibilities." },
          ],
        },
        {
          h: "Partial outsourcing: a practical middle ground",
          p: [],
          blocks: [
            { type: "paragraph", text: "Not every GmbH needs to outsource its entire bookkeeping. One possible division of tasks looks like this:" },
            { type: "paragraph", text: "**Your company handles:**" },
            { type: "list", items: ["Issuing customer invoices", "Collecting receipts and providing them digitally", "Monitoring outstanding payments"] },
            { type: "paragraph", text: "**The external accountant handles, as agreed:**" },
            { type: "list", items: ["Ongoing entries and account reconciliations", "VAT returns", "Payroll accounting", "Annual accounts and the corporate tax return"] },
            { type: "paragraph", text: "The Swiss SME Portal explicitly mentions such mixed approaches as a possible solution." },
          ],
        },
        {
          h: "Decision guide for your SME",
          p: [],
          blocks: [
            { type: "paragraph", text: "Before reorganising your bookkeeping, you should review these five points:" },
            {
              type: "list",
              variant: "numbered",
              items: [
                "**Time:** Can you keep your bookkeeping up to date and meet deadlines?",
                "**Expertise:** Is the necessary bookkeeping knowledge available?",
                "**Workload:** How many business transactions, employees and special requirements are there?",
                "**Control:** Are reconciliations and the necessary professional checks ensured?",
                "**Cost-effectiveness:** Would your time be better spent on your core business?",
              ],
            },
            { type: "paragraph", text: "If you lack time or expertise, it is worth considering external support. If you do not want to outsource every task, partial outsourcing may be the right solution." },
            { type: "paragraph", text: "Costs should also be considered. Our [German guide to external accounting costs for a GmbH](/ratgeber/treuhaender-kosten-gmbh-schweiz) provides guidance." },
          ],
        },
        {
          h: "Organising your bookkeeping with StartSaldo",
          p: [],
          blocks: [
            { type: "paragraph", text: "StartSaldo supports Swiss SMEs, GmbHs and start-ups with financial accounting, VAT, payroll administration and annual accounts." },
            { type: "paragraph", text: "We offer personal support and digitally organised cooperation. Together, we clarify which tasks you would like to keep in-house and which work we can take over." },
            { type: "paragraph", text: "**Would you like to simplify your bookkeeping and find the right level of support?**" },
            { type: "cta", label: "Book a free initial consultation now", to: "/termin" },
          ],
        },
        {
          h: "Sources and last updated",
          p: [],
          blocks: [
            { type: "paragraph", text: "[SECO SME Portal – outsource bookkeeping or do it yourself? (German)](https://www.kmu.admin.ch/de/buchhaltung-auslagern-oder-selbst-fuehren)" },
            { type: "paragraph", text: "[SECO SME Portal – bookkeeping obligations for commercial companies (German)](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften)" },
            { type: "paragraph", text: "*Last updated: November 2026. This guide provides general information and does not replace individual accounting or tax advice.*" },
          ],
        },
      ],
    },
  },
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
      "Für eine kleine Schweizer GmbH nennt eine Preisübersicht von Gryps **Treuhandkosten zwischen CHF 1'500 und CHF 3'800 pro Jahr**. Der Durchschnitt im untersuchten Beispiel liegt bei CHF 2'400. Wie viel Ihre GmbH tatsächlich bezahlt, hängt von der Anzahl Geschäftsfälle und den gewünschten Dienstleistungen ab.",
    ],
    sections: [
      {
        h: "Treuhandkosten für eine GmbH im Überblick",
        p: [],
        blocks: [
          { type: "paragraph", text: "Eine im Mai 2026 aktualisierte Erhebung von Gryps unter mehr als 70 Treuhändern in der Deutschschweiz nennt folgende Richtwerte:" },
          {
            type: "table",
            label: "Richtpreise für Treuhandkosten einer GmbH",
            headers: ["Leistung", "Richtpreis"],
            rows: [
              ["Kleine GmbH: Buchhaltung inklusive Jahresabschluss und weiterer definierter Leistungen", "CHF 1'500–3'800 pro Jahr"],
              ["Durchschnitt im untersuchten Beispiel", "CHF 2'400 pro Jahr"],
              ["Einmalige Einrichtung", "CHF 300–500"],
              ["Einfache Buchhaltungsarbeiten", "Ab ca. CHF 80 pro Stunde"],
              ["Anspruchsvollere Buchhaltungs- und Beratungsarbeiten", "Ca. CHF 120–250 pro Stunde"],
            ],
          },
          { type: "paragraph", text: "Das Kostenbeispiel basiert auf einer GmbH mit zwei Mitarbeitenden und rund 10–20 Belegen monatlich. Es umfasst die laufende Buchhaltung, den Jahresabschluss, die Unternehmenssteuererklärung und die MWST-Abrechnung." },
          { type: "paragraph", text: "Ob die vollständige Lohnadministration eingeschlossen ist, geht aus diesem Beispiel nicht eindeutig hervor." },
          { type: "paragraph", text: "**Wichtig:** Es handelt sich um Markt-Richtwerte eines Drittanbieters, nicht um Preisangaben von StartSaldo." },
        ],
      },
      {
        h: "Diese Faktoren beeinflussen die Treuhandkosten",
        p: [],
        blocks: [
          { type: "paragraph", text: "**Anzahl und Art der Geschäftsfälle**" },
          { type: "paragraph", text: "Je mehr Rechnungen, Bankbewegungen und weitere Geschäftsfälle verarbeitet werden müssen, desto grösser ist in der Regel der Buchhaltungsaufwand." },
          { type: "paragraph", text: "**Umfang der Betreuung**" },
          { type: "paragraph", text: "Übernimmt der Treuhänder nur den Jahresabschluss oder auch die laufende Finanzbuchhaltung, MWST-Abrechnungen und Steuererklärungen? Die vereinbarten Leistungen beeinflussen den Preis wesentlich." },
          { type: "paragraph", text: "**Lohnbuchhaltung**" },
          { type: "paragraph", text: "Bei Unternehmen mit Mitarbeitenden kommen Lohnabrechnungen, Sozialversicherungsmeldungen und weitere administrative Aufgaben hinzu." },
          { type: "paragraph", text: "**Organisation der Unterlagen**" },
          { type: "paragraph", text: "Vollständige und gut organisierte Belege können Rückfragen und zusätzliche Bearbeitungsarbeiten reduzieren." },
          { type: "paragraph", text: "Auch besondere Geschäftsfälle wie Auslandtransaktionen oder Kryptowährungen können zusätzlichen Aufwand verursachen." },
        ],
      },
      {
        h: "Pauschale und Stundenhonorar",
        p: [],
        blocks: [
          { type: "paragraph", text: "Bei einem **Pauschalpreis** lassen sich die wiederkehrenden Kosten besser planen. Entscheidend ist, welche Arbeiten im vereinbarten Betrag enthalten sind." },
          { type: "paragraph", text: "Bei einem **Stundenhonorar** wird der tatsächlich geleistete Aufwand verrechnet. Das bietet Flexibilität, kann aber die Budgetplanung erschweren." },
          { type: "paragraph", text: "Beide Modelle können sinnvoll sein. Manche Treuhandbüros kombinieren eine Pauschale für Standardarbeiten mit einem Stundenhonorar für zusätzliche Leistungen." },
        ],
      },
      {
        h: "Checkliste: Treuhandofferten richtig vergleichen",
        p: [],
        blocks: [
          { type: "paragraph", text: "Bevor Sie sich für ein Angebot entscheiden, sollten Sie folgende Punkte klären:" },
          {
            type: "list",
            items: [
              "Ist die laufende Finanzbuchhaltung enthalten?",
              "Sind Jahresabschluss und Unternehmenssteuererklärung eingeschlossen?",
              "Werden MWST und Lohnbuchhaltung separat verrechnet?",
              "Fallen Kosten für die Einrichtung oder Datenübernahme an?",
              "Wie werden zusätzliche Arbeiten abgerechnet?",
            ],
          },
          { type: "paragraph", text: "**Unser Tipp:** Vergleichen Sie die gesamten voraussichtlichen Jahreskosten und nicht nur eine monatliche Pauschale." },
          { type: "paragraph", text: "Möchten Sie wissen, ob sich die eigene Buchhaltung oder eine Auslagerung eher lohnt? Lesen Sie dazu auch unseren Ratgeber [«Buchhaltung selber machen oder auslagern?»](/ratgeber/buchhaltung-selber-machen-oder-auslagern)." },
        ],
      },
      {
        h: "Buchhaltungsbetreuung mit StartSaldo",
        p: [],
        blocks: [
          { type: "paragraph", text: "StartSaldo unterstützt Schweizer KMU, GmbHs und Start-ups bei der Finanzbuchhaltung, MWST, Lohnadministration und beim Jahresabschluss." },
          { type: "paragraph", text: "Wir verbinden persönliche Betreuung mit digital organisierter Zusammenarbeit. Dabei können Sie einzelne Arbeiten abgeben oder eine umfassendere Buchhaltungsbetreuung vereinbaren." },
          { type: "paragraph", text: "**Sie möchten die Kosten und den passenden Leistungsumfang für Ihre GmbH klären?**" },
          { type: "cta", label: "Jetzt kostenloses Erstgespräch vereinbaren", to: "/termin" },
        ],
      },
      {
        h: "Quellen und Stand",
        p: [],
        blocks: [
          { type: "paragraph", text: "[Gryps – Treuhand-Preise in der Schweiz](https://www.gryps.ch/produkte/treuhaender-21/kosten-treuhaender/), aktualisiert am 21. Mai 2026." },
          { type: "paragraph", text: "[SECO KMU-Portal – Buchhaltung auslagern oder selbst führen?](https://www.kmu.admin.ch/de/buchhaltung-auslagern-oder-selbst-fuehren)" },
          { type: "paragraph", text: "*Stand: November 2026. Die Preisangaben sind unverbindliche Richtwerte und keine StartSaldo-Tarife.*" },
        ],
      },
    ],
  },
  {
    slug: "gmbh-oder-einzelfirma",
    title: "GmbH oder Einzelfirma: Was passt zu Ihrem Start?",
    desc: "Haftung, Kapital, Buchführung und Handelsregister im Vergleich – die wichtigsten Unterschiede für KMU und Start-ups in der Schweiz.",
    category: "Gründung",
    date: "2026-11-21",
    cta: "Kostenloses Erstgespräch vereinbaren",
    defaultNote: false,
    lead: [
      "Die Einzelfirma lässt sich ohne gesetzliches Mindestkapital gründen, dafür haften Sie persönlich für die Geschäftsverbindlichkeiten. Eine GmbH benötigt mindestens CHF 20'000 vollständig einbezahltes Stammkapital und einen Handelsregistereintrag. Dafür haftet grundsätzlich das Gesellschaftsvermögen, wobei persönliche Verantwortlichkeiten bei Pflichtverletzungen möglich bleiben.",
    ],
    sections: [
      {
        h: "GmbH und Einzelfirma im Vergleich",
        p: [],
        blocks: [
          {
            type: "table",
            label: "Vergleich zwischen Einzelfirma und GmbH",
            headers: ["Kriterium", "Einzelfirma", "GmbH"],
            rows: [
              ["Mindestkapital", "Keines", "CHF 20'000"],
              ["Haftung", "Persönlich und unbeschränkt", "Grundsätzlich Gesellschaftsvermögen"],
              ["Handelsregister", "Grundsätzlich ab CHF 100'000 Jahresumsatz bei kaufmännischem Gewerbe", "Obligatorisch"],
              ["Buchhaltung", "Unter CHF 500'000 Umsatz vereinfacht möglich", "Ordentliche Buchführung"],
              ["Besteuerung", "Gewinn als persönliches Einkommen", "Gesellschaft und Gesellschafter getrennt"],
            ],
          },
        ],
      },
      {
        h: "Haftung und Gründung",
        p: [],
        blocks: [
          { type: "paragraph", text: "Eine Einzelfirma eignet sich häufig für einen unkomplizierten Einstieg in die Selbstständigkeit. Sie benötigt weder ein gesetzliches Mindestkapital noch eine notarielle Gründung." },
          { type: "paragraph", text: "Bei einer GmbH sind eine öffentliche Beurkundung und die Eintragung ins Handelsregister erforderlich. Die Gesellschaft entsteht rechtlich erst mit diesem Eintrag." },
          { type: "paragraph", text: "Der wichtigste Unterschied liegt in der Haftung: Bei einer Einzelfirma haften Sie grundsätzlich auch mit Ihrem Privatvermögen. Bei einer GmbH haftet für Gesellschaftsschulden grundsätzlich die Gesellschaft selbst." },
        ],
      },
      {
        h: "Buchhaltung und Steuern",
        p: [],
        blocks: [
          { type: "paragraph", text: "Einzelfirmen mit weniger als CHF 500'000 Umsatzerlös im letzten Geschäftsjahr dürfen eine vereinfachte Buchhaltung über Einnahmen, Ausgaben und Vermögenslage führen." },
          { type: "paragraph", text: "Eine GmbH unterliegt dagegen den ordentlichen Buchführungsvorschriften und muss eine Jahresrechnung erstellen." },
          { type: "paragraph", text: "Auch steuerlich unterscheiden sich die Rechtsformen:" },
          {
            type: "list",
            items: [
              "**Einzelfirma:** Der Geschäftsgewinn wird bei der Inhaberin oder beim Inhaber als Einkommen besteuert. Bei anerkannter selbstständiger Erwerbstätigkeit fallen entsprechende Sozialversicherungsbeiträge an.",
              "**GmbH:** Gewinn und Kapital werden auf Gesellschaftsebene besteuert. Löhne und allfällige Dividenden werden beim Empfänger nach den anwendbaren Regeln besteuert.",
            ],
          },
          { type: "paragraph", text: "Welche Rechtsform steuerlich sinnvoller ist, hängt unter anderem vom erwarteten Gewinn, dem Wohn- und Unternehmensstandort sowie den persönlichen Verhältnissen ab." },
        ],
      },
      {
        h: "Entscheidungshilfe für Ihre Gründung",
        p: [],
        blocks: [
          { type: "paragraph", text: "**Eine Einzelfirma kann sinnvoll sein**, wenn Sie alleine starten, wenig Gründungsaufwand wünschen und die persönliche Haftung für Sie tragbar ist." },
          { type: "paragraph", text: "**Eine GmbH kann besser passen**, wenn Sie das unternehmerische Risiko stärker vom Privatvermögen trennen, mit weiteren Gesellschaftern arbeiten oder eine eigenständige Gesellschaft aufbauen möchten." },
          { type: "paragraph", text: "Die Entscheidung sollte nicht allein von den Gründungskosten abhängen." },
        ],
      },
      {
        h: "Unterstützung durch StartSaldo",
        p: [],
        blocks: [
          { type: "paragraph", text: "StartSaldo begleitet Schweizer KMU und Start-ups bei der Wahl der passenden Rechtsform, der [GmbH-Gründung](/gruendung-startups) und der anschliessenden Buchhaltung." },
          { type: "paragraph", text: "**Sie möchten Ihre Möglichkeiten besprechen?**" },
          { type: "cta", label: "Kostenloses Erstgespräch vereinbaren", to: "/termin" },
        ],
      },
      {
        h: "Quellen und Stand",
        p: [],
        blocks: [
          { type: "paragraph", text: "[SECO KMU-Portal – Einzelunternehmen](https://www.kmu.admin.ch/de/rechtsform-einzelunternehmen)" },
          { type: "paragraph", text: "[SECO KMU-Portal – GmbH](https://www.kmu.admin.ch/de/rechtsform-gesellschaft-mit-beschraenkter-haftung-gmbh)" },
          { type: "paragraph", text: "[SECO KMU-Portal – Buchhaltungspflicht](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften)" },
          { type: "paragraph", text: "*Stand: November 2026. Dieser Artikel dient der allgemeinen Information und ersetzt keine individuelle Beratung.*" },
        ],
      },
    ],
    en: {
      title: "GmbH or sole proprietorship: which suits your start?",
      desc: "Liability, capital, bookkeeping and the commercial register compared – the key differences for SMEs and start-ups in Switzerland.",
      category: "Formation",
      cta: "Book a free initial consultation",
      defaultNote: false,
      lead: [
        "A sole proprietorship can be formed without statutory minimum capital, but you are personally liable for business obligations. A GmbH requires at least CHF 20,000 in fully paid-up share capital and registration in the commercial register. In return, the company's assets are generally liable, although personal responsibility may still arise in the event of breaches of duty.",
      ],
      sections: [
        {
          h: "GmbH and sole proprietorship compared",
          p: [],
          blocks: [
            {
              type: "table",
              label: "Comparison between a sole proprietorship and a GmbH",
              headers: ["Criterion", "Sole proprietorship", "GmbH"],
              rows: [
                ["Minimum capital", "None", "CHF 20,000"],
                ["Liability", "Personal and unlimited", "Generally the company's assets"],
                ["Commercial register", "Generally required from CHF 100,000 annual turnover for a commercial business", "Mandatory"],
                ["Bookkeeping", "Simplified accounts possible below CHF 500,000 turnover", "Proper financial accounting"],
                ["Taxation", "Profit as personal income", "Company and shareholders taxed separately"],
              ],
            },
          ],
        },
        {
          h: "Liability and formation",
          p: [],
          blocks: [
            { type: "paragraph", text: "A sole proprietorship is often suitable for a straightforward start to self-employment. It requires neither statutory minimum capital nor notarised formation." },
            { type: "paragraph", text: "A GmbH requires a public deed and entry in the commercial register. The company only comes into legal existence with this registration." },
            { type: "paragraph", text: "The most important difference is liability: with a sole proprietorship, you are generally also liable with your private assets. With a GmbH, the company itself is generally liable for its debts." },
          ],
        },
        {
          h: "Bookkeeping and taxes",
          p: [],
          blocks: [
            { type: "paragraph", text: "Sole proprietorships with revenue below CHF 500,000 in the last financial year may keep simplified accounts of income, expenses and financial position." },
            { type: "paragraph", text: "A GmbH, by contrast, is subject to proper bookkeeping requirements and must prepare annual financial statements." },
            { type: "paragraph", text: "The legal forms also differ for tax purposes:" },
            {
              type: "list",
              items: [
                "**Sole proprietorship:** Business profit is taxed as the owner's income. Recognised self-employment also gives rise to the relevant social security contributions.",
                "**GmbH:** Profit and capital are taxed at company level. Salaries and any dividends are taxed for the recipient under the applicable rules.",
              ],
            },
            { type: "paragraph", text: "Which legal form is more advantageous for tax purposes depends on factors including expected profit, place of residence, company location and personal circumstances." },
          ],
        },
        {
          h: "Decision guide for your company formation",
          p: [],
          blocks: [
            { type: "paragraph", text: "**A sole proprietorship can make sense** if you are starting alone, want minimal formation work and consider personal liability manageable." },
            { type: "paragraph", text: "**A GmbH may be a better fit** if you want to separate business risk more strongly from private assets, work with other shareholders or build an independent company." },
            { type: "paragraph", text: "The decision should not depend on formation costs alone." },
          ],
        },
        {
          h: "Support from StartSaldo",
          p: [],
          blocks: [
            { type: "paragraph", text: "StartSaldo supports Swiss SMEs and start-ups in choosing the right legal form, [forming a GmbH](/gruendung-startups) and organising their subsequent bookkeeping." },
            { type: "paragraph", text: "**Would you like to discuss your options?**" },
            { type: "cta", label: "Book a free initial consultation", to: "/termin" },
          ],
        },
        {
          h: "Sources and last updated",
          p: [],
          blocks: [
            { type: "paragraph", text: "[SECO SME Portal – sole proprietorship (German)](https://www.kmu.admin.ch/de/rechtsform-einzelunternehmen)" },
            { type: "paragraph", text: "[SECO SME Portal – GmbH (German)](https://www.kmu.admin.ch/de/rechtsform-gesellschaft-mit-beschraenkter-haftung-gmbh)" },
            { type: "paragraph", text: "[SECO SME Portal – bookkeeping obligations (German)](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften)" },
            { type: "paragraph", text: "*Last updated: November 2026. This article provides general information and does not replace individual advice.*" },
          ],
        },
      ],
    },
  },
  {
    slug: "mwst-pflicht-schweiz",
    title: "Ab wann muss mein Unternehmen MWST abrechnen?",
    desc: "Umsatzgrenze, freiwillige Unterstellung und Abrechnungsmethoden: so klären KMU und Start-ups ihre Mehrwertsteuerpflicht in der Schweiz.",
    category: "Steuern & MWST",
    date: "2026-11-21",
    cta: "Kostenloses Erstgespräch vereinbaren",
    defaultNote: false,
    lead: [
      "Schweizer Unternehmen werden grundsätzlich ab CHF 100'000 jährlichem Umsatz aus massgebenden, nicht von der Steuer ausgenommenen Leistungen mehrwertsteuerpflichtig. Dabei zählt der relevante weltweite Umsatz. Auch unterhalb dieser Grenze kann eine freiwillige Anmeldung möglich sein.",
    ],
    sections: [
      {
        h: "Die Umsatzgrenze von CHF 100'000",
        p: [],
        blocks: [
          { type: "paragraph", text: "Für die Beurteilung der MWST-Pflicht zählt nicht ausschliesslich der Umsatz in der Schweiz." },
          { type: "paragraph", text: "Auch Leistungen im Ausland können für die Umsatzgrenze relevant sein. Bestimmte von der MWST ausgenommene Leistungen werden dagegen nicht berücksichtigt." },
          { type: "paragraph", text: "**Wichtig:** Nicht jeder Umsatz zählt automatisch zur massgebenden Grenze. Die Art der erbrachten Leistungen muss berücksichtigt werden." },
        ],
      },
      {
        h: "Beginn der MWST-Pflicht und Anmeldung",
        p: [],
        blocks: [
          { type: "paragraph", text: "Bei einer Neugründung ist entscheidend, ob voraussichtlich innerhalb der nächsten zwölf Monate die massgebende Umsatzgrenze erreicht wird. Ist dies bereits bei Aufnahme der Tätigkeit absehbar, kann die Steuerpflicht von Beginn an bestehen." },
          { type: "paragraph", text: "Bei einem bestehenden Unternehmen, das bisher von der Steuerpflicht befreit war, beginnt die obligatorische Steuerpflicht grundsätzlich nach Ablauf des Geschäftsjahres, in dem die Umsatzgrenze erreicht wurde." },
          { type: "paragraph", text: "Die Anmeldung erfolgt bei der Eidgenössischen Steuerverwaltung (ESTV)." },
          { type: "paragraph", text: "[MWST-Pflicht prüfen und Unternehmen anmelden – ESTV](https://www.estv.admin.ch/de/mwst-anmelden)" },
        ],
      },
      {
        h: "Freiwillige MWST-Anmeldung",
        p: [],
        blocks: [
          { type: "paragraph", text: "Auch unterhalb der Umsatzgrenze können sich Unternehmen unter den gesetzlichen Voraussetzungen freiwillig registrieren lassen." },
          { type: "paragraph", text: "Das kann beispielsweise interessant sein, wenn grössere Investitionen anstehen und ein Vorsteuerabzug möglich ist." },
          { type: "paragraph", text: "Eine freiwillige Anmeldung ist jedoch nicht automatisch finanziell vorteilhaft. Auch der zusätzliche Abrechnungsaufwand und die Zusammensetzung der Kundschaft sollten berücksichtigt werden." },
        ],
      },
      {
        h: "Effektive Methode oder Saldosteuersatz?",
        p: [],
        blocks: [
          { type: "paragraph", text: "MWST-pflichtige Unternehmen können je nach Voraussetzungen unterschiedliche Abrechnungsmethoden anwenden." },
          {
            type: "table",
            label: "Vergleich der MWST-Abrechnungsmethoden",
            headers: ["Methode", "Funktionsweise"],
            rows: [
              ["Effektive Methode", "Geschuldete Umsatzsteuer abzüglich abzugsfähiger Vorsteuer"],
              ["Saldosteuersatzmethode", "Vereinfachte Berechnung anhand des Umsatzes und des anwendbaren Saldosteuersatzes"],
            ],
          },
          { type: "paragraph", text: "Die Saldosteuersatzmethode ist an gesetzliche Voraussetzungen und Umsatzgrenzen gebunden." },
          { type: "paragraph", text: "Welche Methode sinnvoll ist, hängt unter anderem von der Geschäftstätigkeit und der Kostenstruktur Ihres Unternehmens ab." },
        ],
      },
      {
        h: "MWST-Checkliste für Ihr KMU",
        p: [],
        blocks: [
          { type: "paragraph", text: "Prüfen Sie regelmässig:" },
          {
            type: "list",
            items: [
              "Den massgebenden Jahresumsatz inklusive relevanter Auslandleistungen",
              "Ob Ihre Leistungen steuerbar, von der Steuer ausgenommen oder steuerbefreit sind",
              "Ob eine Anmeldung oder freiwillige Unterstellung sinnvoll ist",
              "Welche Abrechnungsmethode zu Ihrem Unternehmen passt",
              "Ob die notwendigen Belege und Informationen vollständig vorliegen",
            ],
          },
        ],
      },
      {
        h: "Unterstützung durch StartSaldo",
        p: [],
        blocks: [
          { type: "paragraph", text: "StartSaldo unterstützt Schweizer KMU und Start-ups bei der Prüfung der MWST-Pflicht, der Anmeldung und den laufenden [MWST-Abrechnungen](/mwst)." },
          { type: "paragraph", text: "**Sie möchten Ihre Mehrwertsteuersituation klären?**" },
          { type: "cta", label: "Kostenloses Erstgespräch vereinbaren", to: "/termin" },
        ],
      },
      {
        h: "Quellen und Stand",
        p: [],
        blocks: [
          { type: "paragraph", text: "[ESTV – MWST-Steuerpflicht](https://www.estv.admin.ch/de/mwst-steuerpflicht)" },
          { type: "paragraph", text: "[ESTV – MWST-Anmeldung](https://www.estv.admin.ch/de/mwst-anmelden)" },
          { type: "paragraph", text: "[ESTV – Saldosteuersatzmethode](https://www.estv.admin.ch/de/mwst-saldosteuersaetze-pauschalsteuersaetze)" },
          { type: "paragraph", text: "*Stand: November 2026. Dieser Artikel dient der allgemeinen Information und ersetzt keine individuelle Steuerberatung.*" },
        ],
      },
    ],
    en: {
      title: "When does my company have to register for VAT?",
      desc: "Turnover threshold, voluntary registration and settlement methods: how Swiss SMEs and start-ups clarify their VAT liability.",
      category: "Tax & VAT",
      cta: "Book a free initial consultation",
      defaultNote: false,
      lead: [
        "Swiss companies generally become liable for VAT once their annual turnover from relevant supplies that are not exempt from tax reaches CHF 100,000. The relevant worldwide turnover counts. Voluntary registration may also be possible below this threshold.",
      ],
      sections: [
        {
          h: "The CHF 100,000 turnover threshold",
          p: [],
          blocks: [
            { type: "paragraph", text: "Turnover in Switzerland is not the only factor used to assess VAT liability." },
            { type: "paragraph", text: "Supplies made abroad may also be relevant to the turnover threshold. Certain supplies exempt from VAT, on the other hand, are not included." },
            { type: "paragraph", text: "**Important:** Not all turnover automatically counts towards the relevant threshold. The type of supplies made must be taken into account." },
          ],
        },
        {
          h: "Start of VAT liability and registration",
          p: [],
          blocks: [
            { type: "paragraph", text: "For a new business, the key question is whether the relevant turnover threshold is expected to be reached within the next twelve months. If this is already foreseeable when the activity begins, VAT liability may apply from the outset." },
            { type: "paragraph", text: "For an existing business previously exempt from VAT liability, mandatory liability generally begins after the end of the financial year in which the turnover threshold was reached." },
            { type: "paragraph", text: "Registration is completed with the Federal Tax Administration (FTA)." },
            { type: "paragraph", text: "[Check VAT liability and register a company – FTA (German)](https://www.estv.admin.ch/de/mwst-anmelden)" },
          ],
        },
        {
          h: "Voluntary VAT registration",
          p: [],
          blocks: [
            { type: "paragraph", text: "Companies below the turnover threshold may also register voluntarily, subject to the statutory requirements." },
            { type: "paragraph", text: "This may be attractive, for example, when major investments are planned and input tax can be deducted." },
            { type: "paragraph", text: "However, voluntary registration is not automatically financially beneficial. The additional reporting work and the composition of the customer base should also be considered." },
          ],
        },
        {
          h: "Effective method or net tax rate method?",
          p: [],
          blocks: [
            { type: "paragraph", text: "Depending on the applicable requirements, VAT-registered companies can use different reporting methods." },
            {
              type: "table",
              label: "Comparison of VAT reporting methods",
              headers: ["Method", "How it works"],
              rows: [
                ["Effective method", "Output VAT due less deductible input tax"],
                ["Net tax rate method", "Simplified calculation based on turnover and the applicable net tax rate"],
              ],
            },
            { type: "paragraph", text: "The net tax rate method is subject to statutory requirements and turnover limits." },
            { type: "paragraph", text: "Which method is appropriate depends on factors including your business activity and cost structure." },
          ],
        },
        {
          h: "VAT checklist for your SME",
          p: [],
          blocks: [
            { type: "paragraph", text: "Review regularly:" },
            {
              type: "list",
              items: [
                "Relevant annual turnover, including relevant supplies made abroad",
                "Whether your supplies are taxable, exempt from tax or zero-rated",
                "Whether registration or voluntary liability is appropriate",
                "Which reporting method suits your company",
                "Whether the necessary receipts and information are complete",
              ],
            },
          ],
        },
        {
          h: "Support from StartSaldo",
          p: [],
          blocks: [
            { type: "paragraph", text: "StartSaldo supports Swiss SMEs and start-ups in assessing VAT liability, registering and preparing ongoing [VAT returns](/mwst)." },
            { type: "paragraph", text: "**Would you like to clarify your VAT situation?**" },
            { type: "cta", label: "Book a free initial consultation", to: "/termin" },
          ],
        },
        {
          h: "Sources and last updated",
          p: [],
          blocks: [
            { type: "paragraph", text: "[FTA – VAT liability (German)](https://www.estv.admin.ch/de/mwst-steuerpflicht)" },
            { type: "paragraph", text: "[FTA – VAT registration (German)](https://www.estv.admin.ch/de/mwst-anmelden)" },
            { type: "paragraph", text: "[FTA – net tax rate method (German)](https://www.estv.admin.ch/de/mwst-saldosteuersaetze-pauschalsteuersaetze)" },
            { type: "paragraph", text: "*Last updated: November 2026. This article provides general information and does not replace individual tax advice.*" },
          ],
        },
      ],
    },
  },
  {
    slug: "aufbewahrungspflicht-geschaeftsunterlagen",
    title: "Wie lange müssen Geschäftsunterlagen aufbewahrt werden?",
    desc: "Zehn Jahre Aufbewahrungspflicht, elektronische Belege und was das für KMU und Start-ups bedeutet – ein Überblick für die Schweiz.",
    category: "Buchhaltung",
    date: "2026-11-21",
    cta: "Kostenloses Erstgespräch vereinbaren",
    defaultNote: false,
    lead: [
      "Geschäftsbücher, Buchungsbelege, Geschäftsberichte und Revisionsberichte müssen in der Schweiz grundsätzlich **zehn Jahre ab Ablauf des Geschäftsjahres** aufbewahrt werden. Eine elektronische Archivierung ist möglich, sofern die gesetzlichen Anforderungen eingehalten werden. Für bestimmte Unterlagen, beispielsweise im Zusammenhang mit Immobilien und der MWST, gelten längere Fristen.",
    ],
    sections: [
      {
        h: "Aufbewahrungsfristen im Überblick",
        p: [],
        blocks: [
          {
            type: "table",
            label: "Aufbewahrungsfristen für Geschäftsunterlagen",
            headers: ["Unterlagen", "Aufbewahrungsfrist"],
            rows: [
              ["Geschäftsbücher und Buchungsbelege", "Grundsätzlich 10 Jahre"],
              ["Geschäftsberichte und Revisionsberichte", "Grundsätzlich 10 Jahre"],
              ["MWST-relevante Geschäftsunterlagen zu unbeweglichen Gegenständen", "20 Jahre"],
              ["Unterlagen mit besonderen gesetzlichen Pflichten", "Je nach Vorschrift länger"],
            ],
          },
          { type: "paragraph", text: "Die allgemeine Aufbewahrungspflicht ist in Art. 958f des Obligationenrechts geregelt." },
          { type: "paragraph", text: "**Beispiel:** Endet Ihr Geschäftsjahr am 31. Dezember 2026, müssen die entsprechenden Buchhaltungsunterlagen grundsätzlich bis zum 31. Dezember 2036 aufbewahrt werden." },
        ],
      },
      {
        h: "Papier oder digitale Archivierung?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Geschäftsbücher und Buchungsbelege dürfen auch elektronisch aufbewahrt werden." },
          { type: "paragraph", text: "Dabei müssen insbesondere folgende Anforderungen erfüllt sein:" },
          {
            type: "list",
            items: [
              "Die Unterlagen bleiben vollständig und nachvollziehbar.",
              "Ihre Integrität ist gewährleistet; nachträgliche Veränderungen müssen entsprechend den gesetzlichen Vorgaben erkennbar sein.",
              "Die Dokumente können während der gesamten Aufbewahrungsfrist gelesen und geprüft werden.",
              "Bei veränderbaren elektronischen Datenträgern werden die zusätzlichen Anforderungen der Geschäftsbücherverordnung eingehalten.",
            ],
          },
          { type: "paragraph", text: "Geschäftsberichte und Revisionsberichte müssen nach den gesetzlichen Vorgaben schriftlich und unterzeichnet aufbewahrt werden." },
          { type: "paragraph", text: "**Wichtig:** Eine gewöhnliche Speicherung in der Cloud allein garantiert noch keine gesetzeskonforme Archivierung." },
        ],
      },
      {
        h: "Längere Aufbewahrungsfrist bei Immobilien",
        p: [],
        blocks: [
          { type: "paragraph", text: "Für Geschäftsunterlagen im Zusammenhang mit unbeweglichen Gegenständen schreibt das Mehrwertsteuergesetz eine Aufbewahrungsfrist von 20 Jahren vor." },
          { type: "paragraph", text: "Dies kann beispielsweise Unterlagen betreffen, die für die mehrwertsteuerliche Behandlung von Investitionen in Geschäftsliegenschaften relevant sind." },
          { type: "paragraph", text: "Bei besonderen Sachverhalten oder noch nicht eingetretener Verjährung können weitere Anforderungen bestehen." },
        ],
      },
      {
        h: "Checkliste für die digitale Ablage",
        p: [],
        blocks: [
          { type: "paragraph", text: "Für eine gut organisierte Dokumentenablage sollten Sie:" },
          {
            type: "list",
            items: [
              "Buchungsbelege und Geschäftsbücher geordnet nach Geschäftsjahren ablegen.",
              "Die entsprechenden Aufbewahrungsfristen berücksichtigen.",
              "Die langfristige Lesbarkeit der Dateien sicherstellen.",
              "Zugriffsberechtigungen und den Schutz vor unbemerkten Änderungen organisieren.",
              "Auch bei einem Wechsel der Buchhaltungsbetreuung auf eine vollständige Datenübergabe achten.",
            ],
          },
        ],
      },
      {
        h: "Digitale Zusammenarbeit mit StartSaldo",
        p: [],
        blocks: [
          { type: "paragraph", text: "StartSaldo unterstützt KMU und Start-ups bei der Organisation ihrer [Finanzbuchhaltung](/finanzbuchhaltung) und der digitalen Dokumentenablage." },
          { type: "paragraph", text: "Für die Speicherung von Dokumenten und Daten nutzen wir Proton, einen Schweizer Anbieter für datenschutzorientierte digitale Dienste." },
          { type: "paragraph", text: "Dabei ist zwischen geschützter Speicherung und den zusätzlichen gesetzlichen Anforderungen an eine revisionssichere Archivierung zu unterscheiden." },
          { type: "paragraph", text: "**Sie möchten Ihre Buchhaltung und Dokumentenablage besser organisieren?**" },
          { type: "cta", label: "Kostenloses Erstgespräch vereinbaren", to: "/termin" },
        ],
      },
      {
        h: "Quellen und Stand",
        p: [],
        blocks: [
          { type: "paragraph", text: "[SECO KMU-Portal – Elektronische Aufbewahrung der Geschäftsbücher](https://www.kmu.admin.ch/de/elektronische-aufbewahrung-der-geschaeftsbuecher)" },
          { type: "paragraph", text: "[ESTV – MWST-Kontrolle und Aufbewahrung](https://www.estv.admin.ch/de/mwst-kontrolle)" },
          { type: "paragraph", text: "Art. 958f OR und Geschäftsbücherverordnung (GeBüV)" },
          { type: "paragraph", text: "*Stand: November 2026. Dieser Beitrag bietet allgemeine Informationen und ersetzt keine individuelle rechtliche oder steuerliche Beratung.*" },
        ],
      },
    ],
    en: {
      title: "How long must business records be kept?",
      desc: "A ten-year retention period, electronic records and what this means for SMEs and start-ups – an overview for Switzerland.",
      category: "Accounting",
      cta: "Book a free initial consultation",
      defaultNote: false,
      lead: [
        "In Switzerland, accounting books, vouchers, annual reports and audit reports must generally be kept for **ten years from the end of the financial year**. Electronic archiving is possible provided the statutory requirements are met. Longer periods apply to certain documents, for example in connection with real estate and VAT.",
      ],
      sections: [
        {
          h: "Retention periods at a glance",
          p: [],
          blocks: [
            {
              type: "table",
              label: "Retention periods for business records",
              headers: ["Records", "Retention period"],
              rows: [
                ["Accounting books and vouchers", "Generally 10 years"],
                ["Annual reports and audit reports", "Generally 10 years"],
                ["VAT-relevant business records relating to immovable property", "20 years"],
                ["Records subject to special statutory obligations", "Longer depending on the provision"],
              ],
            },
            { type: "paragraph", text: "The general retention obligation is set out in Article 958f of the Swiss Code of Obligations." },
            { type: "paragraph", text: "**Example:** If your financial year ends on 31 December 2026, the relevant accounting records must generally be kept until 31 December 2036." },
          ],
        },
        {
          h: "Paper or digital archiving?",
          p: [],
          blocks: [
            { type: "paragraph", text: "Accounting books and vouchers may also be kept electronically." },
            { type: "paragraph", text: "In particular, the following requirements must be met:" },
            {
              type: "list",
              items: [
                "The records remain complete and traceable.",
                "Their integrity is ensured; subsequent changes must be recognisable in accordance with statutory requirements.",
                "The documents can be read and reviewed throughout the retention period.",
                "For modifiable electronic storage media, the additional requirements of the Ordinance on Keeping and Retaining Accounting Books are met.",
              ],
            },
            { type: "paragraph", text: "Annual reports and audit reports must be retained in writing and signed in accordance with statutory requirements." },
            { type: "paragraph", text: "**Important:** Ordinary cloud storage alone does not guarantee legally compliant archiving." },
          ],
        },
        {
          h: "Longer retention period for real estate",
          p: [],
          blocks: [
            { type: "paragraph", text: "The VAT Act requires business records relating to immovable property to be kept for 20 years." },
            { type: "paragraph", text: "This may apply, for example, to documents relevant to the VAT treatment of investments in commercial property." },
            { type: "paragraph", text: "Additional requirements may apply in special circumstances or where limitation periods have not yet expired." },
          ],
        },
        {
          h: "Checklist for digital filing",
          p: [],
          blocks: [
            { type: "paragraph", text: "For well-organised document filing, you should:" },
            {
              type: "list",
              items: [
                "File vouchers and accounting books in an orderly manner by financial year.",
                "Take the applicable retention periods into account.",
                "Ensure that files remain readable over the long term.",
                "Organise access rights and protection against unnoticed changes.",
                "Ensure a complete data handover when changing your accounting provider.",
              ],
            },
          ],
        },
        {
          h: "Digital cooperation with StartSaldo",
          p: [],
          blocks: [
            { type: "paragraph", text: "StartSaldo supports SMEs and start-ups in organising their [financial accounting](/finanzbuchhaltung) and digital document filing." },
            { type: "paragraph", text: "We use Proton, a Swiss provider of privacy-focused digital services, to store documents and data." },
            { type: "paragraph", text: "A distinction must be made between secure storage and the additional statutory requirements for audit-compliant archiving." },
            { type: "paragraph", text: "**Would you like to organise your bookkeeping and document filing more effectively?**" },
            { type: "cta", label: "Book a free initial consultation", to: "/termin" },
          ],
        },
        {
          h: "Sources and last updated",
          p: [],
          blocks: [
            { type: "paragraph", text: "[SECO SME Portal – electronic retention of accounting books (German)](https://www.kmu.admin.ch/de/elektronische-aufbewahrung-der-geschaeftsbuecher)" },
            { type: "paragraph", text: "[FTA – VAT audits and record retention (German)](https://www.estv.admin.ch/de/mwst-kontrolle)" },
            { type: "paragraph", text: "Article 958f of the Swiss Code of Obligations and the Ordinance on Keeping and Retaining Accounting Books (GeBüV)" },
            { type: "paragraph", text: "*Last updated: November 2026. This article provides general information and does not replace individual legal or tax advice.*" },
          ],
        },
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
