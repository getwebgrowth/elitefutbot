import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futtBotData } from "@/data/competitors/futtbot";

export const metadata: Metadata = {
  title: "Futtbot vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare Futtbot vs Elite FUT SNIPER. Replace complex terminal scripts with a 1-click 20ms Chrome extension and AI SBC solving for FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futtbot-vs-elitefutbot" },
  openGraph: {
    title: "Futtbot vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Futtbot vs Elite FUT SNIPER. Replace complex terminal scripts with a 1-click 20ms Chrome extension and AI SBC solving for FC 26 & FC 27.",
    url: "https://elitefutbot.com/futtbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futtbot vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Futtbot vs Elite FUT SNIPER. Replace complex terminal scripts with a 1-click 20ms Chrome extension and AI SBC solving for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futtBotData} />;
}
