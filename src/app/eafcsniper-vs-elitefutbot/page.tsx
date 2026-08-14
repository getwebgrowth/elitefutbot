import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { eafcSniperData } from "@/data/competitors/eafcsniper";

export const metadata: Metadata = {
  title: "EAFC Sniper vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare EAFC Sniper vs Elite FUT SNIPER. Eliminate repeated seasonal fees with 20ms in-browser sniping and neural AI SBC solving for FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/eafcsniper-vs-elitefutbot" },
  openGraph: {
    title: "EAFC Sniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare EAFC Sniper vs Elite FUT SNIPER. Eliminate repeated seasonal fees with 20ms in-browser sniping and neural AI SBC solving for FC 26 & FC 27.",
    url: "https://elitefutbot.com/eafcsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAFC Sniper vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare EAFC Sniper vs Elite FUT SNIPER. Eliminate repeated seasonal fees with 20ms in-browser sniping and neural AI SBC solving for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={eafcSniperData} />;
}
