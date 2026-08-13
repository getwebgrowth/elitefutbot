import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMakerData } from "@/data/competitors/futmaker";

export const metadata: Metadata = {
  title: "FUTMaker vs Elite FUT SNIPER – FC 26 & FC 27 Coin Farming Bot Comparison",
  description: "FUTMaker vs Elite FUT SNIPER. Why does a local Chrome extension beat FUTMaker's cloud coin farming for FC 26 & FC 27? Compare speed, safety, AI SBC solver.",
  alternates: { canonical: "https://elitefutbot.com/futmaker-vs-elitefutbot" },
  openGraph: {
    title: "FUTMaker vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "Cloud coin farming vs local 20ms sniping. Elite keeps 100% of your coins.",
    url: "https://elitefutbot.com/futmaker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTMaker vs Elite FUT SNIPER",
    description: "FUTMaker takes your coins and your password. Elite takes neither.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMakerData} />;
}
