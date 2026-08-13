import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { steviesSniperData } from "@/data/competitors/steviessniper";

export const metadata: Metadata = {
  title: "FC 27 Ultimate Team Autobuyer – Stevie's Sniper vs Elite",
  description: "Compare Stevie's Sniper vs Elite. Discover the premier FC 27 Ultimate Team Autobuyer and EA FC 27 Trading Bot with sub-20ms local sniping and AI SBC Solver.",
  alternates: { canonical: "https://elitefutbot.com/steviessniper-vs-elitefutbot" },
  openGraph: {
    title: "FC 27 Ultimate Team Autobuyer – Stevie's Sniper vs Elite",
    description: "Compare Stevie's Sniper vs Elite. Discover the premier FC 27 Ultimate Team Autobuyer and EA FC 27 Trading Bot with sub-20ms local sniping and AI SBC Solver.",
    url: "https://elitefutbot.com/steviessniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC 27 Ultimate Team Autobuyer – Stevie's Sniper vs Elite",
    description: "Compare Stevie's Sniper vs Elite. Discover the premier FC 27 Ultimate Team Autobuyer and EA FC 27 Trading Bot with sub-20ms local sniping and AI SBC Solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={steviesSniperData} />;
}
