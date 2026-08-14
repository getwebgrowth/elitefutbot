import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futStarzData } from "@/data/competitors/futstarz";

export const metadata: Metadata = {
  title: "FutStarz vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FutStarz vs Elite FUT SNIPER. Avoid proxy queue lag with 100% local 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futstarz-vs-elitefutbot" },
  openGraph: {
    title: "FutStarz vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FutStarz vs Elite FUT SNIPER. Avoid proxy queue lag with 100% local 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futstarz-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutStarz vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FutStarz vs Elite FUT SNIPER. Avoid proxy queue lag with 100% local 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futStarzData} />;
}
