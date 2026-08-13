import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBot24Data } from "@/data/competitors/futsnipingbot24";

export const metadata: Metadata = {
  title: "FUTSnipingBot24 vs Elite FUT SNIPER – 24/7 Cloud vs Local FC 26 & FC 27 Bot",
  description: "FUTSnipingBot24 cloud 24/7 sniping vs Elite FUT SNIPER local 20ms execution for FC 26 & FC 27. Compare ban risk, speed, AI SBC solver, and FC 27 readiness.",
  alternates: { canonical: "https://elitefutbot.com/futsnipingbot24-vs-elitefutbot" },
  openGraph: {
    title: "FUTSnipingBot24 vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "24/7 cloud bot vs 20ms local extension. Elite wins on safety, speed, and FC 27 support.",
    url: "https://elitefutbot.com/futsnipingbot24-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTSnipingBot24 vs Elite FUT SNIPER",
    description: "24/7 cloud sniping risks bans. Elite's local 20ms approach is safer and faster.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBot24Data} />;
}
