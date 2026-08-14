import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { eafcSniperData } from "@/data/competitors/eafcsniper";

export const metadata: Metadata = {
  title: "EAFC Sniper vs Elite FUT SNIPER – Seasonal Re-Buys vs All-in-One AI Sniping Suite",
  description:
    "Compare EAFC Sniper (formerly Futsnipe / store.futsnipe.com) vs Elite FUT SNIPER. Eliminate repeated seasonal renewal fees with our all-in-one 20ms in-browser sniping bot and neural AI SBC solver.",
  alternates: { canonical: "https://elitefutbot.com/eafcsniper-vs-elitefutbot" },
  openGraph: {
    title: "EAFC Sniper vs Elite FUT SNIPER – Seasonal Re-Buys vs All-in-One AI Sniping Suite",
    description:
      "Compare EAFC Sniper (formerly Futsnipe / store.futsnipe.com) vs Elite FUT SNIPER. Eliminate repeated seasonal renewal fees with our all-in-one 20ms in-browser sniping bot and neural AI SBC solver.",
    url: "https://elitefutbot.com/eafcsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAFC Sniper vs Elite FUT SNIPER – Seasonal Re-Buys vs All-in-One AI Sniping Suite",
    description:
      "Compare EAFC Sniper (formerly Futsnipe / store.futsnipe.com) vs Elite FUT SNIPER. Eliminate repeated seasonal renewal fees with our all-in-one 20ms in-browser sniping bot and neural AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={eafcSniperData} />;
}
