import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futLockerData } from "@/data/competitors/futlocker";

export const metadata: Metadata = {
  title: "FUTLocker vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUTLocker vs Elite FUT SNIPER. Replace manual signal alerts with automated 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futlocker-vs-elitefutbot" },
  openGraph: {
    title: "FUTLocker vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUTLocker vs Elite FUT SNIPER. Replace manual signal alerts with automated 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futlocker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTLocker vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUTLocker vs Elite FUT SNIPER. Replace manual signal alerts with automated 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futLockerData} />;
}
