import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futDroidData } from "@/data/competitors/futdroid";

export const metadata: Metadata = {
  title: "FUTDroid vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare FUTDroid vs Elite FUT SNIPER. Android APK companion bot with credential sharing vs desktop 20ms local Chrome extension.",
  alternates: { canonical: "https://elitefutbot.com/futdroid-vs-elitefutbot" },
  openGraph: {
    title: "FUTDroid vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUTDroid vs Elite FUT SNIPER. Android APK companion bot with credential sharing vs desktop 20ms local Chrome extension.",
    url: "https://elitefutbot.com/futdroid-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTDroid vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare FUTDroid vs Elite FUT SNIPER. Android APK companion bot with credential sharing vs desktop 20ms local Chrome extension.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futDroidData} />;
}
