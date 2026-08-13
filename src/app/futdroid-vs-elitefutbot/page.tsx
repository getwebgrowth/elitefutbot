import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futDroidData } from "@/data/competitors/futdroid";

export const metadata: Metadata = {
  title: "EA FC 27 Autobuyer vs FUTDroid – Mobile vs Desktop Comparison",
  description: "Compare FUTDroid vs Elite. See why Elite is the leading EA FC 27 Autobuyer and FC 27 Sniping Bot, outperforming Android APK companion bots.",
  alternates: { canonical: "https://elitefutbot.com/futdroid-vs-elitefutbot" },
  openGraph: {
    title: "EA FC 27 Autobuyer vs FUTDroid – Mobile vs Desktop Comparison",
    description: "Compare FUTDroid vs Elite. See why Elite is the leading EA FC 27 Autobuyer and FC 27 Sniping Bot, outperforming Android APK companion bots.",
    url: "https://elitefutbot.com/futdroid-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 27 Autobuyer vs FUTDroid – Mobile vs Desktop Comparison",
    description: "Compare FUTDroid vs Elite. See why Elite is the leading EA FC 27 Autobuyer and FC 27 Sniping Bot, outperforming Android APK companion bots.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futDroidData} />;
}
