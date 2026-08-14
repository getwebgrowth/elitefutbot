import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { sniperBotItaliaData } from "@/data/competitors/sniperbotitalia";

export const metadata: Metadata = {
  title: "SniperBot Italia vs Elite FUT SNIPER – Localized Script vs Universal 20ms AI Bot",
  description:
    "Compare SniperBot Italia vs Elite FUT SNIPER. Discover why our universal multi-language architecture, 20ms direct DOM triggers, and integrated neural AI SBC solver outperform regional Telegram bot overlays.",
  alternates: { canonical: "https://elitefutbot.com/sniperbotitalia-vs-elitefutbot" },
  openGraph: {
    title: "SniperBot Italia vs Elite FUT SNIPER – Localized Script vs Universal 20ms AI Bot",
    description:
      "Compare SniperBot Italia vs Elite FUT SNIPER. Discover why our universal multi-language architecture, 20ms direct DOM triggers, and integrated neural AI SBC solver outperform regional Telegram bot overlays.",
    url: "https://elitefutbot.com/sniperbotitalia-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SniperBot Italia vs Elite FUT SNIPER – Localized Script vs Universal 20ms AI Bot",
    description:
      "Compare SniperBot Italia vs Elite FUT SNIPER. Discover why our universal multi-language architecture, 20ms direct DOM triggers, and integrated neural AI SBC solver outperform regional Telegram bot overlays.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={sniperBotItaliaData} />;
}
