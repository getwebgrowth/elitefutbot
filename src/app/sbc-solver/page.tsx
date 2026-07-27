import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI SBC Solver FC 26 & FC 27 — Auto SBC Solutions (Releasing Soon)",
  description:
    "The world's fastest AI SBC Solver for EA FC 26 & FC 27. Automatically solve any Squad Building Challenge in 1 click using your club inventory. Releasing soon — Join Discord for free early beta access!",
  keywords: [
    "EA FC 26 SBC solver",
    "FC 27 AI SBC solver",
    "cheapest SBC solutions FC 26",
    "auto SBC solver Chrome extension",
    "FUT SBC auto solver free beta",
    "FC 26 SBC solution finder",
    "33 chemistry SBC solver",
    "untradeable club SBC solver"
  ],
  alternates: { canonical: "https://elitefutbot.com/sbc-solver" },
  openGraph: {
    title: "AI SBC Solver FC 26 & FC 27 — Auto SBC Solutions (Releasing Soon)",
    description: "Solve any EA FC Squad Building Challenge in under 3 seconds with AI. Join our Discord today for free beta access!",
    url: "https://elitefutbot.com/sbc-solver",
    siteName: "Elite FUT SNIPER",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SBC Solver FC 26 & FC 27 — Auto SBC Solutions",
    description: "1-Click AI SBC Solver for EA FC 26 & FC 27 releasing soon. Join Discord for free early access!",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Elite FUT SNIPER AI SBC Solver",
      applicationCategory: "GameApplication",
      operatingSystem: "Windows, macOS, Chrome OS",
      description: "Automated AI Squad Building Challenge solver for EA Sports FC 26 and FC 27.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When will the AI SBC Solver for FC 26 & FC 27 be released?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The AI SBC Solver is currently in private beta testing and releasing very soon! Joining our official Discord HQ gives you immediate free beta access slots."
          }
        },
        {
          "@type": "Question",
          name: "How does the AI SBC Solver build the cheapest squad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our AI scans your club's untradeable inventory first to avoid spending coins, then calculates real-time BIN market prices to buy missing cards for the lowest cost with guaranteed 33/33 chemistry."
          }
        },
        {
          "@type": "Question",
          name: "Is the SBC Solver safe to use with FC Web App?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The SBC Solver runs 100% locally inside your Chrome browser extension with randomized human actions, preventing automated flags and keeping your account secure."
          }
        }
      ]
    }
  ]
};

const UPCOMING_SBCS = [
  {
    name: "POTM VINÍCIUS JR.",
    category: "PLAYER OF THE MONTH",
    cost: "1,250,000",
    reward: "94 POTM Card",
    chem: "33/33",
    status: "BETA TESTING",
    badge: "94 RAT",
    color: "from-purple-900/40 to-black border-purple-500/30"
  },
  {
    name: "SHAPESHIFTERS ICON MBAPPÉ",
    category: "ICON SBC",
    cost: "1,450,000",
    reward: "98 SS Icon",
    chem: "33/33",
    status: "BETA TESTING",
    badge: "98 RAT",
    color: "from-amber-900/40 to-black border-amber-500/30"
  },
  {
    name: "MARQUEE MATCHUPS",
    category: "WEEKLY CHALLENGE",
    cost: "22,500",
    reward: "Rare Electrum Pack",
    chem: "33/33",
    status: "SOLVED",
    badge: "CHEAP",
    color: "from-primary/10 to-black border-primary/30"
  },
  {
    name: "85+ DOUBLE UPGRADE",
    category: "DAILY REPEATABLE",
    cost: "34,000",
    reward: "2x 85+ Gold Players",
    chem: "33/33",
    status: "SOLVED",
    badge: "POPULAR",
    color: "from-blue-900/40 to-black border-blue-500/30"
  },
  {
    name: "CENTURIONS BELLINGHAM",
    category: "PROMO PLAYER",
    cost: "890,000",
    reward: "95 Centurions",
    chem: "33/33",
    status: "BETA TESTING",
    badge: "95 RAT",
    color: "from-emerald-900/40 to-black border-emerald-500/30"
  },
  {
    name: "HYBRID LEAGUES MASTER",
    category: "FOUNDATIONS",
    cost: "8,200",
    reward: "Prime Gold Players Pack",
    chem: "33/33",
    status: "SOLVED",
    badge: "BASIC",
    color: "from-slate-900/40 to-black border-slate-700/30"
  }
];

const FEATURES = [
  {
    icon: "bolt",
    title: "1-Click Auto Solve",
    desc: "AI evaluates over 20,000 squad combinations in 2.5 seconds to build full 33 chemistry solutions."
  },
  {
    icon: "inventory_2",
    title: "Club-First Untradeables",
    desc: "Prioritizes high-rated fodder already in your club so you spend zero coins wherever possible."
  },
  {
    icon: "trending_down",
    title: "Lowest Market Cost",
    desc: "Live BIN market price integration ensures any missing card is purchased at the absolute lowest buy price."
  },
  {
    icon: "shield",
    title: "100% Undetected & Safe",
    desc: "Executes locally inside your Chrome extension with natural human delays and zero password sharing."
  }
];

export default function SBCSolverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden font-sans">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Release Soon Announcement Banner */}
          <div className="relative rounded-3xl p-8 sm:p-12 border border-primary/40 bg-gradient-to-br from-primary/10 via-card/80 to-card/90 backdrop-blur-xl shadow-[0_0_50px_rgba(204,255,0,0.15)] text-center space-y-6 overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-dark font-black text-xs uppercase tracking-widest animate-pulse">
              <span className="w-2 h-2 rounded-full bg-dark"></span>
              RELEASING SOON • BETA PHASE
            </div>

            <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight uppercase max-w-3xl mx-auto leading-tight">
              AI <span className="text-primary italic">SBC SOLVER</span> FOR FC 26 &amp; FC 27
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Automate every Squad Building Challenge with 1-click AI precision. Uses your untradeable club inventory first to save 100% of your coins.
            </p>

            {/* High-Impact CTA Box */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-dark font-headline font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-105"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                JOIN DISCORD FOR FREE ACCESS
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="flex justify-center items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-wider pt-2">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                100% Free Beta
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">bolt</span>
                Instant Access in Discord
              </span>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black font-headline tracking-tight uppercase">
                Why Elite FUT <span className="text-primary">AI SBC Solver?</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-lg mx-auto">
                Built specifically for serious FC 26 &amp; FC 27 traders wanting zero waste and instant pack rewards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-300 space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
                  </div>
                  <h3 className="font-bold font-headline text-lg text-white group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming SBC Solutions Teaser Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">SBC Preview Database</span>
                <h2 className="text-2xl sm:text-3xl font-black font-headline tracking-tight uppercase">
                  Supported Challenges <span className="text-gray-500 text-lg font-normal">(Releasing Soon)</span>
                </h2>
              </div>

              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                className="text-xs font-bold uppercase tracking-wider text-primary hover:underline flex items-center gap-1"
              >
                <span>Request Custom SBC Solution in Discord</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {UPCOMING_SBCS.map((sbc) => (
                <div
                  key={sbc.name}
                  className={`p-6 rounded-2xl bg-gradient-to-br border transition-all duration-300 space-y-4 relative overflow-hidden ${sbc.color}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      {sbc.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black bg-primary/20 text-primary border border-primary/30">
                      {sbc.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-headline font-black text-white">{sbc.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">Reward: <span className="text-white font-bold">{sbc.reward}</span></p>
                  </div>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs border-t border-white/10 font-mono">
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase">Est. Cost</span>
                      <span className="font-bold text-primary">{sbc.cost} Coins</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase">Chemistry</span>
                      <span className="font-bold text-white">{sbc.chem}</span>
                    </div>
                  </div>

                  <Link
                    href="https://discord.gg/Rkb9nF6WG6"
                    target="_blank"
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-primary hover:text-dark text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Get Free Beta Access</span>
                    <span className="material-symbols-outlined text-xs">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout & FAQ */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase tracking-tight">
                Frequently Asked <span className="text-primary italic">Questions</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                Everything you need to know about the upcoming Elite FUT SNIPER AI SBC Solver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">When will the AI SBC Solver release?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  The AI SBC Solver is currently undergoing final beta tests. You can claim instant free access by joining our official Discord community today!
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">Does it use my untradeable club players?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Yes! The solver scans your club inventory first to build solutions using cards you already own, saving hundreds of thousands of coins.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">Is the extension safe to use?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  100% safe. The solver runs locally in your Chrome browser extension without requiring your EA account login details or third-party server credentials.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">Is the SBC Solver free during beta?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Yes! All Discord members get free beta access slots for the SBC Solver and Chrome extension sniping tool.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-dark font-headline font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
              >
                Join Discord Server for Free SBC Access
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
