import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperData } from "@/data/competitors/futsniper";

export const metadata: Metadata = {
  title: "FUT Sniper vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUT Sniper vs Elite FUT SNIPER. Win 59th-minute deals with 20ms local in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futsniper-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Sniper vs Elite FUT SNIPER. Win 59th-minute deals with 20ms local in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Sniper vs Elite FUT SNIPER. Win 59th-minute deals with 20ms local in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperData} />;
}
