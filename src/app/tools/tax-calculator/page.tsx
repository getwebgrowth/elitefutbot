"use client";

import { useState } from "react";
import Link from "next/link";

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

const PRESETS = [
  { label: "10K", buy: 9500, sell: 12000 },
  { label: "50K", buy: 48000, sell: 60000 },
  { label: "100K", buy: 92000, sell: 115000 },
  { label: "500K", buy: 470000, sell: 580000 },
  { label: "1M", buy: 950000, sell: 1180000 },
];

export default function TaxCalculatorPage() {
  const [buyPrice, setBuyPrice] = useState<number>(85000);
  const [sellPrice, setSellPrice] = useState<number>(110000);
  const [quantity, setQuantity] = useState<number>(1);

  const safeQuantity = Math.max(1, quantity || 1);
  const totalCost = (buyPrice || 0) * safeQuantity;
  const totalGrossRevenue = (sellPrice || 0) * safeQuantity;
  const eaTax = Math.round(totalGrossRevenue * 0.05);
  const netRevenue = totalGrossRevenue - eaTax;
  const netProfit = netRevenue - totalCost;

  // Break even calculation per single card
  const breakEvenSingle = buyPrice > 0 ? Math.ceil(buyPrice / 0.95) : 0;
  const profitMargin = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(1) : "0.0";

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
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-primary/30 backdrop-blur-xl shadow-[0_0_50px_rgba(204,255,0,0.1)] space-y-8">
            
            {/* Quick Presets Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Quick Market Presets:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => {
                      setBuyPrice(preset.buy);
                      setSellPrice(preset.sell);
                      setQuantity(1);
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-primary hover:text-dark border border-white/10 text-xs font-headline font-bold uppercase tracking-wider transition-all"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Controls Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="tax-buy-price" className="text-xs font-headline font-bold uppercase tracking-wider text-gray-400">
                  Buy Price (Coins)
                </label>
                <div className="relative">
                  <input
                    id="tax-buy-price"
                    type="number"
                    value={buyPrice || ""}
                    onChange={(e) => setBuyPrice(Number(e.target.value))}
                    placeholder="e.g. 85000"
                    aria-label="Buy Price in Coins"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-primary focus:outline-none text-white font-mono font-bold text-lg"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 uppercase" aria-hidden="true">
                    Coins
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="tax-sell-price" className="text-xs font-headline font-bold uppercase tracking-wider text-gray-400">
                  Target Sell Price (Coins)
                </label>
                <div className="relative">
                  <input
                    id="tax-sell-price"
                    type="number"
                    value={sellPrice || ""}
                    onChange={(e) => setSellPrice(Number(e.target.value))}
                    placeholder="e.g. 110000"
                    aria-label="Target Sell Price in Coins"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-primary focus:outline-none text-primary font-mono font-bold text-lg"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 uppercase" aria-hidden="true">
                    Coins
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="tax-quantity" className="text-xs font-headline font-bold uppercase tracking-wider text-gray-400">
                  Quantity
                </label>
                <div className="relative">
                  <input
                    id="tax-quantity"
                    type="number"
                    value={quantity || ""}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    placeholder="1"
                    min="1"
                    aria-label="Quantity of Cards"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-white/15 focus:border-primary focus:outline-none text-white font-mono font-bold text-lg"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 uppercase" aria-hidden="true">
                    Cards
                  </span>
                </div>
              </div>
            </div>

            {/* Calculated Output Breakdown Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  EA Tax (5%)
                </span>
                <div className="text-2xl font-headline font-bold text-red-400 font-mono">
                  - {eaTax.toLocaleString()} <span className="text-xs">Coins</span>
                </div>
                <span className="text-[10px] text-gray-400 block">5% deducted by EA</span>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Break-Even Sell Price
                </span>
                <div className="text-2xl font-headline font-bold text-amber-400 font-mono">
                  {breakEvenSingle.toLocaleString()} <span className="text-xs">Coins</span>
                </div>
                <span className="text-[10px] text-gray-400 block">Min. price for 0 loss</span>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  Profit Margin
                </span>
                <div className={`text-2xl font-headline font-bold font-mono ${netProfit >= 0 ? "text-primary" : "text-red-400"}`}>
                  {netProfit >= 0 ? `+${profitMargin}%` : `${profitMargin}%`}
                </div>
                <span className="text-[10px] text-gray-400 block">ROI on total cost</span>
              </div>

              <div className="p-5 rounded-2xl bg-primary/10 border border-primary/40 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                  Net Profit (After Tax)
                </span>
                <div className={`text-2xl font-headline font-black font-mono ${netProfit >= 0 ? "text-primary" : "text-red-400"}`}>
                  {netProfit >= 0 ? `+${netProfit.toLocaleString()}` : netProfit.toLocaleString()} <span className="text-xs">Coins</span>
                </div>
                <span className="text-[10px] text-gray-300 block font-bold">Pure profit retained</span>
              </div>

            </div>

          </div>

          {/* Manual vs Elite Sniper Logic Comparison */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase tracking-tight">
                Manual Trading vs <span className="text-primary italic">Automated Precision</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-lg mx-auto font-medium">
                Why thousands of FC 26 &amp; FC 27 traders rely on automated profit calculation tools.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden bg-card/60 backdrop-blur-md">
              <div className="grid grid-cols-3 p-4 bg-white/5 border-b border-white/10 text-xs font-black uppercase tracking-wider text-gray-400">
                <div>Feature</div>
                <div className="text-center text-gray-400">Manual Calculation</div>
                <div className="text-right text-primary">Elite Sniper Engine</div>
              </div>
              <div className="divide-y divide-white/5 text-xs sm:text-sm font-medium">
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-bold text-white">Tax Accuracy</div>
                  <div className="text-center text-gray-400">Human Error Prone</div>
                  <div className="text-right font-bold text-primary flex items-center justify-end gap-1">
                    <span>100% Math-Verified</span>
                    <span className="material-symbols-outlined text-sm">check_circle</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-bold text-white">Calculation Speed</div>
                  <div className="text-center text-gray-400">15 – 30 Seconds</div>
                  <div className="text-right font-bold text-primary flex items-center justify-end gap-1">
                    <span>Instant Real-Time</span>
                    <span className="material-symbols-outlined text-sm">bolt</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 p-4 items-center">
                  <div className="font-bold text-white">Break-Even Detection</div>
                  <div className="text-center text-gray-400">Rough Estimate</div>
                  <div className="text-right font-bold text-primary flex items-center justify-end gap-1">
                    <span>Exact Coin Target</span>
                    <span className="material-symbols-outlined text-sm">target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Discord Callout */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase tracking-tight">
              Ready to Automate Your Market Sniping?
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
              Join 50,000+ traders in our official Discord community. Get free access to our Chrome extension auto-sniper, live market investment signals, and SBC solver tools.
            </p>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-headline font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              Join Official Discord HQ For Free Access
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
