import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futinatorData } from "@/data/competitors/futinator";

export const metadata: Metadata = {
  title: "FC 27 Sniping Bot vs Futinator – Side-by-Side Comparison",
  description: "Compare Futinator vs Elite. See why Elite is the ultimate FC 27 Sniping Bot, featuring a built-in AI SBC Solver FC 27 and sub-20ms search speeds.",
  alternates: { canonical: "https://elitefutbot.com/futinator-vs-elitefutbot" },
  openGraph: {
    title: "FC 27 Sniping Bot vs Futinator – Side-by-Side Comparison",
    description: "Compare Futinator vs Elite. See why Elite is the ultimate FC 27 Sniping Bot, featuring a built-in AI SBC Solver FC 27 and sub-20ms search speeds.",
    url: "https://elitefutbot.com/futinator-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC 27 Sniping Bot vs Futinator – Side-by-Side Comparison",
    description: "Compare Futinator vs Elite. See why Elite is the ultimate FC 27 Sniping Bot, featuring a built-in AI SBC Solver FC 27 and sub-20ms search speeds.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futinatorData} />;
}
