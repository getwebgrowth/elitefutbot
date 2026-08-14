import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSimpleTraderData } from "@/data/competitors/futsimpletrader";

export const metadata: Metadata = {
  title: "EA FC 27 Sniping Bot vs FUT Simple Trader – Comparison",
  description:
    "Compare FUT Simple Trader vs Elite FUT SNIPER. Upgrade from manual filter guides to 20ms autonomous in-browser sniping & AI SBC solving for FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futsimpletrader-vs-elitefutbot" },
  openGraph: {
    title: "EA FC 27 Sniping Bot vs FUT Simple Trader – Comparison",
    description:
      "Compare FUT Simple Trader vs Elite FUT SNIPER. Upgrade from manual filter guides to 20ms autonomous in-browser sniping & AI SBC solving for FC 26 & FC 27.",
    url: "https://elitefutbot.com/futsimpletrader-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 27 Sniping Bot vs FUT Simple Trader – Comparison",
    description:
      "Compare FUT Simple Trader vs Elite FUT SNIPER. Upgrade from manual filter guides to 20ms autonomous in-browser sniping & AI SBC solving for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSimpleTraderData} />;
}
