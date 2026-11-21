import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { regionOrder, navOrder, serviceHead, serviceJsonLd, servicePaths, services } from "@/components/service-pages";

describe("Additional regions", () => {
  for (const [slug, area] of [["zuerich", "Kanton Zürich"], ["luzern", "Kanton Luzern"]] as const) {
    it(`${slug} serves the canton digitally from the existing Rothenthurm address`, () => {
      const schema = JSON.parse(serviceJsonLd(slug, "de").children);
      assert.equal(schema["@graph"][0].areaServed.name, area);
      assert.equal(schema["@graph"][0].provider.address.streetAddress, "Schoosstrasse 3");
      assert.equal(schema["@graph"][0].provider.address.addressLocality, "Rothenthurm");
      assert.ok(regionOrder.includes(slug));
      assert.equal(navOrder.includes(slug), false);
    });

    it(`${slug} uses Proton without the previously removed software providers`, () => {
      for (const lang of ["de", "en"] as const) {
        const text = JSON.stringify(services[slug][lang]);
        assert.ok(text.includes("Proton"));
        assert.equal(/bexio|banana/i.test(text), false);
      }
    });

    it(`${slug} has self-referencing canonical and reciprocal language links`, () => {
      for (const lang of ["de", "en"] as const) {
        const head = serviceHead(slug, lang);
        const other = lang === "de" ? "en" : "de";
        assert.equal(head.links.find((link) => link.rel === "canonical")?.href, "https://www.startsaldo.ch" + servicePaths[slug][lang]);
        assert.equal(head.links.find((link) => "hrefLang" in link && link.hrefLang === other)?.href, "https://www.startsaldo.ch" + servicePaths[slug][other]);
      }
    });
  }
});