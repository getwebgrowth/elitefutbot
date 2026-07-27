"use client";

import { useState } from "react";
import Link from "next/link";

export default function AffiliatePage() {
  const [referrals, setReferrals] = useState(100);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // $29/mo plan * 50% commission = $14.50/mo per active user
  const pricePerUser = 29;
  const commissionPercentage = 50;
  const monthlyEarnings = (referrals * pricePerUser * (commissionPercentage / 100)).toFixed(2);
  const annualEarnings = (parseFloat(monthlyEarnings) * 12).toFixed(2);

  const getTier = (count: number) => {
    if (count >= 250) return { name: "VIP Creator Tier", perk: "Custom Promo Code + 60% RevShare + Free License", color: "text-primary", bg: "bg-primary/10 border-primary/30" };
    if (count >= 100) return { name: "Gold Ambassador", perk: "Custom Promo Code + Priority Payouts", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" };
    if (count >= 30) return { name: "Silver Partner", perk: "Free Bot License + Banner Assets", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/30" };
    return { name: "Starter Partner", perk: "50% Standard Commission", color: "text-gray-400", bg: "bg-gray-500/10 border-gray-500/30" };
  };

  const currentTier = getTier(referrals);

  const faqs = [
    {
      q: "How does the 50% Lifetime Commission work?",
      a: "You earn a 50% cut on every subscription payment made by users who sign up through your referral link. As long as your referred user stays subscribed to Elite FUT SNIPER, you keep getting paid every single month!"
    },
    {
      q: "Are TikTok, YouTube, and Twitch content creators eligible for special rates?",
      a: "Yes! Content creators with active audiences on TikTok, YouTube, Twitch, Instagram, or Discord get special rates, custom promo codes for their followers, free review licenses for the bot, and higher tier rev-share up to 60%."
    },
    {
      q: "When and how do I receive my payouts?",
      a: "Payouts are processed weekly every Friday. You can withdraw your earnings via Crypto (USDT / BTC / ETH), PayPal, or Direct Bank Transfer with zero hidden fees."
    },
    {
      q: "What is the cookie duration for referral links?",
      a: "We offer a 90-day cookie window. If a user clicks your link and purchases anytime within 90 days, the referral is automatically credited to your partner account."
    },
    {
      q: "Do I need to pay to join the affiliate program?",
      a: "No! Joining the Elite FUT SNIPER Partner Program is 100% free with instant approval."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 overflow-hidden font-sans">
      {/* Hero Background Glows */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2.5 bg-card/80 border border-primary/30 hover:border-primary/60 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#CCFF00]"></span>
            <span className="text-xs font-black uppercase tracking-widest text-gray-200">
              OFFICIAL PARTNER PROGRAM • <span className="text-primary font-bold">50% LIFETIME REVSHARE</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
            Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary drop-shadow-[0_0_25px_rgba(204,255,0,0.4)]">50% Lifetime Commission</span> <br className="hidden sm:block" />
            Promoting the #1 FC 26 &amp; FC 27 Bot.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            Turn your audience into recurring passive income. Built specifically for <span className="text-white font-semibold">TikTok, YouTube, Twitch creators &amp; Discord owners</span>.
          </p>

          {/* Feature Badges Grid (Breaks up text into scannable pills) */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto mb-10">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-300 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-base">percent</span>
              <span>50% Recurring Commission</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-300 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-base">video_library</span>
              <span>TikTok &amp; YouTube Special Rates</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-300 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-base">key</span>
              <span>Free Bot Review Licenses</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-300 backdrop-blur-sm">
              <span className="material-symbols-outlined text-primary text-base">local_offer</span>
              <span>Custom Follower Discount Codes</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="#join-now"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-dark font-black text-base uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2"
            >
              <span>Join Partner Program</span>
              <span className="material-symbols-outlined text-xl">bolt</span>
            </Link>
            <a
              href="#calculator"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-primary text-xl">calculate</span>
              Calculate Earnings
            </a>
          </div>

          {/* Quick Stat Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary font-technical mb-1">$180K+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Total Paid Out</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white font-technical mb-1">50%</div>
              <div className="text-xs text-primary uppercase tracking-widest font-bold">Lifetime RevShare</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl sm:text-4xl font-black text-white font-technical mb-1">90 Days</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Cookie Duration</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary font-technical mb-1">Weekly</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Payout Speed</div>
            </div>
          </div>
        </section>
      </div>

      {/* Creator Spotlight Section */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-4 inline-block">
              INFLUENCERS &amp; CONTENT CREATORS WELCOME
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
              Special Rates &amp; Perks for <span className="text-primary">Content Creators</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
              Tailor-made deals for TikTokers, YouTubers, Streamers &amp; Discord trading leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  Short viral trading clips convert fast. Get clip packages &amp; custom follower discount codes.
                </p>
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Custom discount code</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Viral clip hooks provided</span>
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
                  Post bot tutorials or SBC guides. Receive free licenses &amp; dedicated video sponsorship bonuses.
                </p>
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Free review bot license</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Upfront video bonuses</span>
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
                  Showcase live 20ms sniping. Use stream chat commands and subscriber perks for max conversion.
                </p>
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Automated chat bot links</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Subscriber discount rates</span>
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
                  Monetize your trading server with automated signal webhook integrations &amp; bulk member deals.
                </p>
                <ul className="space-y-2 mb-6 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Automated signal webhooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    <span>Bulk member discounts</span>
                  </li>
                </ul>
              </div>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1 border-t border-white/5 pt-3">
                <span>Community Rates</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
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
                <p className="text-xs text-gray-300">
                  Get <span className="text-primary font-bold">up to 60% RevShare</span>, upfront video sponsorships, and follower giveaways.
                </p>
              </div>
            </div>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              className="px-6 py-3 bg-primary text-dark font-black text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-transform whitespace-nowrap shadow-[0_0_15px_rgba(204,255,0,0.3)] shrink-0"
            >
              Request VIP Creator Deal
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Earnings Calculator Section */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" id="calculator">
        <div className="text-center mb-12">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1">
            ESTIMATED PASSIVE YIELD
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Interactive <span className="text-primary">Earnings Calculator</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Adjust referrals to see your monthly &amp; annual passive income at <span className="text-white font-bold">50% recurring revshare</span>.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden bg-card/60">
          <div className="space-y-8 relative z-10">
            {/* Slider Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Active Subscribers</div>
                <div className="text-4xl font-black text-white font-technical">{referrals} Users</div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Partner Tier</div>
                <div className={`inline-block text-xs font-black px-3 py-1 rounded-md border ${currentTier.bg} ${currentTier.color}`}>
                  {currentTier.name}
                </div>
                <div className="text-[11px] text-gray-400 mt-1">{currentTier.perk}</div>
              </div>
            </div>

            {/* Range Input */}
            <div className="space-y-3">
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={referrals}
                onChange={(e) => setReferrals(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary border border-white/10"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                <span>5 Users</span>
                <span>100 Users</span>
                <span>250 Users</span>
                <span>500+ Users</span>
              </div>
            </div>

            {/* Calculated Yield Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-black/50 border border-primary/40 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl rounded-full"></div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Monthly Income</div>
                <div className="text-4xl sm:text-5xl font-black text-primary font-technical drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                  ${monthlyEarnings}
                </div>
                <div className="text-[11px] text-gray-400 mt-2 font-medium">Recurring payouts every Friday</div>
              </div>

              <div className="p-6 rounded-2xl bg-black/50 border border-white/10 text-center">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Annual Passive Income</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-technical">
                  ${annualEarnings}
                </div>
                <div className="text-[11px] text-gray-400 mt-2 font-medium">12-month projection at 50% commission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us (Benefits Grid) */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Why Partner With <span className="text-primary">Elite FUT SNIPER</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
              High performance tech meets industry-leading affiliate revshare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">payments</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">50% REVSHARE</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">50% Lifetime Commission</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Receive 50% of every renewal payment for the lifetime of each subscriber you refer.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">electric_bolt</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">14%+ CONVERSION</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High Conversion Rate</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                20ms search speeds and local Chrome extension security drive high landing page conversions.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">account_balance_wallet</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">FRIDAY PAYOUTS</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Weekly Payouts</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Reliable weekly payouts every Friday via Crypto (USDT/BTC), PayPal, or Direct Bank Transfer.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">query_stats</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">LIVE DASHBOARD</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real-Time Analytics</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Private dashboard to monitor clicks, signups, active subscriptions, and earnings in real time.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">inventory_2</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">MEDIA ASSETS</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ready-Made Media Kits</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Access pre-made high-converting banners, video clip packages, and thumbnail graphics.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">cookie</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded">90-DAY COOKIE</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">90-Day Cookie Window</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Generous 90-day tracking cookie ensures you receive credit even if users buy weeks later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step How it Works */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1">
            SIMPLE ONBOARDING
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Start Earning in <span className="text-primary">3 Simple Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl relative border border-white/10 group">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                STEP 01
              </span>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors text-2xl">
                person_add
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Register in 60 Seconds</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Create your partner account and get your instant referral link. 100% free with no signup fees.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative border border-white/10 group">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                STEP 02
              </span>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors text-2xl">
                share
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Share &amp; Promote</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Add your link to YouTube descriptions, TikTok bio, Twitch chat commands, or Discord channels.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative border border-white/10 group">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                STEP 03
              </span>
              <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors text-2xl">
                account_balance
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Collect 50% Weekly</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Track live conversions on your portal and withdraw recurring 50% payouts every Friday via Crypto or PayPal.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Partner <span className="text-primary">FAQ</span>
            </h2>
            <p className="text-gray-400 text-sm mt-2">Everything you need to know about joining the Elite FUT SNIPER Partner Network.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/[0.02]"
                >
                  <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
                  <span className="material-symbols-outlined text-primary text-xl">
                    {openFaq === index ? "remove" : "add"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 border-t border-white/5 pt-4 leading-relaxed font-medium">
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
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-card via-[#121212] to-card border border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.1)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full inline-block mb-6">
              JOIN 450+ ACTIVE CREATORS &amp; PARTNERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Ready to Start Earning <span className="text-primary">50% Lifetime Commission?</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Sign up today in under 60 seconds. Instant approval for YouTube, TikTok, Twitch, and Discord creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                className="w-full sm:w-auto px-10 py-4 bg-primary text-dark font-black text-base uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.4)] flex items-center justify-center gap-2"
              >
                <span>Apply as a Creator</span>
                <span className="material-symbols-outlined text-xl">rocket_launch</span>
              </Link>
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-base uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <span>Contact Partner Support</span>
                <span className="material-symbols-outlined text-xl">forum</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
