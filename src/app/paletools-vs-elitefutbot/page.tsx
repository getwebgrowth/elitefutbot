import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { palEToolsData } from "@/data/competitors/paletools";

export const metadata: Metadata = {
  title: "Paletools vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare Paletools vs Elite FUT SNIPER. Upgrade from hotkey mods to 20ms autonomous in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/paletools-vs-elitefutbot" },
  openGraph: {
    title: "Paletools vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Paletools vs Elite FUT SNIPER. Upgrade from hotkey mods to 20ms autonomous in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/paletools-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paletools vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Paletools vs Elite FUT SNIPER. Upgrade from hotkey mods to 20ms autonomous in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={palEToolsData} />;
}
