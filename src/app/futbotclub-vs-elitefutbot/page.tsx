import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotClubData } from "@/data/competitors/futbotclub";

export const metadata: Metadata = {
  title: "FUT Bot Club vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUT Bot Club vs Elite FUT SNIPER. Avoid centralized server crashes with 100% local 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
  alternates: { canonical: "https://elitefutbot.com/futbotclub-vs-elitefutbot" },
  openGraph: {
    title: "FUT Bot Club vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Bot Club vs Elite FUT SNIPER. Avoid centralized server crashes with 100% local 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
    url: "https://elitefutbot.com/futbotclub-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Bot Club vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Bot Club vs Elite FUT SNIPER. Avoid centralized server crashes with 100% local 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotClubData} />;
}
