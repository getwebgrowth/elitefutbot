import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futBotManagerData } from "@/data/competitors/futbotmanager";

export const metadata: Metadata = {
  title: "FC 27 Ultimate Team Trading Extension – FutBotManager vs Elite",
  description: "Compare FutBotManager vs Elite. Discover the premium FC 27 Ultimate Team trading extension and EA FC 27 Autobuyer with native Chrome side panel HUD.",
  alternates: { canonical: "https://elitefutbot.com/futbotmanager-vs-elitefutbot" },
  openGraph: {
    title: "FC 27 Ultimate Team Trading Extension – FutBotManager vs Elite",
    description: "Compare FutBotManager vs Elite. Discover the premium FC 27 Ultimate Team trading extension and EA FC 27 Autobuyer with native Chrome side panel HUD.",
    url: "https://elitefutbot.com/futbotmanager-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC 27 Ultimate Team Trading Extension – FutBotManager vs Elite",
    description: "Compare FutBotManager vs Elite. Discover the premium FC 27 Ultimate Team trading extension and EA FC 27 Autobuyer with native Chrome side panel HUD.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futBotManagerData} />;
}
