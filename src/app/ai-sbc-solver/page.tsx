import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI SBC Solver FC 26 & FC 27 — #1 AI Squad Building Challenge Engine",
  description:
    "The ultimate AI SBC Solver for EA FC 26 & FC 27. Solve any Squad Building Challenge in under 3 seconds using your club untradeable players. Releasing soon — Join Discord for free beta access!",
  keywords: [
    "AI SBC solver",
    "AI SBC solver FC 26",
    "FC 27 AI SBC solver",
    "automated AI SBC engine",
    "EA FC 26 SBC solver extension",
    "33/33 chemistry AI solver",
    "untradeable club SBC solver",
    "Futbin AI SBC solver import",
    "free AI SBC solver beta"
  ],
  alternates: { canonical: "https://elitefutbot.com/ai-sbc-solver" },
  openGraph: {
    title: "AI SBC Solver FC 26 & FC 27 — #1 Automated SBC Engine",
    description: "Automate EA FC Squad Building Challenges in 1 click. Uses your untradeable club inventory first. Releasing soon — Join Discord for free beta access!",
    url: "https://elitefutbot.com/ai-sbc-solver",
    siteName: "Elite FUT SNIPER",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SBC Solver FC 26 & FC 27 — #1 AI SBC Engine",
    description: "Automate any EA FC SBC with 33/33 chemistry. Releasing soon — Join Discord for free beta access!",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Elite FUT SNIPER AI SBC Solver Engine",
      applicationCategory: "GameApplication",
      operatingSystem: "Windows, macOS, Chrome OS",
      description: "AI-powered Squad Building Challenge solver for EA Sports FC 26 and FC 27. Scans club inventory, computes 33/33 chemistry, and auto-submits.",
      url: "https://elitefutbot.com/ai-sbc-solver",
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
          name: "What is an AI SBC Solver for EA FC 26 & FC 27?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI SBC Solver is an automated algorithm that scans your club's player inventory, evaluates over 20,000 squad link combinations, and outputs the cheapest possible 33/33 chemistry solution in seconds."
          }
        },
        {
          "@type": "Question",
          name: "When will the AI SBC Solver be released?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The AI SBC Solver is currently undergoing final beta testing and releasing very soon! You can claim free beta tester slots by joining our official Discord community today."
          }
        },
        {
          "@type": "Question",
          name: "How does the AI SBC Solver save coins?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The AI solver prioritizes your untradeable club players first so you spend zero coins on cards you already own, then snipes missing cards at the lowest real-time BIN market prices."
          }
        }
      ]
    }
  ]
};

const STATS = [
  { value: "< 3 SEC", label: "AVERAGE AI SOLVE TIME" },
  { value: "33/33", label: "GUARANTEED CHEMISTRY" },
  { value: "0 COINS", label: "WASTED ON CLUB FODDER" },
  { value: "100%", label: "LOCAL CHROME EXTENSION" },
];

const ENGINES = [
  {
    href: "/sbc-solver",
    icon: "grid_view",
    title: "SBC SOLUTIONS DIRECTORY",
    sub: "Live Challenge Preview",
    badge: "SOLUTIONS",
    desc: "Browse every active FC 26 & FC 27 SBC, estimated coin costs, and preview cheapest AI solutions."
  },
  {
    href: "/ai-sbc-solver/engineering",
    icon: "memory",
    title: "ENGINEERING TERMINAL",
    sub: "Combinatorial AI Engine",
    badge: "ALGORITHM",
    desc: "Processes 20,000+ squad link combinations per second. Zero chemistry calculation errors."
  },
  {
    href: "/ai-sbc-solver/tactical",
    icon: "radar",
    title: "TACTICAL CONSOLE",
    sub: "Market & Fodder Pulse",
    badge: "ANALYTICS",
    desc: "Real-time BIN price tracking, fodder inflation alerts, and chemistry link optimization."
  },
  {
    href: "/ai-sbc-solver/command",
    icon: "security",
    title: "COMMAND CENTER",
    sub: "Automation Manager",
    badge: "CONTROL",
    desc: "Monitor live SBC submissions, track total coins saved, and manage local Chrome extension settings."
  }
];

const COMPARISON = [
  { feature: "Squad Build Speed", manual: "10 – 25 Minutes", ai: "< 3 Seconds" },
  { feature: "Club Fodder Utilization", manual: "Manual Guesswork", ai: "100% Automated Untradeables Sync" },
  { feature: "Market Coin Efficiency", manual: "Overpaying on BIN", ai: "Lowest Real-Time Market Snipe" },
  { feature: "Chemistry Accuracy", manual: "Link Errors & Retries", ai: "33/33 Perfect Chemistry Guaranteed" },
  { feature: "Futbin / EasySBC Import", manual: "Manual Card Copying", ai: "1-Click URL Instant Import" },
];

export default function AISBCSolverHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 relative overflow-hidden font-sans">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Main Hero & Announcement Banner */}
          <div className="relative rounded-3xl p-8 sm:p-12 border border-primary/40 bg-gradient-to-br from-primary/10 via-card/80 to-card/90 backdrop-blur-xl shadow-[0_0_50px_rgba(204,255,0,0.15)] text-center space-y-6 overflow-hidden">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-dark font-black text-xs uppercase tracking-widest animate-pulse">
              <span className="w-2 h-2 rounded-full bg-dark"></span>
              RELEASING SOON • FREE BETA PHASE
            </div>

            <h1 className="text-4xl sm:text-6xl font-black font-headline tracking-tight uppercase max-w-4xl mx-auto leading-tight">
              AI <span className="text-primary italic">SBC SOLVER</span> FOR FC 26 &amp; FC 27
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              The world's most advanced AI Squad Building Challenge automation engine. Solves any SBC in 3 seconds using your club inventory to guarantee 33/33 chemistry.
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
                JOIN DISCORD FOR FREE AI SBC ACCESS
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="flex justify-center items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-wider pt-2">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">verified</span>
                100% Free Beta Slots
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary text-base">security</span>
                Undetected Chrome Extension
              </span>
            </div>
          </div>

          {/* Quick Stats Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-black font-headline text-primary">
                  {stat.value}
                </div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* AI Engine Modules Grid */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase tracking-tight">
                AI SBC Solver <span className="text-primary">Ecosystem</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-xl mx-auto font-medium">
                Explore the modular architecture powering automated squad building and market execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ENGINES.map((engine) => (
                <Link
                  key={engine.title}
                  href={engine.href}
                  className="group p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-primary/40 transition-all duration-300 space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-xl">{engine.icon}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
                      {engine.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-headline font-black text-white group-hover:text-primary transition-colors">
                      {engine.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 font-medium">{engine.sub}</p>
                    <p className="text-xs text-gray-300 mt-3 leading-relaxed">{engine.desc}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary pt-2">
                    <span>Explore Module</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* AI vs Manual Comparison Table */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase tracking-tight">
                Manual Solving vs <span className="text-primary italic">AI SBC Solver</span>
              </h2>
              <p className="text-sm text-gray-400 max-w-lg mx-auto">
                See why manual squad building costs you extra coins and wasted hours.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden bg-card/60 backdrop-blur-md">
              <div className="grid grid-cols-3 p-4 bg-white/5 border-b border-white/10 text-xs font-black uppercase tracking-wider text-gray-400">
                <div>Feature</div>
                <div className="text-center text-gray-500">Manual SBC</div>
                <div className="text-right text-primary">AI SBC Solver</div>
              </div>
              <div className="divide-y divide-white/5 text-xs sm:text-sm font-medium">
                {COMPARISON.map((row) => (
                  <div key={row.feature} className="grid grid-cols-3 p-4 items-center">
                    <div className="font-bold text-white">{row.feature}</div>
                    <div className="text-center text-gray-500">{row.manual}</div>
                    <div className="text-right font-bold text-primary flex items-center justify-end gap-1">
                      <span>{row.ai}</span>
                      <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Callout & FAQ */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8 text-center">
            <div className="space-y-3 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase tracking-tight">
                AI SBC Solver <span className="text-primary italic">FAQ</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">
                Common questions about our AI algorithm and upcoming release.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">What is an AI SBC Solver?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  An AI SBC Solver is an automated system that scans your club's full player inventory and evaluates over 20,000 squad link combinations per second to generate the cheapest possible solution with guaranteed 33/33 chemistry.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">When will the AI SBC Solver release?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  The AI SBC Solver is currently in final beta testing and releasing very soon! You can claim instant free access by joining our official Discord community today.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">Can I import solutions from Futbin or EasySBC?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Yes! Simply paste any Futbin or EasySBC URL, and the AI solver will automatically match missing players against your club inventory and auto-buy remaining cards.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <h3 className="font-bold text-white text-base font-headline">How do I get free beta access?</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  Join our official Discord server to receive your free beta access key for both the AI SBC Solver and the Chrome extension sniping bot.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark font-headline font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
              >
                Join Discord for Free AI SBC Solver Access
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
