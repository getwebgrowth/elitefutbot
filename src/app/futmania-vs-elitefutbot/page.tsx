import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futManiaData } from "@/data/competitors/futmania";

export const metadata: Metadata = {
  title: "FUTMania vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUTMania vs Elite FUT SNIPER. Cloud credential-sharing and high commission vs local, secure browser execution.",
  alternates: { canonical: "https://elitefutbot.com/futmania-vs-elitefutbot" },
  openGraph: {
    title: "FUTMania vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUTMania vs Elite FUT SNIPER. Cloud credential-sharing and high commission vs local, secure browser execution.",
    url: "https://elitefutbot.com/futmania-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTMania vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUTMania vs Elite FUT SNIPER. Cloud credential-sharing and high commission vs local, secure browser execution.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futManiaData} />;
}
