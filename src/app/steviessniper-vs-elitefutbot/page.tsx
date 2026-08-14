import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { steviesSniperData } from "@/data/competitors/steviessniper";

export const metadata: Metadata = {
  title: "Stevie's Sniper vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare Stevie's Sniper vs Elite FUT SNIPER. Avoid monthly subscription fees with 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/steviessniper-vs-elitefutbot" },
  openGraph: {
    title: "Stevie's Sniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Stevie's Sniper vs Elite FUT SNIPER. Avoid monthly subscription fees with 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/steviessniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stevie's Sniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Stevie's Sniper vs Elite FUT SNIPER. Avoid monthly subscription fees with 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={steviesSniperData} />;
}
