import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperWebData } from "@/data/competitors/futsniperweb";

export const metadata: Metadata = {
  title: "FUT Sniper Web vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUT Sniper Web vs Elite FUT SNIPER. Avoid web portal lag with direct 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futsniperweb-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniper Web vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Sniper Web vs Elite FUT SNIPER. Avoid web portal lag with direct 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futsniperweb-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniper Web vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Sniper Web vs Elite FUT SNIPER. Avoid web portal lag with direct 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperWebData} />;
}
