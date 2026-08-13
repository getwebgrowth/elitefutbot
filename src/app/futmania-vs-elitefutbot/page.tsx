import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futManiaData } from "@/data/competitors/futmania";

export const metadata: Metadata = {
  title: "FUT Autobuyer Comparison – FUTMania vs Elite – EA FC 27",
  description: "Compare FUTMania vs Elite. See why local execution as a FUT Autobuyer and EA FC 27 Sniping Bot beats cloud server commission-based trading.",
  alternates: { canonical: "https://elitefutbot.com/futmania-vs-elitefutbot" },
  openGraph: {
    title: "FUT Autobuyer Comparison – FUTMania vs Elite – EA FC 27",
    description: "Compare FUTMania vs Elite. See why local execution as a FUT Autobuyer and EA FC 27 Sniping Bot beats cloud server commission-based trading.",
    url: "https://elitefutbot.com/futmania-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Autobuyer Comparison – FUTMania vs Elite – EA FC 27",
    description: "Compare FUTMania vs Elite. See why local execution as a FUT Autobuyer and EA FC 27 Sniping Bot beats cloud server commission-based trading.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futManiaData} />;
}
