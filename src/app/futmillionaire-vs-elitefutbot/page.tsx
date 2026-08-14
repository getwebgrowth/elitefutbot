import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMillionaireData } from "@/data/competitors/futmillionaire";

export const metadata: Metadata = {
  title: "FUTMillionaire vs Elite FUT SNIPER – Desktop Autobuyer vs Modern 20ms Browser Bot",
  description:
    "Compare FUTMillionaire Trading Center vs Elite FUT SNIPER. Upgrade from legacy bulky desktop software and monthly subscription fees to lightweight 20ms in-browser sniping with AI SBC solving.",
  alternates: { canonical: "https://elitefutbot.com/futmillionaire-vs-elitefutbot" },
  openGraph: {
    title: "FUTMillionaire vs Elite FUT SNIPER – Desktop Autobuyer vs Modern 20ms Browser Bot",
    description:
      "Compare FUTMillionaire Trading Center vs Elite FUT SNIPER. Upgrade from legacy bulky desktop software and monthly subscription fees to lightweight 20ms in-browser sniping with AI SBC solving.",
    url: "https://elitefutbot.com/futmillionaire-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTMillionaire vs Elite FUT SNIPER – Desktop Autobuyer vs Modern 20ms Browser Bot",
    description:
      "Compare FUTMillionaire Trading Center vs Elite FUT SNIPER. Upgrade from legacy bulky desktop software and monthly subscription fees to lightweight 20ms in-browser sniping with AI SBC solving.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMillionaireData} />;
}
