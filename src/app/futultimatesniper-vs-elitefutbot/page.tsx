import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futUltimateSniperData } from "@/data/competitors/futultimatesniper";

export const metadata: Metadata = {
  title: "FUT Ultimate Sniper vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT Ultimate Sniper vs Elite FUT SNIPER. FUS unpacked developer mode extension vs Elite's native Chrome Side Panel UI.",
  alternates: { canonical: "https://elitefutbot.com/futultimatesniper-vs-elitefutbot" },
  openGraph: {
    title: "FUT Ultimate Sniper vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Ultimate Sniper vs Elite FUT SNIPER. FUS unpacked developer mode extension vs Elite's native Chrome Side Panel UI.",
    url: "https://elitefutbot.com/futultimatesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Ultimate Sniper vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Ultimate Sniper vs Elite FUT SNIPER. FUS unpacked developer mode extension vs Elite's native Chrome Side Panel UI.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futUltimateSniperData} />;
}
