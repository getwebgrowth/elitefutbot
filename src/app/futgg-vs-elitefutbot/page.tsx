import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGgData } from "@/data/competitors/futgg";

export const metadata: Metadata = {
  title: "FUT.GG vs Elite FUT SNIPER – FC 26 & FC 27 Reference vs Automated Trading",
  description: "FUT.GG companion website vs Elite FUT SNIPER auto-sniper for FC 26 & FC 27. Elite automates what FUT.GG only shows you. Compare sniping, SBC solving, and AI features.",
  alternates: { canonical: "https://elitefutbot.com/futgg-vs-elitefutbot" },
  openGraph: {
    title: "FUT.GG vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "FUT database vs automated 20ms sniping. Elite FUT SNIPER executes what FUT.GG shows.",
    url: "https://elitefutbot.com/futgg-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT.GG vs Elite FUT SNIPER",
    description: "Reference website vs full FC 26 & FC 27 trading automation. Elite wins.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGgData} />;
}
