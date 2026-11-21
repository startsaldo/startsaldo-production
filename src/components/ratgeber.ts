/** Ratgeber (blog) articles. Add an article by adding an entry here; routes, sitemap and llms.txt list it. */
export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "table"; label: string; headers: string[]; rows: string[][] }
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
    slug: "buchhaltung-selber-machen-oder-auslagern",
    title: "Buchhaltung selber machen oder auslagern? Entscheidungshilfe für Schweizer KMU",
    desc: "Selber führen, teilweise oder vollständig auslagern? Eine Entscheidungshilfe für Schweizer KMU und GmbHs mit Vergleich und fünf Leitfragen.",
    seoTitle: "Buchhaltung selber machen oder auslagern? | StartSaldo",
    metaDescription: "Buchhaltung selber machen oder auslagern? Vergleichen Sie die drei Modelle und finden Sie mit fünf Fragen die passende Lösung für Ihr KMU.",
    category: "Buchhaltung",
    date: "2026-11-21",
    cta: "Kostenloses Erstgespräch vereinbaren",
    defaultNote: false,
    lead: [
      "**Buchhaltung selber führen, einem Treuhänder übergeben oder beides kombinieren?** Für Schweizer KMU und GmbHs hängt die richtige Entscheidung vor allem von drei Faktoren ab: verfügbare Zeit, Fachkenntnisse und Umfang der Buchhaltung.",
      "Nicht jedes Unternehmen muss sämtliche Buchhaltungsarbeiten auslagern. Oft ist eine Kombination aus eigener Vorbereitung und professioneller Betreuung sinnvoll.",
      "Wir zeigen, welche Lösung zu Ihrem Unternehmen passen könnte.",
    ],
    sections: [
      {
        h: "Buchhaltung selber machen oder auslagern: Die drei Möglichkeiten",
        p: [],
        blocks: [
          {
            type: "table",
            label: "Vergleich: Buchhaltung selber machen, teilweise oder vollständig auslagern",
            headers: ["Modell", "Vorteile", "Geeignet für"],
            rows: [
              ["Selber machen", "Direkte Kontrolle, weniger externe Kosten", "Unternehmen mit ausreichenden Fachkenntnissen und Zeit"],
              ["Teilweise auslagern", "Flexible Aufgabenverteilung, fachliche Unterstützung", "KMU, die bestimmte Arbeiten selbst übernehmen möchten"],
              ["Vollständig auslagern", "Weniger interner Buchhaltungsaufwand", "Unternehmen mit wenig internen Ressourcen oder umfangreicher Buchhaltung"],
            ],
          },
          { type: "paragraph", text: "Welche Variante am besten passt, hängt von der individuellen Situation ab. Auch das Schweizer KMU-Portal empfiehlt, bei dieser Entscheidung die verfügbaren Kenntnisse und die Zeit für die Buchhaltung zu berücksichtigen." },
        ],
      },
      {
        h: "Darf ich die Buchhaltung meiner GmbH selber machen?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Ja. Eine Schweizer GmbH darf ihre Buchhaltung selbst führen. Es besteht keine generelle Pflicht, dafür einen externen Treuhänder zu beauftragen." },
          { type: "paragraph", text: "Allerdings muss die GmbH die gesetzlichen Anforderungen an die Buchführung und Rechnungslegung erfüllen." },
          { type: "paragraph", text: "Gemäss Art. 957 ff. des Obligationenrechts gehört dazu insbesondere eine ordnungsgemässe Buchhaltung mit Bilanz und Erfolgsrechnung." },
          { type: "paragraph", text: "Anders als bei kleineren Einzelunternehmen reicht für eine GmbH eine vereinfachte Einnahmen-Ausgaben-Rechnung grundsätzlich nicht aus." },
          { type: "paragraph", text: "**Wichtig:** Auch wenn die Buchhaltung ausgelagert wird, bleibt die Geschäftsführung für die ordnungsgemässe Organisation der Buchführung verantwortlich." },
          { type: "paragraph", text: "*Quelle: [SECO KMU-Portal – Buchhaltungspflicht für Handelsgesellschaften](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften).*" },
        ],
      },
      {
        h: "Wann lohnt es sich, die Buchhaltung selbst zu führen?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Die eigene Buchhaltung kann sinnvoll sein, wenn die Geschäftsfälle überschaubar sind und im Unternehmen ausreichend Fachwissen vorhanden ist." },
          { type: "paragraph", text: "Typische Voraussetzungen sind:" },
          {
            type: "list",
            items: [
              "Sie verstehen die grundlegenden Buchhaltungsvorschriften.",
              "Sie haben regelmässig Zeit, Belege zu erfassen und Konten abzustimmen.",
              "Sie behalten Fristen und offene Geschäftsfälle im Blick.",
              "Sie können den Jahresabschluss korrekt vorbereiten oder lassen ihn fachlich prüfen.",
            ],
          },
          { type: "paragraph", text: "Der Vorteil liegt vor allem darin, dass Sie Ihre Zahlen laufend im Blick behalten und weniger Arbeiten extern vergeben müssen." },
          { type: "paragraph", text: "Allerdings sollte der eigene Zeitaufwand nicht unterschätzt werden." },
        ],
      },
      {
        h: "Wann ist es sinnvoll, die Buchhaltung auszulagern?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Eine externe Betreuung wird besonders interessant, wenn die Buchhaltung zunehmend Zeit beansprucht oder besondere Fachkenntnisse erforderlich sind." },
          { type: "paragraph", text: "Das kann beispielsweise der Fall sein, wenn:" },
          {
            type: "list",
            items: [
              "Ihr Unternehmen wächst und mehr Geschäftsfälle anfallen.",
              "Sie Mitarbeitende beschäftigen und Lohnabrechnungen erstellen müssen.",
              "MWST-Abrechnungen und Abschlussarbeiten zunehmend aufwendig werden.",
              "Sie bei buchhalterischen oder steuerlichen Fragen unsicher sind.",
              "Die Buchhaltung neben dem Tagesgeschäft regelmässig liegen bleibt.",
            ],
          },
          { type: "paragraph", text: "Die Auslagerung kann interne Kapazitäten freimachen. Sie verursacht aber externe Kosten und erfordert weiterhin eine gute Zusammenarbeit: Geschäftliche Informationen und vollständige Belege müssen auch dem Treuhänder rechtzeitig zur Verfügung stehen." },
        ],
      },
      {
        h: "Die Alternative: Buchhaltung teilweise auslagern",
        p: [],
        blocks: [
          { type: "paragraph", text: "Für viele KMU ist eine klare Aufgabenteilung eine interessante Lösung." },
          { type: "paragraph", text: "Beispielsweise könnten Sie weiterhin Kundenrechnungen erstellen, Belege sammeln und offene Zahlungen überwachen." },
          { type: "paragraph", text: "Ein Treuhänder übernimmt nach Vereinbarung die laufenden Buchungen, Kontenabstimmungen, MWST-Abrechnungen oder den Jahresabschluss." },
          { type: "paragraph", text: "So bleiben Sie in die administrativen Abläufe eingebunden, ohne sämtliche Facharbeiten selbst erledigen zu müssen." },
          { type: "paragraph", text: "Entscheidend ist, dass die Verantwortlichkeiten von Anfang an klar festgelegt werden." },
        ],
      },
      {
        h: "Was ist tatsächlich günstiger?",
        p: [],
        blocks: [
          { type: "paragraph", text: "Die selbst geführte Buchhaltung verursacht möglicherweise weniger externe Kosten. Dafür investieren Sie eigene Arbeitszeit." },
          { type: "paragraph", text: "Bei einer ausgelagerten Buchhaltung bezahlen Sie die vereinbarten Dienstleistungen. Im Gegenzug reduziert sich der interne Bearbeitungsaufwand." },
          { type: "paragraph", text: "Für einen fairen Vergleich sollten Sie deshalb nicht nur Treuhandhonorare berücksichtigen." },
          { type: "paragraph", text: "**Vergleichen Sie stattdessen:**" },
          {
            type: "list",
            items: [
              "Wie viel Zeit benötigt Ihre Buchhaltung jeden Monat?",
              "Welche Arbeiten können Sie fachlich zuverlässig selbst erledigen?",
              "Was kostet Sie diese Arbeitszeit im Unternehmen?",
              "Welche Aufgaben würde ein Treuhänder übernehmen?",
              "Welche Kosten entstehen für Abschluss, MWST und Lohnbuchhaltung zusätzlich?",
            ],
          },
          { type: "paragraph", text: "Erst wenn diese Fragen geklärt sind, lassen sich die Modelle sinnvoll vergleichen." },
          { type: "paragraph", text: "Konkrete Schweizer Preisrichtwerte finden Sie in unserem [Ratgeber zu den Treuhandkosten einer GmbH](/ratgeber/treuhaender-kosten-gmbh-schweiz)." },
        ],
      },
      {
        h: "Entscheidungshilfe: Fünf Fragen für Ihr KMU",
        p: [],
        blocks: [
          { type: "paragraph", text: "Beantworten Sie die folgenden Fragen für Ihr Unternehmen:" },
          {
            type: "list",
            items: [
              "Habe ich ausreichend Zeit, die Buchhaltung laufend und vollständig zu führen?",
              "Verfüge ich über das nötige Fachwissen?",
              "Sind meine Geschäftsfälle und steuerlichen Anforderungen überschaubar?",
              "Kann ich notwendige Kontrollen und den Jahresabschluss zuverlässig organisieren?",
              "Könnte ich meine Zeit im Kerngeschäft sinnvoller einsetzen?",
            ],
          },
          { type: "paragraph", text: "**Wenn Sie die ersten vier Fragen mit Ja beantworten**, kann eine intern geführte Buchhaltung weiterhin sinnvoll sein." },
          { type: "paragraph", text: "Fehlen Zeit oder Fachkenntnisse, lohnt es sich, eine teilweise oder vollständige Auslagerung zu prüfen." },
          { type: "paragraph", text: "Die fünfte Frage hilft, den wirtschaftlichen Nutzen der eigenen Zeit einzuschätzen." },
        ],
      },
      {
        h: "Häufige Fragen",
        p: [],
        blocks: [
          {
            type: "faq",
            items: [
              {
                question: "Muss eine kleine GmbH einen Treuhänder haben?",
                answer: "Nein. Auch eine kleine GmbH darf ihre Buchhaltung intern führen. Die gesetzlichen Anforderungen gelten jedoch unabhängig von der Unternehmensgrösse.",
              },
              {
                question: "Kann ich nur den Jahresabschluss auslagern?",
                answer: "Ja. Einzelne Aufgaben wie Jahresabschluss, MWST oder Lohnbuchhaltung können separat vergeben werden. Wichtig sind vollständige Unterlagen und eine klare Aufgabenverteilung.",
              },
              {
                question: "Ist eine digitale Buchhaltung automatisch günstiger?",
                answer: "Nicht unbedingt. Digitale Abläufe können die Zusammenarbeit vereinfachen. Wie viel Aufwand tatsächlich eingespart wird, hängt von der Organisation und den vereinbarten Leistungen ab.",
              },
              {
                question: "Wer ist verantwortlich, wenn die Buchhaltung ausgelagert wird?",
                answer: "Die Geschäftsführung bleibt für die ordnungsgemässe Organisation der Buchführung verantwortlich. Deshalb sollten Aufgaben, Kontrollen und Zuständigkeiten mit dem Treuhandbüro klar vereinbart werden.",
              },
            ],
          },
        ],
      },
      {
        h: "Buchhaltung mit StartSaldo – so viel Unterstützung, wie Sie benötigen",
        p: [],
        blocks: [
          { type: "paragraph", text: "StartSaldo unterstützt Schweizer KMU, GmbHs und Start-ups bei der laufenden Finanzbuchhaltung, Lohnadministration, MWST und beim Jahresabschluss." },
          { type: "paragraph", text: "Wir verbinden persönliche Betreuung mit digital organisierter Zusammenarbeit." },
          { type: "paragraph", text: "Dabei muss nicht zwingend die gesamte Buchhaltung ausgelagert werden. Gemeinsam klären wir, welche Aufgaben Sie selbst übernehmen möchten und wobei wir Sie entlasten können." },
          { type: "paragraph", text: "**Sie sind unsicher, welche Lösung für Ihr Unternehmen sinnvoll ist?**" },
          { type: "paragraph", text: "In einem kostenlosen Erstgespräch besprechen wir Ihre aktuelle Buchhaltungsorganisation und die Möglichkeiten einer Zusammenarbeit." },
          { type: "cta", label: "Jetzt kostenloses Erstgespräch mit StartSaldo vereinbaren", to: "/termin" },
        ],
      },
      {
        h: "Quellen",
        p: [],
        blocks: [
          { type: "paragraph", text: "[SECO KMU-Portal – Buchhaltung auslagern oder selbst führen?](https://www.kmu.admin.ch/de/buchhaltung-auslagern-oder-selbst-fuehren)" },
          { type: "paragraph", text: "[SECO KMU-Portal – Buchhaltungspflicht für Handelsgesellschaften](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften)" },
          { type: "paragraph", text: "[Eidgenössische Steuerverwaltung – Elektronischer Geschäftsverkehr und Aufbewahrung](https://www.estv.admin.ch/de/mwst-elektronischer-geschaeftsverkehr)" },
          { type: "paragraph", text: "*Stand: November 2026. Der Beitrag dient der allgemeinen Information und ersetzt keine individuelle Buchhaltungs-, Steuer- oder Rechtsberatung.*" },
        ],
      },
    ],
    en: {
      title: "Doing your own bookkeeping or outsourcing it? A guide for Swiss SMEs",
      desc: "Do it yourself, outsource part of it or outsource it all? A guide for Swiss SMEs and GmbHs, with a comparison and five key questions.",
      seoTitle: "Do your own bookkeeping or outsource it? | StartSaldo",
      metaDescription: "Should you do your own bookkeeping or outsource it? Compare three approaches and use five questions to find the right solution for your SME.",
      category: "Accounting",
      cta: "Book a free initial consultation",
      defaultNote: false,
      lead: [
        "**Should you do your own bookkeeping, hand it over to an external accountant or combine the two?** For Swiss SMEs and GmbHs, the right decision depends primarily on three factors: available time, expertise and the volume of bookkeeping work.",
        "Not every company needs to outsource all of its bookkeeping. A combination of in-house preparation and professional support is often a sensible solution.",
        "We explain which approach might suit your company.",
      ],
      sections: [
        {
          h: "Doing your own bookkeeping or outsourcing it: the three options",
          p: [],
          blocks: [
            {
              type: "table",
              label: "Comparison: doing your own bookkeeping, partial outsourcing and full outsourcing",
              headers: ["Approach", "Advantages", "Suitable for"],
              rows: [
                ["Do it yourself", "Direct control, lower external costs", "Companies with sufficient expertise and time"],
                ["Partial outsourcing", "Flexible allocation of tasks, professional support", "SMEs that want to carry out certain tasks themselves"],
                ["Full outsourcing", "Less in-house bookkeeping work", "Companies with limited internal resources or extensive bookkeeping requirements"],
              ],
            },
            { type: "paragraph", text: "The best option depends on your individual situation. The Swiss SME Portal also recommends taking your available expertise and the time you can dedicate to bookkeeping into account when making this decision." },
          ],
        },
        {
          h: "Can I do my GmbH's bookkeeping myself?",
          p: [],
          blocks: [
            { type: "paragraph", text: "Yes. A Swiss GmbH may keep its own accounts. There is no general requirement to appoint an external accountant for this purpose." },
            { type: "paragraph", text: "However, the GmbH must meet the statutory requirements for bookkeeping and financial reporting." },
            { type: "paragraph", text: "Under Article 957 et seq. of the Swiss Code of Obligations, this includes proper bookkeeping with a balance sheet and an income statement." },
            { type: "paragraph", text: "Unlike smaller sole proprietorships, a GmbH generally cannot rely on simplified income and expenditure accounts." },
            { type: "paragraph", text: "**Important:** Even if bookkeeping is outsourced, the management remains responsible for ensuring that it is properly organised." },
            { type: "paragraph", text: "*Source: [SECO SME Portal – bookkeeping obligations for commercial companies (German)](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften).*" },
          ],
        },
        {
          h: "When is it worth doing your own bookkeeping?",
          p: [],
          blocks: [
            { type: "paragraph", text: "Doing your own bookkeeping can make sense if your business transactions are manageable and your company has sufficient expertise." },
            { type: "paragraph", text: "Typical requirements include:" },
            {
              type: "list",
              items: [
                "You understand the basic bookkeeping rules.",
                "You regularly have time to record receipts and reconcile accounts.",
                "You keep track of deadlines and outstanding transactions.",
                "You can prepare the annual accounts correctly or have them professionally reviewed.",
              ],
            },
            { type: "paragraph", text: "The main advantage is that you keep a constant eye on your figures and need to outsource less work." },
            { type: "paragraph", text: "However, you should not underestimate the time required." },
          ],
        },
        {
          h: "When does it make sense to outsource bookkeeping?",
          p: [],
          blocks: [
            { type: "paragraph", text: "External support becomes particularly attractive when bookkeeping takes up more and more time or requires specialist expertise." },
            { type: "paragraph", text: "This may be the case if:" },
            {
              type: "list",
              items: [
                "Your company is growing and the number of transactions is increasing.",
                "You employ staff and need to prepare payroll.",
                "VAT returns and year-end work are becoming increasingly time-consuming.",
                "You are unsure about accounting or tax matters.",
                "Bookkeeping is regularly left undone because of day-to-day business.",
              ],
            },
            { type: "paragraph", text: "Outsourcing can free up internal capacity. However, it creates external costs and still requires good cooperation: business information and complete receipts must also be provided to your external accountant on time." },
          ],
        },
        {
          h: "The alternative: partial bookkeeping outsourcing",
          p: [],
          blocks: [
            { type: "paragraph", text: "For many SMEs, a clear division of tasks is an attractive solution." },
            { type: "paragraph", text: "For example, you could continue to issue customer invoices, collect receipts and monitor outstanding payments." },
            { type: "paragraph", text: "Depending on your agreement, an external accountant takes over ongoing entries, account reconciliations, VAT returns or the annual accounts." },
            { type: "paragraph", text: "This keeps you involved in the administrative processes without having to carry out all the specialist work yourself." },
            { type: "paragraph", text: "The key is to define responsibilities clearly from the outset." },
          ],
        },
        {
          h: "Which option is actually cheaper?",
          p: [],
          blocks: [
            { type: "paragraph", text: "Keeping your own books may result in lower external costs. In return, you invest your own working time." },
            { type: "paragraph", text: "With outsourced bookkeeping, you pay for the agreed services. In return, your internal workload is reduced." },
            { type: "paragraph", text: "For a fair comparison, you should therefore consider more than just external accounting fees." },
            { type: "paragraph", text: "**Compare the following instead:**" },
            {
              type: "list",
              items: [
                "How much time does your bookkeeping require each month?",
                "Which tasks can you reliably carry out yourself?",
                "What does this working time cost your business?",
                "Which tasks would an external accountant take over?",
                "What additional costs arise for annual accounts, VAT and payroll?",
              ],
            },
            { type: "paragraph", text: "Only once these questions have been answered can you compare the approaches meaningfully." },
            { type: "paragraph", text: "You can find indicative Swiss prices in our [German guide to the cost of an external accountant for a GmbH](/ratgeber/treuhaender-kosten-gmbh-schweiz)." },
          ],
        },
        {
          h: "Decision guide: five questions for your SME",
          p: [],
          blocks: [
            { type: "paragraph", text: "Answer the following questions for your company:" },
            {
              type: "list",
              items: [
                "Do I have enough time to keep my bookkeeping up to date and complete?",
                "Do I have the necessary expertise?",
                "Are my business transactions and tax requirements manageable?",
                "Can I reliably organise the necessary checks and annual accounts?",
                "Could I use my time more effectively in my core business?",
              ],
            },
            { type: "paragraph", text: "**If you answer yes to the first four questions**, keeping your bookkeeping in-house may continue to make sense." },
            { type: "paragraph", text: "If you lack time or expertise, it is worth considering partial or full outsourcing." },
            { type: "paragraph", text: "The fifth question helps you assess the economic value of your own time." },
          ],
        },
        {
          h: "Frequently asked questions",
          p: [],
          blocks: [
            {
              type: "faq",
              items: [
                {
                  question: "Does a small GmbH need an external accountant?",
                  answer: "No. Even a small GmbH may keep its accounts in-house. However, the statutory requirements apply regardless of the company's size.",
                },
                {
                  question: "Can I outsource only the annual accounts?",
                  answer: "Yes. Individual tasks such as annual accounts, VAT or payroll can be outsourced separately. Complete documents and a clear division of tasks are essential.",
                },
                {
                  question: "Is digital bookkeeping automatically cheaper?",
                  answer: "Not necessarily. Digital processes can simplify cooperation. How much work is actually saved depends on your organisation and the agreed services.",
                },
                {
                  question: "Who is responsible when bookkeeping is outsourced?",
                  answer: "The management remains responsible for ensuring that bookkeeping is properly organised. Tasks, checks and responsibilities should therefore be clearly agreed with the external accounting firm.",
                },
              ],
            },
          ],
        },
        {
          h: "Bookkeeping with StartSaldo – as much support as you need",
          p: [],
          blocks: [
            { type: "paragraph", text: "StartSaldo supports Swiss SMEs, GmbHs and start-ups with ongoing financial accounting, payroll administration, VAT and annual accounts." },
            { type: "paragraph", text: "We combine personal support with digitally organised cooperation." },
            { type: "paragraph", text: "You do not necessarily need to outsource your entire bookkeeping. Together, we clarify which tasks you would like to carry out yourself and where we can lighten your workload." },
            { type: "paragraph", text: "**Are you unsure which solution makes sense for your company?**" },
            { type: "paragraph", text: "In a free initial consultation, we discuss your current bookkeeping organisation and the options for working together." },
            { type: "cta", label: "Book a free initial consultation with StartSaldo", to: "/termin" },
          ],
        },
        {
          h: "Sources",
          p: [],
          blocks: [
            { type: "paragraph", text: "[SECO SME Portal – outsource bookkeeping or do it yourself? (German)](https://www.kmu.admin.ch/de/buchhaltung-auslagern-oder-selbst-fuehren)" },
            { type: "paragraph", text: "[SECO SME Portal – bookkeeping obligations for commercial companies (German)](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften)" },
            { type: "paragraph", text: "[Federal Tax Administration – electronic commerce and record retention (German)](https://www.estv.admin.ch/de/mwst-elektronischer-geschaeftsverkehr)" },
            { type: "paragraph", text: "*Last updated: November 2026. This article provides general information and does not replace individual accounting, tax or legal advice.*" },
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
        h: "Die wichtigsten Kostenfaktoren",
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
        h: "Buchführung ohne externen Treuhänder",
        p: [],
        blocks: [
          { type: "paragraph", text: "Nein. Eine Schweizer GmbH ist gemäss Art. 957 ff. Obligationenrecht zur ordnungsgemässen Buchführung und Rechnungslegung verpflichtet. Sie muss dafür aber keinen externen Treuhänder beauftragen." },
          { type: "paragraph", text: "Die Buchhaltung kann intern geführt, vollständig ausgelagert oder zwischen Unternehmen und Treuhandbüro aufgeteilt werden." },
          { type: "paragraph", text: "Ob sich das Selbermachen lohnt, hängt insbesondere von den vorhandenen Fachkenntnissen und der verfügbaren Zeit ab." },
          { type: "paragraph", text: "*Quelle: [SECO KMU-Portal – Buchhaltungspflicht für Handelsgesellschaften](https://www.kmu.admin.ch/de/buchhaltungspflicht-fuer-handelsgesellschaften).*" },
        ],
      },
      {
        h: "Pauschalpreis und Stundenhonorar",
        p: [],
        blocks: [
          { type: "paragraph", text: "Beide Modelle haben Vorteile." },
          { type: "paragraph", text: "Bei einer **Pauschale** lassen sich wiederkehrende Kosten besser planen. Wichtig ist, welche Leistungen tatsächlich eingeschlossen sind." },
          { type: "paragraph", text: "Bei einer **Abrechnung nach Aufwand** bezahlen Sie die geleisteten Stunden. Dafür können die Gesamtkosten stärker schwanken." },
          { type: "paragraph", text: "Manche Treuhandbüros kombinieren beide Modelle: Wiederkehrende Arbeiten werden pauschal verrechnet, ausserordentliche Aufgaben nach Stundenaufwand." },
        ],
      },
      {
        h: "Treuhandofferten richtig vergleichen",
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
                question: "Was beeinflusst die Kosten eines Treuhänders?",
                answer: "Entscheidend sind vor allem die Anzahl der Belege, der Umfang der Dienstleistungen, Mitarbeitende und Lohnbuchhaltung sowie die Qualität Ihrer Buchhaltungsunterlagen. Auch internationale Geschäftsfälle oder Kryptowährungen können zusätzlichen Aufwand verursachen.",
              },
              {
                question: "Muss eine GmbH einen Treuhänder beauftragen?",
                answer: "Nein. Eine Schweizer GmbH muss keinen externen Treuhänder beauftragen. Sie ist jedoch gemäss Art. 957 ff. Obligationenrecht zur ordnungsgemässen Buchführung und Rechnungslegung verpflichtet – unabhängig davon, ob sie die Buchhaltung intern führt oder auslagert.",
              },
              {
                question: "Pauschalpreis oder Stundenhonorar?",
                answer: "Beide Modelle haben Vorteile: Eine Pauschale erleichtert die Planung wiederkehrender Kosten, während bei einer Abrechnung nach Aufwand die geleisteten Stunden verrechnet werden. Manche Treuhandbüros kombinieren beide Modelle.",
              },
              {
                question: "Worauf sollten Sie bei einer Treuhandofferte achten?",
                answer: "Klären Sie, welche Leistungen enthalten sind – insbesondere laufende Finanzbuchhaltung, Jahresabschluss, Steuererklärung, MWST und Lohnbuchhaltung. Fragen Sie auch nach Software, Einrichtung, Datenübernahme und möglichen Zusatzkosten.",
              },
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
