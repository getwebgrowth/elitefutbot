import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futtBotData } from "@/data/competitors/futtbot";

export const metadata: Metadata = {
  title: "FUTTBot vs Elite FUT SNIPER – Cloud Bot vs Local FC 26 & FC 27 Sniper",
  description: "FUTTBot vs Elite FUT SNIPER comparison. Why a local 20ms Chrome extension beats cloud FUT automation for FC 26 & FC 27. No password sharing, no ban risk.",
  alternates: { canonical: "https://elitefutbot.com/futtbot-vs-elitefutbot" },
  openGraph: {
    title: "FUTTBot vs Elite FUT SNIPER – Cloud Bot vs Local FC 26 & FC 27 Sniper",
    description: "Cloud bot vs local Chrome extension for FC 26 & FC 27 FUT trading. Elite wins on speed, safety, and FC 27 support.",
    url: "https://elitefutbot.com/futtbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTTBot vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "Cloud FUT bots are slow and risky. See why Elite FUT SNIPER wins.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futtBotData} />;
}
