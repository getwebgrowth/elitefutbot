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

  // Commission calculations based on selected price tier ($20 vs $35)
  const commissionPercentage = 50;
  const revenuePerSale = (priceTier * (commissionPercentage / 100)).toFixed(2);
  const monthlyEarnings = (referrals * priceTier * (commissionPercentage / 100)).toFixed(2);
  const annualEarnings = (parseFloat(monthlyEarnings) * 12).toFixed(2);

  const getTier = (count: number) => {
    if (count >= 250) {
      return {
        name: "VIP Creator Tier",
        perk: "Custom Promo Code + Up to 60% RevShare ($12–$21/sale) + Upfront Video Sponsorships",
        color: "text-primary",
        bg: "bg-primary/10 border-primary/30",
        badge: "VIP CREATOR",
      };
    }
    if (count >= 100) {
      return {
        name: "Gold Ambassador",
        perk: "Custom Follower Discount Code + Priority 24h Payouts + Dedicated Manager",
        color: "text-amber-400",
        bg: "bg-amber-500/10 border-amber-500/30",
        badge: "GOLD AMBASSADOR",
      };
    }
    if (count >= 30) {
      return {
        name: "Silver Partner",
        perk: "Free Lifetime Pro Bot License + Ready-Made Media Kits & Graphics",
        color: "text-blue-400",
        bg: "bg-blue-500/10 border-blue-500/30",
        badge: "SILVER PARTNER",
      };
    }
    return {
      name: "Starter Partner",
      perk: "50% Standard Lifetime Commission ($10/sale now, $17.50/sale at $35)",
      color: "text-gray-300",
      bg: "bg-gray-500/10 border-gray-500/30",
      badge: "STARTER TIER",
    };
  };

  const currentTier = getTier(referrals);

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 overflow-hidden font-sans">
      {/* Dynamic Background Glows */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

        {/* Clean, High-Impact Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
          {/* Focused Top Pill */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(204,255,0,0.12)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#CCFF00]"></span>
            <span className="text-xs font-black uppercase tracking-widest text-primary font-mono">
              50% Lifetime RevShare • $10 to $17.50 / Sale
            </span>
          </div>

          {/* Crisp, Bold Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-5 text-white">
            Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]">50% Lifetime Commission</span> <br className="hidden sm:block" />
            Promoting the #1 FC 26 &amp; FC 27 Bot.
          </h1>

          {/* Punchy 2-Line Subtitle */}
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            Get paid <span className="text-primary font-bold">$10.00 to $17.50+ per sale</span> with weekly Friday payouts. The highest-converting partner program for TikTok, YouTube, Twitch creators &amp; Discord trading communities.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center mb-12">
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-primary text-dark font-black text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2"
            >
              <span>Join Partner Program</span>
              <span className="material-symbols-outlined text-lg">bolt</span>
            </Link>
            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-primary text-lg">calculate</span>
              <span>Estimate Earnings</span>
            </a>
          </div>

          {/* Unified 4-Metric Glass Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-black text-primary font-technical mb-0.5">$10 – $17.50</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Revenue Per Sale</div>
            </div>
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-technical mb-0.5">50% – 60%</div>
              <div className="text-[11px] text-primary uppercase tracking-wider font-bold">Lifetime RevShare</div>
            </div>
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-technical mb-0.5">Weekly</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Friday Payouts</div>
            </div>
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/5 text-center">
              <div className="text-2xl sm:text-3xl font-black text-white font-technical mb-0.5">90 Days</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Cookie Tracking</div>
            </div>
          </div>
        </section>
      </div>

      {/* Interactive Earnings Calculator Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="calculator">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1">
            EARNINGS CALCULATOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Estimate Your <span className="text-primary">Affiliate Payouts</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Toggle between our current <span className="text-primary font-bold">$20 introductory price ($10/sale)</span> and upcoming <span className="text-emerald-400 font-bold">$35 price point ($17.50/sale)</span> at 50% commission.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden bg-card/70 shadow-2xl">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="space-y-8 relative z-10">
            {/* Price Point Switcher Tabs */}
            <div className="p-1.5 bg-black/60 border border-white/10 rounded-2xl flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
              <button
                type="button"
                onClick={() => setPriceTier(20)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  priceTier === 20
                    ? "bg-primary text-dark shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Current Launch Price ($20)</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${priceTier === 20 ? "bg-black/20 text-black" : "bg-primary/10 text-primary"}`}>
                  $10/Sale
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPriceTier(35)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  priceTier === 35
                    ? "bg-emerald-400 text-dark shadow-[0_0_20px_rgba(52,211,153,0.4)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Upcoming Price ($35)</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${priceTier === 35 ? "bg-black/20 text-black" : "bg-emerald-500/10 text-emerald-400"}`}>
                  $17.50/Sale
                </span>
              </button>
            </div>

            {/* Slider & Tier Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6 pt-2">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Referred Buyers / Active Users</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-technical">{referrals} Sales</div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Partner Tier</div>
                <div className={`inline-block text-xs font-black px-3.5 py-1.5 rounded-lg border ${currentTier.bg} ${currentTier.color}`}>
                  {currentTier.name}
                </div>
                <div className="text-[11px] text-gray-300 mt-1 max-w-xs">{currentTier.perk}</div>
              </div>
            </div>

            {/* Range Input Slider */}
            <div className="space-y-3">
              <label htmlFor="referral-count-slider" className="sr-only">Number of referred buyers (5 to 500)</label>
              <input
                id="referral-count-slider"
                type="range"
                min="5"
                max="500"
                step="5"
                value={referrals}
                onChange={(e) => setReferrals(parseInt(e.target.value))}
                aria-label="Number of referred buyers"
                aria-valuemin={5}
                aria-valuemax={500}
                aria-valuenow={referrals}
                className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary border border-white/10"
              />
              <div className="flex justify-between text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                <span>5 Sales</span>
                <span>100 Sales</span>
                <span>250 Sales</span>
                <span>500+ Sales</span>
              </div>
            </div>

            {/* Yield Output Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-center">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Revenue Per Sale</div>
                <div className="text-3xl sm:text-4xl font-black text-white font-technical">
                  ${revenuePerSale}
                </div>
                <div className="text-[11px] text-gray-400 mt-2 font-medium">50% cut on ${priceTier} license</div>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-primary/40 text-center relative overflow-hidden shadow-[0_0_30px_rgba(204,255,0,0.1)]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl rounded-full"></div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2 font-black">Estimated Monthly Payout</div>
                <div className="text-3xl sm:text-4xl font-black text-primary font-technical drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                  ${monthlyEarnings}
                </div>
                <div className="text-[11px] text-gray-300 mt-2 font-medium">Direct payouts every Friday</div>
              </div>

              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-center">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Projected Annual Total</div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-technical">
                  ${annualEarnings}
                </div>
                <div className="text-[11px] text-gray-400 mt-2 font-medium">12-month passive yield</div>
              </div>
            </div>

            {/* Formula Callout */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">functions</span>
                <span><strong>Calculation Formula:</strong> {referrals} Sales × ${priceTier}.00 × 50% Commission = <span className="text-primary font-bold font-technical">${monthlyEarnings} Monthly</span></span>
              </div>
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold flex items-center gap-1 shrink-0"
              >
                <span>Claim Your Partner Link</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Spotlight & Channel Monetization Blueprint */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 inline-block">
              CONTENT CREATORS &amp; INFLUENCERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
              How Top FIFA Creators Monetize With <span className="text-primary">Elite FUT SNIPER</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
              Whether you produce short-form viral TikToks, in-depth YouTube guides, Twitch streams, or manage Discord trading groups — we provide custom tools to maximize your conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-medium">
            {/* TikTok & Shorts */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-xl">movie</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white/5 text-primary border border-primary/20 px-2.5 py-1 rounded-md">
                    SHORT-FORM
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">TikTok &amp; Reels</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Quick 15-second clips of 59th-minute snipes (Yamal, Mbappé) convert at insane rates. Place your link in bio + give followers a custom discount code.
                </p>
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Custom vanity promo code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Viral hook &amp; script templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>$10 – $17.50 payout per follower sale</span>
                  </li>
                </ul>
              </div>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1 border-t border-white/5 pt-3">
                <span>Fast Creator Payouts</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* YouTube Creators */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-xl">video_library</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white/5 text-primary border border-primary/20 px-2.5 py-1 rounded-md">
                    LONG-FORM
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">YouTube Channels</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Post filter setup tutorials, SBC solver walkthroughs, or trade reviews. Put your affiliate link in pinned comments and video descriptions.
                </p>
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Free review bot license</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Upfront sponsorship bonuses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>High evergreen video conversions</span>
                  </li>
                </ul>
              </div>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1 border-t border-white/5 pt-3">
                <span>Free Bot License + Sponsorship</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Twitch & Kick Streamers */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-xl">live_tv</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white/5 text-primary border border-primary/20 px-2.5 py-1 rounded-md">
                    STREAMERS
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Twitch / Streamers</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Demonstrate sub-20ms sniping live on stream. Use automated chatbot commands (`!bot`, `!snipe`) and subscriber discounts to drive effortless sales.
                </p>
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Automated stream chat triggers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Subscriber exclusive discount</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Live sniping on-screen proof</span>
                  </li>
                </ul>
              </div>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1 border-t border-white/5 pt-3">
                <span>Chatbot &amp; Sub Perks</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Discord & Trading Groups */}
            <div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    <span className="material-symbols-outlined text-xl">groups</span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-white/5 text-primary border border-primary/20 px-2.5 py-1 rounded-md">
                    COMMUNITIES
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Discord Groups</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Monetize your FC 26 / FC 27 trading server with automated signal webhook integrations, role sync, and bulk community deals.
                </p>
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Automated signal webhooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Bulk member discount tiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Mass passive community income</span>
                  </li>
                </ul>
              </div>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1 border-t border-white/5 pt-3">
                <span>Community Rates</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* Testimonial Callout */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-white/5 bg-card/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
            <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
              <div className="text-primary text-5xl leading-none font-headline font-black shrink-0">“</div>
              <div>
                <blockquote className="text-sm sm:text-base text-gray-200 italic leading-relaxed">
                  Elite FUT SNIPER has the highest conversion rates I have ever seen in the FIFA trading niche. The weekly Friday payouts have never missed a beat, and my Discord members are thrilled because the 100% local extension keeps their EA accounts completely safe with zero bans.
                </blockquote>
                <div className="mt-4 text-xs text-gray-400 font-bold uppercase tracking-widest flex flex-wrap items-center gap-2">
                  <span className="text-white font-black">Matt D.</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>FUT Creator &amp; Discord Trading Leader (32K Members)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span className="text-primary font-technical font-black">Earned $12,450+ in 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Creator Banner Callout */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card/80 to-primary/10 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary text-dark flex items-center justify-center font-black text-xl shrink-0 shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                ★
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-primary mb-0.5">VIP CREATOR DEAL</div>
                <h4 className="text-base sm:text-lg font-bold text-white">Got 5,000+ Followers or Subscribers?</h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Get <span className="text-primary font-bold">up to 60% RevShare ($12 to $21/sale)</span>, upfront video sponsorships, and free community bot giveaways.
                </p>
              </div>
            </div>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-primary text-dark font-black text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-transform whitespace-nowrap shadow-[0_0_20px_rgba(204,255,0,0.3)] shrink-0 flex items-center gap-2"
            >
              <span>Apply for VIP Creator Deal</span>
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Elite FUT SNIPER Converts at 14.8%+ (Affiliate Selling Points) */}
      <section className="py-20 bg-[#070707] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1">
              CONVERSION ENGINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
              Why Our Product Converts at <span className="text-primary">14.8%+</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
              You won&apos;t waste traffic on a tool users hesitate to buy. Elite FUT SNIPER eliminates every major objection in the FIFA bot market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-7 rounded-2xl border border-white/5 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Zero Password Sharing (100% Local)</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Unlike cloud bots (FutEarn, FUT Hunter) that demand user EA logins, our local Chrome extension executes in the user&apos;s active browser session. Instant trust means instant sales.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl border border-white/5 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-2xl">speed</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sub-20ms Unbeatable Speed</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Direct DOM injection allows users to win 59th-minute deals 15x faster than cloud bots. High user satisfaction guarantees low refund rates and long-term customer retention.
              </p>
            </div>

            <div className="glass-card p-7 rounded-2xl border border-white/5 hover:border-primary/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-2xl">smart_toy</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Built-In AI SBC Solver</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Features the world&apos;s first in-browser AI SBC Solver that automatically buys cheapest players and completes squad challenges with 1-click. High perceived value drives conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table: Elite Partner Program vs Standard Affiliate Networks */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How We Compare to <span className="text-primary">Other Affiliate Programs</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">See why gaming creators switch to Elite FUT SNIPER.</p>
        </div>

        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.04]">
                  <th className="py-5 px-6 font-bold text-gray-400 uppercase tracking-wider">Feature / Policy</th>
                  <th className="py-5 px-6 font-black text-primary uppercase tracking-wider bg-primary/5 border-x border-primary/20 text-center">
                    Elite FUT SNIPER
                  </th>
                  <th className="py-5 px-6 font-bold text-gray-400 uppercase tracking-wider text-center">
                    Typical Gaming Affiliates
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Commission Rate</td>
                  <td className="py-4 px-6 text-center font-bold text-primary bg-primary/5 border-x border-primary/10">
                    50% – 60% Lifetime RevShare
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">10% – 20% One-Off</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Revenue Per Sale</td>
                  <td className="py-4 px-6 text-center font-bold text-primary bg-primary/5 border-x border-primary/10">
                    $10.00 (Launch) → $17.50 (Regular)
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">$2.00 – $5.00</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Payout Frequency</td>
                  <td className="py-4 px-6 text-center font-bold text-emerald-400 bg-primary/5 border-x border-primary/10">
                    Weekly (Every Friday)
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">Net-30 / Net-60 Days</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Cookie Duration</td>
                  <td className="py-4 px-6 text-center font-bold text-primary bg-primary/5 border-x border-primary/10">
                    90 Days (Persistent)
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">24 Hours – 30 Days</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Payout Methods</td>
                  <td className="py-4 px-6 text-center font-bold text-white bg-primary/5 border-x border-primary/10">
                    Crypto (USDT/BTC), PayPal, Bank Wire
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">Bank Wire Only (High Minimum)</td>
                </tr>
                <tr className="hover:bg-white/[0.02]">
                  <td className="py-4 px-6 font-semibold text-white">Creator Bot License</td>
                  <td className="py-4 px-6 text-center font-bold text-primary bg-primary/5 border-x border-primary/10">
                    Free Pro License Provided
                  </td>
                  <td className="py-4 px-6 text-center text-gray-400">Must Buy Own License</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3-Step How It Works */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1">
            SIMPLE ONBOARDING
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Start Earning in <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">Get up and running in less than 2 minutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl relative border border-white/10 group hover:border-primary/40 transition-all">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                STEP 01
              </span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-3xl">
                person_add
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Join Partner Network</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Join our Discord and request your unique partner referral link and optional custom discount code. Instant approval with zero signup fees.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative border border-white/10 group hover:border-primary/40 transition-all">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                STEP 02
              </span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-3xl">
                share
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Share With Your Audience</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Add your link or promo code to your TikTok bio, YouTube descriptions, Twitch chatbot triggers (`!bot`), or Discord trading channels.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative border border-white/10 group hover:border-primary/40 transition-all">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                STEP 03
              </span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors text-3xl">
                account_balance_wallet
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Collect 50% Every Friday</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Earn $10.00 to $17.50+ on every single sale. Withdraw your accumulated balance every single Friday via Crypto (USDT) or PayPal.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/5" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Partner &amp; Affiliate <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Clear, straightforward answers about commissions, payouts, and creator perks.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-primary/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`affiliate-faq-answer-${index}`}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02] transition-colors"
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

      {/* Final CTA Banner */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="join-now">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-card via-[#121212] to-card border border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.15)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block mb-6">
              JOIN 450+ ACTIVE GAMING CREATORS &amp; PARTNERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Ready to Earn <span className="text-primary">50% Lifetime Commission?</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
              Start earning $10.00 to $17.50+ per sale today. Instant approval for YouTube, TikTok, Twitch, and Discord creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-primary text-dark font-black text-base uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-[0_0_35px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2"
              >
                <span>Apply as a Creator / Partner</span>
                <span className="material-symbols-outlined text-xl">rocket_launch</span>
              </Link>
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span>Contact Affiliate Manager</span>
                <span className="material-symbols-outlined text-xl">forum</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
