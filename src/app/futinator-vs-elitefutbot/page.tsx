import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futinatorData } from "@/data/competitors/futinator";

export const metadata: Metadata = {
  title: "Futinator vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare Futinator vs Elite FUT SNIPER. Upgrade from manual hotkey macros to autonomous 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
  alternates: { canonical: "https://elitefutbot.com/futinator-vs-elitefutbot" },
  openGraph: {
    title: "Futinator vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Futinator vs Elite FUT SNIPER. Upgrade from manual hotkey macros to autonomous 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
    url: "https://elitefutbot.com/futinator-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futinator vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Futinator vs Elite FUT SNIPER. Upgrade from manual hotkey macros to autonomous 20ms in-browser sniping & AI SBC solving for FC 26 & 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futinatorData} />;
}
