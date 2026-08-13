import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { clubSnipingData } from "@/data/competitors/club-sniping";

export const metadata: Metadata = {
  title: "Club Sniping vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare manual Club Sniping vs Elite FUT SNIPER. Manual execution can't beat 20ms automated sniping. See why automation is the only way to compete in 2026.",
  alternates: { canonical: "https://elitefutbot.com/club-sniping-vs-elitefutbot" },
  openGraph: {
    title: "Club Sniping vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare manual Club Sniping vs Elite FUT SNIPER. Manual execution can't beat 20ms automated sniping. See why automation is the only way to compete in 2026.",
    url: "https://elitefutbot.com/club-sniping-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Club Sniping vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare manual Club Sniping vs Elite FUT SNIPER. Manual execution can't beat 20ms automated sniping. See why automation is the only way to compete in 2026.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={clubSnipingData} />;
}
