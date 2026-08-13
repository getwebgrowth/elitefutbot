import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { palEToolsData } from "@/data/competitors/paletools";

export const metadata: Metadata = {
  title: "Pale.Tools vs Elite FUT SNIPER – FC 26 & FC 27 FUT Extension Comparison",
  description: "Pale.Tools FUT utility extension vs Elite FUT SNIPER's auto-sniper and AI SBC solver. Compare features for FC 26 & FC 27 — UI tools vs automated trading profit.",
  alternates: { canonical: "https://elitefutbot.com/paletools-vs-elitefutbot" },
  openGraph: {
    title: "Pale.Tools vs Elite FUT SNIPER – FC 26 & FC 27 FUT Extension Comparison",
    description: "UI shortcuts vs 20ms automated sniping with AI SBC solving for FC 26 & FC 27.",
    url: "https://elitefutbot.com/paletools-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pale.Tools vs Elite FUT SNIPER",
    description: "FUT utility extension vs complete FC 26 & FC 27 automated trading bot.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={palEToolsData} />;
}
