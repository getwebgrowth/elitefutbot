import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futHunterData } from "@/data/competitors/futhunter";

export const metadata: Metadata = {
  title: "EA FC 27 Sniping Bot vs FUT Hunter – Security Comparison",
  description: "Compare FUT Hunter vs Elite. See why local execution makes Elite the safest FUT autobuyer and fastest EA FC 27 Sniping Bot for personal Ultimate Team accounts.",
  alternates: { canonical: "https://elitefutbot.com/futhunter-vs-elitefutbot" },
  openGraph: {
    title: "EA FC 27 Sniping Bot vs FUT Hunter – Security Comparison",
    description: "Compare FUT Hunter vs Elite. See why local execution makes Elite the safest FUT autobuyer and fastest EA FC 27 Sniping Bot for personal Ultimate Team accounts.",
    url: "https://elitefutbot.com/futhunter-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 27 Sniping Bot vs FUT Hunter – Security Comparison",
    description: "Compare FUT Hunter vs Elite. See why local execution makes Elite the safest FUT autobuyer and fastest EA FC 27 Sniping Bot for personal Ultimate Team accounts.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futHunterData} />;
}
