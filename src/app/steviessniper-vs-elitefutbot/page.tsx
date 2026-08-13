import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { steviesSniperData } from "@/data/competitors/steviessniper";

export const metadata: Metadata = {
  title: "Stevie's Sniper vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare Stevie's Sniper vs Elite FUT SNIPER. Side-by-side comparison of features, pricing, safety, and speed for EA FC Ultimate Team.",
  alternates: { canonical: "https://elitefutbot.com/steviessniper-vs-elitefutbot" },
  openGraph: {
    title: "Stevie's Sniper vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare Stevie's Sniper vs Elite FUT SNIPER. Side-by-side comparison of features, pricing, safety, and speed for EA FC Ultimate Team.",
    url: "https://elitefutbot.com/steviessniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stevie's Sniper vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare Stevie's Sniper vs Elite FUT SNIPER. Side-by-side comparison of features, pricing, safety, and speed for EA FC Ultimate Team.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={steviesSniperData} />;
}
