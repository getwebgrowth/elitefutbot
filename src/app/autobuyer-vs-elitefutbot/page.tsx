import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { autobuyerData } from "@/data/competitors/autobuyer";

export const metadata: Metadata = {
  title: "Cloud Autobuyers vs Elite FUT SNIPER – Full Comparison 2026",
  description: "Compare cloud FUT autobuyers vs Elite FUT SNIPER. Local execution, 20ms speed, no datacenter IPs, zero password required — why Elite FUT SNIPER is the next generation.",
  alternates: { canonical: "https://elitefutbot.com/autobuyer-vs-elitefutbot" },
  openGraph: {
    title: "Cloud Autobuyers vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare cloud FUT autobuyers vs Elite FUT SNIPER. Local execution, 20ms speed, no datacenter IPs, zero password required — why Elite FUT SNIPER is the next generation.",
    url: "https://elitefutbot.com/autobuyer-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Autobuyers vs Elite FUT SNIPER – Full Comparison 2026",
    description: "Compare cloud FUT autobuyers vs Elite FUT SNIPER. Local execution, 20ms speed, no datacenter IPs, zero password required — why Elite FUT SNIPER is the next generation.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={autobuyerData} />;
}
