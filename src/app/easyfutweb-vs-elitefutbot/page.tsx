import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { easyFutWebData } from "@/data/competitors/easyfutweb";

export const metadata: Metadata = {
  title: "EasyFutWeb vs Elite FUT SNIPER – FC 26 & FC 27 FUT Trading Automation",
  description: "Compare EasyFutWeb vs Elite FUT SNIPER. Web analytics vs 20ms local Chrome extension with AI SBC Solver. See which FC 26 & FC 27 tool generates more profit.",
  alternates: { canonical: "https://elitefutbot.com/easyfutweb-vs-elitefutbot" },
  openGraph: {
    title: "EasyFutWeb vs Elite FUT SNIPER – FC 26 & FC 27 FUT Trading Comparison",
    description: "Web-based analytics vs fully automated local sniping for FC 26 & FC 27. Elite is the complete package.",
    url: "https://elitefutbot.com/easyfutweb-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyFutWeb vs Elite FUT SNIPER",
    description: "Web platform vs 20ms auto-sniper for FC 26 & FC 27. Elite wins on automation.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={easyFutWebData} />;
}
