import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futAiData } from "@/data/competitors/futai";

export const metadata: Metadata = {
  title: "FUT AI vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT AI vs Elite FUT SNIPER. Both use AI — but Elite FUT SNIPER processes AI locally at 20ms with no credential sharing, while FUT AI routes through cloud servers.",
  alternates: { canonical: "https://elitefutbot.com/futai-vs-elitefutbot" },
  openGraph: {
    title: "FUT AI vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT AI vs Elite FUT SNIPER. Both use AI — but Elite FUT SNIPER processes AI locally at 20ms with no credential sharing, while FUT AI routes through cloud servers.",
    url: "https://elitefutbot.com/futai-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT AI vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT AI vs Elite FUT SNIPER. Both use AI — but Elite FUT SNIPER processes AI locally at 20ms with no credential sharing, while FUT AI routes through cloud servers.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futAiData} />;
}
