import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fifaSnipeBotData } from "@/data/competitors/fifasnipebot";

export const metadata: Metadata = {
  title: "FIFASnipeBot vs Elite FUT SNIPER – Modern FC 26 & FC 27 Sniping Bot Comparison",
  description: "Compare FIFASnipeBot vs Elite FUT SNIPER. Legacy FIFA cloud bot vs modern local Chrome extension built for EA Sports FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/fifasnipebot-vs-elitefutbot" },
  openGraph: {
    title: "FIFASnipeBot vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "Old FIFA cloud bot vs new FC 26 & FC 27 native local extension. See why Elite wins.",
    url: "https://elitefutbot.com/fifasnipebot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFASnipeBot vs Elite FUT SNIPER",
    description: "Legacy FIFA cloud bot vs modern FC 26 & FC 27 local sniper.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fifaSnipeBotData} />;
}
