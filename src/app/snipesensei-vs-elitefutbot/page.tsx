import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { snipeSenseiData } from "@/data/competitors/snipesensei";

export const metadata: Metadata = {
  title: "SnipeSensei vs Elite FUT SNIPER – Manual vs Automated FC 26 & FC 27 Sniping",
  description: "SnipeSensei manual training vs Elite FUT SNIPER's 20ms automated FC 26 & FC 27 sniping. Compare approaches and see why full automation wins for FUT coin generation.",
  alternates: { canonical: "https://elitefutbot.com/snipesensei-vs-elitefutbot" },
  openGraph: {
    title: "SnipeSensei vs Elite FUT SNIPER – Manual vs Automated FC 26 & FC 27",
    description: "Manual snipe training vs 20ms automated FC 26 & FC 27 bot. Elite wins on profit per hour.",
    url: "https://elitefutbot.com/snipesensei-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnipeSensei vs Elite FUT SNIPER",
    description: "Education vs automation for FC 26 & FC 27 FUT sniping.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={snipeSenseiData} />;
}
