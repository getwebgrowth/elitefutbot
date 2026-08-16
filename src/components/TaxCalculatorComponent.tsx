"use client";

import { useState } from "react";
import Link from "next/link";

const PRESETS = [
  { label: "10K", buy: 9500, sell: 12000 },
  { label: "50K", buy: 48000, sell: 60000 },
  { label: "100K", buy: 92000, sell: 115000 },
  { label: "500K", buy: 470000, sell: 580000 },
  { label: "1M", buy: 950000, sell: 1180000 },
];

export default function TaxCalculatorComponent() {
  const [buyPrice, setBuyPrice] = useState<number>(85000);
  const [sellPrice, setSellPrice] = useState<number>(110000);
  const [quantity, setQuantity] = useState<number>(1);

  const safeQuantity = Math.max(1, quantity || 1);
  const totalCost = (buyPrice || 0) * safeQuantity;
  const totalGrossRevenue = (sellPrice || 0) * safeQuantity;
  const eaTax = Math.round(totalGrossRevenue * 0.05);
  const netRevenue = totalGrossRevenue - eaTax;
  const netProfit = netRevenue - totalCost;

  const breakEvenSingle = buyPrice > 0 ? Math.ceil(buyPrice / 0.95) : 0;
  const profitMargin = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(1) : "0.0";

  return (
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
              }}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/[0.05] hover:bg-primary/20 hover:text-primary border border-white/10 hover:border-primary/40 transition-all text-gray-300"
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Buy Price */}
        <div className="space-y-2">
          <label htmlFor="buy-price-input" className="block text-xs font-bold text-gray-200 uppercase tracking-wider">
            Buy Price (Coins)
          </label>
          <div className="relative">
            <input
              id="buy-price-input"
              type="number"
              value={buyPrice || ""}
              onChange={(e) => setBuyPrice(Math.max(0, parseInt(e.target.value) || 0))}
              placeholder="e.g. 85000"
              aria-label="Buy Price in Coins"
              className="w-full bg-black/60 border border-white/20 rounded-2xl px-4 py-3 text-white font-mono font-bold focus:outline-none focus:border-primary transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-300 font-mono">
              COINS
            </span>
          </div>
        </div>

        {/* Sell Price */}
        <div className="space-y-2">
          <label htmlFor="sell-price-input" className="block text-xs font-bold text-gray-200 uppercase tracking-wider">
            Target Sell Price (Coins)
          </label>
          <div className="relative">
            <input
              id="sell-price-input"
              type="number"
              value={sellPrice || ""}
              onChange={(e) => setSellPrice(Math.max(0, parseInt(e.target.value) || 0))}
              placeholder="e.g. 110000"
              aria-label="Target Sell Price in Coins"
              className="w-full bg-black/60 border border-white/20 rounded-2xl px-4 py-3 text-white font-mono font-bold focus:outline-none focus:border-primary transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-300 font-mono">
              COINS
            </span>
          </div>
        </div>

        {/* Card Quantity */}
        <div className="space-y-2">
          <label htmlFor="card-quantity-input" className="block text-xs font-bold text-gray-200 uppercase tracking-wider">
            Quantity (Cards)
          </label>
          <div className="relative">
            <input
              id="card-quantity-input"
              type="number"
              min="1"
              value={quantity || 1}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              aria-label="Quantity in Cards"
              className="w-full bg-black/60 border border-white/20 rounded-2xl px-4 py-3 text-white font-mono font-bold focus:outline-none focus:border-primary transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-300 font-mono">
              UNITS
            </span>
          </div>
        </div>
      </div>

      {/* Results Display Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {/* Total EA Tax */}
        <div className="p-5 rounded-2xl bg-black/40 border border-red-500/20 space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
            EA 5% Tax Loss
          </span>
          <div className="text-2xl font-black font-mono text-red-500">
            -{eaTax.toLocaleString()}
          </div>
          <span className="text-[10px] text-gray-400 font-medium">
            5% subtracted on sale
          </span>
        </div>

        {/* Break Even Price */}
        <div className="p-5 rounded-2xl bg-black/40 border border-amber-500/20 space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            Break-Even Sell Price
          </span>
          <div className="text-2xl font-black font-mono text-amber-400">
            {breakEvenSingle.toLocaleString()}
          </div>
          <span className="text-[10px] text-gray-400 font-medium">
            Min price to avoid loss
          </span>
        </div>

        {/* Net Revenue */}
        <div className="p-5 rounded-2xl bg-black/40 border border-blue-500/20 space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
            Net Coins Received
          </span>
          <div className="text-2xl font-black font-mono text-blue-400">
            {netRevenue.toLocaleString()}
          </div>
          <span className="text-[10px] text-gray-400 font-medium">
            After 5% tax deduction
          </span>
        </div>

        {/* Net Profit */}
        <div className={`p-5 rounded-2xl bg-black/40 border space-y-1 ${netProfit >= 0 ? "border-primary/40" : "border-red-500/40"}`}>
          <span className={`text-[11px] font-bold uppercase tracking-wider ${netProfit >= 0 ? "text-primary" : "text-red-400"}`}>
            Net Profit ({profitMargin}%)
          </span>
          <div className={`text-2xl font-black font-mono ${netProfit >= 0 ? "text-primary drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]" : "text-red-500"}`}>
            {netProfit >= 0 ? `+${netProfit.toLocaleString()}` : netProfit.toLocaleString()}
          </div>
          <span className="text-[10px] text-gray-400 font-medium">
            Pure profit added to club
          </span>
        </div>
      </div>
    </div>
  );
}
