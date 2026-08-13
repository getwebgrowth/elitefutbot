import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { bakersBotData } from "@/data/competitors/bakers-bot";

export const metadata: Metadata = {
  title: "Safest FUT Autobuyer vs Baker's Bot – EA FC 27 Comparison",
  description: "Compare Baker's Bot vs Elite FUT SNIPER. Rebuilt by the same core engineer with 100% local execution and zero password sharing — the safest FUT autobuyer for EA FC 27.",
  alternates: { canonical: "https://elitefutbot.com/bakers-bot-vs-elitefutbot" },
  openGraph: {
    title: "Safest FUT Autobuyer vs Baker's Bot – EA FC 27 Comparison",
    description: "Compare Baker's Bot vs Elite FUT SNIPER. Rebuilt by the same core engineer with 100% local execution and zero password sharing — the safest FUT autobuyer for EA FC 27.",
    url: "https://elitefutbot.com/bakers-bot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safest FUT Autobuyer vs Baker's Bot – EA FC 27 Comparison",
    description: "Compare Baker's Bot vs Elite FUT SNIPER. Rebuilt by the same core engineer with 100% local execution and zero password sharing — the safest FUT autobuyer for EA FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={bakersBotData} />;
}
