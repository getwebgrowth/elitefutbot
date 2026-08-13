import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fc26SnipingBotData } from "@/data/competitors/fc26snipingbot";

export const metadata: Metadata = {
  title: "FC26SnipingBot vs Elite FUT SNIPER – FC 26 & FC 27 Sniping Bot Comparison",
  description: "FC26SnipingBot vs Elite FUT SNIPER. Elite supports both FC 26 & FC 27 natively while FC26SnipingBot has no FC 27 roadmap. Compare speed, safety, and features.",
  alternates: { canonical: "https://elitefutbot.com/fc26snipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FC26SnipingBot vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "FC 26 cloud bot vs world-first FC 26 & FC 27 local Chrome extension. Elite wins.",
    url: "https://elitefutbot.com/fc26snipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC26SnipingBot vs Elite FUT SNIPER",
    description: "Cloud FC 26 bot vs local FC 26 & FC 27 extension — Elite leads in every category.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fc26SnipingBotData} />;
}
