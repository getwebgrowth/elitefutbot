import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SBC Command Center — Elite FUT Trading Hub & Solver | EliteFut",
  description:
    "The ultimate command center for elite EA FC 26 traders. Monitor live SBC solutions, track profit saved across all challenges, and manage your solving companion from one powerful hub.",
  keywords: [
    "SBC command center",
    "EA FC 26 trading hub",
    "SBC network companion",
    "FUT elite trader tool",
    "FC 26 SBC profit tracker",
    "FUT SBC monitoring dashboard",
    "EA FC 26 SBC companion",
    "FC 26 helper SBC solver",
    "SBC progress tracker",
    "FUT coins saved tracker",
    "best FC 26 trading tools",
    "FC 26 SBC command utility",
  ],
  alternates: {
    canonical: "https://elitefutbot.com/ai-sbc-solver/command",
  },
  openGraph: {
    title: "SBC Command Center — Elite EA FC 26 Trader Dashboard",
    description:
      "Monitor all active SBCs, track total coins saved, and manage solving templates from one command hub. Built for serious FUT traders.",
    url: "https://elitefutbot.com/ai-sbc-solver/command",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "EliteFut Command Center",
      description:
        "Elite command hub for EA FC 26 SBC companion. Monitor live solutions, track coins saved, and manage the solver overlay.",
      url: "https://elitefutbot.com/ai-sbc-solver/command",
      applicationCategory: "GameApplication",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://elitefutbot.com" },
        { "@type": "ListItem", position: 2, name: "AI SBC Solver", item: "https://elitefutbot.com/ai-sbc-solver" },
        { "@type": "ListItem", position: 3, name: "Command Center", item: "https://elitefutbot.com/ai-sbc-solver/command" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the EliteFut Command Center?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The EliteFut Command Center is an elite dashboard for EA FC 26 traders. It monitors all active SBC solutions simultaneously, tracks your total coins saved, and manages the solver overlay — giving serious traders full visibility and control.",
          },
        },
        {
          "@type": "Question",
          name: "How much can I save using an AI SBC solver?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EliteFut users save an average of 45,000 coins per SBC compared to manual solving. Active traders who complete 5–10 SBCs daily save over 2 million coins per month through better club inventory usage and lower market prices.",
          },
        },
      ],
    },
  ],
};

const RECENT_SOLVES = [
  { initials: "FC", sbc: "Centurions SBC Solved", time: "2 minutes ago", saved: "+28,400 COINS" },
  { initials: "RK", sbc: "Flashback Kante Completed", time: "8 minutes ago", saved: "+42,150 COINS" },
  { initials: "JS", sbc: "Player Pick (85+) Deploy", time: "14 minutes ago", saved: "+12,800 COINS" },
  { initials: "MW", sbc: "TOTW Upgrade × 3", time: "22 minutes ago", saved: "+8,600 COINS" },
  { initials: "DP", sbc: "Hybrid Nations", time: "31 minutes ago", saved: "+3,200 COINS" },
];

const MISSION_STATS = [
  { label: "SBCs Solved Today", value: "1,247", icon: "task_alt", color: "text-primary" },
  { label: "Coins Saved Today", value: "56.2M", icon: "savings", color: "text-[#C5A059]" },
  { label: "Active Sessions", value: "891", icon: "sensors", color: "text-primary" },
  { label: "Avg. Solve Time", value: "4.2s", icon: "speed", color: "text-[#C5A059]" },
];

export default function CommandCenterPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link href="/ai-sbc-solver" className="hover:text-primary transition-colors">AI SBC Solver</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-slate-300">Command Center</span>
          </nav>

          <div className="flex flex-col items-center text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5A059] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C5A059]" />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#C5A059]">
                Tactical Override Active
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-[0.88] tracking-tighter text-white lg:text-8xl">
              THE END OF
              <br />
              <span className="text-primary italic neon-glow">SBC STRESS</span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 lg:text-xl">
              Your secret weapon for EA FC 26. Monitor every active SBC, track total coins saved,
              and deploy elite-level solver logic that eliminates the grind completely.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://discord.gg/PHUfbsSzhK"
                id="command-cta-primary"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-primary px-10 py-5 text-xl font-black text-black shadow-[0_0_40px_rgba(204,255,0,0.4)] transition-all hover:scale-105 animate-pulse-glow"
              >
                <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform group-hover:translate-y-0" />
                <span className="material-symbols-outlined relative font-black">security</span>
                <span className="relative">DEPLOY SOLVER</span>
                <span className="material-symbols-outlined relative font-black">bolt</span>
              </Link>
              <Link
                href="/sbc-solver"
                id="command-browse-link"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-base font-bold text-white transition-all hover:border-primary/40 hover:bg-white/10"
              >
                Browse SBC Solutions
              </Link>
            </div>
          </div>

          {/* COMMAND DASHBOARD */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-8 rounded-full bg-primary/8 blur-[100px]" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/8 bg-[#0e0e0e] shadow-2xl">
              {/* Toolbar */}
              <div className="flex items-center justify-between border-b border-white/5 bg-white/3 px-8 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/30" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/30" />
                    <div className="h-3 w-3 rounded-full bg-primary/30" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    Engine Status: Deploying Solutions...
                  </span>
                </div>
                <div className="font-mono text-[10px] text-primary/60 tracking-widest">
                  CALCULATING_ITERATIONS: 12,402/s
                </div>
              </div>

              {/* Player cards visual */}
              <div className="p-8 border-b border-white/5">
                <div className="flex items-center justify-center gap-3 max-h-[220px]">
                  {[0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4].map((opacity, i) => (
                    <div
                      key={i}
                      className={`${i === 3 ? "h-40 w-28" : "h-28 w-20"} rounded-xl border flex items-center justify-center relative overflow-hidden transition-all`}
                      style={{
                        opacity: i === 3 ? 1 : opacity,
                        borderColor: i === 3 ? "rgba(204,255,0,0.8)" : i === 2 || i === 4 ? "rgba(204,255,0,0.4)" : "rgba(255,255,255,0.1)",
                        background: i === 3 ? "#CCFF00" : i === 2 || i === 4 ? "rgba(204,255,0,0.1)" : "rgba(255,255,255,0.03)",
                        boxShadow: i === 3 ? "0 0 50px rgba(204,255,0,0.4)" : "none",
                      }}
                    >
                      {i === 3 ? (
                        <div className="text-center">
                          <div className="text-[10px] font-black text-black uppercase tracking-widest mb-1">Chemistry</div>
                          <div className="text-5xl font-black text-black leading-none">100</div>
                          <div className="mt-1 rounded bg-black/20 px-1 py-0.5 text-[8px] font-bold text-black">MAX_SYNC</div>
                        </div>
                      ) : i === 2 || i === 4 ? (
                        <span className="material-symbols-outlined text-primary text-2xl animate-spin" style={{ animationDuration: "3s" }}>sync</span>
                      ) : (
                        <span className="material-symbols-outlined text-white/20 text-2xl">person</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/5">
                {MISSION_STATS.map((stat, i) => (
                  <div key={stat.label} className={`p-6 text-center ${i < 3 ? "border-r border-white/5" : ""}`}>
                    <span className={`material-symbols-outlined text-2xl mb-2 block ${stat.color}`}>{stat.icon}</span>
                    <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Main CTA */}
              <div className="p-8 flex justify-center">
                <Link
                  href="https://discord.gg/PHUfbsSzhK"
                  id="command-engine-cta"
                  className="group relative inline-flex items-center gap-4 overflow-hidden rounded-2xl bg-primary px-12 py-6 shadow-[0_0_30px_rgba(204,255,0,0.5)] transition-all hover:scale-105 animate-pulse-glow"
                >
                  <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform group-hover:translate-y-0" />
                  <span className="relative text-2xl font-black uppercase tracking-tighter text-black">
                    DEPLOY SOLVER
                  </span>
                  <span className="material-symbols-outlined relative font-black text-black text-2xl">bolt</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEL SECTION ── */}
      <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#C5A059]">Elite Intel</span>
              <h2 className="mt-3 mb-6 text-4xl font-black tracking-tighter text-white lg:text-5xl">
                Built with{" "}
                <span className="text-[#C5A059] italic">Elite-Tier</span>{" "}
                Logic
              </h2>
              <p className="mb-8 text-lg text-slate-400 leading-relaxed">
                Our algorithm doesn&apos;t just solve SBCs — it mimics the logic of elite traders who
                dominate the top 1% of the FUT market, finding opportunities others miss entirely.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: "inventory_2",
                    color: "bg-primary/10 text-primary",
                    title: "Club-First Logic",
                    desc: "Automatically analyzes your club inventory to find players you already own — zeroing out their cost completely.",
                  },
                  {
                    icon: "trending_down",
                    color: "bg-[#C5A059]/10 text-[#C5A059]",
                    title: "Live Market Sync",
                    desc: "Real-time price feeds ensure every solution uses the absolute cheapest BIN available at that millisecond.",
                  },
                  {
                    icon: "shield",
                    color: "bg-primary/10 text-primary",
                    title: "Stealth Protocol",
                    desc: "Humanized request patterns and tactical delay logic keep your account safe during heavy SBC rotations.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-[#111] p-5 border border-white/5 hover:border-primary/20 transition-colors">
                    <div className={`shrink-0 rounded-xl p-3 ${item.color}`}>
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent operations feed */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#C5A059]/5 blur-3xl" />
              <div className="relative rounded-3xl border border-white/8 bg-[#0e0e0e] p-6">
                <div className="mb-5 flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                    Recent Operational Success
                  </span>
                  <span className="text-[10px] font-mono text-primary">LIVE_FEED</span>
                </div>
                <div className="space-y-3">
                  {RECENT_SOLVES.map((item, i) => (
                    <div
                      key={item.sbc}
                      className={`flex items-center justify-between rounded-xl border border-white/5 bg-[#161616] p-4 transition-all hover:border-primary/20 ${i >= 3 ? "opacity-50" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-400">
                          {item.initials}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{item.sbc}</div>
                          <div className="text-[10px] text-slate-500">{item.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-primary">{item.saved}</div>
                        <div className="text-[9px] uppercase text-slate-600 font-bold">SAVED</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black tracking-tighter text-white lg:text-5xl">
              MANUAL SLOG{" "}
              <span className="text-slate-600 italic">vs</span>{" "}
              <span className="text-primary italic">AI DOMINANCE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Manual card */}
            <div className="relative rounded-3xl border border-white/5 bg-[#111] p-8">
              <div className="absolute inset-0 rounded-3xl bg-red-500/3" />
              <h3 className="relative mb-8 flex items-center gap-2 text-xl font-black text-slate-500">
                <span className="material-symbols-outlined text-red-500/50">sentiment_dissatisfied</span>
                Manual Solving
              </h3>
              <div className="relative space-y-5">
                {[
                  { label: "Speed", value: "15–20 min / SBC" },
                  { label: "Efficiency", value: "Market average" },
                  { label: "Chem Errors", value: "Frequent" },
                  { label: "Club Usage", value: "Guessing" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-sm font-medium uppercase tracking-widest text-slate-500">{row.label}</span>
                    <span className="text-sm font-bold text-slate-300">{row.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium uppercase tracking-widest text-slate-500">Status</span>
                  <span className="rounded px-2 py-1 text-[10px] font-black uppercase bg-red-500/10 text-red-500">Wasting Assets</span>
                </div>
              </div>
            </div>

            {/* AI card */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-[2rem] bg-primary/20 blur opacity-20" />
              <div className="relative rounded-3xl border border-primary/30 bg-[#111] p-8 shadow-[0_0_30px_rgba(204,255,0,0.1)]">
                <div className="absolute top-4 right-6">
                  <span className="material-symbols-outlined text-3xl text-primary animate-pulse">verified</span>
                </div>
                <h3 className="mb-8 flex items-center gap-2 text-xl font-black text-white">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                  AI Solver Engine
                </h3>
                <div className="space-y-5">
                  {[
                    { label: "Speed", value: "INSTANT" },
                    { label: "Efficiency", value: "LOWEST BIN" },
                    { label: "Chem Errors", value: "0% ERROR RATE" },
                    { label: "Club Usage", value: "FULL SYNC" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-sm font-bold text-primary/70 uppercase tracking-widest">{row.label}</span>
                      <span className="text-sm font-black text-white italic neon-glow">{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-primary/70 uppercase tracking-widest">Status</span>
                    <span className="rounded px-2 py-1 text-[10px] font-black uppercase bg-primary text-black">Strategic Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 border-t border-white/5 bg-[#0d0d0d]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tighter text-white">Command Center FAQ</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "What is the EliteFut Command Center?",
                a: "The Command Center is the elite dashboard for serious EA FC 26 traders. It monitors all active SBCs simultaneously, tracks your total coins saved, shows a live feed of recent solves, and manages the solver overlay — all from one hub.",
              },
              {
                q: "How much can I save using an AI SBC solver?",
                a: "EliteFut users save an average of 45,000 coins per SBC vs. manual solving. Active traders completing 5–10 SBCs daily save over 2 million coins per month through better club inventory usage and real-time lowest BIN purchasing.",
              },
              {
                q: "Is the Command Center safe to use with my EA FC account?",
                a: "Yes. EliteFut's Command Center uses humanized request patterns, realistic timing delays, and rate limit settings. Our 50,000+ active users have maintained a 100% safe usage rate during SBC solving sessions.",
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
      <section className="relative overflow-hidden py-20 border-t border-white/5">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4">
          <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_top,#1a1a1a_0%,#0a0a0a_100%)] p-12 lg:p-20 text-center">
            <div className="absolute top-0 right-0 p-8 opacity-[0.04]">
              <span className="material-symbols-outlined text-[12rem]">security</span>
            </div>
            <h2 className="mb-6 text-4xl font-black uppercase tracking-tighter text-white lg:text-7xl">
              READY TO{" "}
              <br />
              <span className="text-primary italic">DEPLOY?</span>
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-slate-400">
              Join the elite trading circle. Secure beta access to the Command Center today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="https://discord.gg/PHUfbsSzhK"
                id="command-final-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-5 text-xl font-black text-black shadow-[0_0_40px_rgba(204,255,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(204,255,0,0.6)]"
              >
                <span className="material-symbols-outlined font-black">login</span>
                JOIN THE MISSION
              </Link>
              <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-[#C5A059]">13</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Slots Open</div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="text-left text-[11px] font-bold leading-tight text-slate-400">
                  LIMITED BETA
                  <br />DEPLOY NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="py-14 border-t border-white/5 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 text-sm text-slate-500 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Neural Solver</h4>
            <p className="leading-relaxed">High-frequency SBC optimization engine using recurrent logic for EA FC 26. Designed for low-latency market execution and inventory-aware solving that continuously learns from market patterns.</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Inventory Sync</h4>
            <p className="leading-relaxed">Seamless integration with the EA FC Web App data layers. Real-time player valuation and club stock analysis ensures every SBC solution prioritizes your existing squad before touching the market.</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Stealth Protocol</h4>
            <p className="leading-relaxed">Engineered with humanized request patterns and tactical delay logic to ensure 100% account security during heavy SBC rotation sessions. Trusted by 50,000+ active FUT traders globally.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
