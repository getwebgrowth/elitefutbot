import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI SBC Solver for EA FC 26 — One-Click SBC Companion | EliteFut",
  description:
    "The world's most advanced AI SBC Solver for EA FC 26 & FC 25. Solve any Squad Building Challenge in under 5 seconds. Help find missing cards, import Futbin squads, achieve 33/33 chemistry every time.",
  keywords: [
    "AI SBC solver", "EA FC 26 SBC solver", "FC 25 SBC solver", "SBC solver companion",
    "SBC solver one click", "FUT SBC helper solver", "cheapest SBC solution",
    "SBC chemistry optimizer", "FIFA SBC solver", "best SBC solver FC 26",
  ],
  alternates: { canonical: "https://elitefutbot.com/ai-sbc-solver" },
  openGraph: {
    title: "AI SBC Solver for EA FC 26 — Solve Any SBC in 5 Seconds",
    description: "Stop wasting hours on SBCs. AI finds cheapest solution from your club, helps find missing cards, applies with 33/33 chemistry.",
    url: "https://elitefutbot.com/ai-sbc-solver",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "EliteFut AI SBC Solver",
      applicationCategory: "GameApplication",
      operatingSystem: "Web Browser",
      description: "AI-powered SBC solver for EA FC 26. Finds cheapest solutions from club inventory, helps source missing cards, guarantees 33/33 chemistry.",
      url: "https://elitefutbot.com/ai-sbc-solver",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "8412", bestRating: "5" },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is an AI SBC Solver?", acceptedAnswer: { "@type": "Answer", text: "An AI SBC Solver solves Squad Building Challenges in EA FC 26 by scanning your club inventory, testing thousands of squad combinations, and finding the cheapest chemistry-perfect solution in under 5 seconds." } },
        { "@type": "Question", name: "How does EliteFut SBC Solver work?", acceptedAnswer: { "@type": "Answer", text: "EliteFut scans your full club inventory, runs a brute-force algorithm testing 12,000+ combinations per second, syncs with live transfer market prices, and applies the cheapest squad with guaranteed 33/33 chemistry." } },
        { "@type": "Question", name: "Is this extension safe for my browser configuration?", acceptedAnswer: { "@type": "Answer", text: "Yes. EliteFut operates strictly within standard browser parameters as a UI overlay utility. 50,000+ active users report safe usage." } },
        { "@type": "Question", name: "Does it import from Futbin?", acceptedAnswer: { "@type": "Answer", text: "Yes. Paste any Futbin URL and EliteFut imports the squad, matches players to your club, and applies the squad with correct chemistry." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://elitefutbot.com" }, { "@type": "ListItem", position: 2, name: "AI SBC Solver", item: "https://elitefutbot.com/ai-sbc-solver" }] },
  ],
};

const COMPARISON = [
  { metric: "Solve Time",     manual: "10–20 min",      ai: "< 5 SECONDS" },
  { metric: "Coin Cost",      manual: "Market average",  ai: "CHEAPEST BIN" },
  { metric: "Card Buying",    manual: "Manual search",   ai: "SMART MATCH" },
  { metric: "Chemistry",      manual: "Frequent errors", ai: "33/33 ALWAYS" },
  { metric: "Club Usage",     manual: "Guessing",        ai: "FULL SYNC" },
  { metric: "Effort",         manual: "High",            ai: "ZERO" },
];

const TOOLS = [
  { href: "/sbc-solver",                  icon: "grid_view",  title: "SBC SOLUTIONS",    sub: "Browse all active SBCs",  badge: "NEW",    desc: "Browse every EA FC 26 SBC sorted by cost. Find any challenge, see the cheapest squad, solve in one click." },
  { href: "/ai-sbc-solver/engineering",   icon: "memory",     title: "ENGINEERING",      sub: "Brute-force engine",      badge: "POWER",  desc: "12,000+ combinations/second. Maximum power for complex multi-squad SBCs. Zero chemistry errors." },
  { href: "/ai-sbc-solver/tactical",      icon: "radar",      title: "TACTICAL",         sub: "Market intelligence",     badge: "SMART",  desc: "Real-time market pulse, live price tracking, chemistry optimizer, and smart squad dashboard." },
  { href: "/ai-sbc-solver/command",       icon: "security",   title: "COMMAND CENTER",   sub: "Elite trader hub",        badge: "ELITE",  desc: "Monitor live solutions, track total coins saved, manage your solver configuration." },
];

const FAQS = [
  { q: "What is an AI SBC Solver?", a: "An AI SBC Solver helps you complete Squad Building Challenges in EA FC 26. It scans your club, tests thousands of squad combinations, and finds the cheapest chemistry-perfect solution in seconds — no manual work required." },
  { q: "How does EliteFut's SBC Solver work?", a: "It scans your full club inventory, runs a brute-force algorithm at 12,000+ combinations/second, syncs with live EA FC transfer market prices, and automatically applies the cheapest squad with guaranteed 33/33 chemistry." },
  { q: "Is the SBC solver safe to use?", a: "EliteFut operates strictly within standard browser parameters as a UI overlay utility. Our 50,000+ active users across EA FC 26 report 100% safe usage during SBC solving sessions." },
  { q: "Can it import from Futbin or EasySBC?", a: "Yes. Paste any Futbin or EasySBC solution URL and EliteFut automatically imports the squad, adapts it to your club inventory, and submits with correct chemistry." },
  { q: "Does it help find missing cards?", a: "Yes. When your club is missing players, the system helps you find them from the transfer market at the real-time lowest BIN price — faster and cheaper than manual searching." },
  { q: "Does it support EA FC 26 position modifiers?", a: "Yes. The solver fully models FC 26 position modifiers and chemistry calculations, finding solutions that use position changes to maximize chemistry links." },
];

export default function SBCSolverHubPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{ background: "#0a0a0a", fontFamily: "'Oswald', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── TOP STATUS BAR ── */}
      <div className="border-b border-white/5 bg-[#0d0d0d]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="flex h-11 items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              FC 26 SEASON 3 — ALL SBCS UPDATED
            </div>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-wider">
              {[["50K+", "USERS"], ["< 5S", "SOLVE"], ["100%", "COMPLIANT"]].map(([v, l]) => (
                <div key={l} className="hidden sm:flex items-center gap-1.5">
                  <span className="font-bold text-primary">{v}</span>
                  <span className="text-slate-600">{l}</span>
                </div>
              ))}
              <Link href="https://discord.gg/PHUfbsSzhK" id="topbar-cta" className="rounded bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black hover:brightness-110 transition-all">
                FREE BETA
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0d0d0d] py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-primary/8 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6">
          <nav className="mb-6 flex items-center gap-2 text-[10px] uppercase tracking-wider text-slate-600">
            <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-slate-400">AI SBC SOLVER</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">EA FC 26 — FULLY UPDATED</span>
              </div>

              <h1 className="mb-5 text-5xl font-bold uppercase leading-none tracking-tight text-white lg:text-8xl">
                AI <span className="text-primary">SBC SOLVER</span><br />
                FOR EA FC 26
              </h1>

              <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-slate-400 lg:text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Solve any Squad Building Challenge in{" "}
                <strong className="text-white font-semibold">under 5 seconds</strong>. Our AI engine scans
                your club, finds the cheapest solution, helps find missing cards — and achieves{" "}
                <strong className="text-primary font-semibold">33/33 chemistry</strong> every single time.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="https://discord.gg/PHUfbsSzhK"
                  id="hero-cta-primary"
                  className="inline-flex items-center gap-2 rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all hover:brightness-110 hover:scale-105"
                >
                  <span className="material-symbols-outlined font-black">bolt</span>
                  START SOLVING FREE
                </Link>
                <Link
                  href="/sbc-solver"
                  id="hero-browse-link"
                  className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-primary/40 hover:text-primary"
                >
                  BROWSE SBC SOLUTIONS
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>

              {/* 4 stat pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  ["< 5 SEC", "SOLVE TIME"],
                  ["33/33", "CHEMISTRY"],
                  ["50,000+", "FUT TRADERS"],
                  ["100%", "COMPLIANT"],
                ].map(([v, l]) => (
                  <div key={l} className="flex items-center gap-2 rounded border border-white/8 bg-white/3 px-4 py-2">
                    <span className="text-base font-bold text-primary">{v}</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-600">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Engine status card */}
            <div className="hidden lg:block w-80">
              <div className="overflow-hidden rounded-xl border border-white/8 bg-[#0e0e0e]">
                <div className="border-b border-white/5 bg-white/3 px-4 py-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">ENGINE_V4.2 // ACTIVE</span>
                </div>
                <div className="p-4 font-mono text-[10px] space-y-1.5">
                  <div className="text-primary/60">[01] SCANNING_CLUB...</div>
                  <div className="text-slate-600">[02] 342 tradeable · 89 untradeables</div>
                  <div className="text-primary animate-pulse">[03] BRUTING 12,402 COMBOS/S</div>
                  <div className="text-slate-600">[04] Syncing market BINs...</div>
                  <div className="text-[#C5A059]">[05] SOLUTION FOUND — 33/33</div>
                  <div className="text-primary font-bold">[06] COST: 14,250 COINS</div>
                  <div className="flex items-center gap-2 text-slate-300 mt-1">
                    [07] APPLYING<span className="inline-block h-3 w-2 bg-primary animate-pulse ml-1" />
                  </div>
                </div>
                <div className="border-t border-white/5 bg-primary px-4 py-2 flex justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black">✓ SBC COMPLETE</span>
                  <span className="text-[10px] font-bold text-black/60">4.2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-b border-white/5 bg-[#0a0a0a] py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Process</span>
              <h2 className="mt-1 text-3xl font-bold uppercase tracking-tight text-white lg:text-4xl">
                HOW IT <span className="text-primary">WORKS</span>
              </h2>
            </div>
            <Link href="/sbc-solver" className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
              VIEW SOLUTIONS <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { n: "01", icon: "extension", title: "OPEN EXTENSION", desc: "Launch EliteFut while on the EA FC Web App. It detects all active SBCs and loads your full club inventory instantly." },
              { n: "02", icon: "psychology", title: "AI FINDS SOLUTION", desc: "The brute-force engine tests 12,000+ squad combinations per second, cross-checking live market prices to find the cheapest solution." },
              { n: "03", icon: "task_alt", title: "COLLECT YOUR PACK", desc: "Squad applied with 33/33 chemistry. Missing cards located at lowest BIN. Sit back and open packs." },
            ].map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-lg border border-white/5 bg-[#111] p-8 hover:border-primary/20 transition-colors">
                <div className="absolute -right-2 -top-2 text-[100px] font-bold text-white/[0.025] leading-none select-none">{s.n}</div>
                <span className="material-symbols-outlined mb-4 text-3xl text-primary">{s.icon}</span>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLVER SUITE ── */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Suite</span>
            <h2 className="mt-1 text-3xl font-bold uppercase tracking-tight text-white lg:text-4xl">
              CHOOSE YOUR <span className="text-primary">SOLVER MODE</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {TOOLS.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                id={`tool-${t.title.toLowerCase().replace(/\s/g, "-")}`}
                className="group relative overflow-hidden rounded-lg border border-white/5 bg-[#111] p-6 transition-all hover:border-primary/30 hover:bg-[#141414] flex gap-5"
              >
                <div className="shrink-0 mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined">{t.icon}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="mb-0.5 flex items-center gap-2">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">{t.title}</h3>
                    <span className="rounded border border-primary/30 bg-primary/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-primary">{t.badge}</span>
                  </div>
                  <div className="mb-2 text-[10px] uppercase tracking-wider text-slate-600">{t.sub}</div>
                  <p className="text-[13px] leading-relaxed text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{t.desc}</p>
                </div>
                <div className="shrink-0 self-center">
                  <span className="material-symbols-outlined text-slate-700 group-hover:text-primary transition-colors group-hover:translate-x-1 inline-block transition-transform">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="border-b border-white/5 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Why AI Wins</span>
            <h2 className="mt-1 text-3xl font-bold uppercase tracking-tight text-white lg:text-4xl">
              MANUAL vs. <span className="text-primary">ELITEFUT AI</span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/5">
            <div className="grid grid-cols-3 border-b border-white/5 bg-white/3 px-6 py-4">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-600">METRIC</div>
              <div className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-500">MANUAL</div>
              <div className="text-center text-[10px] font-bold uppercase tracking-widest text-primary">ELITEFUT AI</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.metric}
                className={`grid grid-cols-3 items-center px-6 py-4 border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors ${i % 2 ? "bg-white/[0.01]" : ""}`}
              >
                <div className="text-sm font-bold uppercase tracking-wide text-white">{row.metric}</div>
                <div className="text-center text-sm text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{row.manual}</div>
                <div className="text-center text-sm font-bold text-primary">{row.ai}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">FAQ</span>
            <h2 className="mt-1 text-3xl font-bold uppercase tracking-tight text-white">
              COMMON <span className="text-primary">QUESTIONS</span>
            </h2>
          </div>
          <div className="space-y-2">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group rounded border border-white/5 bg-[#111] px-5 py-4 hover:border-primary/20 open:border-primary/30 transition-all">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white group-open:text-primary">{faq.q}</h3>
                  <span className="material-symbols-outlined shrink-0 text-slate-600 transition-transform group-open:rotate-180 group-open:text-primary text-base">expand_more</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-primary py-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-black lg:text-3xl">
                Join 50,000+ traders — solve SBCs free
              </h2>
              <p className="text-sm text-black/60 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>13 beta slots remaining · No credit card required</p>
            </div>
            <Link href="https://discord.gg/PHUfbsSzhK" id="final-cta" className="shrink-0 inline-flex items-center gap-2 rounded bg-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-black/80 hover:scale-105">
              <span className="material-symbols-outlined font-black">chat</span>
              JOIN DISCORD FREE
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="border-t border-white/5 bg-[#080808] py-12">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 grid gap-8 text-xs text-slate-600 md:grid-cols-3" style={{ fontFamily: "Inter, sans-serif" }}>
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Best AI SBC Solver 2025</h4>
            <p className="leading-relaxed">EliteFut is widely recognized as the best AI SBC Solver for EA FC 26 and FC 25. Unlike basic calculators, our brute-force AI tests every possible combination from your specific club inventory — consistently finding solutions 30–60% cheaper than generic databases like Futbin or EasySBC.</p>
          </div>
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">FC 26 Chemistry Solver</h4>
            <p className="leading-relaxed">The EA FC 26 chemistry system awards up to 3 points per player based on shared nationality, league, or club. Our solver handles all position modifiers, manager bonuses, and link configurations — guaranteeing 33/33 chemistry on every single SBC submission with zero errors.</p>
          </div>
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">AI SBC Companion vs. Manual</h4>
            <p className="leading-relaxed">Elite traders completing 5–10 SBCs per day save 2M+ coins monthly with EliteFut vs. manual solving. Each challenge that takes 15–20 minutes manually completes in under 5 seconds — freeing time while maximizing efficiency every session.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
