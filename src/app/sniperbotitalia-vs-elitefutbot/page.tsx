import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { sniperBotItaliaData } from "@/data/competitors/sniperbotitalia";

export const metadata: Metadata = {
  title: "SniperBot Italia vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare SniperBot Italia vs Elite FUT SNIPER. Experience universal multi-language 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/sniperbotitalia-vs-elitefutbot" },
  openGraph: {
    title: "SniperBot Italia vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare SniperBot Italia vs Elite FUT SNIPER. Experience universal multi-language 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/sniperbotitalia-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SniperBot Italia vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare SniperBot Italia vs Elite FUT SNIPER. Experience universal multi-language 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={sniperBotItaliaData} />;
}
