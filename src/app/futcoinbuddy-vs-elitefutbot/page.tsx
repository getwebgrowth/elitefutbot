import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCoinBuddyData } from "@/data/competitors/futcoinbuddy";

export const metadata: Metadata = {
  title: "Futcoinbuddy vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare Futcoinbuddy vs Elite FUT SNIPER. Cloud server-side execution vs local sub-20ms Chrome extension speed.",
  alternates: { canonical: "https://elitefutbot.com/futcoinbuddy-vs-elitefutbot" },
  openGraph: {
    title: "Futcoinbuddy vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare Futcoinbuddy vs Elite FUT SNIPER. Cloud server-side execution vs local sub-20ms Chrome extension speed.",
    url: "https://elitefutbot.com/futcoinbuddy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futcoinbuddy vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare Futcoinbuddy vs Elite FUT SNIPER. Cloud server-side execution vs local sub-20ms Chrome extension speed.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCoinBuddyData} />;
}
