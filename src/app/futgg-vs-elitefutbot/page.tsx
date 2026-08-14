import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGgData } from "@/data/competitors/futgg";

export const metadata: Metadata = {
  title: "FUT.GG vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUT.GG vs Elite FUT SNIPER. Move from passive database lookups to active 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futgg-vs-elitefutbot" },
  openGraph: {
    title: "FUT.GG vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT.GG vs Elite FUT SNIPER. Move from passive database lookups to active 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futgg-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT.GG vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT.GG vs Elite FUT SNIPER. Move from passive database lookups to active 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGgData} />;
}
