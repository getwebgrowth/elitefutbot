import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCloudData } from "@/data/competitors/futcloud";

export const metadata: Metadata = {
  title: "FUTCloud vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUTCloud vs Elite FUT SNIPER. Avoid cloud proxy bans with 100% local 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futcloud-vs-elitefutbot" },
  openGraph: {
    title: "FUTCloud vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUTCloud vs Elite FUT SNIPER. Avoid cloud proxy bans with 100% local 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futcloud-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTCloud vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUTCloud vs Elite FUT SNIPER. Avoid cloud proxy bans with 100% local 20ms in-browser sniping and AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCloudData} />;
}
