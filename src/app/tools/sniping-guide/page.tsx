import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EA FC 26 & FC 27 Sniping Guide — Ultimate FUT Trading & Filter Settings",
  description:
    "Master transfer market sniping in EA FC 26 & FC 27. Expert filter settings for Meta Icons, TOTW cards, and SBC fodder with 100% anti-detection safety rules.",
  keywords: [
    "EA FC 26 sniping guide",
    "FC 27 FUT sniping filters",
    "how to snipe FC 26 players",
    "best FUT sniping settings",
    "FC 26 transfer market trading bot",
    "FUT fodder sniping filter",
    "undefeated EA FC sniping setup"
  ],
  alternates: { canonical: "https://elitefutbot.com/tools/sniping-guide" },
  openGraph: {
    title: "EA FC 26 & FC 27 Sniping Guide — Ultimate FUT Trading & Filter Settings",
    description: "Master transfer market sniping with expert filter settings and anti-detection safety rules.",
    url: "https://elitefutbot.com/tools/sniping-guide",
    siteName: "Elite FUT SNIPER",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 26 & FC 27 Sniping Guide",
    description: "Expert EA FC transfer market sniping filters and safety guidelines.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to Snipe Players safely in EA FC 26 & FC 27",
      description: "Step-by-step guide to setting up automated transfer market sniping filters with humanized safety protocols.",
      step: [
        {
          "@type": "HowToStep",
          name: "Set Target Buy Price Below BIN",
          text: "Calculate the current average lowest Buy It Now (BIN) price on FUTBIN, then set your max buy price 10% to 15% below market."
        },
        {
          "@type": "HowToStep",
          name: "Configure Humanized Search Delays",
          text: "Use randomized search request delays between 1.2 to 2.8 seconds to mirror human behavior and prevent automated web app rate limits."
        },
        {
          "@type": "HowToStep",
          name: "Execute Snipe and Auto-List",
          text: "When a target card is listed, auto-buy in under 50ms and list immediately at market BIN price to secure max profit."
        }
      ]
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is sniping in EA FC 26?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sniping is buying player cards instantly when they are listed by seller errors far below their actual market value, then reselling them for profit."
          }
        },
        {
          "@type": "Question",
          name: "How do I prevent market bans while sniping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Always use randomized request intervals (1,200ms–2,500ms), take automatic 5-minute cooling breaks after every 30 searches, and avoid fixed rigid click cycles."
          }
        }
      ]
    }
  ]
};

const FILTER_PRESETS = [
  {
    title: "META ICON & PROMO FILTER",
    target: "Mbappé, Vinícius Jr., Bellingham",
    minRating: "90+",
    maxBuy: "15% Below BIN",
    profitPerCard: "40,000 – 150,000 Coins",
    badge: "HIGH PROFIT",
    desc: "Target high-tier meta cards when sellers misprice expensive promo items during lightning packs."
  },
  {
    title: "SBC FODDER FILTER",
    target: "84, 85, 86, 87 Rated Gold Rares",
    minRating: "84+",
    maxBuy: "2,000 Below Market",
    profitPerCard: "1,500 – 5,000 Coins",
    badge: "HIGH VOLUME",
    desc: "Snipe high-rated SBC fodder during daily 6 PM content drops when thousands of packs are opened."
  },
  {
    title: "TEAM OF THE WEEK (TOTW) FILTER",
    target: "Current Active TOTW In-Forms",
    minRating: "83+",
    maxBuy: "12,000 Max BIN",
    profitPerCard: "3,000 – 10,000 Coins",
    badge: "CONSISTENT",
    desc: "Catch low-priced TOTW cards required for SBC prerequisites and sell when upgrade packs release."
  },
  {
    title: "GOLD RARE 83-RATED FILTER",
    target: "Meta 83 Gold Rares",
    minRating: "83",
    maxBuy: "800 – 1,100 Coins",
    profitPerCard: "700 – 1,500 Coins",
    badge: "LOW RISK",
    desc: "Mass-snipe gold rare cards at discard prices with zero risk of loss."
  }
];

const SAFETY_RULES = [
  {
    icon: "timer",
    title: "Randomized Search Delays",
    desc: "Never search at static exact intervals. Set randomized delays (e.g. 1.3s, 2.1s, 1.7s) to emulate genuine human typing and mouse clicks."
  },
  {
    icon: "pause_circle",
    title: "Automated Cooling Breaks",
    desc: "Program your extension to take 3–5 minute rest breaks after every 40 search attempts to respect EA web app rate limits."
  },
  {
    icon: "security",
    title: "Zero Account Password Sharing",
    desc: "Always run tools locally inside your own Google Chrome extension without sharing web app credentials or passwords."
  },
  {
    icon: "verified_user",
    title: "Cap Search Limits Per Session",
    desc: "Limit total search sessions to 300 searches per hour to maintain stealth operation and zero account flags."
  }
];

export default function SnipingGuidePage() {
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
          
          {/* Hero Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Tactical Trading Guide • FC 26 &amp; FC 27
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight uppercase leading-tight">
              EA FC 26 &amp; FC 27 <span className="text-primary italic">SNIPING GUIDE</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed">
              Master transfer market sniping filters, optimal search delays, and 100% anti-detection safety rules to build a multi-million coin club.
            </p>
          </div>

          {/* Quick Start Discord CTA Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/15 via-card to-card border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(204,255,0,0.12)]">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-wider">
                <span className="material-symbols-outlined text-base">bolt</span>
                <span>Automated Sniping Bot Extension</span>
              </div>
              <h2 className="text-2xl font-headline font-black text-white">
                Want Pre-Configured Filters Auto-Executed in Chrome?
              </h2>
              <p className="text-xs text-gray-300 font-medium">
                Join our Discord community today to download our free local Chrome extension auto-sniper with built-in human delays.
              </p>
            </div>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-4 rounded-xl bg-primary text-dark font-headline font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-105"
            >
              <span>Join Discord For Free Access</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Filter Presets Grid */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase tracking-tight">
                Top Profitable <span className="text-primary italic">Sniping Filters</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-lg mx-auto font-medium">
                Tested filter combinations for maximum coin returns in EA FC 26 &amp; FC 27.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FILTER_PRESETS.map((filter) => (
                <div
                  key={filter.title}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-300 space-y-4 relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-headline font-black text-white group-hover:text-primary transition-colors">
                      {filter.title}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
                      {filter.badge}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-medium">
                    {filter.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase">Target Cards</span>
                      <span className="font-bold text-white line-clamp-1">{filter.target}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase">Est. Profit</span>
                      <span className="font-bold text-primary">{filter.profitPerCard}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Anti-Detection Protocol Rules */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase tracking-tight">
                Anti-Detection <span className="text-primary italic">Safety Protocols</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-lg mx-auto font-medium">
                Follow these strict operational guidelines to keep your account safe from web app flags.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SAFETY_RULES.map((rule) => (
                <div
                  key={rule.title}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">{rule.icon}</span>
                  </div>
                  <h3 className="font-bold font-headline text-base text-white">{rule.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom FAQ & Callout */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8 text-center">
            <div className="space-y-3 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase tracking-tight">
                Sniping Guide <span className="text-primary italic">FAQ</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                Everything you need to know about transfer market sniping in FC 26 &amp; FC 27.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">What is the best time to snipe players?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  The peak sniping windows occur during 6 PM UK content releases, Lightning Rounds, and Weekend League reward dispatches when market supply spikes.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">How fast should search delays be?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  We recommend search intervals between 1,200ms and 2,500ms with randomized offsets to mimic human speed without triggering web app rate limits.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-headline font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
              >
                Join Discord Server for Free Sniping Tools
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
