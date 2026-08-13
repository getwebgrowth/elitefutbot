import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMasterData } from "@/data/competitors/futmaster";

export const metadata: Metadata = {
  title: "FUT Master vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT Master vs Elite FUT SNIPER. Cloud latency vs 20ms local execution, credential sharing vs zero password required. Full side-by-side breakdown.",
  alternates: { canonical: "https://elitefutbot.com/futmaster-vs-elitefutbot" },
  openGraph: {
    title: "FUT Master vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Master vs Elite FUT SNIPER. Cloud latency vs 20ms local execution, credential sharing vs zero password required. Full side-by-side breakdown.",
    url: "https://elitefutbot.com/futmaster-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Master vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Master vs Elite FUT SNIPER. Cloud latency vs 20ms local execution, credential sharing vs zero password required. Full side-by-side breakdown.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMasterData} />;
}
