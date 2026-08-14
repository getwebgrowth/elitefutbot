import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { easyFutWebData } from "@/data/competitors/easyfutweb";

export const metadata: Metadata = {
  title: "EasyFUTWeb vs Elite FUT SNIPER – FC 27 Comparison",
  description:
    "Compare EasyFUTWeb vs Elite FUT SNIPER. Ditch buggy userscripts for a sandboxed 20ms Chrome extension with AI SBC solving for EA FC 26 & FC 27.",
  alternates: { canonical: "https://elitefutbot.com/easyfutweb-vs-elitefutbot" },
  openGraph: {
    title: "EasyFUTWeb vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare EasyFUTWeb vs Elite FUT SNIPER. Ditch buggy userscripts for a sandboxed 20ms Chrome extension with AI SBC solving for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/easyfutweb-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyFUTWeb vs Elite FUT SNIPER – FC 27 Comparison",
    description:
      "Compare EasyFUTWeb vs Elite FUT SNIPER. Ditch buggy userscripts for a sandboxed 20ms Chrome extension with AI SBC solving for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={easyFutWebData} />;
}
