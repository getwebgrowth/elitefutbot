import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { easySbcData } from "@/data/competitors/easysbc";

export const metadata: Metadata = {
  title: "EasySBC vs Elite FUT SNIPER – FC 27 AI SBC Comparison",
  description:
    "Compare EasySBC vs Elite FUT SNIPER. Upgrade from manual blueprints to 1-click AI SBC solving with club untradeables & 20ms auto-buying for FC 26 & 27.",
  alternates: { canonical: "https://elitefutbot.com/easysbc-vs-elitefutbot" },
  openGraph: {
    title: "EasySBC vs Elite FUT SNIPER – FC 27 AI SBC Comparison",
    description:
      "Compare EasySBC vs Elite FUT SNIPER. Upgrade from manual blueprints to 1-click AI SBC solving with club untradeables & 20ms auto-buying for FC 26 & 27.",
    url: "https://elitefutbot.com/easysbc-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasySBC vs Elite FUT SNIPER – FC 27 AI SBC Comparison",
    description:
      "Compare EasySBC vs Elite FUT SNIPER. Upgrade from manual blueprints to 1-click AI SBC solving with club untradeables & 20ms auto-buying for FC 26 & 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={easySbcData} />;
}
