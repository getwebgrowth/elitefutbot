import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futUltimateSniperData } from "@/data/competitors/futultimatesniper";

export const metadata: Metadata = {
  title: "FUT Ultimate Sniper vs Elite – FC 27 Sniping Comparison",
  description:
    "Compare FUT Ultimate Sniper vs Elite FUT SNIPER. Skip unpacked zip files for 1-click Chrome installation, 20ms speed, & AI SBC solving for FC 26 & 27.",
  alternates: { canonical: "https://elitefutbot.com/futultimatesniper-vs-elitefutbot" },
  openGraph: {
    title: "FUT Ultimate Sniper vs Elite – FC 27 Sniping Comparison",
    description:
      "Compare FUT Ultimate Sniper vs Elite FUT SNIPER. Skip unpacked zip files for 1-click Chrome installation, 20ms speed, & AI SBC solving for FC 26 & 27.",
    url: "https://elitefutbot.com/futultimatesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Ultimate Sniper vs Elite – FC 27 Sniping Comparison",
    description:
      "Compare FUT Ultimate Sniper vs Elite FUT SNIPER. Skip unpacked zip files for 1-click Chrome installation, 20ms speed, & AI SBC solving for FC 26 & 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futUltimateSniperData} />;
}
