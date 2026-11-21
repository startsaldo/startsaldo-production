import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { articleBySlug, articlesForLang, localize } from "@/components/ratgeber";

const slug = "treuhaender-kosten-gmbh-schweiz";
const article = articleBySlug(slug);
if (!article) throw new Error("Freigegebener Treuhandkosten-Artikel fehlt");

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
