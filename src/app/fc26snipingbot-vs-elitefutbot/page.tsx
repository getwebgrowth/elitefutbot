import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fc26SnipingBotData } from "@/data/competitors/fc26snipingbot";

export const metadata: Metadata = {
  title: "FC26 Sniping Bot vs Elite – FC 27 Comparison",
  description:
    "Compare FC26 Sniping Bot vs Elite FUT SNIPER. Get forward-compatible 20ms in-browser sniping & AI SBC solving for both FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/fc26snipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FC26 Sniping Bot vs Elite – FC 27 Comparison",
    description:
      "Compare FC26 Sniping Bot vs Elite FUT SNIPER. Get forward-compatible 20ms in-browser sniping & AI SBC solving for both FC 26 & FC 27.",
    url: "https://elitefutbot.com/fc26snipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC26 Sniping Bot vs Elite – FC 27 Comparison",
    description:
      "Compare FC26 Sniping Bot vs Elite FUT SNIPER. Get forward-compatible 20ms in-browser sniping & AI SBC solving for both FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fc26SnipingBotData} />;
}
