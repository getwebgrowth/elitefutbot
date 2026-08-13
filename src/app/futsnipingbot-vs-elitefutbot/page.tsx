import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBotData } from "@/data/competitors/futsnipingbot";

export const metadata: Metadata = {
  title: "Ultimate Team Sniping Bot vs FUT Sniping Bot – FC 27 Guide",
  description: "Compare FUT Sniping Bot vs Elite. See why local execution makes Elite FUT SNIPER the safest FUT autobuyer and fastest Ultimate Team Sniping Bot for FC 27.",
  alternates: { canonical: "https://elitefutbot.com/futsnipingbot-vs-elitefutbot" },
  openGraph: {
    title: "Ultimate Team Sniping Bot vs FUT Sniping Bot – FC 27 Guide",
    description: "Compare FUT Sniping Bot vs Elite. See why local execution makes Elite FUT SNIPER the safest FUT autobuyer and fastest Ultimate Team Sniping Bot for FC 27.",
    url: "https://elitefutbot.com/futsnipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate Team Sniping Bot vs FUT Sniping Bot – FC 27 Guide",
    description: "Compare FUT Sniping Bot vs Elite. See why local execution makes Elite FUT SNIPER the safest FUT autobuyer and fastest Ultimate Team Sniping Bot for FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBotData} />;
}
