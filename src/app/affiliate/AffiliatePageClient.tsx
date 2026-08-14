"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQ {
  q: string;
  a: string;
}

interface AffiliatePageClientProps {
  faqs: FAQ[];
}

export default function AffiliatePageClient({ faqs }: AffiliatePageClientProps) {
  const [referrals, setReferrals] = useState(100);
  const [priceTier, setPriceTier] = useState<20 | 35>(20);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Commission calculations
  const commissionPercentage = referrals >= 250 ? 60 : 50;
  const revenuePerSale = (priceTier * (commissionPercentage / 100)).toFixed(2);
  const monthlyEarnings = (referrals * priceTier * (commissionPercentage / 100)).toFixed(2);
  const annualEarnings = (parseFloat(monthlyEarnings) * 12).toFixed(2);
  const sliderProgress = `${((referrals - 5) / (500 - 5)) * 100}%`;

  const getTier = (count: number) => {
    if (count >= 250) {
      return {
        name: "VIP Creator Tier",
        rate: "60% RevShare",
        cut: priceTier === 20 ? "$12.00 / sale" : "$21.00 / sale",
        perk: "Custom Promo Code + Up to 60% RevShare + Upfront Paid Video Sponsorships + Free Giveaways",
        color: "text-primary",
        border: "border-primary/50",
        badgeBg: "bg-primary/15 text-primary border-primary/40 shadow-[0_0_15px_rgba(204,255,0,0.2)]",
        badge: "VIP CREATOR (60%)",
        icon: "workspace_premium",
      };
    }
    if (count >= 100) {
      return {
        name: "Gold Ambassador",
        rate: "50% RevShare",
        cut: priceTier === 20 ? "$10.00 / sale" : "$17.50 / sale",
        perk: "Custom Follower Discount Code + Instant Daily Payouts + Dedicated Account Manager",
        color: "text-amber-400",
        border: "border-amber-500/40",
        badgeBg: "bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
        badge: "GOLD AMBASSADOR (50%)",
        icon: "military_tech",
      };
    }
    if (count >= 30) {
      return {
        name: "Silver Partner",
        rate: "50% RevShare",
        cut: priceTier === 20 ? "$10.00 / sale" : "$17.50 / sale",
        perk: "Free Lifetime Pro Bot License + Ready-Made Media Kits, Video Overlays & Graphics",
        color: "text-blue-400",
        border: "border-blue-500/40",
        badgeBg: "bg-blue-500/15 text-blue-300 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]",
        badge: "SILVER PARTNER (50%)",
        icon: "verified",
      };
    }
    return {
      name: "Starter Partner",
      rate: "50% RevShare",
      cut: priceTier === 20 ? "$10.00 / sale" : "$17.50 / sale",
      perk: "50% Standard Lifetime Commission on all licenses ($10/sale now, $17.50/sale at $35)",
      color: "text-gray-300",
      border: "border-white/10",
      badgeBg: "bg-white/10 text-gray-200 border-white/20",
      badge: "STARTER TIER (50%)",
      icon: "rocket_launch",
    };
  };

  const currentTier = getTier(referrals);

  const copySampleLink = () => {
    navigator.clipboard?.writeText("https://elitefutbot.com/ref/yourname");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white pt-24 pb-20 overflow-hidden font-sans selection:bg-primary selection:text-black">
      
      {/* ──────────────────────────────────────────────────────────── */}
      {/* HERO SECTION                                                */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-16 overflow-hidden border-b border-white/5" aria-label="Partner Program Hero">
        {/* Lightweight CSS Radial Glows (Zero Paint Jank) */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-30"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.08),transparent_70%)] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.06),transparent_70%)] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 text-left space-y-7 max-w-2xl">
              
              {/* Partner Network Live Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-black uppercase tracking-widest backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span>FC 26 &amp; FC 27 Partner Program</span>
              </div>
              
              {/* Massive Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-[4.75rem] font-black tracking-tight leading-[1.03] text-white">
                Monetize Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#E5FF66] to-emerald-400 drop-shadow-[0_0_35px_rgba(204,255,0,0.35)]">
                  FC 27 Audience.
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-medium">
                Earn <span className="text-primary font-bold">50% lifetime commission</span> (<span className="text-white font-bold">$10.00 to $17.50+ per sale</span>) promoting the #1 FC 26 &amp; FC 27 Bot. Insane conversion rates. Instant <span className="text-emerald-400 font-bold">Daily Payouts</span> via Crypto &amp; PayPal.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-1">
                <Link
                  href="https://discord.gg/Rkb9nF6WG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Become an Elite FUT SNIPER Partner via Discord"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-black text-dark bg-primary rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_30px_rgba(204,255,0,0.35)] min-h-[48px]"
                >
                  <span className="relative flex items-center gap-2 uppercase tracking-wider text-sm font-black">
                    Become a Partner <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">arrow_forward</span>
                  </span>
                </Link>
                <a
                  href="#calculator"
                  aria-label="Jump to earnings calculator"
                  className="group inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-white/[0.05] border border-white/15 rounded-xl hover:bg-white/[0.08] hover:border-primary/40 transition-colors uppercase tracking-wider text-sm gap-2 cursor-pointer min-h-[48px]"
                >
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">calculate</span>
                  <span>Estimate Earnings</span>
                </a>
              </div>
              
              {/* 4-Stat Glass Metric Cards Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-sm text-primary" aria-hidden="true">trending_up</span>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">Avg Conversion</span>
                  </div>
                  <div className="text-2xl font-black text-white font-technical">14.8%</div>
                </div>

                <div className="bg-[#121212] border border-emerald-500/25 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-sm text-emerald-400" aria-hidden="true">bolt</span>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Daily Payouts</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-400 font-technical">Instant</div>
                </div>

                <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-sm text-blue-400" aria-hidden="true">schedule</span>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">Cookie Life</span>
                  </div>
                  <div className="text-2xl font-black text-white font-technical">90 Days</div>
                </div>

                <div className="bg-[#121212] border border-primary/25 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="material-symbols-outlined text-sm text-primary" aria-hidden="true">payments</span>
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">Cut Per Sale</span>
                  </div>
                  <div className="text-2xl font-black text-primary font-technical">$10–$17.50</div>
                </div>
              </div>

            </div>

            {/* Right Column: The Tilted Fast-Rendering Creator Terminal */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="relative will-change-transform">
                {/* Glow Backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.12),transparent_70%)] pointer-events-none"></div>
                
                {/* Main Tilted Dashboard Card */}
                <div className="relative bg-[#111111] border border-white/15 rounded-[2.25rem] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden group transform lg:-rotate-2 lg:hover:rotate-0 transition-transform duration-300">
                  
                  {/* Terminal Header Bar */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                      <span className="text-[10px] text-gray-300 font-mono font-semibold ml-2">portal.elitefutbot.com</span>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-black flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Daily Active
                    </div>
                  </div>

                  {/* Total Payout Centerpiece */}
                  <div className="bg-[#181818] border border-white/10 rounded-2xl p-5 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 text-primary shadow-[0_0_15px_rgba(204,255,0,0.15)]">
                          <span className="material-symbols-outlined text-2xl" aria-hidden="true">account_balance_wallet</span>
                        </div>
                        <div>
                          <div className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mb-0.5">Total Paid Out</div>
                          <div className="text-3xl font-black text-white font-technical tracking-tight">
                            $12,450<span className="text-gray-400 font-normal">.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                          +38.4% this wk
                        </span>
                        <div className="text-[10px] text-gray-300 mt-1 uppercase font-medium">USDT • PayPal</div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Referrals Stream */}
                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-center justify-between text-[10px] text-gray-300 font-bold uppercase tracking-widest px-1">
                      <span>Live Referral Feed</span>
                      <span className="text-emerald-400 font-mono">● 50% Instant Cut</span>
                    </div>

                    {[
                      { user: "FC_SnipingKing", amount: "+$17.50", time: "2m ago", plan: "FC 27 Pro License", platform: "YT", color: "bg-red-500/20 text-red-400 border-red-500/30" },
                      { user: "UltimateTrader99", amount: "+$17.50", time: "14m ago", plan: "FC 26/27 Pro License", platform: "TT", color: "bg-pink-500/20 text-pink-400 border-pink-500/30" },
                      { user: "FUT_SniperGod", amount: "+$10.00", time: "1h ago", plan: "Launch License ($20)", platform: "DC", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
                    ].map((tx, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors hover:border-primary/30">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-xs font-black shrink-0 ${tx.color}`}>
                            {tx.platform}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-200">{tx.user}</div>
                            <div className="text-[10px] text-gray-300 font-medium">{tx.plan}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-black text-primary font-technical">{tx.amount}</div>
                          <div className="text-[10px] text-gray-400 uppercase font-medium">{tx.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Copy Link Bar */}
                  <div className="bg-black/90 border border-primary/30 rounded-2xl p-2.5 mb-5 flex items-center justify-between gap-2">
                    <div className="truncate text-xs font-mono text-gray-300 pl-2">
                      https://elitefutbot.com/ref/<span className="text-primary font-bold">yourcode</span>
                    </div>
                    <button
                      type="button"
                      onClick={copySampleLink}
                      aria-label="Copy affiliate referral link"
                      className="px-3.5 py-1.5 bg-primary text-dark rounded-lg text-xs font-black transition-transform shrink-0 flex items-center gap-1 shadow-[0_0_15px_rgba(204,255,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer min-h-[36px]"
                    >
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">
                        {copiedLink ? "check" : "content_copy"}
                      </span>
                      <span>{copiedLink ? "Copied!" : "Copy Link"}</span>
                    </button>
                  </div>
                  
                  {/* Traffic Sources Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                     <div className="flex items-center gap-2 text-gray-300">
                       <span className="text-[11px] font-bold uppercase tracking-wider">Channels:</span>
                       <div className="flex -space-x-1.5">
                         <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 border border-[#111] flex items-center justify-center text-[10px] font-bold">YT</span>
                         <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 border border-[#111] flex items-center justify-center text-[10px] font-bold">TT</span>
                         <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 border border-[#111] flex items-center justify-center text-[10px] font-bold">TW</span>
                         <span className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 border border-[#111] flex items-center justify-center text-[10px] font-bold">DC</span>
                       </div>
                     </div>
                     <span className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                       Zero Hold Period
                     </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* INTERACTIVE EARNINGS SIMULATOR                               */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 relative" id="calculator" aria-label="Earnings Calculator">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-black uppercase tracking-[0.25em] text-primary border border-primary/25 bg-primary/10 px-4 py-1.5 rounded-full mb-3">
            REVENUE SIMULATOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Calculate Your <span className="text-primary">Daily &amp; Monthly Payout</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-medium">
            Switch between current launch pricing ($20 / $10 cut) and upcoming release ($35 / $17.50 cut) with instant daily payouts.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#111111] border border-white/15 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.06),transparent_70%)] pointer-events-none"></div>

          <div className="space-y-8 relative z-10">

            {/* Price Switcher Segmented Control */}
            <div className="bg-black/70 border border-white/15 p-1.5 rounded-2xl flex flex-col sm:flex-row gap-2 max-w-xl mx-auto" role="group" aria-label="Select Pricing Tier">
              <button
                type="button"
                onClick={() => setPriceTier(20)}
                aria-pressed={priceTier === 20}
                aria-label="Select Launch Price of 20 dollars with 10 dollars cut per sale"
                className={`flex-1 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px] ${
                  priceTier === 20
                    ? "bg-primary text-dark shadow-[0_0_20px_rgba(204,255,0,0.35)]"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Launch Price ($20)</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${priceTier === 20 ? "bg-black/20 text-black" : "bg-primary/10 text-primary"}`}>
                  $10.00 / Sale
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPriceTier(35)}
                aria-pressed={priceTier === 35}
                aria-label="Select Official Price of 35 dollars with 17.50 dollars cut per sale"
                className={`flex-1 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px] ${
                  priceTier === 35
                    ? "bg-emerald-400 text-dark shadow-[0_0_20px_rgba(52,211,153,0.35)]"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Official Price ($35)</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${priceTier === 35 ? "bg-black/20 text-black" : "bg-emerald-500/10 text-emerald-400"}`}>
                  $17.50 / Sale
                </span>
              </button>
            </div>

            {/* Sales Volume Header & Unlocked Tier Status */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6 pt-2">
              <div>
                <label htmlFor="referral-slider" className="text-xs font-bold text-gray-300 uppercase tracking-widest block mb-1">
                  Monthly Referred Sales
                </label>
                <div className="text-4xl sm:text-5xl font-black text-white font-technical">{referrals} Sales / Month</div>
              </div>
              
              <div className="w-full md:w-auto bg-[#161616] border border-white/10 rounded-2xl p-4 text-left md:text-right shadow-sm">
                <div className="flex items-center gap-2 justify-start md:justify-end mb-1">
                  <span className="material-symbols-outlined text-primary text-sm" aria-hidden="true">{currentTier.icon}</span>
                  <span className={`text-xs font-black px-2.5 py-0.5 rounded-md border ${currentTier.badgeBg}`}>
                    {currentTier.badge}
                  </span>
                </div>
                <div className="text-xs font-bold text-white">{currentTier.name} ({currentTier.cut})</div>
                <div className="text-[11px] text-gray-300 max-w-sm mt-0.5 leading-tight">{currentTier.perk}</div>
              </div>
            </div>

            {/* Interactive Range Slider with Preset Quick-Select */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs text-gray-300 font-bold uppercase tracking-wider">
                <span>Adjust Sales Volume</span>
                <span className="text-primary font-technical">{referrals} Sales Selected</span>
              </div>

              <input
                id="referral-slider"
                type="range"
                min="5"
                max="500"
                step="5"
                value={referrals}
                onChange={(e) => setReferrals(parseInt(e.target.value))}
                style={{ "--slider-progress": sliderProgress } as React.CSSProperties}
                className="custom-range-slider w-full cursor-pointer"
                aria-label="Monthly Referred Sales Slider"
              />

              {/* Preset Buttons */}
              <div className="flex flex-wrap gap-2 pt-2" role="group" aria-label="Select sales volume presets">
                {[10, 30, 50, 100, 250, 500].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setReferrals(preset)}
                    aria-label={`Set referrals to ${preset} sales per month`}
                    className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer min-h-[44px] ${
                      referrals === preset
                        ? "bg-primary text-dark font-black shadow-[0_0_12px_rgba(204,255,0,0.3)] scale-105"
                        : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    {preset} Sales
                  </button>
                ))}
              </div>
            </div>

            {/* Output Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
              
              <div className="p-6 rounded-2xl bg-[#161616] border border-white/10 text-center flex flex-col justify-center shadow-sm">
                <div className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Revenue Per Sale</div>
                <div className="text-3xl sm:text-4xl font-black text-white font-technical">
                  ${revenuePerSale}
                </div>
                <div className="text-[11px] text-gray-300 mt-2 font-medium">
                  {commissionPercentage}% cut on ${priceTier} license
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-[#141414] border-2 border-primary text-center relative overflow-hidden shadow-[0_0_30px_rgba(204,255,0,0.15)] flex flex-col justify-center">
                <div className="text-xs font-black text-primary uppercase tracking-widest mb-2 flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">stars</span>
                  <span>ESTIMATED MONTHLY PAYOUT</span>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-primary font-technical drop-shadow-[0_0_15px_rgba(204,255,0,0.35)]">
                  ${monthlyEarnings}
                </div>
                <div className="text-xs text-emerald-400 font-bold mt-2 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">payments</span>
                  <span>Instant Daily Payouts (Crypto/PayPal)</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#161616] border border-white/10 text-center flex flex-col justify-center shadow-sm">
                <div className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2">Projected Annual Total</div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-technical">
                  ${annualEarnings}
                </div>
                <div className="text-[11px] text-gray-300 mt-2 font-medium">
                  12-month passive creator income
                </div>
              </div>

            </div>

            {/* Formula Breakdown Bar */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base" aria-hidden="true">functions</span>
                <span>
                  <strong>Formula:</strong> {referrals} Sales × ${priceTier}.00 × {commissionPercentage}% Commission = <span className="text-primary font-bold font-technical">${monthlyEarnings} / Month</span>
                </span>
              </div>
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lock in 50% commission rate on Discord"
                className="text-primary hover:underline font-bold flex items-center gap-1 shrink-0 cursor-pointer min-h-[44px]"
              >
                <span>Lock In Your 50% Rate</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* CREATOR MONETIZATION BLUEPRINTS                              */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5 relative" aria-label="Creator Monetization Blueprints">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full inline-block mb-3">
              CREATOR PLAYBOOKS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How Top FIFA &amp; FC 27 Creators Monetize With <span className="text-primary">Elite FUT SNIPER</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-medium">
              Whether you post 15-second TikTok snipes, YouTube FC 26 &amp; FC 27 filter guides, Twitch streams, or manage Discord trading groups — we provide custom kits to maximize your earnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* TikTok & Reels Blueprint */}
            <div className="bg-[#121212] border border-white/10 hover:border-pink-500/50 rounded-3xl p-7 transition-colors duration-200 group flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">movie</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-pink-500/10 text-pink-400 border border-pink-500/20 px-3 py-1 rounded-md">
                    SHORT-FORM
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">TikTok &amp; Reels</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-5">
                  15-second clips of 59th-minute FC 26 &amp; FC 27 snipes (Yamal, Mbappé) convert at insane rates. Put link in bio + give your audience a custom discount code.
                </p>
                <ul className="space-y-2.5 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Custom vanity promo code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Viral hook &amp; script templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Est. Yield: $850–$2,400/mo</span>
                  </li>
                </ul>
              </div>
              <div className="text-xs font-bold text-pink-400 flex items-center gap-1 border-t border-white/5 pt-4">
                <span>Instant Daily Payouts</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </div>
            </div>

            {/* YouTube Channels Blueprint */}
            <div className="bg-[#121212] border border-white/10 hover:border-red-500/50 rounded-3xl p-7 transition-colors duration-200 group flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">video_library</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-md">
                    LONG-FORM
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">YouTube Channels</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-5">
                  Post FC 27 filter setup tutorials, SBC solver walkthroughs, or trade reviews. Put your affiliate link in pinned comments and video descriptions.
                </p>
                <ul className="space-y-2.5 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Free review bot license</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Upfront sponsorship bonuses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Est. Yield: $1,800–$6,500/mo</span>
                  </li>
                </ul>
              </div>
              <div className="text-xs font-bold text-red-400 flex items-center gap-1 border-t border-white/5 pt-4">
                <span>Free Bot License + Sponsorship</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </div>
            </div>

            {/* Twitch & Kick Streamers Blueprint */}
            <div className="bg-[#121212] border border-white/10 hover:border-purple-500/50 rounded-3xl p-7 transition-colors duration-200 group flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">live_tv</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-md">
                    STREAMERS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Twitch &amp; Kick</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-5">
                  Demonstrate sub-20ms sniping live on stream. Use automated chatbot commands (`!bot`, `!snipe`) and subscriber discounts to drive sales.
                </p>
                <ul className="space-y-2.5 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Automated stream chat triggers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Subscriber exclusive discount</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Est. Yield: $1,200–$4,100/mo</span>
                  </li>
                </ul>
              </div>
              <div className="text-xs font-bold text-purple-400 flex items-center gap-1 border-t border-white/5 pt-4">
                <span>Chatbot &amp; Sub Perks</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </div>
            </div>

            {/* Discord & Trading Groups Blueprint */}
            <div className="bg-[#121212] border border-white/10 hover:border-indigo-500/50 rounded-3xl p-7 transition-colors duration-200 group flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">groups</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-md">
                    COMMUNITIES
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Discord Groups</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-5">
                  Monetize your FC 26 &amp; FC 27 trading server with automated signal webhook integrations, role sync, and bulk community deals.
                </p>
                <ul className="space-y-2.5 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-indigo-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Automated signal webhooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-indigo-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Bulk member discount tiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-indigo-400 text-sm" aria-hidden="true">check_circle</span>
                    <span>Est. Yield: $3,200–$11,000+/mo</span>
                  </li>
                </ul>
              </div>
              <div className="text-xs font-bold text-indigo-400 flex items-center gap-1 border-t border-white/5 pt-4">
                <span>Community Webhook Rates</span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
              </div>
            </div>

          </div>

          {/* Real Creator Testimonial */}
          <div className="mt-14 p-8 sm:p-10 rounded-[2.5rem] border border-white/10 bg-[#111111] relative overflow-hidden shadow-lg">
            <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-4xl font-black shrink-0" aria-hidden="true">
                “
              </div>
              <div>
                <blockquote className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
                  Elite FUT SNIPER has the highest conversion rate I have ever seen in the FIFA &amp; FC 27 trading niche. The instant daily payouts have never missed a beat, and my Discord members love it because the 100% local Chrome extension keeps their EA accounts completely safe with zero bans.
                </blockquote>
                <div className="mt-5 text-xs text-gray-300 font-bold uppercase tracking-widest flex flex-wrap items-center gap-2.5">
                  <span className="text-white font-black text-sm">Matt D.</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
                  <span>FC Creator &amp; Discord Trading Leader (32K Members)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true"></span>
                  <span className="text-primary font-technical font-black text-sm">Earned $12,450+ in 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Creator Banner */}
          <div className="mt-8 p-8 rounded-[2.5rem] bg-gradient-to-r from-primary/10 via-[#141414] to-emerald-500/10 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary text-dark flex items-center justify-center font-black text-3xl shrink-0 shadow-[0_0_20px_rgba(204,255,0,0.35)]" aria-hidden="true">
                ★
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-primary mb-1">VIP CREATOR PROGRAM</div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Got 5,000+ Followers or Discord Members?</h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Qualify for <span className="text-primary font-bold">60% RevShare ($12 to $21/sale)</span>, upfront video sponsorship fees, and free community bot giveaways.
                </p>
              </div>
            </div>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apply for VIP Creator Deal on Discord"
              className="px-7 py-4 bg-primary text-dark font-black text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(204,255,0,0.3)] shrink-0 flex items-center gap-2 whitespace-nowrap cursor-pointer min-h-[48px]"
            >
              <span>Apply for VIP Creator Deal</span>
              <span className="material-symbols-outlined text-sm" aria-hidden="true">rocket_launch</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* WHY OUR PRODUCT CONVERTS AT 14.8%+ (BENTO GRID)              */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Why Traffic Converts">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-primary border border-primary/25 bg-primary/10 px-4 py-1.5 rounded-full mb-3 inline-block">
            CONVERSION ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Our FC 26 &amp; FC 27 Bot Converts at <span className="text-primary">14.8%+</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-sm sm:text-base font-medium">
            You won&apos;t waste creator traffic on a tool buyers hesitate on. Elite FUT SNIPER directly addresses every major objection in the FIFA trading space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Local Chrome Extension */}
          <div className="md:col-span-2 bg-[#111111] border border-white/10 rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group hover:border-primary/40 transition-colors shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">verified_user</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Zero Password Sharing (100% Local Browser Session)</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl font-medium">
              Unlike cloud bots (FutEarn, FUT Hunter) that demand user EA login credentials, our local Chrome extension operates directly in the user&apos;s active browser session. Instant user trust translates into immediate purchases and zero refund chargebacks.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-lg">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">lock</span>
              <span>100% Account Safety = Unmatched Conversion Rate</span>
            </div>
          </div>

          {/* Card 2: 20ms Market Dominance */}
          <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] p-8 sm:p-10 group hover:border-emerald-400/40 transition-colors shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-6">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">speed</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Sub-20ms FC 26 &amp; FC 27 Sniping</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Direct in-browser DOM injection allows users to win 59th-minute deals 15x faster than cloud bots. High satisfaction guarantees long-term retention.
            </p>
          </div>

          {/* Card 3: AI SBC Solver */}
          <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] p-8 sm:p-10 group hover:border-primary/40 transition-colors shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">smart_toy</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">AI SBC Solver Included</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Features the world&apos;s first in-browser AI SBC Solver that automatically calculates cheapest combinations and buys them with 1 click. Massive perceived value.
            </p>
          </div>

          {/* Card 4: Anti-Ban Algorithms */}
          <div className="md:col-span-2 bg-[#111111] border border-white/10 rounded-[2.5rem] p-8 sm:p-10 group hover:border-blue-500/40 transition-colors shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 mb-6">
              <span className="material-symbols-outlined text-3xl" aria-hidden="true">shield</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Anti-Ban Behavioral Jitter Architecture</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl font-medium">
              Randomized delays, humanized mouse movements, and natural cooldowns mimic organic player behavior. Zero automated bans ensure your followers thank you rather than blame you.
            </p>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* COMPARISON MATRIX                                            */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5" aria-label="Program Comparison Table">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How We Compare to <span className="text-primary">Other Partner Programs</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 font-medium">See why gaming creators are switching to Elite FUT SNIPER for FC 26 &amp; FC 27.</p>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse" aria-label="Commission and feature comparison table">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th scope="col" className="py-6 px-7 font-bold text-gray-300 uppercase tracking-wider">Feature / Policy</th>
                    <th scope="col" className="py-6 px-7 font-black text-primary uppercase tracking-wider bg-primary/10 border-x border-primary/25 text-center">
                      Elite FUT SNIPER
                    </th>
                    <th scope="col" className="py-6 px-7 font-bold text-gray-300 uppercase tracking-wider text-center">
                      Typical Gaming Affiliates
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="py-5 px-7 font-semibold text-white">Commission Rate</th>
                    <td className="py-5 px-7 text-center font-bold text-primary bg-primary/5 border-x border-primary/10">
                      50% – 60% Lifetime RevShare
                    </td>
                    <td className="py-5 px-7 text-center text-gray-300">10% – 20% One-Off</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="py-5 px-7 font-semibold text-white">Revenue Per Sale</th>
                    <td className="py-5 px-7 text-center font-bold text-primary bg-primary/5 border-x border-primary/10">
                      $10.00 (Launch) → $17.50 (Regular)
                    </td>
                    <td className="py-5 px-7 text-center text-gray-300">$2.00 – $5.00</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="py-5 px-7 font-semibold text-white">Payout Frequency</th>
                    <td className="py-5 px-7 text-center font-bold text-emerald-400 bg-primary/5 border-x border-primary/10">
                      Instant Daily Payouts (24h)
                    </td>
                    <td className="py-5 px-7 text-center text-gray-300">Net-30 / Net-60 Days</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="py-5 px-7 font-semibold text-white">Cookie Duration</th>
                    <td className="py-5 px-7 text-center font-bold text-primary bg-primary/5 border-x border-primary/10">
                      90 Days (Persistent)
                    </td>
                    <td className="py-5 px-7 text-center text-gray-300">24 Hours – 30 Days</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="py-5 px-7 font-semibold text-white">Payout Methods</th>
                    <td className="py-5 px-7 text-center font-bold text-white bg-primary/5 border-x border-primary/10">
                      Crypto (USDT), PayPal, Bank Wire
                    </td>
                    <td className="py-5 px-7 text-center text-gray-300">Bank Wire Only ($100 Min)</td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="py-5 px-7 font-semibold text-white">Creator Bot License</th>
                    <td className="py-5 px-7 text-center font-bold text-primary bg-primary/5 border-x border-primary/10">
                      Free Pro License Provided
                    </td>
                    <td className="py-5 px-7 text-center text-gray-300">Must Buy Own License</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* 3-STEP ONBOARDING                                            */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="How to Get Started">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-primary border border-primary/25 bg-primary/10 px-4 py-1.5 rounded-full mb-3 inline-block">
            FAST SETUP
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Start Earning in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2 font-medium">Get up and running in less than 2 minutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#111111] border border-white/10 hover:border-primary/40 rounded-[2.5rem] p-8 sm:p-10 transition-colors group shadow-md">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-xl">
                STEP 01
              </span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-3xl" aria-hidden="true">
                person_add
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Join Partner Network</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Join our official Discord and claim your unique referral link and custom follower discount code. Instant approval with zero signup fees.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 hover:border-primary/40 rounded-[2.5rem] p-8 sm:p-10 transition-colors group shadow-md">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-xl">
                STEP 02
              </span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-3xl" aria-hidden="true">
                share
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Share With Your Audience</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Add your link or promo code to your TikTok bio, YouTube video descriptions, Twitch chatbot triggers (`!bot`), or Discord trading channels.
            </p>
          </div>

          <div className="bg-[#111111] border border-white/10 hover:border-primary/40 rounded-[2.5rem] p-8 sm:p-10 transition-colors group shadow-md">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 border border-primary/25 px-3.5 py-1.5 rounded-xl">
                STEP 03
              </span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-3xl" aria-hidden="true">
                account_balance_wallet
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Collect 50% Daily</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-medium">
              Earn $10.00 to $17.50+ on every single sale. Withdraw your earnings daily via Crypto (USDT), PayPal, or Direct Bank Wire.
            </p>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* FAQ SECTION                                                  */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/5" id="faq" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              FC 26 &amp; FC 27 Partner <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-gray-300 text-sm mt-2 font-medium">Clear, straightforward answers about commissions, daily payouts, and creator perks.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-2xl border border-white/10 overflow-hidden transition-colors hover:border-primary/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`affiliate-faq-answer-${index}`}
                  aria-label={`Toggle FAQ: ${faq.q}`}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer min-h-[48px]"
                >
                  <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
                  <span className="material-symbols-outlined text-primary text-xl shrink-0" aria-hidden="true">
                    {openFaq === index ? "remove" : "add"}
                  </span>
                </button>
                {openFaq === index && (
                  <div id={`affiliate-faq-answer-${index}`} className="px-6 pb-6 text-xs sm:text-sm text-gray-300 border-t border-white/5 pt-4 leading-relaxed font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────── */}
      {/* FINAL CTA BANNER                                             */}
      {/* ──────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="join-now" aria-label="Join Partner Program">
        <div className="p-10 sm:p-16 rounded-[2.5rem] bg-[#141414] border border-primary/35 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.08),transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block mb-6">
              JOIN 450+ ACTIVE FC 26 &amp; FC 27 CREATORS &amp; PARTNERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Ready to Earn <span className="text-primary">50% Lifetime Commission?</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
              Start earning $10.00 to $17.50+ per sale today with instant daily payouts. Instant approval for YouTube, TikTok, Twitch, and Discord creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply as a Creator or Partner on Discord"
                className="w-full sm:w-auto px-10 py-4 bg-primary text-dark font-black text-base uppercase tracking-wider rounded-xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>Apply as a Creator / Partner</span>
                <span className="material-symbols-outlined text-xl" aria-hidden="true">rocket_launch</span>
              </Link>
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Affiliate Manager on Discord"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/15 text-white font-bold text-base uppercase tracking-wider rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>Contact Affiliate Manager</span>
                <span className="material-symbols-outlined text-xl" aria-hidden="true">forum</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
