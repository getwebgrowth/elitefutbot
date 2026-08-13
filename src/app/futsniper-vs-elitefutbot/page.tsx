import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperData } from "@/data/competitors/futsniper";

export const metadata: Metadata = {
  title: "FUT Sniper vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT Sniper vs Elite FUT SNIPER. Elite FUT SNIPER is 7–15x faster, runs locally with no EA password, and includes an AI SBC solver FUT Sniper lacks.",
  alternates: { canonical: "https://elitefutbot.com/futsniper-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniper vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Sniper vs Elite FUT SNIPER. Elite FUT SNIPER is 7–15x faster, runs locally with no EA password, and includes an AI SBC solver FUT Sniper lacks.",
    url: "https://elitefutbot.com/futsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniper vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Sniper vs Elite FUT SNIPER. Elite FUT SNIPER is 7–15x faster, runs locally with no EA password, and includes an AI SBC solver FUT Sniper lacks.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperData} />;
}
