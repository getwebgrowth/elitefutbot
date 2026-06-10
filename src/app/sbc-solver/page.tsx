import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EA FC 26 SBC Solutions — One-Click AI Solver | EliteFut",
  description:
    "Browse every active EA FC 26 Squad Building Challenge solution. See cheapest costs, complete squads, and solve instantly with one-click AI assistance. Updated in real-time.",
  keywords: [
    "EA FC 26 SBC solutions", "FC 26 SBC cheapest solution", "SBC solver",
    "active SBC challenges FC 26", "best SBC to do FC 26", "TOTW SBC solution",
    "icon SBC solution", "FC 26 SBC cost", "FUT SBC assistant solver",
  ],
  alternates: { canonical: "https://elitefutbot.com/sbc-solver" },
  openGraph: {
    title: "EA FC 26 SBC Solutions — Browse & Solve Instantly",
    description: "Complete EA FC 26 SBC solutions database. Filter by type, see cheapest cost, solve in one click.",
    url: "https://elitefutbot.com/sbc-solver",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "EA FC 26 SBC Solutions",
      description: "Complete database of EA FC 26 Squad Building Challenge solutions with one-click AI assistance.",
      url: "https://elitefutbot.com/sbc-solver",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the cheapest SBC to do in EA FC 26?",
          acceptedAnswer: { "@type": "Answer", text: "The cheapest SBCs in EA FC 26 are typically daily upgrade challenges (3,000–5,000 coins) and basic hybrid leagues (under 10,000 coins). Costs vary by market prices." },
        },
        {
          "@type": "Question",
          name: "How do I solve SBCs in EA FC 26 automatically?",
          acceptedAnswer: { "@type": "Answer", text: "EliteFut's AI SBC Solver finds the cheapest solution using your club inventory, helping you secure missing cards. It solves any SBC in under 5 seconds with guaranteed 33/33 chemistry." },
        },
      ],
    },
  ],
};

// MOCK SBC data – in production this would come from an API
const SBCS = [
  { id: "shapeshifters-icon-mbappe", name: "K. MBAPPÉ", subname: "Shapeshifters Icon", rating: 98, position: "ST", type: "ICON", cost: "1,200,000", reward: "Icon Pack", timeLeft: "5D 12H", hot: true, cardBg: "from-[#b8860b] to-[#8B6914]", accent: "#FFD700" },
  { id: "centurions-bellingham", name: "J. BELLINGHAM", subname: "Centurions", rating: 95, position: "CAM", type: "PROMO", cost: "850,000", reward: "Bellingham Centurions", timeLeft: "3D 4H", hot: true, cardBg: "from-[#1a6b4a] to-[#0d3d28]", accent: "#00E5A0" },
  { id: "potm-vinicius", name: "VINICIUS JR.", subname: "Player of the Month", rating: 94, position: "LW", type: "POTM", cost: "1,400,000", reward: "PotM Vinicius", timeLeft: "6D 0H", hot: true, cardBg: "from-[#6B3FA0] to-[#3d1f70]", accent: "#A855F7" },
  { id: "flashback-kante", name: "N. KANTÉ", subname: "Flashback", rating: 91, position: "CDM", type: "FLASHBACK", cost: "815,000", reward: "Kante Flashback", timeLeft: "1D 18H", hot: false, cardBg: "from-[#1e3a5f] to-[#0f1f35]", accent: "#3B82F6" },
  { id: "fut-birthday-salah", name: "M. SALAH", subname: "FUT Birthday", rating: 93, position: "RW", type: "PROMO", cost: "720,000", reward: "Salah Birthday", timeLeft: "4D 2H", hot: false, cardBg: "from-[#b8860b] to-[#8B6914]", accent: "#FFD700" },
  { id: "marquee-matchups", name: "MARQUEE", subname: "Marquee Matchups", rating: 85, position: "MIX", type: "WEEKLY", cost: "85,000", reward: "Premium Gold Pack", timeLeft: "5D 22H", hot: false, cardBg: "from-[#1a1a2e] to-[#0d0d1a]", accent: "#CCFF00" },
  { id: "totw-upgrade", name: "TOTW UPGRADE", subname: "Weekly Challenge", rating: 83, position: "MIX", type: "UPGRADE", cost: "32,000", reward: "TOTW Pack", timeLeft: "2D 8H", hot: false, cardBg: "from-[#1a1a2e] to-[#0d0d1a]", accent: "#CCFF00" },
  { id: "hybrid-leagues", name: "HYBRID LEAGUES", subname: "Around the World", rating: 82, position: "MIX", type: "BASIC", cost: "7,800", reward: "Gold Pack", timeLeft: "Permanent", hot: false, cardBg: "from-[#2a2a2a] to-[#1a1a1a]", accent: "#9ca3af" },
  { id: "fut-birthday-de-bruyne", name: "K. DE BRUYNE", subname: "FUT Birthday", rating: 96, position: "CM", type: "PROMO", cost: "1,100,000", reward: "De Bruyne Birthday", timeLeft: "4D 2H", hot: true, cardBg: "from-[#1a6b4a] to-[#0d3d28]", accent: "#00E5A0" },
  { id: "player-pick-85", name: "PLAYER PICK", subname: "85+ Rated", rating: 85, position: "MIX", type: "UPGRADE", cost: "34,000", reward: "85+ Player Pick", timeLeft: "3D 15H", hot: false, cardBg: "from-[#1a1a2e] to-[#0d0d1a]", accent: "#CCFF00" },
  { id: "daily-gold", name: "DAILY GOLD", subname: "Gold Upgrade", rating: 82, position: "MIX", type: "DAILY", cost: "3,200", reward: "Gold Pack", timeLeft: "14H", hot: false, cardBg: "from-[#2a2a2a] to-[#1a1a1a]", accent: "#9ca3af" },
  { id: "shapeshifters-van-dijk", name: "V. VAN DIJK", subname: "Shapeshifters", rating: 97, position: "CB", type: "PROMO", cost: "980,000", reward: "Van Dijk SS", timeLeft: "5D 12H", hot: true, cardBg: "from-[#b8860b] to-[#8B6914]", accent: "#FFD700" },
];

const TYPE_STYLES: Record<string, { label: string; cls: string }> = {
  ICON:      { label: "ICON",      cls: "bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/40" },
  PROMO:     { label: "PROMO",     cls: "bg-emerald-500/20 text-emerald-400 border-emerald-400/40" },
  POTM:      { label: "POTM",      cls: "bg-purple-500/20 text-purple-400 border-purple-400/40" },
  FLASHBACK: { label: "FLASHBACK", cls: "bg-blue-500/20 text-blue-400 border-blue-400/40" },
  WEEKLY:    { label: "WEEKLY",    cls: "bg-cyan-500/20 text-cyan-400 border-cyan-400/40" },
  UPGRADE:   { label: "UPGRADE",   cls: "bg-primary/20 text-primary border-primary/40" },
  DAILY:     { label: "DAILY",     cls: "bg-green-500/20 text-green-400 border-green-400/40" },
  BASIC:     { label: "BASIC",     cls: "bg-slate-500/20 text-slate-400 border-slate-400/40" },
};

const FILTERS = ["ALL", "ICON", "PROMO", "POTM", "FLASHBACK", "WEEKLY", "UPGRADE", "DAILY", "BASIC"];

const STATS_BAR = [
  { n: "247", label: "SBCS TODAY" },
  { n: "56.2M", label: "COINS SAVED" },
  { n: "< 5S", label: "AVG SOLVE" },
  { n: "33/33", label: "CHEMISTRY" },
];

export default function SBCSolverPage() {
  return (
    <main
      className="min-h-screen text-white"
      style={{
        background: "#0a0a0a",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      {/* Oswald font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');
        .sbc-page { font-family: 'Oswald', sans-serif; }
        .card-shape {
          clip-path: polygon(8% 0%, 92% 0%, 100% 4%, 100% 96%, 92% 100%, 8% 100%, 0% 96%, 0% 4%);
        }
        .card-inner {
          clip-path: polygon(8% 0%, 92% 0%, 100% 4%, 100% 96%, 92% 100%, 8% 100%, 0% 96%, 0% 4%);
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .hot-badge {
          animation: pulse 1.8s ease-in-out infinite;
        }
        .filter-tab:hover { background: rgba(204,255,0,0.1); color: #CCFF00; }
        .filter-tab.active { background: #CCFF00; color: #000; }
        .solve-btn:hover { background: #CCFF00; color: #000; transform: scaleY(1.02); }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── TOP BAR ── */}
      <div className="border-b border-white/5 bg-[#0d0d0d]">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center gap-6 text-[11px] font-medium tracking-widest text-slate-500 uppercase">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                LIVE — EA FC 26 Season 3
              </span>
              <span className="hidden sm:block">•</span>
              <span className="hidden sm:block">Market updated 28s ago</span>
            </div>
            <div className="flex items-center gap-4">
              {STATS_BAR.map((s) => (
                <div key={s.label} className="hidden lg:flex items-center gap-1.5 text-[10px] uppercase tracking-wider">
                  <span className="font-bold text-primary">{s.n}</span>
                  <span className="text-slate-600">{s.label}</span>
                </div>
              ))}
              <Link
                href="https://discord.gg/PHUfbsSzhK"
                id="topbar-cta"
                className="rounded bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black hover:brightness-110 transition-all"
              >
                FREE BETA
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── HERO HEADER ── */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[#0d0d0d] py-10 lg:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-5 flex items-center gap-2 text-[11px] uppercase tracking-wider text-slate-600">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/ai-sbc-solver" className="hover:text-primary transition-colors">SBC Solver</Link>
                <span>/</span>
                <span className="text-slate-400">Solutions</span>
              </nav>

              <div className="mb-3 inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  {SBCS.length} Active SBCs — FC 26
                </span>
              </div>

              <h1 className="mb-4 text-5xl font-bold uppercase leading-none tracking-tight text-white lg:text-7xl">
                EA FC 26<br />
                <span className="text-primary">SBC SOLUTIONS</span>
              </h1>

              <p className="mb-6 max-w-lg text-base font-light leading-relaxed text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                Every active Squad Building Challenge — sorted by cost. See the cheapest squad,
                then solve in one click. Updated every 30 seconds with live market prices.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://discord.gg/PHUfbsSzhK"
                  id="hero-solve-cta"
                  className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:brightness-110 hover:scale-105 shadow-[0_0_20px_rgba(204,255,0,0.3)]"
                >
                  <span className="material-symbols-outlined text-lg font-black">bolt</span>
                  SOLVE ALL SBCS
                </Link>
                <Link
                  href="/ai-sbc-solver"
                  id="hero-learn-link"
                  className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-primary/40 hover:text-primary"
                >
                  How It Works
                </Link>
              </div>
            </div>

            {/* Mini stats */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {[
                { icon: "bolt", title: "One-Click Solutions", desc: "12,000 combinations/second", val: "< 5 SEC" },
                { icon: "science", title: "Perfect Chemistry", desc: "Guaranteed every time", val: "33/33" },
                { icon: "inventory_2", title: "Club First Logic", desc: "Uses your players first", val: "0 WASTE" },
                { icon: "trending_down", title: "Live BIN Prices", desc: "Real-time market sync", val: "LIVE" },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-white/5 bg-white/3 p-4 hover:border-primary/20 transition-colors">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="material-symbols-outlined text-primary">{item.icon}</span>
                    <span className="text-lg font-bold text-primary">{item.val}</span>
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wide text-white">{item.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="sticky top-20 z-40 border-b border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="flex h-14 items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-slate-600 mr-1">Type:</span>
            {FILTERS.map((f) => (
              <button
                key={f}
                id={`filter-${f.toLowerCase()}`}
                className={`filter-tab shrink-0 rounded px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                  f === "ALL"
                    ? "active border-transparent"
                    : "border-white/8 bg-transparent text-slate-500"
                }`}
              >
                {f}
              </button>
            ))}
            <div className="ml-auto shrink-0 flex items-center gap-3">
              <div className="flex items-center gap-2 rounded border border-white/8 bg-white/3 px-3 py-1.5">
                <span className="material-symbols-outlined text-slate-500 text-sm">search</span>
                <span className="text-[11px] text-slate-600 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Search SBCs...</span>
              </div>
              <button id="sort-btn" className="flex items-center gap-1.5 rounded border border-white/8 bg-white/3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">swap_vert</span>
                COST
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── SBC CARD GRID ── */}
      <section className="py-8">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {SBCS.map((sbc) => {
              const typeStyle = TYPE_STYLES[sbc.type] ?? TYPE_STYLES.BASIC;
              const isSpecial = !["BASIC", "DAILY", "WEEKLY", "UPGRADE"].includes(sbc.type);

              return (
                <article key={sbc.id} className="group flex flex-col">
                  {/* HOT badge */}
                  {sbc.hot && (
                    <div className="mb-1 flex justify-center">
                      <span className="hot-badge inline-flex items-center gap-1 rounded bg-primary/20 border border-primary/40 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary">
                        🔥 HOT
                      </span>
                    </div>
                  )}

                  {/* FUT CARD SHAPE */}
                  <div
                    className="relative w-full cursor-pointer"
                    style={{ paddingBottom: "140%" }}
                  >
                    <div
                      className={`absolute inset-0 card-shape bg-gradient-to-b ${sbc.cardBg} border transition-all group-hover:scale-[1.02]`}
                      style={{ borderColor: `${sbc.accent}30` }}
                    >
                      {/* Card inner glow on hover */}
                      <div
                        className="absolute inset-0 card-inner opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: `radial-gradient(circle at 50% 30%, ${sbc.accent}15, transparent 70%)` }}
                      />

                      {/* Rating + Position */}
                      <div className="absolute left-3 top-3 flex flex-col items-start">
                        <div className="text-2xl font-bold leading-none" style={{ color: sbc.accent, textShadow: `0 0 10px ${sbc.accent}60` }}>
                          {sbc.rating}
                        </div>
                        <div className="text-[9px] font-bold uppercase tracking-wider" style={{ color: sbc.accent }}>
                          {sbc.position}
                        </div>
                      </div>

                      {/* Type badge top right */}
                      <div className="absolute right-2 top-2">
                        <span className={`rounded px-1.5 py-0.5 text-[8px] font-bold uppercase border ${typeStyle.cls}`}>
                          {typeStyle.label}
                        </span>
                      </div>

                      {/* Player silhouette area */}
                      <div className="absolute inset-0 flex items-center justify-center pt-4">
                        <div
                          className="relative flex items-center justify-center"
                          style={{ width: "55%", height: "55%" }}
                        >
                          {/* Silhouette */}
                          <svg viewBox="0 0 100 120" className="w-full h-full opacity-60" fill={sbc.accent} style={{ filter: `drop-shadow(0 0 8px ${sbc.accent}30)` }}>
                            {/* Head */}
                            <ellipse cx="50" cy="22" rx="18" ry="20" />
                            {/* Body */}
                            <path d="M15 120 Q18 75 30 65 Q38 60 50 58 Q62 60 70 65 Q82 75 85 120Z" />
                            {/* Shoulders */}
                            <path d="M30 65 Q20 55 12 70 Q10 85 15 120 L30 120Z" />
                            <path d="M70 65 Q80 55 88 70 Q90 85 85 120 L70 120Z" />
                          </svg>
                        </div>
                      </div>

                      {/* Player info bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                        <div className="text-[11px] font-bold uppercase tracking-wide text-white leading-tight truncate">
                          {sbc.name.length > 12 ? sbc.name.slice(0, 11) + "." : sbc.name}
                        </div>
                        <div className="text-[8px] font-light uppercase tracking-wider truncate" style={{ color: `${sbc.accent}aa`, fontFamily: "Inter, sans-serif" }}>
                          {sbc.subname}
                        </div>

                        {/* Nation/League flags placeholder */}
                        <div className="mt-1 flex items-center justify-center gap-1">
                          <div className="h-3 w-4 rounded-sm bg-white/10" />
                          <div className="h-3 w-3 rounded-full bg-white/10" />
                          <div className="h-3 w-3 rounded-full bg-white/10" />
                        </div>

                        {/* Cost */}
                        <div className="mt-2 border-t pt-1.5" style={{ borderColor: `${sbc.accent}20` }}>
                          <div className="text-[8px] font-bold uppercase tracking-widest text-slate-500">
                            CHEAPEST
                          </div>
                          <div className="text-sm font-bold leading-tight" style={{ color: sbc.accent }}>
                            {sbc.cost}
                          </div>
                          <div className="text-[7px] text-slate-600 uppercase">COINS</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SOLVE BUTTON */}
                  <div className="mt-1.5 flex gap-1">
                    <button
                      id={`solve-${sbc.id}`}
                      className="solve-btn flex-1 rounded bg-[#1a1a1a] border border-white/8 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-300 transition-all"
                    >
                      SOLVE
                    </button>
                    <button
                      id={`settings-${sbc.id}`}
                      className="rounded border border-white/8 bg-[#1a1a1a] px-2.5 py-2 text-slate-500 hover:text-primary hover:border-primary/30 transition-all"
                      aria-label="Settings"
                    >
                      <span className="material-symbols-outlined text-sm">settings</span>
                    </button>
                  </div>

                  {/* Time left */}
                  <div className="mt-1 text-center text-[9px] font-bold uppercase tracking-widest text-slate-600">
                    {sbc.timeLeft === "Permanent" ? (
                      <span>∞ PERMANENT</span>
                    ) : (
                      <span className={sbc.timeLeft.startsWith("1") || sbc.timeLeft.endsWith("H") ? "text-red-500" : ""}>
                        ⏱ {sbc.timeLeft} LEFT
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Load more */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="text-sm text-slate-600 uppercase tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
              Showing {SBCS.length} of 40+ active challenges
            </p>
            <button
              id="load-more-btn"
              className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/3 px-8 py-3 text-sm font-bold uppercase tracking-widest text-slate-400 hover:border-primary/40 hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined text-primary">add</span>
              LOAD MORE SBCS
            </button>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="border-t border-white/5 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">The Process</span>
            <h2 className="mt-2 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">
              Solved in <span className="text-primary">3 Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", icon: "extension", title: "OPEN EXTENSION", desc: "Launch EliteFut on the EA FC Web App. It auto-detects your club inventory and all active SBCs." },
              { n: "02", icon: "psychology", title: "AI FINDS SOLUTION", desc: "12,000+ squad combinations tested per second. Live market prices checked. Cheapest solution found." },
              { n: "03", icon: "task_alt", title: "SUBMIT & COLLECT", desc: "Squad auto-applied with 33/33 chemistry. Missing cards found at lowest BIN. Pack opened in seconds." },
            ].map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-lg border border-white/5 bg-[#111] p-8">
                <div className="absolute right-4 top-4 text-[80px] font-bold text-white/[0.03] leading-none select-none">{s.n}</div>
                <span className="material-symbols-outlined mb-5 text-3xl text-primary block">{s.icon}</span>
                <h3 className="mb-3 text-lg font-bold uppercase tracking-wide text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLVER ENGINE PREVIEW ── */}
      <section className="border-t border-white/5 py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Engine</span>
              <h2 className="mt-2 mb-4 text-4xl font-bold uppercase tracking-tight text-white lg:text-5xl">
                STOP OVERPAYING<br />
                <span className="text-primary">FOR SBCS</span>
              </h2>
              <p className="mb-8 text-slate-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Generic SBC databases show you average costs. EliteFut scans{" "}
                <strong className="text-white">your specific club</strong>, uses the cards you already
                own, and only buys what&apos;s missing at the real-time lowest BIN price.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  { label: "Avg saving vs. manual solving", val: "45,000 coins" },
                  { label: "Time from open to solved", val: "< 5 seconds" },
                  { label: "Chemistry accuracy", val: "100% — 33/33" },
                  { label: "Extension compatibility", val: "100% standard parameters" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-sm text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{r.label}</span>
                    <span className="text-sm font-bold text-primary">{r.val}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/ai-sbc-solver"
                id="engine-learn-more"
                className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-all hover:brightness-110 hover:scale-105"
              >
                <span className="material-symbols-outlined font-black">bolt</span>
                START SOLVING FREE
              </Link>
            </div>

            {/* Terminal */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-primary/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-xl border border-white/8 bg-[#0e0e0e]">
                <div className="flex items-center justify-between border-b border-white/5 bg-white/3 px-5 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/40" />
                    <div className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
                    ELITEFUT // ENGINE_V4.2 // ACTIVE
                  </span>
                </div>
                <div className="p-5 font-mono text-[11px] space-y-1.5">
                  <div className="flex items-center gap-2 text-primary/60">
                    <span className="text-slate-700">[01]</span>
                    SCANNING_CLUB_INVENTORY...
                  </div>
                  <div className="text-slate-600"><span className="text-slate-700">[02]</span> Found 342 tradeable · 89 untradeable</div>
                  <div className="flex items-center gap-2 text-primary animate-pulse">
                    <span className="text-slate-700">[03]</span>
                    BRUTE_FORCING 12,402 COMBOS/SEC...
                  </div>
                  <div className="text-slate-600"><span className="text-slate-700">[04]</span> Syncing live market BIN prices...</div>
                  <div className="text-slate-600"><span className="text-slate-700">[05]</span> Checking chemistry constraints...</div>
                  <div className="text-[#C5A059]"><span className="text-slate-700">[06]</span> SOLUTION FOUND — 33/33 CHEMISTRY</div>
                  <div className="text-primary font-bold"><span className="text-slate-700">[07]</span> COST: 14,250 COINS (SAVED 28,400)</div>
                  <div className="text-slate-300 mt-2 flex items-center gap-2">
                    <span className="text-slate-700">[08]</span>
                    APPLYING SQUAD
                    <span className="inline-block h-3 w-2 bg-primary animate-pulse" />
                  </div>
                </div>
                <div className="border-t border-white/5 bg-primary px-5 py-3 flex items-center justify-between">
                  <span className="font-bold uppercase tracking-widest text-black text-xs">✓ SBC COMPLETE</span>
                  <span className="font-bold text-black/60 text-xs">4.2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/5 bg-[#0d0d0d] py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white">
              SBC <span className="text-primary">FAQ</span>
            </h2>
          </div>
          <div className="space-y-2">
            {[
              { q: "What is the cheapest SBC in EA FC 26 right now?", a: "The cheapest SBCs are typically daily gold upgrades (3,000–5,000 coins) and hybrid leagues challenges (under 10,000 coins). EliteFut updates costs every 30 seconds with real market prices." },
              { q: "How do I solve SBCs in EA FC 26?", a: "Install EliteFut, open it on the EA FC Web App, and click SOLVE on any SBC. Our AI scans your club, finds the cheapest solution, and applies the squad — completing the SBC in under 5 seconds." },
              { q: "Does the SBC solver work for EA FC 26 chemistry?", a: "Yes. EliteFut fully supports FC 26 chemistry including position modifiers, manager boosts, and league/nation links. Every solved SBC is guaranteed to hit 33/33 chemistry." },
              { q: "Is this extension safe for my browser configuration?", a: "EliteFut operates strictly within standard browser parameters as a UI overlay utility. 50,000+ active users have reported 100% safe usage during SBC solving sessions." },
            ].map((faq) => (
              <details key={faq.q} className="group rounded border border-white/5 bg-[#111] px-5 py-4 hover:border-primary/20 open:border-primary/30 transition-all">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white group-open:text-primary">{faq.q}</h3>
                  <span className="material-symbols-outlined shrink-0 text-slate-500 transition-transform group-open:rotate-180 group-open:text-primary text-base">expand_more</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="border-t border-white/5 bg-primary py-10">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-black lg:text-3xl">
                Solve every SBC for free — join the beta
              </h2>
              <p className="text-black/60 text-sm mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                13 slots remaining. No credit card required.
              </p>
            </div>
            <Link
              href="https://discord.gg/PHUfbsSzhK"
              id="banner-cta"
              className="shrink-0 inline-flex items-center gap-2 rounded bg-black px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-black/80 hover:scale-105"
            >
              <span className="material-symbols-outlined font-black">chat</span>
              JOIN DISCORD — FREE
            </Link>
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ── */}
      <section className="border-t border-white/5 bg-[#080808] py-12">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 grid gap-8 text-xs text-slate-600 md:grid-cols-3" style={{ fontFamily: "Inter, sans-serif" }}>
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">EA FC 26 SBC Guide</h4>
            <p className="leading-relaxed">Squad Building Challenges in EA FC 26 require you to submit players meeting specific criteria: minimum OVR, chemistry, nationality, league, or club requirements. The cheapest approach uses your existing club players — especially untradeables — before purchasing from the market.</p>
          </div>
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">Best SBCs to Complete FC 26</h4>
            <p className="leading-relaxed">Most efficient SBCs: daily upgrades (3–5K), hybrid nations (7–15K), and marquee matchups when reward value exceeds cost. Icon and Special Card SBCs can also be profitable at the right market timing with EliteFut's AI price tracking.</p>
          </div>
          <div>
            <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">How AI SBC Solving Works</h4>
            <p className="leading-relaxed">EliteFut's helper AI tests 12,000+ squad combinations per second against your club inventory. It prioritizes players you already own, then helps you source missing cards at the real-time lowest BIN price — guaranteeing 33/33 chemistry and minimum coin cost on every submission.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
