import { Metadata } from "next";
import TaxCalculatorComponent from "@/components/TaxCalculatorComponent";

export const metadata: Metadata = {
  title: "EA FC 26 & FC 27 Tax Calculator – 5% Transfer Market Tax",
  description: "Calculate EA Sports FC 5% transfer market tax, net profit, break-even sell price, and profit margins with 100% precision.",
  alternates: { canonical: "https://elitefutbot.com/tools/tax-calculator" },
  openGraph: {
    title: "EA FC 26 & FC 27 Tax Calculator – 5% Transfer Market Tax",
    description: "Calculate EA Sports FC 5% transfer market tax, net profit, and break-even sell price.",
    url: "https://elitefutbot.com/tools/tax-calculator",
    siteName: "Elite FUT SNIPER",
    type: "website",
  },
  twitter: {
    title: "EA FC 26 & FC 27 Tax Calculator",
    description: "Calculate EA Sports FC 5% transfer market tax & break-even price.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "EA FC 26 & FC 27 Tax Calculator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      description: "Free calculator for EA Sports FC 5% transfer market tax, net profit, and break-even sell price calculation.",
      url: "https://elitefutbot.com/tools/tax-calculator"
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much is EA's transfer market tax in FC 26 & FC 27?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EA Sports charges a flat 5% transaction fee on the gross sell price of every card sold on the transfer market."
          }
        },
        {
          "@type": "Question",
          name: "How do I calculate the break-even sell price in FC 26?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To break even after EA's 5% tax, divide your purchase price by 0.95. For example, if you buy a card for 9,500 coins, your break-even sell price is 10,000 coins."
          }
        }
      ]
    }
  ]
};

export default function TaxCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden font-sans">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Live 5% Tax Calculation Engine • FC 26 &amp; FC 27
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight uppercase leading-tight">
              EA FC 26 &amp; FC 27 <span className="text-primary italic">TAX CALCULATOR</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              Calculate EA's 5% transfer market tax, net profit, break-even sell price, and profit margins with surgical accuracy.
            </p>
          </div>

          {/* Interactive Calculator Container */}
          <TaxCalculatorComponent />
        </div>
      </div>
    </>
  );
}
