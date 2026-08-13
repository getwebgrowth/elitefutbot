import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperData } from "@/data/competitors/futsniper";

export const metadata: Metadata = {
  title: "EA FC 27 Trading Bot vs FUT Sniper – Comparison",
  description: "Compare FUT Sniper vs Elite FUT SNIPER. See why local execution as a FUT 27 Web App extension with 20ms speeds beats legacy cloud autobuyers.",
  alternates: { canonical: "https://elitefutbot.com/futsniper-vs-elitefutbot" },
  openGraph: {
    title: "EA FC 27 Trading Bot vs FUT Sniper – Comparison",
    description: "Compare FUT Sniper vs Elite FUT SNIPER. See why local execution as a FUT 27 Web App extension with 20ms speeds beats legacy cloud autobuyers.",
    url: "https://elitefutbot.com/futsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 27 Trading Bot vs FUT Sniper – Comparison",
    description: "Compare FUT Sniper vs Elite FUT SNIPER. See why local execution as a FUT 27 Web App extension with 20ms speeds beats legacy cloud autobuyers.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperData} />;
}
