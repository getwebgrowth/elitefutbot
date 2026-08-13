import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGenieData } from "@/data/competitors/futgenie";

export const metadata: Metadata = {
  title: "FUTGenie vs Elite FUT SNIPER – AI FC 26 & FC 27 FUT Trading Comparison",
  description: "FUTGenie AI recommendations vs Elite FUT SNIPER's 20ms automated FC 26 & FC 27 sniping and AI SBC solving. See why automated execution beats AI advice alone.",
  alternates: { canonical: "https://elitefutbot.com/futgenie-vs-elitefutbot" },
  openGraph: {
    title: "FUTGenie vs Elite FUT SNIPER – AI FC 26 & FC 27 Comparison",
    description: "AI squad advisor vs automated 20ms sniper. Elite executes while FUTGenie only advises.",
    url: "https://elitefutbot.com/futgenie-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTGenie vs Elite FUT SNIPER",
    description: "AI advice platform vs automated FC 26 & FC 27 sniping bot.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGenieData} />;
}
