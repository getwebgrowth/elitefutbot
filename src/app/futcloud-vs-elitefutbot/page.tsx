import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCloudData } from "@/data/competitors/futcloud";

export const metadata: Metadata = {
  title: "FUTCloud vs Elite FUT SNIPER – Cloud vs Local 20ms Sniping Bot Comparison",
  description:
    "Compare FUTCloud vs Elite FUT SNIPER. Learn why 100% local in-browser sniping with zero password sharing and AI SBC solving beats risky cloud autobuyer farms for FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futcloud-vs-elitefutbot" },
  openGraph: {
    title: "FUTCloud vs Elite FUT SNIPER – Cloud vs Local 20ms Sniping Bot Comparison",
    description:
      "Compare FUTCloud vs Elite FUT SNIPER. Learn why 100% local in-browser sniping with zero password sharing and AI SBC solving beats risky cloud autobuyer farms for FC 26 & FC 27.",
    url: "https://elitefutbot.com/futcloud-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTCloud vs Elite FUT SNIPER – Cloud vs Local 20ms Sniping Bot Comparison",
    description:
      "Compare FUTCloud vs Elite FUT SNIPER. Learn why 100% local in-browser sniping with zero password sharing and AI SBC solving beats risky cloud autobuyer farms for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCloudData} />;
}
