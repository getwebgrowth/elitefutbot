import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCoinBuddyData } from "@/data/competitors/futcoinbuddy";

export const metadata: Metadata = {
  title: "Futcoinbuddy vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare Futcoinbuddy vs Elite FUT SNIPER. Avoid token extraction risks with 100% local, zero-leak 20ms in-browser sniping for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futcoinbuddy-vs-elitefutbot" },
  openGraph: {
    title: "Futcoinbuddy vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Futcoinbuddy vs Elite FUT SNIPER. Avoid token extraction risks with 100% local, zero-leak 20ms in-browser sniping for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futcoinbuddy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futcoinbuddy vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Futcoinbuddy vs Elite FUT SNIPER. Avoid token extraction risks with 100% local, zero-leak 20ms in-browser sniping for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCoinBuddyData} />;
}
