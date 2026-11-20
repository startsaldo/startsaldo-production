import { createFileRoute } from "@tanstack/react-router";
import { RatgeberIndex } from "@/components/ratgeber-page";
import { SITE } from "@/components/service-pages";

const title = "Ratgeber Buchhaltung, MWST & Gründung | StartSaldo";
const desc = "Fachbeiträge für Schweizer KMU und Start-ups: Gründung, Buchhaltung, Lohn und Mehrwertsteuer verständlich erklärt.";

export const Route = createFileRoute("/ratgeber/")({
  head: () => ({
    meta: [
      { title }, { name: "description", content: desc },
      { property: "og:title", content: title }, { property: "og:description", content: desc },
      { property: "og:type", content: "website" }, { property: "og:url", content: SITE + "/ratgeber" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE + "/ratgeber" }],
  }),
  component: RatgeberIndex,
});
