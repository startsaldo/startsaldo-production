import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { articleBySlug, articles, articlesForLang, localize } from "@/components/ratgeber";

const slug = "treuhaender-kosten-gmbh-schweiz";
const article = articleBySlug(slug);
if (!article) throw new Error("Freigegebener Treuhandkosten-Artikel fehlt");

const outsourcingSlug = "buchhaltung-selber-machen-oder-auslagern";
const outsourcingArticle = articleBySlug(outsourcingSlug);
if (!outsourcingArticle) throw new Error("Ratgeber zur Buchhaltungs-Auslagerung fehlt");

describe("Ratgeber zur Buchhaltungs-Auslagerung", () => {
  it("vergleicht alle drei Modelle in drei Tabellenspalten", () => {
    const table = outsourcingArticle.sections.flatMap((s) => s.blocks ?? []).find((b) => b.type === "table");
    assert.equal(table?.type, "table");
    if (table?.type !== "table") return;
    assert.equal(table.headers.length, 3);
    assert.equal(table.rows.length, 3);
    assert.ok(table.rows.every((row) => row.length === 3));
  });

  it("enthält fünf Entscheidungsfragen", () => {
    const lists = outsourcingArticle.sections.flatMap((s) => s.blocks ?? []).filter((b) => b.type === "list");
    assert.ok(lists.some((list) => list.items.length === 5));
  });

  it("ist auf Deutsch und Englisch mit derselben Tabellenstruktur verfügbar", () => {
    assert.equal(articlesForLang("de").some((a) => a.slug === outsourcingSlug), true);
    assert.equal(articlesForLang("en").some((a) => a.slug === outsourcingSlug), true);
    const english = articleBySlug(outsourcingSlug, "en");
    assert.ok(english);
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
    const localized = localize(article, "de");
    assert.equal(localized.slug, "treuhaender-kosten-gmbh-schweiz");
    assert.equal(localized.seoTitle, "Treuhänder-Kosten für GmbHs in der Schweiz – StartSaldo");
    assert.equal(localized.metaDescription, "Was kostet ein Treuhänder für eine GmbH in der Schweiz? Aktuelle Richtpreise, Kostenfaktoren und Tipps für die Wahl des passenden Treuhänders.");
  });

  it("enthält die fünf freigegebenen Richtpreise", () => {
    const table = article.sections.flatMap((s) => s.blocks ?? []).find((b) => b.type === "table");
    assert.equal(table?.type, "table");
    if (table?.type !== "table") return;
    assert.equal(table.rows.length, 5);
    assert.deepEqual(table.rows[0], ["Kleine GmbH, laufende Buchhaltung inklusive Jahresabschluss", "CHF 1'500–3'800 pro Jahr"]);
    assert.deepEqual(table.rows[1], ["Durchschnitt im untersuchten Beispiel", "CHF 2'400 pro Jahr"]);
  });

  it("bündelt sämtliche Fragen im aufklappbaren FAQ-Bereich", () => {
    assert.equal(article.sections.some((section) => section.h.includes("?")), false);
    const faq = article.sections.flatMap((s) => s.blocks ?? []).find((b) => b.type === "faq");
    assert.equal(faq?.type, "faq");
    if (faq?.type !== "faq") return;
    assert.equal(faq.items.length, 8);
    assert.equal(new Set(faq.items.map((item) => item.question)).size, 8);
  });

  it("verwendet Proton und keine entfernten Software-Namen", () => {
    const text = JSON.stringify(article);
    assert.ok(text.includes("Ihre Unterlagen werden bei Proton gespeichert."));
    for (const removedSoftware of ["Bana" + "na", "Bex" + "io"]) assert.ok(!text.includes(removedSoftware));
  });

  it("erscheint nur auf Deutsch, solange keine englische Freigabe vorliegt", () => {
    assert.equal(articlesForLang("de").some((a) => a.slug === slug), true);
    assert.equal(articlesForLang("en").some((a) => a.slug === slug), false);
    assert.equal(articleBySlug(slug, "en"), undefined);
  });
});
