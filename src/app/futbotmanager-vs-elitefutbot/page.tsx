import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotManagerData } from "@/data/competitors/futbotmanager";

export const metadata: Metadata = {
  title: "FutBotManager vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FutBotManager vs Elite FUT SNIPER. Side-by-side feature breakdown of Pro Windows client vs native Chrome Side Panel extension.",
  alternates: { canonical: "https://elitefutbot.com/futbotmanager-vs-elitefutbot" },
  openGraph: {
    title: "FutBotManager vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FutBotManager vs Elite FUT SNIPER. Side-by-side feature breakdown of Pro Windows client vs native Chrome Side Panel extension.",
    url: "https://elitefutbot.com/futbotmanager-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutBotManager vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FutBotManager vs Elite FUT SNIPER. Side-by-side feature breakdown of Pro Windows client vs native Chrome Side Panel extension.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotManagerData} />;
}
