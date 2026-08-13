import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futRichData } from "@/data/competitors/futrich";

export const metadata: Metadata = {
  title: "FUTRich vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUTRich vs Elite FUT SNIPER. Standard Chrome extension with trial vs flat-fee 20ms Side Panel automation and solver.",
  alternates: { canonical: "https://elitefutbot.com/futrich-vs-elitefutbot" },
  openGraph: {
    title: "FUTRich vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUTRich vs Elite FUT SNIPER. Standard Chrome extension with trial vs flat-fee 20ms Side Panel automation and solver.",
    url: "https://elitefutbot.com/futrich-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTRich vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUTRich vs Elite FUT SNIPER. Standard Chrome extension with trial vs flat-fee 20ms Side Panel automation and solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futRichData} />;
}
