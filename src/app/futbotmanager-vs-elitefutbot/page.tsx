import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotManagerData } from "@/data/competitors/futbotmanager";

export const metadata: Metadata = {
  title: "FutBotManager vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FutBotManager vs Elite FUT SNIPER. Ditch heavy desktop software for lightweight 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futbotmanager-vs-elitefutbot" },
  openGraph: {
    title: "FutBotManager vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FutBotManager vs Elite FUT SNIPER. Ditch heavy desktop software for lightweight 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futbotmanager-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutBotManager vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FutBotManager vs Elite FUT SNIPER. Ditch heavy desktop software for lightweight 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotManagerData} />;
}
