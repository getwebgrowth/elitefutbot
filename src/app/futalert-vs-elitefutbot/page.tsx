import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futAlertData } from "@/data/competitors/futalert";

export const metadata: Metadata = {
  title: "FUT Alert vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUT Alert vs Elite FUT SNIPER. Alerts are too slow — Elite FUT SNIPER auto-buys the same deals in 20ms before any notification reaches you.",
  alternates: { canonical: "https://elitefutbot.com/futalert-vs-elitefutbot" },
  openGraph: {
    title: "FUT Alert vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Alert vs Elite FUT SNIPER. Alerts are too slow — Elite FUT SNIPER auto-buys the same deals in 20ms before any notification reaches you.",
    url: "https://elitefutbot.com/futalert-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Alert vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUT Alert vs Elite FUT SNIPER. Alerts are too slow — Elite FUT SNIPER auto-buys the same deals in 20ms before any notification reaches you.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futAlertData} />;
}
