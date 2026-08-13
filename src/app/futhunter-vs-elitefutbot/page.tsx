import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futHunterData } from "@/data/competitors/futhunter";

export const metadata: Metadata = {
  title: "FUT Hunter vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT Hunter vs Elite FUT SNIPER. Multi-account cloud farming vs personal account 20ms local sniping automation.",
  alternates: { canonical: "https://elitefutbot.com/futhunter-vs-elitefutbot" },
  openGraph: {
    title: "FUT Hunter vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Hunter vs Elite FUT SNIPER. Multi-account cloud farming vs personal account 20ms local sniping automation.",
    url: "https://elitefutbot.com/futhunter-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Hunter vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Hunter vs Elite FUT SNIPER. Multi-account cloud farming vs personal account 20ms local sniping automation.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futHunterData} />;
}
