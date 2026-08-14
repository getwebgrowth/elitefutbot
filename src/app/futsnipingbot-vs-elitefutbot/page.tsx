import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBotData } from "@/data/competitors/futsnipingbot";

export const metadata: Metadata = {
  title: "FUT Sniping Bot vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUT Sniping Bot vs Elite FUT SNIPER. Avoid recurring seasonal fees with 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futsnipingbot-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniping Bot vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Sniping Bot vs Elite FUT SNIPER. Avoid recurring seasonal fees with 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futsnipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Sniping Bot vs Elite FUT SNIPER. Avoid recurring seasonal fees with 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBotData} />;
}
