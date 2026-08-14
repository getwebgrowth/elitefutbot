import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { snipeSenseiData } from "@/data/competitors/snipesensei";

export const metadata: Metadata = {
  title: "Snipe Sensei vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare Snipe Sensei vs Elite FUT SNIPER. Replace crowded Discord callouts with private, automated 20ms in-browser sniping for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/snipesensei-vs-elitefutbot" },
  openGraph: {
    title: "Snipe Sensei vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Snipe Sensei vs Elite FUT SNIPER. Replace crowded Discord callouts with private, automated 20ms in-browser sniping for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/snipesensei-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snipe Sensei vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Snipe Sensei vs Elite FUT SNIPER. Replace crowded Discord callouts with private, automated 20ms in-browser sniping for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={snipeSenseiData} />;
}
