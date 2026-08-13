import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperWebData } from "@/data/competitors/futsniperweb";

export const metadata: Metadata = {
  title: "FUTSniperWeb vs Elite FUT SNIPER – Global FC 26 & FC 27 FUT Bot Comparison",
  description: "FUTSniperWeb vs Elite FUT SNIPER. Brazilian FUT web service vs global 20ms local Chrome extension for FC 26 & FC 27 with zero credential sharing.",
  alternates: { canonical: "https://elitefutbot.com/futsniperweb-vs-elitefutbot" },
  openGraph: {
    title: "FUTSniperWeb vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "Regional web service vs global Chrome extension for FC 26 & FC 27 FUT trading.",
    url: "https://elitefutbot.com/futsniperweb-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTSniperWeb vs Elite FUT SNIPER",
    description: "Brazilian web sniper vs global 20ms local extension for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperWebData} />;
}
