import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futRichData } from "@/data/competitors/futrich";

export const metadata: Metadata = {
  title: "FUTRich vs Elite FUT SNIPER – FC 27 Sniping Comparison",
  description:
    "Compare FUTRich vs Elite FUT SNIPER. Experience Gaussian behavioral jitter, 20ms in-browser sniping, and AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futrich-vs-elitefutbot" },
  openGraph: {
    title: "FUTRich vs Elite FUT SNIPER – FC 27 Sniping Comparison",
    description:
      "Compare FUTRich vs Elite FUT SNIPER. Experience Gaussian behavioral jitter, 20ms in-browser sniping, and AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futrich-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTRich vs Elite FUT SNIPER – FC 27 Sniping Comparison",
    description:
      "Compare FUTRich vs Elite FUT SNIPER. Experience Gaussian behavioral jitter, 20ms in-browser sniping, and AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futRichData} />;
}
