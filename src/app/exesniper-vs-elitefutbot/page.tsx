import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { exeSniperData } from "@/data/competitors/exesniper";

export const metadata: Metadata = {
  title: "ExeSniper vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare ExeSniper vs Elite FUT SNIPER. Avoid dangerous .exe files with a sandboxed 20ms Chrome extension and AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/exesniper-vs-elitefutbot" },
  openGraph: {
    title: "ExeSniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare ExeSniper vs Elite FUT SNIPER. Avoid dangerous .exe files with a sandboxed 20ms Chrome extension and AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/exesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExeSniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare ExeSniper vs Elite FUT SNIPER. Avoid dangerous .exe files with a sandboxed 20ms Chrome extension and AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={exeSniperData} />;
}
