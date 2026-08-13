import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futinatorData } from "@/data/competitors/futinator";

export const metadata: Metadata = {
  title: "Futinator vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare Futinator vs Elite FUT SNIPER. Side-by-side feature, speed, and safety comparison for Ultimate Team automated sniping.",
  alternates: { canonical: "https://elitefutbot.com/futinator-vs-elitefutbot" },
  openGraph: {
    title: "Futinator vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare Futinator vs Elite FUT SNIPER. Side-by-side feature, speed, and safety comparison for Ultimate Team automated sniping.",
    url: "https://elitefutbot.com/futinator-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futinator vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare Futinator vs Elite FUT SNIPER. Side-by-side feature, speed, and safety comparison for Ultimate Team automated sniping.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futinatorData} />;
}
