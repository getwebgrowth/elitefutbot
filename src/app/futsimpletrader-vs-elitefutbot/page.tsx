import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSimpleTraderData } from "@/data/competitors/futsimpletrader";

export const metadata: Metadata = {
  title: "FUT Simple Trader vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT Simple Trader vs Elite FUT SNIPER. Manual trading tools can't compete with 20ms automated local sniping. See the full feature, speed, and safety breakdown.",
  alternates: { canonical: "https://elitefutbot.com/futsimpletrader-vs-elitefutbot" },
  openGraph: {
    title: "FUT Simple Trader vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Simple Trader vs Elite FUT SNIPER. Manual trading tools can't compete with 20ms automated local sniping. See the full feature, speed, and safety breakdown.",
    url: "https://elitefutbot.com/futsimpletrader-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Simple Trader vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Simple Trader vs Elite FUT SNIPER. Manual trading tools can't compete with 20ms automated local sniping. See the full feature, speed, and safety breakdown.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSimpleTraderData} />;
}
