import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBotData } from "@/data/competitors/futsnipingbot";

export const metadata: Metadata = {
  title: "FUT Sniping Bot vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT Sniping Bot vs Elite FUT SNIPER. See why local execution, sub-20ms speed, and a native AI SBC Solver make Elite FUT SNIPER the superior choice.",
  alternates: { canonical: "https://elitefutbot.com/futsnipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniping Bot vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Sniping Bot vs Elite FUT SNIPER. See why local execution, sub-20ms speed, and a native AI SBC Solver make Elite FUT SNIPER the superior choice.",
    url: "https://elitefutbot.com/futsnipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Sniping Bot vs Elite FUT SNIPER. See why local execution, sub-20ms speed, and a native AI SBC Solver make Elite FUT SNIPER the superior choice.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBotData} />;
}
