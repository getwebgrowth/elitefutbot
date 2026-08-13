import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotClubData } from "@/data/competitors/futbotclub";

export const metadata: Metadata = {
  title: "FUTBot Club vs Elite FUT SNIPER – Cloud Community Bot vs Local FC 26 & FC 27",
  description: "FUTBot Club cloud subscription vs Elite FUT SNIPER local Chrome extension. Compare community features, ban risk, FC 27 readiness, and 20ms sniping automation.",
  alternates: { canonical: "https://elitefutbot.com/futbotclub-vs-elitefutbot" },
  openGraph: {
    title: "FUTBot Club vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "Community cloud bot vs local 20ms auto-sniper. Elite has zero ban risk and world-first FC 27 support.",
    url: "https://elitefutbot.com/futbotclub-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTBot Club vs Elite FUT SNIPER",
    description: "Community cloud FUT bot vs world-first local FC 26 & FC 27 sniper.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotClubData} />;
}
