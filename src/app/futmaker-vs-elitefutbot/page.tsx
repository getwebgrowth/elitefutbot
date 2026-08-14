import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMakerData } from "@/data/competitors/futmaker";

export const metadata: Metadata = {
  title: "FUT Maker vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUT Maker vs Elite FUT SNIPER. Ditch heavy 950MB desktop software for a lightweight 20ms Chrome extension with AI SBC solving for FC 26 & 27.",
  alternates: { canonical: "https://elitefutbot.com/futmaker-vs-elitefutbot" },
  openGraph: {
    title: "FUT Maker vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Maker vs Elite FUT SNIPER. Ditch heavy 950MB desktop software for a lightweight 20ms Chrome extension with AI SBC solving for FC 26 & 27.",
    url: "https://elitefutbot.com/futmaker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Maker vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Maker vs Elite FUT SNIPER. Ditch heavy 950MB desktop software for a lightweight 20ms Chrome extension with AI SBC solving for FC 26 & 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMakerData} />;
}
