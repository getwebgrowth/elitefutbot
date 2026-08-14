import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { shortFutsData } from "@/data/competitors/shortfuts";

export const metadata: Metadata = {
  title: "Shortfuts vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare Shortfuts vs Elite FUT SNIPER. Replace manual keybind mashing with hands-free 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/shortfuts-vs-elitefutbot" },
  openGraph: {
    title: "Shortfuts vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Shortfuts vs Elite FUT SNIPER. Replace manual keybind mashing with hands-free 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/shortfuts-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shortfuts vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare Shortfuts vs Elite FUT SNIPER. Replace manual keybind mashing with hands-free 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={shortFutsData} />;
}
