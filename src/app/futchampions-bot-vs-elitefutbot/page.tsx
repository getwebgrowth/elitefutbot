import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futChampionsBotData } from "@/data/competitors/futchampions-bot";

export const metadata: Metadata = {
  title: "FUT Champions Bot vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT Champions Bot vs Elite FUT SNIPER. Full transfer market automation, AI SBC solver, and 20ms local sniping vs cloud-based champion reward tools.",
  alternates: { canonical: "https://elitefutbot.com/futchampions-bot-vs-elitefutbot" },
  openGraph: {
    title: "FUT Champions Bot vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Champions Bot vs Elite FUT SNIPER. Full transfer market automation, AI SBC solver, and 20ms local sniping vs cloud-based champion reward tools.",
    url: "https://elitefutbot.com/futchampions-bot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Champions Bot vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Champions Bot vs Elite FUT SNIPER. Full transfer market automation, AI SBC solver, and 20ms local sniping vs cloud-based champion reward tools.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futChampionsBotData} />;
}
