"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AffiliatePage() {
  const [referrals, setReferrals] = useState(100);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // $29/mo plan * 50% commission = $14.50/mo per active user
  const pricePerUser = 29;
  const commissionPercentage = 50;
  const monthlyEarnings = (referrals * pricePerUser * (commissionPercentage / 100)).toFixed(2);
  const annualEarnings = (parseFloat(monthlyEarnings) * 12).toFixed(2);

  const getTier = (count: number) => {
    if (count >= 250) return { name: "VIP Creator Tier", perk: "Custom Promo Code + 60% RevShare + Free License", color: "text-primary" };
    if (count >= 100) return { name: "Gold Ambassador", perk: "Custom Promo Code + Priority Payouts", color: "text-amber-400" };
    if (count >= 30) return { name: "Silver Partner", perk: "Free Bot License + Banner Assets", color: "text-blue-400" };
    return { name: "Starter Partner", perk: "50% Standard Commission", color: "text-gray-400" };
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
      {/* Hero Background Elements */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-card/80 border border-primary/30 hover:border-primary/60 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#CCFF00]"></span>
            <span className="text-xs font-black uppercase tracking-widest text-gray-200">
              OFFICIAL PARTNER PROGRAM • <span className="text-primary font-bold">50% LIFETIME REVSHARE</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
            Earn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary drop-shadow-[0_0_25px_rgba(204,255,0,0.4)]">50% Lifetime Commission</span> <br className="hidden sm:block" />
            Promoting the #1 FC 26 & FC 27 Bot.
          </h1>

          {/* Subtitle */}
          <p className="text-gray-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Turn your audience into recurring passive income. <span className="text-white font-semibold">TikTok, YouTube, Twitch creators &amp; Discord admins</span> get special rates, free licenses &amp; custom follower discount codes.
          </p>

          {/* CTA Buttons */}
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

          {/* Stat Cards */}
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
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              We know content creators drive the FIFA &amp; Ultimate Team community. Whether you post short clips or stream daily, we offer tailor-made sponsorship deals and custom creator terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* TikTok & Reels */}
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-2xl">movie</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">TikTok &amp; Reels</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Short viral trading clips convert insanely well. Get custom promo codes &amp; fast clip assets designed to trigger high conversions.
              </p>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1">
                <span>Custom Promo Codes</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* YouTube Creators */}
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-2xl">video_library</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">YouTube Channels</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Review our bot or showcase SBC solving &amp; trading guides. Receive free full-feature licenses &amp; dedicated video sponsorship payouts.
              </p>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1">
                <span>Free Bot License + Sponsorship</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Twitch & Kick Streamers */}
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-2xl">live_tv</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Twitch / Streamers</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Showcase live 20ms sniping on stream. Use automated chatbot commands and subscriber discounts for maximum conversion rates.
              </p>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1">
                <span>Chatbot &amp; Sub Discounts</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            {/* Discord & Trading Groups */}
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-2xl">groups</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discord Communities</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Own a FIFA trading Discord or Telegram group? Monetize your community with automated signal hooks &amp; bulk member discount rates.
              </p>
              <div className="text-[11px] font-bold text-primary flex items-center gap-1">
                <span>Community Group Rates</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>

          {/* VIP Creator Banner Callout */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card/80 to-primary/10 border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary text-dark flex items-center justify-center font-black text-2xl shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                ★
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Got 5,000+ Followers or Subscribers?</h4>
                <p className="text-xs text-gray-300">
                  Contact our partner manager directly for <span className="text-primary font-bold">up to 60% RevShare</span>, upfront video sponsorships, and exclusive follower giveaways.
                </p>
              </div>
            </div>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              className="px-6 py-3 bg-primary text-dark font-black text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-transform whitespace-nowrap shadow-[0_0_15px_rgba(204,255,0,0.3)]"
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
            Drag the slider to see how much passive income you can earn every month with our <span className="text-white font-bold">50% recurring payout rate</span>.
          </p>
        </div>

        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden bg-card/60">
          <div className="space-y-8 relative z-10">
            {/* Slider Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Monthly Active Referrals</div>
                <div className="text-4xl font-black text-white font-technical">{referrals} Users</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Current Partner Tier</div>
                <div className={`text-base font-black ${currentTier.color}`}>{currentTier.name}</div>
                <div className="text-[11px] text-gray-400 italic">{currentTier.perk}</div>
              </div>
            </div>

            {/* Range Input */}
            <div className="space-y-4">
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={referrals}
                onChange={(e) => setReferrals(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary border border-white/10"
              />
              <div className="flex justify-between text-xs text-gray-500 font-bold uppercase tracking-widest">
                <span>5 Referrals</span>
                <span>100 Referrals</span>
                <span>250 Referrals</span>
                <span>500+ Referrals</span>
              </div>
            </div>

            {/* Calculated Yield Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="p-6 rounded-2xl bg-black/40 border border-primary/30 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl rounded-full"></div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Monthly Revenue</div>
                <div className="text-4xl sm:text-5xl font-black text-primary font-technical drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                  ${monthlyEarnings}
                </div>
                <div className="text-[11px] text-gray-400 mt-2 font-medium">Paid out every Friday recurring</div>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 text-center">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Annual Passive Income</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-technical">
                  ${annualEarnings}
                </div>
                <div className="text-[11px] text-gray-400 mt-2 font-medium">Calculated over 12 months at 50% RevShare</div>
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
              Why Top Creators Choose <span className="text-primary">Elite FUT SNIPER</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
              We build high-performance 20ms local automation; you keep half of all generated revenue for life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">payments</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">50% Lifetime RevShare</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unlike one-off commission programs, you get 50% of every renewal payment for the lifetime of the subscriber account.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">electric_bolt</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">High Conversion Engine</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                With 20ms local search speeds and built-in anti-ban stealth technology, our bot has a 14%+ website visitor conversion rate.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Weekly Payouts</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get paid reliably every Friday via Crypto (USDT/BTC/ETH), PayPal, or Direct Bank Transfer with zero hidden fees.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">query_stats</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Analytics</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Access your private partner portal to monitor link clicks, conversion metrics, active subscribers, and pending earnings.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">inventory_2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ready-Made Media Kits</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get instant access to high-converting banners, video clips, thumbnail templates, and copy hooks for TikTok and YouTube.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">cookie</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">90-Day Cookie Window</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Even if your viewer takes up to 90 days to decide and purchase, your tracking cookie ensures you get full 50% credit.
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
            <div className="text-6xl font-black text-white/10 group-hover:text-primary/20 transition-colors font-technical mb-4">
              01
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Register in 60 Seconds</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Create your free affiliate account and generate your custom tracking link instantly. No application fees required.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative border border-white/10 group">
            <div className="text-6xl font-black text-white/10 group-hover:text-primary/20 transition-colors font-technical mb-4">
              02
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Share &amp; Promote</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Add your link to your YouTube video descriptions, TikTok bio, Twitch chat bot, or Discord server announcement channels.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative border border-white/10 group">
            <div className="text-6xl font-black text-white/10 group-hover:text-primary/20 transition-colors font-technical mb-4">
              03
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Collect 50% Weekly</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Watch your earnings grow in real-time. Receive your 50% recurring payouts directly to PayPal or Crypto every Friday.
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
