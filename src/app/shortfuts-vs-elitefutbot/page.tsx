import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { shortFutsData } from "@/data/competitors/shortfuts";

export const metadata: Metadata = {
  title: "ShortFuts vs Elite FUT SNIPER – Keyboard Shortcuts vs FC 26 & FC 27 Auto-Sniper",
  description: "ShortFuts FUT keyboard extension vs Elite FUT SNIPER's automated 20ms FC 26 & FC 27 sniping and AI SBC solver. See why automation beats shortcuts for FUT profits.",
  alternates: { canonical: "https://elitefutbot.com/shortfuts-vs-elitefutbot" },
  openGraph: {
    title: "ShortFuts vs Elite FUT SNIPER – FC 26 & FC 27 Extension Comparison",
    description: "Keyboard shortcut extension vs 20ms auto-sniper and AI SBC solver for FC 26 & FC 27.",
    url: "https://elitefutbot.com/shortfuts-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShortFuts vs Elite FUT SNIPER",
    description: "Shortcuts make you faster manually. Elite makes manual actions unnecessary.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={shortFutsData} />;
}
