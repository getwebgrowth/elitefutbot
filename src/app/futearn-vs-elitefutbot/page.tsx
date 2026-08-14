import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futEarnData } from "@/data/competitors/futearn";

export const metadata: Metadata = {
  title: "FUT Web App Bot vs FutEarn – Safe FC 27 Sniping Comparison",
  description:
    "Compare FutEarn vs Elite FUT SNIPER. Avoid cloud server password risks with 100% local, zero-credential 20ms in-browser sniping for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futearn-vs-elitefutbot" },
  openGraph: {
    title: "FUT Web App Bot vs FutEarn – Safe FC 27 Sniping Comparison",
    description:
      "Compare FutEarn vs Elite FUT SNIPER. Avoid cloud server password risks with 100% local, zero-credential 20ms in-browser sniping for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futearn-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Web App Bot vs FutEarn – Safe FC 27 Sniping Comparison",
    description:
      "Compare FutEarn vs Elite FUT SNIPER. Avoid cloud server password risks with 100% local, zero-credential 20ms in-browser sniping for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futEarnData} />;
}
