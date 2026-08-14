import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futDroidData } from "@/data/competitors/futdroid";

export const metadata: Metadata = {
  title: "FUTDroid vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUTDroid vs Elite FUT SNIPER. Upgrade from Android APK mobile limits to 20ms desktop in-browser sniping & AI SBC solving for FC 26 & 27.",
  alternates: { canonical: "https://elitefutbot.com/futdroid-vs-elitefutbot" },
  openGraph: {
    title: "FUTDroid vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUTDroid vs Elite FUT SNIPER. Upgrade from Android APK mobile limits to 20ms desktop in-browser sniping & AI SBC solving for FC 26 & 27.",
    url: "https://elitefutbot.com/futdroid-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTDroid vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUTDroid vs Elite FUT SNIPER. Upgrade from Android APK mobile limits to 20ms desktop in-browser sniping & AI SBC solving for FC 26 & 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futDroidData} />;
}
