import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { bakersBotData } from "@/data/competitors/bakers-bot";

export const metadata: Metadata = {
  title: "Baker's Bot vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare Baker's Bot vs Elite FUT SNIPER. Built by the same core developer — see why local execution, 20ms speed, and zero password sharing make Elite FUT SNIPER the clear upgrade.",
  alternates: { canonical: "https://elitefutbot.com/bakers-bot-vs-elitefutbot" },
  openGraph: {
    title: "Baker's Bot vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare Baker's Bot vs Elite FUT SNIPER. Built by the same core developer — see why local execution, 20ms speed, and zero password sharing make Elite FUT SNIPER the clear upgrade.",
    url: "https://elitefutbot.com/bakers-bot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baker's Bot vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare Baker's Bot vs Elite FUT SNIPER. Built by the same core developer — see why local execution, 20ms speed, and zero password sharing make Elite FUT SNIPER the clear upgrade.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={bakersBotData} />;
}
