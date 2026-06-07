import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SBC Engineering Terminal — Brute-Force AI Solver for EA FC 26 | FUT Sniper",
  description:
    "The most powerful SBC brute-force engine for EA FC 26. Process 12,000+ squad combinations per second, achieve 33/33 chemistry guaranteed, and auto-buy missing cards at the lowest BIN. Zero errors, maximum efficiency.",
  keywords: [
    "SBC engineering terminal",
    "FC 26 brute force SBC solver",
    "AI SBC automation engine",
    "EA FC 26 chemistry solver engine",
    "SBC squad combination solver",
    "FUT SBC bot engine",
    "FC 26 SBC algorithm",
    "automated FC 26 SBC",
    "FC 26 SBC solver free",
    "best SBC solver EA FC 26",
    "SBC solver no ban",
    "FC 26 SBC auto complete bot",
    "FUT 26 SBC solver chrome extension",
  ],
  alternates: {
    canonical: "https://elitefutbot.com/ai-sbc-solver/engineering",
  },
  openGraph: {
    title: "SBC Engineering Terminal — 12,000 Combinations/s Brute-Force Solver",
    description:
      "Raw brute-force power for EA FC 26 SBCs. 12,000+ squad combinations tested per second. 33/33 chemistry guaranteed. Zero errors.",
    url: "https://elitefutbot.com/ai-sbc-solver/engineering",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "FUT Sniper Engineering Terminal",
      description:
        "Brute-force AI SBC solving engine for EA FC 26. Tests 12,000+ squad combinations per second, guarantees 33/33 chemistry, and auto-buys missing cards at lowest BIN prices.",
      url: "https://elitefutbot.com/ai-sbc-solver/engineering",
      applicationCategory: "GameApplication",
      featureList: [
        "12,000+ combinations per second",
        "33/33 chemistry guaranteed",
        "Zero error rate",
        "Auto-buy missing cards",
        "Club inventory priority",
        "Live market BIN sync",
        "FC 26 position modifier support",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://elitefutbot.com" },
        { "@type": "ListItem", position: 2, name: "AI SBC Solver", item: "https://elitefutbot.com/ai-sbc-solver" },
        { "@type": "ListItem", position: 3, name: "Engineering Terminal", item: "https://elitefutbot.com/ai-sbc-solver/engineering" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the SBC brute-force engine work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FUT Sniper's Engineering Terminal uses a brute-force algorithm that tests over 12,000 squad combinations per second. It evaluates every valid permutation of your club inventory against the SBC requirements, then cross-references live market prices to find the cheapest valid solution with perfect 33/33 chemistry.",
          },
        },
        {
          "@type": "Question",
          name: "What does 33/33 chemistry mean in EA FC 26?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In EA FC 26, each player in your SBC squad can earn up to 3 chemistry points based on shared nationality, league, or club with adjacent players. A full 11-player squad with maximum chemistry equals 33/33. FUT Sniper's engineering engine guarantees 33/33 chemistry on every SBC submission.",
          },
        },
        {
          "@type": "Question",
          name: "What is the fastest SBC solver for EA FC 26?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FUT Sniper's Engineering Terminal is the fastest AI SBC solver for EA FC 26, processing 12,000+ squad combinations per second to find solutions in under 5 seconds. By comparison, manual solving typically takes 15-20 minutes per challenge.",
          },
        },
      ],
    },
  ],
};

const ACTIVE_SBCS = [
  { name: "PotM Vinicius Jr.", league: "Real Madrid • La Liga", cost: "1.2M", badge: "ICON" },
  { name: "Flashback Kante", league: "Al Ittihad • ROSHN Saudi", cost: "450K", badge: "FLASHBACK" },
  { name: "Daily Gold Upgrade", league: "Repeatable • 12h Left", cost: "3.2K", badge: "DAILY" },
  { name: "Hybrid Nations", league: "Around The World • Fixed", cost: "7.8K", badge: "BASIC" },
];

export default function EngineeringTerminalPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="absolute left-1/4 top-0 h-[500px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
          <div className="absolute right-0 top-1/2 h-[400px] w-[500px] rounded-full bg-[#C5A059]/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6">
          {/* Breadcrumb */}
          <nav className="mb-10 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link href="/ai-sbc-solver" className="hover:text-primary transition-colors">AI SBC Solver</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-slate-300">Engineering Terminal</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">
                  Engine v4.2 — Stable
                </span>
              </div>

              <h1 className="text-5xl font-black leading-[0.9] tracking-tighter text-white lg:text-7xl">
                The End of
                <br />
                SBC Stress.
                <br />
                <span className="text-primary italic neon-glow">Solved in One Click.</span>
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
                Our AI engine brute-forces{" "}
                <strong className="text-white">12,000+ squad combinations per second</strong>.
                We check your club inventory first, sync live market prices,
                and guarantee <strong className="text-primary">33/33 chemistry</strong> at the
                absolute lowest cost — every time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="https://discord.gg/PHUfbsSzhK"
                  id="engineering-cta-primary"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-primary px-8 py-4 text-lg font-black text-black shadow-[0_0_30px_rgba(204,255,0,0.4)] transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform group-hover:translate-y-0" />
                  <span className="material-symbols-outlined relative font-black">bolt</span>
                  <span className="relative">START SOLVING NOW</span>
                </Link>
                <Link
                  href="/sbc-solver"
                  id="engineering-solutions-link"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all hover:border-primary/30 hover:bg-white/10"
                >
                  Browse Solutions
                </Link>
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "12K+", label: "Combos/sec" },
                  { value: "33/33", label: "Chemistry" },
                  { value: "0%", label: "Error rate" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/5 bg-white/3 p-3 text-center">
                    <div className="text-xl font-black text-primary">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Engine status module */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-primary/8 blur-[60px]" />
                <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0e0e0e] p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Chemistry meter */}
                    <div className="relative w-48 h-48 shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90 absolute inset-0">
                        <circle cx="96" cy="96" r="88" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                        <circle
                          cx="96" cy="96" r="88"
                          fill="transparent"
                          stroke="#CCFF00"
                          strokeWidth="12"
                          strokeDasharray="552.92"
                          strokeDashoffset="0"
                          style={{ filter: "drop-shadow(0 0 10px rgba(204,255,0,0.6))" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-black text-primary neon-glow">33/33</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mt-1">CHEMISTRY</span>
                      </div>
                    </div>

                    {/* Terminal */}
                    <div className="flex-1 w-full font-mono text-[12px] space-y-2 border-l-2 border-primary/30 pl-6">
                      <div className="flex items-center gap-2 text-primary/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" />
                        System Logic: Scanning Club Inventory...
                      </div>
                      <div className="flex items-center gap-2 text-primary animate-pulse">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping shrink-0" />
                        Running 12,402 combinations/second...
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Fetching Market BINs... Done
                      </div>
                      <div className="flex items-center gap-2 text-[#C5A059] font-bold">
                        <span className="material-symbols-outlined text-[16px] text-[#C5A059]">verified</span>
                        Solution Found: 14,250 Coins
                      </div>
                      <div className="flex items-center gap-2 text-primary font-black">
                        <span className="material-symbols-outlined text-[16px]">task_alt</span>
                        Chemistry: 33/33 — LOCKED
                      </div>
                      <div className="pt-4 flex justify-between items-end">
                        <div>
                          <div className="text-[9px] text-slate-500 uppercase font-bold mb-1">Efficiency Rating</div>
                          <div className="h-1.5 w-36 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[94%] shadow-[0_0_8px_rgba(204,255,0,0.6)]" />
                          </div>
                        </div>
                        <div className="text-[9px] text-slate-500 uppercase font-bold">ENGINE_V4.2_STABLE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE DASHBOARD ── */}
      <section className="py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-14 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary">Core Capabilities</span>
            <h2 className="mt-3 text-4xl font-black tracking-tighter text-white lg:text-5xl">
              Built to Brute-Force{" "}
              <span className="text-primary italic">Every SBC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "person_search",
                title: "Personalized Logic",
                desc: "Analyzes your specific club players to save every possible coin. Prioritizes untradeables and duplicate items first — spending your coins only when absolutely necessary.",
              },
              {
                icon: "analytics",
                title: "Market Pulse Sync",
                desc: "Zero-latency connection to the EA FC 26 transfer market. Finds undervalued fodder instantly with real-time BIN accuracy — not cached prices from hours ago.",
              },
              {
                icon: "memory",
                title: "Zero Chemistry Errors",
                desc: "Advanced heuristic algorithms master the complex FC 26 chemistry system including position modifiers. No more 'Almost 33' frustrations — perfection guaranteed.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/5 bg-[#111] p-8 transition-all hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary/20">
                  <span className="material-symbols-outlined text-2xl">{f.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-black tracking-tight text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black tracking-tighter text-white lg:text-5xl">
              Manual Slog{" "}
              <span className="text-slate-600 italic">vs.</span>{" "}
              <span className="text-primary">AI Dominance</span>
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-primary" />
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
            <div className="grid grid-cols-3 bg-white/3 border-b border-white/5 px-8 py-5">
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Metric</div>
              <div className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400">Manual Effort</div>
              <div className="text-center text-[10px] font-black uppercase tracking-widest text-primary">AI Solver</div>
            </div>
            {[
              { metric: "Speed", manual: "15 minutes+", ai: "3 seconds" },
              { metric: "Cost", manual: "Market average", ai: "Absolute lowest BIN" },
              { metric: "Errors", manual: "Frequent", ai: "0% Guaranteed" },
              { metric: "Chemistry", manual: "Manual guess", ai: "33/33 Every Time" },
              { metric: "Effort", manual: "High", ai: "Zero" },
            ].map((row, i) => (
              <div key={row.metric} className={`grid grid-cols-3 border-b border-white/5 last:border-0 items-center hover:bg-white/3 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                <div className="px-8 py-6 text-lg font-semibold text-white">{row.metric}</div>
                <div className="px-8 py-6 text-center text-slate-500">{row.manual}</div>
                <div className="px-8 py-6 flex items-center justify-center gap-2 font-black text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
                  {row.ai}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE SBC CARDS ── */}
      <section className="py-24 bg-[#080808] border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mb-12 flex justify-between items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Live Feed</span>
              <h2 className="mt-1 text-3xl font-black tracking-tight text-white">Active SBC Solutions</h2>
            </div>
            <Link href="/sbc-solver" id="view-all-sbcs-link" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
              VIEW ALL SBCS
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACTIVE_SBCS.map((sbc) => (
              <article key={sbc.name} className="group overflow-hidden rounded-2xl border border-white/5 bg-[#111] transition-all hover:border-primary/30 hover:-translate-y-1">
                {/* Card header */}
                <div className="h-24 bg-gradient-to-br from-white/5 to-transparent border-b border-white/5 flex items-center justify-center relative">
                  <span className="material-symbols-outlined text-5xl text-white/5 group-hover:text-white/10 transition-colors">sports_soccer</span>
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 px-2 py-0.5 text-[9px] font-black uppercase text-[#C5A059]">
                      {sbc.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-black text-base text-white">{sbc.name}</h3>
                    <p className="text-xs text-slate-500">{sbc.league}</p>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Cost</div>
                      <div className="text-xl font-black text-[#C5A059]">{sbc.cost}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Chemistry</div>
                      <div className="text-sm font-black text-primary">33/33</div>
                    </div>
                  </div>
                  <button
                    id={`solve-engineering-${sbc.name.toLowerCase().replace(/\s/g, "-")}`}
                    className="w-full rounded-xl border border-primary/20 bg-primary/8 py-3 text-[11px] font-black uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-black"
                  >
                    SOLVE NOW
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCORD BANNER ── */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-[#111] via-[#0e0e0e] to-[#111] p-8 md:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center md:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary text-[10px] font-black uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Limited Beta
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                  Join Discord for Lifetime Beta Access
                </h2>
                <p className="max-w-lg text-slate-400">
                  First-hand access to new algorithms, priority solving speed, and custom club tracking features.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 shrink-0">
                <div className="text-center">
                  <div className="text-5xl font-black text-primary tabular-nums neon-glow">13/100</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1">Slots Remaining</div>
                </div>
                <Link
                  href="https://discord.gg/PHUfbsSzhK"
                  id="engineering-discord-cta"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#5865F2] px-8 py-4 font-black text-white shadow-lg transition-all hover:brightness-110 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                  CLAIM MY SLOT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 border-t border-white/5 bg-[#0d0d0d]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tighter text-white">Engineering Terminal FAQ</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "How does the SBC brute-force engine work?",
                a: "The Engineering Terminal uses a brute-force algorithm that tests 12,000+ squad combinations per second. It evaluates every valid permutation of your club inventory against the SBC requirements, then cross-references live market prices to find the absolute cheapest solution with 33/33 chemistry guaranteed.",
              },
              {
                q: "What does 33/33 chemistry mean in EA FC 26?",
                a: "In EA FC 26, each player earns up to 3 chemistry points from links to teammates sharing league, club, or nationality. Full team chemistry is 33 points (11 players × 3). FUT Sniper's engine guarantees every SBC submission hits 33/33 — eliminating the most common and costly manual error.",
              },
              {
                q: "What is the fastest SBC solver for EA FC 26?",
                a: "FUT Sniper's Engineering Terminal is the fastest AI SBC solver for EA FC 26, processing 12,000+ squad combinations per second for solutions in under 5 seconds. By comparison, manual solving typically takes 15-20 minutes per challenge.",
              },
              {
                q: "Does it work with position modifiers in FC 26?",
                a: "Yes. The Engineering Terminal fully supports FC 26 position modifier cards. It factors in position changes when calculating chemistry links, allowing it to find solutions that human solvers would miss entirely.",
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

      {/* ── SEO ── */}
      <section className="py-14 border-t border-white/5 bg-[#080808]">
        <div className="mx-auto max-w-[1440px] px-6 grid gap-10 text-sm text-slate-500 md:grid-cols-3">
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">AI Brute-Force SBC Solver</h4>
            <p className="leading-relaxed">Traditional SBC solvers suggest fixed solutions. FUT Sniper&apos;s Engineering Terminal actually brute-forces your specific situation — testing every combination of your personal club inventory against the SBC&apos;s requirements. This personalized approach consistently finds solutions 30–60% cheaper than generic databases.</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">FC 26 Chemistry System</h4>
            <p className="leading-relaxed">The EA FC 26 chemistry system rewards player connections through shared nationality, league, and club. Position modifiers, manager cards, and stadium links also contribute. Our Engineering Terminal models the complete chemistry graph — finding solutions with perfect 33/33 that bypass every constraint.</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400">Auto-Buy Missing SBC Cards</h4>
            <p className="leading-relaxed">When your club is missing cards for an SBC, FUT Sniper&apos;s Engineering Terminal automatically identifies which cards to buy and snipes them from the transfer market at the lowest BIN price. This is faster and cheaper than manually searching, bidding, and buying one card at a time.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
