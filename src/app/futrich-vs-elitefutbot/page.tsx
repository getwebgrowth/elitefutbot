import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futRichData } from "@/data/competitors/futrich";

export const metadata: Metadata = {
  title: "AI SBC Solver FC 27 – FUTRich vs Elite FUT SNIPER",
  description: "Compare FUTRich vs Elite. Discover the premium AI SBC Solver FC 27 and local FUT Autobuyer Chrome extension with 20ms speeds and zero password sharing.",
  alternates: { canonical: "https://elitefutbot.com/futrich-vs-elitefutbot" },
  openGraph: {
    title: "AI SBC Solver FC 27 – FUTRich vs Elite FUT SNIPER",
    description: "Compare FUTRich vs Elite. Discover the premium AI SBC Solver FC 27 and local FUT Autobuyer Chrome extension with 20ms speeds and zero password sharing.",
    url: "https://elitefutbot.com/futrich-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SBC Solver FC 27 – FUTRich vs Elite FUT SNIPER",
    description: "Compare FUTRich vs Elite. Discover the premium AI SBC Solver FC 27 and local FUT Autobuyer Chrome extension with 20ms speeds and zero password sharing.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futRichData} />;
}
