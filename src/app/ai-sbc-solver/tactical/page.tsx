import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI SBC Tactical Console — Market Intelligence & Chemistry Optimizer | EliteFut",
  description:
    "Real-time EA FC 26 SBC market intelligence. Live price tracking, chemistry optimizer, and helper tool for squad building. The tactical dashboard for elite FUT players who demand perfection.",
  keywords: [
    "SBC tactical console",
    "FC 26 SBC market intelligence",
    "FUT market price tracker",
    "SBC chemistry optimizer",
    "EA FC 26 chemistry solver",
    "real-time SBC solutions",
    "FC 25 SBC price tracker",
    "FUT market sync",
    "SBC assistant dashboard",
    "FC 26 transfer market helper",
    "33 chemistry SBC",
    "SBC squad optimizer",
  ],
  alternates: {
    canonical: "https://elitefutbot.com/ai-sbc-solver/tactical",
  },
  openGraph: {
    title: "SBC Tactical Console — Real-Time Market Intelligence & Chemistry Optimizer",
    description:
      "Live market intelligence for EA FC 26 SBCs. Track prices in real-time, optimize chemistry, and solve every challenge with zero errors.",
    url: "https://elitefutbot.com/ai-sbc-solver/tactical",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "EliteFut Tactical Console",
      description:
        "Real-time SBC market intelligence dashboard for EA FC 26. Tracks live prices, optimizes chemistry, and helps complete Squad Building Challenges.",
      url: "https://elitefutbot.com/ai-sbc-solver/tactical",
      applicationCategory: "GameApplication",
      featureList: [
        "Real-time market price tracking",
        "33/33 chemistry optimization",
        "Live SBC feed",
        "Club inventory analysis",
        "Highlight missing cards",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://elitefutbot.com" },
        { "@type": "ListItem", position: 2, name: "AI SBC Solver", item: "https://elitefutbot.com/ai-sbc-solver" },
        { "@type": "ListItem", position: 3, name: "Tactical Console", item: "https://elitefutbot.com/ai-sbc-solver/tactical" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the SBC Tactical Console?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The SBC Tactical Console is EliteFut's real-time market intelligence dashboard for EA FC 26 SBCs. It shows live prices for all active Squad Building Challenges, tracks your club inventory, and optimizes chemistry automatically.",
          },
        },
        {
          "@type": "Question",
          name: "How does chemistry optimization work in FC 26 SBCs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FC 26 chemistry is calculated based on shared nationality, league, and club connections between players. Each player can earn up to 3 chemistry points. The Tactical Console's AI engine tests thousands of combinations to guarantee 33/33 chemistry on every SBC submission.",
          },
        },
      ],
    },
  ],
};

const LIVE_FEED = [
  { name: "Centurions SBC", status: "SOLVED", cost: "452K", saved: "28,400", time: "2m ago" },
  { name: "Flashback Kante", status: "SOLVED", cost: "815K", saved: "42,150", time: "8m ago" },
  { name: "Player Pick (85+)", status: "QUEUED", cost: "34K", saved: "12,800", time: "14m ago" },
  { name: "TOTW Upgrade", status: "SOLVING", cost: "32K", saved: "—", time: "Live" },
];

const MARKET_DATA = [
  { player: "83-Rated PL ST", price: "2,350", trend: "down", change: "-150" },
  { player: "84-Rated BL CDM", price: "4,200", trend: "up", change: "+380" },
  { player: "85-Rated LaLiga GK", price: "6,800", trend: "down", change: "-220" },
  { player: "86-Rated SerieA CB", price: "11,400", trend: "up", change: "+900" },
];

export default function TacticalConsolePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
        {/* Blueprint grid bg */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 blueprint-bg opacity-50" />
          <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/8 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link href="/ai-sbc-solver" className="hover:text-primary transition-colors">AI SBC Solver</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-slate-300">Tactical Console</span>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">
                Tactical Override — Online
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-[0.88] tracking-tighter text-white lg:text-8xl">
              SBC{" "}
              <span className="text-primary neon-glow italic">Tactical</span>
              <br />
              Console
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 lg:text-xl">
              Real-time market intelligence meets elite chemistry optimization. Monitor live SBC prices,
              track profit saved, and deploy{" "}
              <strong className="text-white">33/33 chemistry solutions</strong> in seconds — not minutes.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://discord.gg/PHUfbsSzhK"
                id="tactical-cta-primary"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-primary px-10 py-5 text-lg font-black text-black shadow-[0_0_40px_rgba(204,255,0,0.4)] transition-all hover:scale-105"
              >
                <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform group-hover:translate-y-0" />
                <span className="material-symbols-outlined relative font-black">radar</span>
                <span className="relative">DEPLOY TACTICAL ENGINE</span>
              </Link>
              <Link
                href="/sbc-solver"
                id="tactical-browse-link"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-base font-bold text-white transition-all hover:border-primary/40 hover:bg-white/10"
              >
                Browse SBC Solutions
                <span className="material-symbols-outlined text-primary text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Live Dashboard Mockup */}
          <div className="relative mt-20 mx-auto max-w-6xl">
            <div className="absolute -inset-8 rounded-full bg-primary/8 blur-[80px]" />
            <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0e0e0e] shadow-2xl">
              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/3 px-8 py-4">
                <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/30" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/30" />
                    <div className="h-3 w-3 rounded-full bg-primary/30" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Engine v4.2 // Tactical Mode Active
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-primary">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  TARGETING: Centurions_Upgrade_X10
                </div>
              </div>

              {/* Dashboard content */}
              <div className="grid lg:grid-cols-12 gap-6 p-8">
                {/* Terminal */}
                <div className="lg:col-span-4 rounded-2xl bg-black/60 p-5 font-mono text-[11px] border border-white/5 space-y-1.5">
                  <div className="text-primary/70">&gt; INITIALIZING_OPTIMIZATION...</div>
                  <div className="text-slate-500">&gt; Scanned 342 players in club...</div>
                  <div className="text-slate-500">&gt; Fetching market BIN for &apos;PL_ST_GOLD&apos;...</div>
                  <div className="text-primary animate-pulse">&gt; Analyzing 12,402+ combinations...</div>
                  <div className="text-slate-500">&gt; Filter: Min_Rating(84)</div>
                  <div className="text-slate-500">&gt; Syncing Chemistry modules...</div>
                  <div className="text-[#C5A059]">&gt; FOUND SOLUTION: 452,150 Coins</div>
                  <div className="text-slate-300 mt-4 flex items-center gap-2">
                    _<span className="inline-block h-3 w-2 bg-primary animate-pulse" />
                  </div>
                </div>

                {/* Chemistry ring */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center py-6">
                  <div className="relative group">
                    <div className="absolute -inset-8 rounded-full bg-primary/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative h-44 w-44 rounded-full border-4 border-primary flex flex-col items-center justify-center bg-[#0e0e0e] shadow-[0_0_50px_rgba(204,255,0,0.3)]">
                      <div className="text-5xl font-black text-primary neon-glow">33/33</div>
                      <div className="mt-1 text-[10px] font-black uppercase tracking-[0.3em] text-white">Chemistry</div>
                    </div>
                  </div>
                  <div className="mt-6 rounded-full border border-primary/30 bg-primary/10 px-4 py-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Locked & Synchronized</span>
                  </div>
                </div>

                {/* Live feed */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="mb-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Live Operational Feed
                  </div>
                  {LIVE_FEED.slice(0, 3).map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-xl bg-black/40 border border-white/5 p-4">
                      <div>
                        <div className="text-xs font-bold text-white uppercase">{item.name}</div>
                        <div className="text-[9px] text-slate-500 uppercase">{item.time}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-base font-black text-[#C5A059]">{item.cost}</div>
                        <div className={`text-[9px] font-bold uppercase ${item.status === "SOLVING" ? "text-primary animate-pulse" : "text-primary"}`}>
                          {item.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard CTA bar */}
              <div className="border-t border-white/5 bg-primary px-8 py-5 flex items-center justify-between cursor-pointer group hover:bg-primary/90 transition-colors">
                <span className="font-black text-xl uppercase tracking-tight text-black flex items-center gap-3 group-hover:scale-105 transition-transform">
                  DEPLOY TACTICAL SOLVER
                  <span className="material-symbols-outlined font-black">bolt</span>
                </span>
                <span className="text-black/60 text-xs font-bold uppercase tracking-widest">Join Discord for Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">Intelligence Engine</span>
            <h2 className="mt-3 text-4xl font-black tracking-tighter text-white lg:text-5xl">
              Built with{" "}
              <span className="text-[#C5A059]">Elite-Tier</span> Intel
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "inventory_2",
                title: "Club-First Logic",
                desc: "Scans your entire club inventory — untradeables, duplicates, fodder — before suggestions are generated. Every choice is fully optimized.",
              },
              {
                icon: "trending_down",
                title: "Live Market Sync",
                desc: "Zero-latency price feeds track every position across all SBC requirements. You always see the cheapest options available at that millisecond.",
              },
              {
                icon: "science",
                title: "Chemistry Mastery",
                desc: "Advanced heuristic logic solves the most complex FC 26 chemistry puzzles — nationality, league, and club chains — in milliseconds.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border border-white/5 bg-[#111] p-10 transition-all hover:border-primary/30 border-l-4 border-l-primary/20 hover:border-l-primary"
              >
                <span className="material-symbols-outlined mb-6 text-4xl text-primary">{f.icon}</span>
                <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET INTELLIGENCE ── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">Market Pulse</span>
              <h2 className="mt-3 mb-6 text-4xl font-black tracking-tighter text-white lg:text-5xl">
                Real-Time Price Intelligence
              </h2>
              <p className="mb-8 text-slate-400 leading-relaxed">
                The EA FC 26 transfer market moves fast. Prices for SBC fodder can swing 20–40% in hours.
                Our Tactical Console identifies the lowest price trends at the exact moment you solve — saving you
                valuable resources per challenge.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Prices updated every", value: "30 seconds" },
                  { label: "Average saving vs. manual", value: "45,000 resources" },
                  { label: "Players tracked", value: "25,000+" },
                  { label: "SBC types supported", value: "All types" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-slate-400 text-sm">{item.label}</span>
                    <span className="font-black text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market table */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0e0e0e]">
                <div className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">SBC Fodder Price Feed</span>
                  <span className="text-[10px] font-mono text-primary">LIVE_FEED</span>
                </div>
                <div className="divide-y divide-white/5">
                  {MARKET_DATA.map((item) => (
                    <div key={item.player} className="flex items-center justify-between px-6 py-4">
                      <span className="text-sm font-medium text-white">{item.player}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-black text-white">{item.price}</span>
                        <span className={`text-xs font-bold flex items-center gap-1 ${item.trend === "down" ? "text-green-400" : "text-red-400"}`}>
                          <span className="material-symbols-outlined text-sm">{item.trend === "down" ? "trending_down" : "trending_up"}</span>
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/5 bg-white/3 px-6 py-3">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    Updated 12 seconds ago • 25,000+ players tracked
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-24 bg-[#0d0d0d] border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black tracking-tighter text-white lg:text-5xl">
              Manual Slog{" "}
              <span className="text-slate-600 italic">vs</span>{" "}
              <span className="text-primary">Tactical Solver</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#111] border border-white/5">
            {[
              { metric: "Execution Speed", manual: "15–20 min / SBC", ai: "5 SECONDS" },
              { metric: "Cost Optimization", manual: "Subjective estimates", ai: "ABSOLUTE LOWEST COST" },
              { metric: "Inventory Integration", manual: "Manual (mental)", ai: "TOTAL CLUB SYNC" },
              { metric: "Chemistry Accuracy", manual: "High error rate", ai: "0% ERRORS GUARANTEED" },
              { metric: "Market Data", manual: "Outdated estimates", ai: "30-SECOND LIVE FEED" },
            ].map((row, i) => (
              <div key={row.metric} className={`grid grid-cols-3 items-center border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                <div className="px-8 py-6 font-semibold text-white">{row.metric}</div>
                <div className="px-8 py-6 text-center text-sm text-slate-500">{row.manual}</div>
                <div className="px-8 py-6 text-center text-sm font-black text-primary italic">{row.ai}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tighter text-white">Tactical Console FAQ</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "What is the SBC Tactical Console?",
                a: "The Tactical Console is EliteFut's real-time market intelligence dashboard. It tracks live prices for all EA FC 26 SBC requirements, analyzes your club inventory, and optimizes challenges with perfect 33/33 chemistry.",
              },
              {
                q: "How does the chemistry optimizer work in FC 26?",
                a: "The Tactical Console's chemistry engine maps every possible player combination across nationality, league, and club links. It guarantees 33/33 chemistry by testing thousands of squad arrangements, including position modifier optimizations.",
              },
              {
                q: "How is this different from Futbin or EasySBC?",
                a: "Futbin and EasySBC show generic solutions without considering your specific club. EliteFut's Tactical Console scans your actual players first, uses only what you own (saving resources), and highlights only what's missing at the real-time lowest BIN — not an estimated price.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-white/5 bg-[#111] px-6 py-5 transition-all hover:border-primary/20 open:border-primary/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-sm font-bold text-white group-open:text-primary">{faq.q}</h3>
                  <span className="material-symbols-outlined shrink-0 text-slate-500 transition-transform group-open:rotate-180 group-open:text-primary">expand_more</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-24 border-t border-white/5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-[3rem] border border-primary/20 bg-[#0e0e0e] p-12 lg:p-20 shadow-[0_0_80px_rgba(204,255,0,0.05)]">
            <h2 className="mb-6 text-5xl font-black uppercase tracking-tighter text-white">
              Join the{" "}
              <span className="text-primary italic">Elite Alpha</span>
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-slate-400">
              Tactical Console access is restricted to beta members. Secure your slot before deployment closes.
            </p>
            <div className="mx-auto mb-8 max-w-sm">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Beta Capacity</span>
                <span className="font-black text-white italic">87/100</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-black/60">
                <div className="h-full w-[87%] bg-primary shadow-[0_0_15px_#CCFF00]" />
              </div>
              <div className="mt-2 text-[9px] uppercase tracking-widest text-slate-600 font-bold">
                Only 13 slots remaining
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://discord.gg/PHUfbsSzhK"
                id="tactical-discord-cta"
                className="inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-5 text-lg font-black text-black shadow-[0_0_40px_rgba(204,255,0,0.3)] transition-all hover:scale-105"
              >
                <span className="material-symbols-outlined font-black">chat</span>
                JOIN DISCORD HQ
              </Link>
              <Link
                href="/ai-sbc-solver"
                id="tactical-back-link"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-bold text-white transition-all hover:border-primary/30 hover:bg-white/10"
              >
                ← SBC Solver Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="py-14 border-t border-white/5 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 text-sm text-slate-500 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">SBC Chemistry Optimization</h4>
            <p className="leading-relaxed">The FC 26 chemistry system awards up to 3 points per player based on shared nationality, league, or club with adjacent players. Achieving full 33/33 chemistry on SBCs requires careful squad construction. Our Tactical Console automates this entirely — testing every valid combination in milliseconds.</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Real-Time FUT Market Tracking</h4>
            <p className="leading-relaxed">The EA FC 26 transfer market updates every few minutes. Prices for common SBC fodder (83–87 rated gold players) can fluctuate significantly during peak hours. EliteFut's live price feed ensures you always view the true lowest price — not a cached price from hours ago.</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">SBC Assistant vs. Manual SBC</h4>
            <p className="leading-relaxed">Elite FUT players complete 5–10 SBCs per day during promo events. Manually solving each one takes 10–20 minutes. With EliteFut's Tactical Console, each SBC completes in under 5 seconds — freeing your time while maximizing resource efficiency and pack rewards.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
