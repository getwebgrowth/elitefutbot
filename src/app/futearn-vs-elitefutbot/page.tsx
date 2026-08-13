import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futEarnData } from "@/data/competitors/futearn";

export const metadata: Metadata = {
  title: "FutEarn vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FutEarn vs Elite FUT SNIPER. FutEarn uses cloud servers requiring your EA password. Elite FUT SNIPER runs 100% locally at 20ms with zero credential sharing.",
  alternates: { canonical: "https://elitefutbot.com/futearn-vs-elitefutbot" },
  openGraph: {
    title: "FutEarn vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FutEarn vs Elite FUT SNIPER. FutEarn uses cloud servers requiring your EA password. Elite FUT SNIPER runs 100% locally at 20ms with zero credential sharing.",
    url: "https://elitefutbot.com/futearn-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutEarn vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FutEarn vs Elite FUT SNIPER. FutEarn uses cloud servers requiring your EA password. Elite FUT SNIPER runs 100% locally at 20ms with zero credential sharing.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futEarnData} />;
}
