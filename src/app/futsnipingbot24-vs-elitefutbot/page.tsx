import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBot24Data } from "@/data/competitors/futsnipingbot24";

export const metadata: Metadata = {
  title: "FUT Sniping Bot 24 vs Elite – FC 27 Comparison",
  description:
    "Compare FUT Sniping Bot 24 vs Elite FUT SNIPER. Upgrade to actively maintained 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futsnipingbot24-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniping Bot 24 vs Elite – FC 27 Comparison",
    description:
      "Compare FUT Sniping Bot 24 vs Elite FUT SNIPER. Upgrade to actively maintained 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futsnipingbot24-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot 24 vs Elite – FC 27 Comparison",
    description:
      "Compare FUT Sniping Bot 24 vs Elite FUT SNIPER. Upgrade to actively maintained 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBot24Data} />;
}
