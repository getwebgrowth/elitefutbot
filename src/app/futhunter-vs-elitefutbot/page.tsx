import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futHunterData } from "@/data/competitors/futhunter";

export const metadata: Metadata = {
  title: "FUT Hunter vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare FUT Hunter vs Elite FUT SNIPER. Protect your main club with isolated 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futhunter-vs-elitefutbot" },
  openGraph: {
    title: "FUT Hunter vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Hunter vs Elite FUT SNIPER. Protect your main club with isolated 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futhunter-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Hunter vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare FUT Hunter vs Elite FUT SNIPER. Protect your main club with isolated 20ms in-browser sniping & AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futHunterData} />;
}
