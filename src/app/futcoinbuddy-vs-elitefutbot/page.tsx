import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCoinBuddyData } from "@/data/competitors/futcoinbuddy";

export const metadata: Metadata = {
  title: "FUT Web App Bot vs Futcoinbuddy – Safe FC 27 Sniping",
  description: "Compare Futcoinbuddy vs Elite. See why local execution as a FUT Web App Bot and no ban sniping bot FC 27 beats cloud token credential sharing.",
  alternates: { canonical: "https://elitefutbot.com/futcoinbuddy-vs-elitefutbot" },
  openGraph: {
    title: "FUT Web App Bot vs Futcoinbuddy – Safe FC 27 Sniping",
    description: "Compare Futcoinbuddy vs Elite. See why local execution as a FUT Web App Bot and no ban sniping bot FC 27 beats cloud token credential sharing.",
    url: "https://elitefutbot.com/futcoinbuddy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Web App Bot vs Futcoinbuddy – Safe FC 27 Sniping",
    description: "Compare Futcoinbuddy vs Elite. See why local execution as a FUT Web App Bot and no ban sniping bot FC 27 beats cloud token credential sharing.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCoinBuddyData} />;
}
