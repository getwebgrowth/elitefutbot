import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { utSniperData } from "@/data/competitors/utsniper";

export const metadata: Metadata = {
  title: "UTSniper vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare UTSniper vs Elite FUT SNIPER. Upgrade to Gaussian jitter, 20ms in-browser sniping, and AI SBC solving in Chrome's Side Panel for FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/utsniper-vs-elitefutbot" },
  openGraph: {
    title: "UTSniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare UTSniper vs Elite FUT SNIPER. Upgrade to Gaussian jitter, 20ms in-browser sniping, and AI SBC solving in Chrome's Side Panel for FC 26 & FC 27.",
    url: "https://elitefutbot.com/utsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UTSniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare UTSniper vs Elite FUT SNIPER. Upgrade to Gaussian jitter, 20ms in-browser sniping, and AI SBC solving in Chrome's Side Panel for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={utSniperData} />;
}
