import { Metadata } from "next";
import ComparisonHubClient from "./ComparisonHubClient";
import { COMPARISONS } from "@/data/comparisons-hub";

export const metadata: Metadata = {
  title: "FUT Bot Comparison Hub – Elite FUT SNIPER vs All 30 Competitors",
  description: "Compare Elite FUT SNIPER against every major FUT sniping bot, autobuyer, and trading tool. Side-by-side speed, safety, and FC 27 feature breakdowns for 30 platforms.",
  alternates: {
    canonical: "https://elitefutbot.com/tools/comparison-guide",
  },
  openGraph: {
    title: "FUT Bot Comparison Hub – Elite FUT SNIPER vs All 30 Competitors",
    description: "Compare Elite FUT SNIPER against every FUT bot and trading tool. Full breakdowns including speed, safety, and features.",
    url: "https://elitefutbot.com/tools/comparison-guide",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Bot Comparison Hub – Elite FUT SNIPER vs All 30 Competitors",
    description: "Compare Elite FUT SNIPER against every FUT bot. Speed, safety, features — full side-by-side breakdowns.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function ComparisonGuidePage() {
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "FUT Bot Comparison Hub",
        description: "Comprehensive side-by-side comparisons of Elite FUT SNIPER against 30 automated trading tools and sniping extensions.",
        url: "https://elitefutbot.com/tools/comparison-guide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://elitefutbot.com/" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://elitefutbot.com/tools/comparison-guide" }
        ]
      },
      {
        "@type": "ItemList",
        name: "FUT Bot Comparisons",
        numberOfItems: COMPARISONS.length,
        itemListElement: COMPARISONS.map((comp, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${comp.name} vs Elite FUT SNIPER`,
          url: `https://elitefutbot.com/${comp.slug}`
        }))
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
      <main className="min-h-screen bg-[#060606] text-gray-200 pt-28 pb-24 relative overflow-hidden font-body selection:bg-primary selection:text-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[60%] right-0 w-[500px] h-[500px] bg-primary/3 blur-[200px] rounded-full pointer-events-none -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonHubClient />
        </div>
      </main>
    </>
  );
}

