/** Ratgeber (blog) articles. Add an article by adding an entry here; routes, sitemap and llms.txt list it. */
export type Article = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  date: string; // ISO
  sections: { h: string; p: string[] }[];
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
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
