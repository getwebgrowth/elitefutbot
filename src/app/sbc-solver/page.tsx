import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EA FC 26 & FC 27 SBC Solutions Database — Cheapest Solutions",
  description:
    "Browse the cheapest EA FC 26 & FC 27 SBC solutions for every active Squad Building Challenge. Filter Icon, Promo, POTM, and Upgrade SBCs with real-time coin cost estimates.",
  keywords: [
    "EA FC 26 SBC solutions",
    "cheapest SBC solutions FC 26",
    "FC 27 SBC solver database",
    "POTM SBC solution FC 26",
    "Icon SBC solution FC 26",
    "Marquee matchups SBC solution",
    "FUT SBC solutions"
  ],
  alternates: { canonical: "https://elitefutbot.com/sbc-solver" },
  openGraph: {
    title: "EA FC 26 & FC 27 SBC Solutions Database — Cheapest Solutions",
    description: "Browse every active EA FC Squad Building Challenge solution with cheapest market prices.",
    url: "https://elitefutbot.com/sbc-solver",
    siteName: "Elite FUT SNIPER",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EA FC 26 & FC 27 SBC Solutions Database",
    description: "Browse active SBC solutions and cheapest squad costs.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "EA FC 26 & FC 27 SBC Solutions Database",
      description: "Database of active Squad Building Challenge solutions sorted by cheapest coin cost.",
      url: "https://elitefutbot.com/sbc-solver"
    }
  ]
};

const SBC_SOLUTIONS = [
  {
    id: "potm-vinicius",
    name: "Vinícius Jr.",
    title: "Player of the Month (POTM)",
    rating: 94,
    position: "LW",
    type: "POTM",
    cost: "1,250,000",
    reward: "94 POTM Vinícius Jr.",
    timeLeft: "6 Days left",
    hot: true,
    badgeBg: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  },
  {
    id: "shapeshifters-mbappe",
    name: "Kylian Mbappé",
    title: "Shapeshifters Icon",
    rating: 98,
    position: "ST",
    type: "ICON",
    cost: "1,450,000",
    reward: "98 SS Icon Mbappé",
    timeLeft: "5 Days left",
    hot: true,
    badgeBg: "bg-amber-500/20 text-amber-400 border-amber-500/30"
  },
  {
    id: "centurions-bellingham",
    name: "Jude Bellingham",
    title: "Centurions Special",
    rating: 95,
    position: "CAM",
    type: "PROMO",
    cost: "890,000",
    reward: "95 Centurions Bellingham",
    timeLeft: "3 Days left",
    hot: true,
    badgeBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    id: "flashback-kante",
    name: "N'Golo Kanté",
    title: "Flashback Edition",
    rating: 91,
    position: "CDM",
    type: "FLASHBACK",
    cost: "815,000",
    reward: "91 Flashback Kanté",
    timeLeft: "1 Day left",
    hot: false,
    badgeBg: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  },
  {
    id: "marquee-matchups",
    name: "Marquee Matchups",
    title: "Weekly Fixtures Challenge",
    rating: 85,
    position: "MIXED",
    type: "WEEKLY",
    cost: "22,500",
    reward: "Rare Electrum Players Pack",
    timeLeft: "4 Days left",
    hot: false,
    badgeBg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
  },
  {
    id: "85-double-upgrade",
    name: "85+ Double Upgrade",
    title: "Daily Repeatable SBC",
    rating: 85,
    position: "MIXED",
    type: "UPGRADE",
    cost: "34,000",
    reward: "2x 85+ Rare Players",
    timeLeft: "2 Days left",
    hot: true,
    badgeBg: "bg-primary/20 text-primary border-primary/30"
  },
  {
    id: "totw-upgrade",
    name: "TOTW Player Upgrade",
    title: "Team of the Week SBC",
    rating: 83,
    position: "MIXED",
    type: "UPGRADE",
    cost: "31,000",
    reward: "Guaranteed TOTW Pack",
    timeLeft: "3 Days left",
    hot: false,
    badgeBg: "bg-primary/20 text-primary border-primary/30"
  },
  {
    id: "hybrid-leagues",
    name: "Hybrid Leagues",
    title: "Foundations Challenge",
    rating: 82,
    position: "MIXED",
    type: "BASIC",
    cost: "8,200",
    reward: "Prime Gold Players Pack",
    timeLeft: "Permanent",
    hot: false,
    badgeBg: "bg-slate-500/20 text-slate-300 border-slate-500/30"
  },
  {
    id: "daily-gold-upgrade",
    name: "Daily Gold Upgrade",
    title: "Daily Pack Crafting",
    rating: 81,
    position: "MIXED",
    type: "DAILY",
    cost: "3,500",
    reward: "Gold Players Pack",
    timeLeft: "12 Hours left",
    hot: false,
    badgeBg: "bg-green-500/20 text-green-400 border-green-500/30"
  }
];

const CATEGORIES = ["ALL", "POTM", "ICON", "PROMO", "FLASHBACK", "WEEKLY", "UPGRADE", "BASIC"];

export default function SBCSolutionsDatabasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden font-sans">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header section */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              SBC Solutions Database • Live Prices
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-headline tracking-tight uppercase">
              EA FC 26 &amp; FC 27 <span className="text-primary italic">SBC SOLUTIONS</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-400 font-medium leading-relaxed">
              Explore active Squad Building Challenges, estimated coin costs, and optimal 33/33 chemistry squad builds.
            </p>
          </div>

          {/* AI Solver Teaser Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/15 via-card to-card border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(204,255,0,0.1)]">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span>AI SBC Solver Releasing Soon</span>
              </div>
              <h2 className="text-xl font-headline font-black text-white">
                Want 1-Click Auto SBC Solving Using Your Club Inventory?
              </h2>
              <p className="text-xs text-gray-400 font-medium">
                Our AI engine scans your club, saves 100% of your untradeable fodder, and submits in under 3 seconds.
              </p>
            </div>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-xl bg-primary text-dark font-headline font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              <span>Join Discord For Free AI Access</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/10">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mr-2 shrink-0">Filter:</span>
            {CATEGORIES.map((cat, idx) => (
              <button
                key={cat}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shrink-0 border ${
                  idx === 0
                    ? "bg-primary text-dark border-primary"
                    : "bg-white/[0.02] text-gray-400 border-white/10 hover:border-primary/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SBC Grid Catalog */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SBC_SOLUTIONS.map((sbc) => (
              <div
                key={sbc.id}
                className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-primary/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider border ${sbc.badgeBg}`}>
                      {sbc.type}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {sbc.timeLeft}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-headline font-black text-white">{sbc.name}</h3>
                    <p className="text-xs text-gray-400 font-medium">{sbc.title}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-400">Est. Coin Cost:</span>
                      <span className="font-bold text-primary">{sbc.cost} Coins</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-400">Reward:</span>
                      <span className="font-bold text-white line-clamp-1">{sbc.reward}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href="https://discord.gg/Rkb9nF6WG6"
                  target="_blank"
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-primary hover:text-dark text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all mt-4 border border-white/10 hover:border-primary"
                >
                  <span>Solve With AI (Free Beta)</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Info Banner */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 text-center space-y-4">
            <h3 className="text-xl font-headline font-black text-white uppercase">
              Need Help Completing Expensive SBCs?
            </h3>
            <p className="text-xs text-gray-400 max-w-xl mx-auto font-medium leading-relaxed">
              Join 50,000+ traders in our official Discord server. Get custom SBC solution advice, fodder investment tips, and free access keys for the AI SBC Solver extension.
            </p>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-dark font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Join Official Discord HQ
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
