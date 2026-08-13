import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futLockerData } from "@/data/competitors/futlocker";

export const metadata: Metadata = {
  title: "FUTLocker vs Elite FUT SNIPER – FC 26 & FC 27 Sniping Bot Comparison",
  description: "Compare FUTLocker vs Elite FUT SNIPER. See why a local Chrome extension beats web-based FUT trading tools for FC 26 & FC 27 with 20ms speed and zero credential sharing.",
  alternates: { canonical: "https://elitefutbot.com/futlocker-vs-elitefutbot" },
  openGraph: {
    title: "FUTLocker vs Elite FUT SNIPER – FC 26 & FC 27 Sniping Bot Comparison",
    description: "Compare FUTLocker vs Elite FUT SNIPER. Local 20ms Chrome extension vs web-based FUT automation.",
    url: "https://elitefutbot.com/futlocker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTLocker vs Elite FUT SNIPER – FC 26 & FC 27 Comparison",
    description: "Local Chrome extension vs web-based FUT trading. See who wins.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futLockerData} />;
}
