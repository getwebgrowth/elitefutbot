import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGenieData } from "@/data/competitors/futgenie";

export const metadata: Metadata = {
  title: "FUT Genie vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUT Genie vs Elite FUT SNIPER. Move from passive price overlays to autonomous 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
  alternates: { canonical: "https://elitefutbot.com/futgenie-vs-elitefutbot" },
  openGraph: {
    title: "FUT Genie vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Genie vs Elite FUT SNIPER. Move from passive price overlays to autonomous 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
    url: "https://elitefutbot.com/futgenie-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Genie vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Genie vs Elite FUT SNIPER. Move from passive price overlays to autonomous 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGenieData} />;
}
