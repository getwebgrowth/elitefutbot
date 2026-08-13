import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futUltimateSniperData } from "@/data/competitors/futultimatesniper";

export const metadata: Metadata = {
  title: "FC 27 Web App Extension Comparison – FUT Ultimate Sniper vs Elite",
  description: "Compare FUT Ultimate Sniper vs Elite. Discover the top EA FC 27 Web App extension and Ultimate Team Sniping Bot with 1-click store installation and 20ms speeds.",
  alternates: { canonical: "https://elitefutbot.com/futultimatesniper-vs-elitefutbot" },
  openGraph: {
    title: "FC 27 Web App Extension Comparison – FUT Ultimate Sniper vs Elite",
    description: "Compare FUT Ultimate Sniper vs Elite. Discover the top EA FC 27 Web App extension and Ultimate Team Sniping Bot with 1-click store installation and 20ms speeds.",
    url: "https://elitefutbot.com/futultimatesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC 27 Web App Extension Comparison – FUT Ultimate Sniper vs Elite",
    description: "Compare FUT Ultimate Sniper vs Elite. Discover the top EA FC 27 Web App extension and Ultimate Team Sniping Bot with 1-click store installation and 20ms speeds.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futUltimateSniperData} />;
}
