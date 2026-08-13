import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { easySbcData } from "@/data/competitors/easysbc";

export const metadata: Metadata = {
  title: "EasySBC vs Elite FUT SNIPER – AI SBC Solver & FC 26 FC 27 Sniping Bot",
  description: "EasySBC manual SBC guides vs Elite FUT SNIPER's automated AI SBC Solver for FC 26 & FC 27. Elite auto-buys squad players and snipes at 20ms. See full comparison.",
  alternates: { canonical: "https://elitefutbot.com/easysbc-vs-elitefutbot" },
  openGraph: {
    title: "EasySBC vs Elite FUT SNIPER – AI SBC Solver Comparison for FC 26 & FC 27",
    description: "Manual SBC guides vs automated AI SBC solving and sniping. Elite executes, EasySBC only advises.",
    url: "https://elitefutbot.com/easysbc-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasySBC vs Elite FUT SNIPER – AI SBC Comparison",
    description: "EasySBC tells you what to do. Elite FUT SNIPER does it automatically.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={easySbcData} />;
}
