import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { exeSniperData } from "@/data/competitors/exesniper";

export const metadata: Metadata = {
  title: "ExeSniper vs Elite FUT SNIPER – Desktop App vs Chrome Extension FC 26 & FC 27",
  description: "ExeSniper desktop executable vs Elite FUT SNIPER Chrome extension for FC 26 & FC 27 sniping. Compare installation, cross-platform support, and FC 27 readiness.",
  alternates: { canonical: "https://elitefutbot.com/exesniper-vs-elitefutbot" },
  openGraph: {
    title: "ExeSniper vs Elite FUT SNIPER – FC 26 & FC 27 Desktop vs Extension",
    description: "Windows-only .exe vs cross-platform Chrome extension for FC 26 & FC 27 auto-sniping.",
    url: "https://elitefutbot.com/exesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExeSniper vs Elite FUT SNIPER",
    description: "Desktop app vs Chrome extension for FC 26 & FC 27 FUT sniping.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={exeSniperData} />;
}
