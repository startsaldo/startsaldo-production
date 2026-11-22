import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { articleBySlug, articles, articlesForLang, localize, type ArticleContent } from "@/components/ratgeber";

const priceSlug = "treuhaender-kosten-gmbh-schweiz";
const priceArticle = articleBySlug(priceSlug);
if (!priceArticle) throw new Error("Freigegebener Treuhandkosten-Artikel fehlt");

const outsourcingSlug = "buchhaltung-selber-machen-oder-auslagern";
const outsourcingArticle = articleBySlug(outsourcingSlug);
if (!outsourcingArticle) throw new Error("Ratgeber zur Buchhaltungs-Auslagerung fehlt");

const contents: { slug: string; lang: "de" | "en"; content: ArticleContent }[] = articles.flatMap((article) => [
  { slug: article.slug, lang: "de" as const, content: article },
  ...(article.en ? [{ slug: article.slug, lang: "en" as const, content: article.en }] : []),
]);

describe("Einheitlicher Aufbau aller Ratgeber", () => {
  it("enthält fünf deutsche und vier englische Fassungen", () => {
    assert.equal(articlesForLang("de").length, 5);
    assert.equal(articlesForLang("en").length, 4);
  });

  it("beginnt jede Fassung mit genau einer Kurzfassung", () => {
    for (const { slug, lang, content } of contents) {
      assert.equal(content.lead.length, 1, `${slug}/${lang}: Kurzfassung fehlt`);
      assert.equal(content.sections.some((section) => ["Kurz gesagt", "In short"].includes(section.h)), false, `${slug}/${lang}: doppelte Kurzfassung`);
    }
  });

  it("endet jede Fassung mit StartSaldo-Unterstützung und Quellen", () => {
    for (const { slug, lang, content } of contents) {
      const support = content.sections.at(-2);
      const sources = content.sections.at(-1);
      assert.ok(support?.blocks?.some((block) => block.type === "cta"), `${slug}/${lang}: Abschluss-CTA fehlt`);
      assert.ok(sources && ["Quellen und Stand", "Sources and last updated"].includes(sources.h), `${slug}/${lang}: Quellenabschluss fehlt`);
      assert.ok(sources?.blocks?.some((block) => block.type === "paragraph" && (block.text.startsWith("*Stand:") || block.text.startsWith("*Last updated:"))), `${slug}/${lang}: Stand und Hinweis fehlen`);
    }
  });

  it("hat bei allen Tabellen zu jeder Spalte genau einen Zellwert", () => {
    for (const { slug, lang, content } of contents) {
      for (const block of content.sections.flatMap((section) => section.blocks ?? [])) {
        if (block.type !== "table") continue;
        assert.ok(block.rows.length > 0, `${slug}/${lang}: leere Tabelle`);
        assert.ok(block.rows.every((row) => row.length === block.headers.length), `${slug}/${lang}: unvollständige Tabellenzeile`);
      }
    }
  });
});

describe("Ratgeber zur Buchhaltungs-Auslagerung", () => {
  it("vergleicht alle drei Modelle in drei Tabellenspalten", () => {
    const table = outsourcingArticle.sections.flatMap((s) => s.blocks ?? []).find((b) => b.type === "table");
    assert.equal(table?.type, "table");
    if (table?.type !== "table") return;
    assert.equal(table.headers.length, 3);
    assert.deepEqual(table.headers, ["Modell", "Vorteile", "Zu beachten"]);
    assert.equal(table.rows.length, 3);
    assert.ok(table.rows.every((row) => row.length === 3));
  });

  it("enthält fünf nummerierte Entscheidungspunkte", () => {
    const list = outsourcingArticle.sections.flatMap((s) => s.blocks ?? []).find((b) => b.type === "list" && b.variant === "numbered");
    assert.equal(list?.type, "list");
    if (list?.type !== "list") return;
    assert.equal(list.items.length, 5);
  });

  it("hat auf Deutsch und Englisch dieselbe Vergleichsstruktur", () => {
    const english = articleBySlug(outsourcingSlug, "en");
    assert.ok(english?.en);
    const localized = localize(english, "en");
    const table = localized.sections.flatMap((s) => s.blocks ?? []).find((b) => b.type === "table");
    assert.equal(table?.type, "table");
    if (table?.type !== "table") return;
    assert.equal(table.headers.length, 3);
    assert.equal(table.rows.length, 3);
  });
});

describe("Interne Ratgeber-Links", () => {
  it("verweisen ausschliesslich auf vorhandene Beiträge", () => {
    const slugs = new Set(articles.map((article) => article.slug));
    for (const article of articles) {
      for (const match of JSON.stringify(article).matchAll(/\/ratgeber\/([a-z0-9-]+)/g)) {
        assert.ok(slugs.has(match[1] ?? ""), `Unbekannter Ratgeber-Link in ${article.slug}: ${match[1] ?? ""}`);
      }
    }
  });
});

describe("Treuhandkosten-Artikel", () => {
  it("verwendet die freigegebene URL und SEO-Angaben", () => {
    const localized = localize(priceArticle, "de");
    assert.equal(localized.slug, priceSlug);
    assert.equal(localized.seoTitle, "Treuhänder-Kosten für GmbHs in der Schweiz – StartSaldo");
    assert.equal(localized.metaDescription, "Was kostet ein Treuhänder für eine GmbH in der Schweiz? Aktuelle Richtpreise, Kostenfaktoren und Tipps für die Wahl des passenden Treuhänders.");
  });

  it("enthält die fünf freigegebenen Richtpreise", () => {
    const table = priceArticle.sections.flatMap((s) => s.blocks ?? []).find((b) => b.type === "table");
    assert.equal(table?.type, "table");
    if (table?.type !== "table") return;
    assert.equal(table.rows.length, 5);
    assert.deepEqual(table.rows[0], ["Kleine GmbH: Buchhaltung inklusive Jahresabschluss und weiterer definierter Leistungen", "CHF 1'500–3'800 pro Jahr"]);
    assert.deepEqual(table.rows[1], ["Durchschnitt im untersuchten Beispiel", "CHF 2'400 pro Jahr"]);
  });

  it("enthält keine separaten Frage-Zwischentitel ausserhalb eines FAQ-Bereichs", () => {
    assert.equal(priceArticle.sections.some((section) => section.h.includes("?")), false);
  });

  it("erscheint nur auf Deutsch, solange keine englische Freigabe vorliegt", () => {
    assert.equal(articlesForLang("de").some((a) => a.slug === priceSlug), true);
    assert.equal(articlesForLang("en").some((a) => a.slug === priceSlug), false);
    assert.equal(articleBySlug(priceSlug, "en"), undefined);
  });
});

describe("Datenspeicherung und Sprache", () => {
  it("beschreibt Proton nur beim Aufbewahrungsratgeber und nennt keine entfernten Software-Namen", () => {
    const retention = articleBySlug("aufbewahrungspflicht-geschaeftsunterlagen");
    assert.ok(retention);
    assert.ok(JSON.stringify(retention).includes("Proton, einen Schweizer Anbieter für datenschutzorientierte digitale Dienste"));
    for (const removedSoftware of ["Bana" + "na", "Bex" + "io"]) assert.ok(!JSON.stringify(articles).includes(removedSoftware));
  });

  it("verwendet in deutschen Texten kein «ß»", () => {
    for (const article of articles) assert.ok(!JSON.stringify({ ...article, en: undefined }).includes("ß"), article.slug);
  });
});
