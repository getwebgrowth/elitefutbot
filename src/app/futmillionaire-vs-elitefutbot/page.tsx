import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMillionaireData } from "@/data/competitors/futmillionaire";

export const metadata: Metadata = {
  title: "FUTMillionaire vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUTMillionaire vs Elite FUT SNIPER. Replace legacy desktop software and $22.90/mo fees with 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
  alternates: { canonical: "https://elitefutbot.com/futmillionaire-vs-elitefutbot" },
  openGraph: {
    title: "FUTMillionaire vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUTMillionaire vs Elite FUT SNIPER. Replace legacy desktop software and $22.90/mo fees with 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
    url: "https://elitefutbot.com/futmillionaire-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTMillionaire vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUTMillionaire vs Elite FUT SNIPER. Replace legacy desktop software and $22.90/mo fees with 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMillionaireData} />;
}
