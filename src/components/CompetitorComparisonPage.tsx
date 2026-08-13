"use client";
import Link from "next/link";
import { useState } from "react";
import type { CompetitorData } from "@/data/competitors/types";

const FEATURE_DESCRIPTIONS: Record<string, string> = {
  "Execution Location": "Where the automation runs (your local browser vs a remote external server).",
  "EA Password Required": "Whether you need to share your EA password and login credentials.",
  "Market Search Speed": "The round-trip speed of search requests (lower latency wins snipes).",
  "AI SBC Solver": "Whether the bot automatically solves Squad Building Challenges using club players.",
  "Side Panel HUD Integration": "Chrome side panel dashboard so controls stay neatly next to your Web App.",
  "Pricing Model": "The pricing structure (e.g. flat purchase vs recurring monthly/seasonal keys).",
  "Monthly Subscription Price": "The recurring monthly fee to maintain access to the service.",
  "License Price": "The licensing structure (flat fee vs seasonal keys).",
  "Billing Method": "How you purchase the software licenses.",
  "Anti-Detection Delay": "Timing randomizers that mimic organic human speed to prevent account bans.",
  "Anti-Ban Protection": "Timing randomizers that mimic organic human speed to prevent account bans.",
  "FC 27 Compatibility": "Immediate day-one update support for the latest EA Sports FC 27 Web App.",
  "FC 27 Web App Support": "Immediate day-one update support for the latest EA Sports FC 27 Web App.",
  "FC 27 Support": "Immediate day-one update support for the latest EA Sports FC 27 Web App.",
  "Telegram Control & Alerts": "Ability to send sniped deal alerts or control the bot remotely via Telegram.",
  "Setup Complexity": "Complexity of setting up the tool (Chrome store vs desktop database files).",
  "Multi-Account Support": "Whether it supports running dozens of EA accounts simultaneously for coin farming.",
  "Real-time Profit Sync": "Automatically updates coin counts and profits in real-time.",
  "Real-time Profit Tracking": "Automatically updates coin counts and profits in real-time.",
  "Session Data Leaves Your PC": "Whether session tokens are sent to external databases.",
  "PC Required to be On": "Whether you need to keep your computer running to execute market trades.",
  "Mobile Compatibility": "Availability of dedicated Android/iOS mobile companion apps or web scripts.",
  "Sound Alerts & Anti-Captcha": "Sound notifications when a deal is sniped or a captcha is encountered.",
  "Unlimited Unassigned Items": "Ability to bypass the 50-item unassigned limit to store infinite cards.",
  "Market Investment Guides": "Expert trading tips, gold/meta player buy guides, and market watch filters.",
  "Active Since": "How long the brand has been operating in the Ultimate Team trading space.",
  "Ban Risk": "Security profile and risk of catching a market ban from EA Sports.",
  "Installation Safety": "Security level of extension installation (unpacked developers files vs store)."
};

export default function CompetitorComparisonPage({ data }: { data: CompetitorData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [filterMode, setFilterMode] = useState<"all" | "elite" | "diff">("all");

  const eliteWins = data.comparisonRows.filter((r) => r.winner === "elite").length;
  const competitorWins = data.comparisonRows.filter((r) => r.winner === "competitor").length;

  const filteredRows = data.comparisonRows.filter((row) => {
    if (filterMode === "elite") return row.winner === "elite";
    if (filterMode === "diff") {
      return String(row.elite) !== String(row.competitor);
    }
    return true;
  });

  const renderValue = (val: string | boolean, side: "elite" | "competitor", winner: string) => {
    if (typeof val === "boolean") {
      if (val) {
        return (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider ${
            side === "elite"
              ? "bg-primary/10 text-primary border border-primary/20"
              : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            AVAILABLE
          </span>
        );
      } else {
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider bg-white/[0.04] text-gray-500 border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
            MISSING
          </span>
        );
      }
    }

    const isElite = side === "elite";
    const isWinner = winner === side;
    return (
      <span className={`text-xs sm:text-sm font-semibold tracking-wide ${
        isElite
          ? "text-primary font-bold"
          : isWinner
            ? "text-white"
            : "text-gray-400"
      }`}>
        {val}
      </span>
    );
  };

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "Article",
        headline: `${data.competitorName} vs Elite FUT SNIPER – Full Comparison`,
        description: data.verdict,
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate,
        citation: data.citations.map((cite) => cite.url),
        author: {
          "@type": "Person",
          name: "Elite FUT SNIPER Developer",
          url: "https://elitefutbot.com/bio",
        },
        publisher: {
          "@type": "Organization",
          name: "Elite FUT SNIPER",
          logo: { "@type": "ImageObject", url: "https://elitefutbot.com/logo-elite.png" },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://elitefutbot.com/" },
          { "@type": "ListItem", position: 2, name: "Compare", item: "https://elitefutbot.com/tools/comparison-guide" },
          { "@type": "ListItem", position: 3, name: `${data.competitorName} vs Elite FUT SNIPER`, item: `https://elitefutbot.com/${data.slug}` },
        ],
      },
      {
        "@type": "Product",
        name: "Elite FUT SNIPER",
        description: "The world's first local FC 27 sniping bot, autobuyer, and AI SBC solver Chrome extension.",
        offers: { "@type": "Offer", price: "29.00", priceCurrency: "USD" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "1250" },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      <main className="min-h-screen bg-[#060606] text-gray-200 pt-28 pb-24 relative overflow-hidden font-body selection:bg-primary selection:text-black">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[60%] right-0 w-[500px] h-[500px] bg-primary/3 blur-[200px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* ─── Breadcrumb ──────────────────────────────── */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 font-mono">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tools/comparison-guide" className="hover:text-primary transition-colors">Compare</Link>
            <span>/</span>
            <span className="text-gray-400">{data.competitorName} vs Elite FUT SNIPER</span>
          </nav>

          {/* ─── Hero Header ─────────────────────────────── */}
          <header className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">compare_arrows</span>
                Direct Comparison — Updated {new Date(data.modifiedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </div>
              <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                World's First FC 27 Support
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase font-headline">
              <span className="text-gray-400">{data.competitorName}</span>
              <span className="text-primary mx-4">vs</span>
              <span>Elite FUT SNIPER</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              {data.tagline}
            </p>

            {/* FC 27 Support note */}
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-primary/5 border border-primary/20 text-xs sm:text-sm text-gray-300 font-medium max-w-2xl mx-auto">
              <span className="material-symbols-outlined text-primary text-lg">bolt</span>
              <span>{data.fc27SupportNote}</span>
            </div>
          </header>

          {/* ─── Battle Score Card ───────────────────────── */}
          <section className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] bg-black/40 backdrop-blur-md">
            {/* Competitor Side */}
            <div className="p-6 sm:p-8 bg-white/[0.01] space-y-3 text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Challenger</span>
              <p className="text-xl sm:text-2xl font-black font-headline text-gray-300">{data.competitorName}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{data.competitorType}</p>
              <div className="text-4xl font-black font-headline text-gray-400 pt-2">{competitorWins}</div>
              <div className="text-xs text-gray-500">categories won</div>
            </div>

            {/* VS Divider */}
            <div className="flex flex-col items-center justify-center bg-black/60 border-x border-white/10 p-4 gap-3">
              <span className="text-3xl sm:text-4xl font-black text-white font-headline opacity-20">VS</span>
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-bold font-mono">
                {eliteWins} – {competitorWins}
              </div>
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <span className="text-[10px] text-gray-600 font-mono uppercase tracking-widest">score</span>
            </div>

            {/* Elite Side */}
            <div className="p-6 sm:p-8 bg-primary/[0.03] border-l border-primary/20 space-y-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent pointer-events-none" />
              <span className="relative text-xs font-mono uppercase tracking-widest text-primary">Champion</span>
              <p className="relative text-xl sm:text-2xl font-black font-headline text-white">Elite FUT SNIPER</p>
              <p className="relative text-xs text-primary/60 uppercase tracking-wider">local extension</p>
              <div className="relative text-4xl font-black font-headline text-primary pt-2 [text-shadow:0_0_20px_rgba(204,255,0,0.5)]">{eliteWins}</div>
              <div className="relative text-xs text-primary/60">categories won</div>
            </div>
          </section>

          {/* ─── KEY STATISTICS (GEO) ────────────────────── */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/5 shadow-inner">
            {data.keyStatistics.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-white/[0.01] border border-white/5 space-y-1 hover:bg-white/[0.03] transition-all">
                <span className="text-2xl md:text-3xl font-black font-headline text-primary">{stat.value}</span>
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                {stat.source && (
                  <p className="text-[9px] text-gray-600 font-mono">Source: {stat.source}</p>
                )}
              </div>
            ))}
          </section>

          {/* ─── VERDICT ─────────────────────────────────── */}
          <section className="relative p-8 sm:p-10 rounded-2xl border border-primary/30 bg-primary/[0.04] shadow-[0_0_40px_rgba(204,255,0,0.08)] overflow-hidden">
            <div className="absolute top-4 right-6 font-mono text-[10px] text-primary/30 uppercase tracking-[0.3rem]">
              CLASSIFIED // VERDICT
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary/15 rounded-full" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/20 rounded-full" />

            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl mt-1 shrink-0">verified</span>
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Bottom Line Verdict
                </h2>
                <p className="text-gray-200 leading-relaxed text-base sm:text-lg">
                  {data.verdict}
                </p>
              </div>
            </div>
          </section>

          {/* ─── COMPARISON SECTION ─────────────────────────── */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Feature Breakdown</span>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                  {data.competitorName} vs Elite FUT SNIPER
                </h2>
              </div>

              {/* Filtering Controls */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/15 self-start md:self-auto font-mono text-xs">
                <button
                  onClick={() => setFilterMode("all")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${filterMode === "all" ? "bg-primary text-black font-bold" : "text-gray-400 hover:text-white"}`}
                >
                  All Features
                </button>
                <button
                  onClick={() => setFilterMode("elite")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${filterMode === "elite" ? "bg-primary text-black font-bold" : "text-gray-400 hover:text-white"}`}
                >
                  Elite Advantages
                </button>
                <button
                  onClick={() => setFilterMode("diff")}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${filterMode === "diff" ? "bg-primary text-black font-bold" : "text-gray-400 hover:text-white"}`}
                >
                  Differences
                </button>
              </div>
            </div>

            {/* Semantic Desktop Comparison Table (Hidden on Mobile) */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-black/60 font-mono text-[10px] tracking-widest text-gray-400">
                    <th className="px-6 py-5 font-bold uppercase">Feature / Attribute</th>
                    <th className="px-6 py-5 font-bold text-center w-[25%]">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="uppercase">{data.competitorName}</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/[0.05] text-gray-500 font-bold font-mono text-[8px] uppercase tracking-wider">
                          CHALLENGER
                        </span>
                      </div>
                    </th>
                    <th className="px-6 py-5 font-bold text-center text-primary w-[30%] bg-primary/[0.02] border-x border-primary/10">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="uppercase text-primary font-black">Elite FUT SNIPER</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary text-black font-black font-mono text-[8px] uppercase tracking-wider shadow-[0_0_12px_rgba(204,255,0,0.5)]">
                          CHAMPION
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, i) => {
                      const isEliteWin = row.winner === "elite";
                      const isCompetitorWin = row.winner === "competitor";
                      const desc = FEATURE_DESCRIPTIONS[row.feature] || "";

                      return (
                        <tr key={i} className="hover:bg-white/[0.01] transition-all group">
                          {/* Feature cell */}
                          <td className="px-6 py-5 space-y-1">
                            <span className="text-sm text-gray-200 font-bold tracking-wide group-hover:text-white transition-colors">{row.feature}</span>
                            {desc && (
                              <p className="text-xs text-gray-500 font-medium leading-relaxed">{desc}</p>
                            )}
                          </td>

                          {/* Competitor cell */}
                          <td className="px-6 py-5 text-center">
                            <div className="flex justify-center">
                              {renderValue(row.competitor, "competitor", row.winner)}
                            </div>
                            {isCompetitorWin && (
                              <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 mt-1.5 block">Challenger Win</span>
                            )}
                          </td>

                          {/* Highlighted Elite cell */}
                          <td className="px-6 py-5 text-center bg-primary/[0.01] border-x border-primary/5 group-hover:bg-primary/[0.02] transition-all">
                            <div className="flex flex-col items-center gap-1.5">
                              {renderValue(row.elite, "elite", row.winner)}
                              {isEliteWin && (
                                <span className="text-[9px] font-mono font-black uppercase tracking-wider bg-primary/20 border border-primary/30 px-2.5 py-0.5 rounded-full text-primary shadow-[0_0_10px_rgba(204,255,0,0.1)]">
                                  WINS
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={3} className="px-6 py-12 text-center text-gray-500 font-mono text-sm bg-black/20">
                        No features match this filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Comparison Cards (Shown on Mobile only) */}
            <div className="block md:hidden space-y-4">
              {filteredRows.length > 0 ? (
                filteredRows.map((row, i) => {
                  const isEliteWin = row.winner === "elite";
                  const isCompetitorWin = row.winner === "competitor";
                  const isTie = row.winner === "tie";
                  const desc = FEATURE_DESCRIPTIONS[row.feature] || "";

                  const renderMobileValue = (val: string | boolean) => {
                    if (typeof val === "boolean") {
                      return val ? "Yes" : "No";
                    }
                    return val;
                  };

                  return (
                    <div
                      key={i}
                      className="p-5 rounded-2xl border border-white/10 bg-white/[0.01] space-y-4 hover:border-white/20 transition-all"
                    >
                      {/* Feature Name & Description */}
                      <div className="space-y-1">
                        <span className="text-sm font-bold text-white uppercase tracking-wider">{row.feature}</span>
                        {desc && <p className="text-xs text-gray-500 leading-normal">{desc}</p>}
                      </div>

                      {/* Side-by-side boxes */}
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {/* Challenger Box */}
                        <div className={`p-3 rounded-xl border text-center space-y-1 ${
                          isCompetitorWin ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : "bg-black/40 border-white/5 text-gray-400"
                        }`}>
                          <span className="text-[9px] font-mono uppercase tracking-widest text-gray-600 block">{data.competitorName}</span>
                          <span className="font-bold text-sm">{renderMobileValue(row.competitor)}</span>
                        </div>

                        {/* Elite Box */}
                        <div className={`p-3 rounded-xl border text-center space-y-1 ${
                          isEliteWin 
                            ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(204,255,0,0.1)]" 
                            : isTie 
                              ? "bg-white/5 border-white/10 text-white" 
                              : "bg-black/40 border-white/5 text-gray-400"
                        }`}>
                          <span className="text-[9px] font-mono uppercase tracking-widest text-primary/60 block">Elite FUT SNIPER</span>
                          <span className="font-bold text-sm">{renderMobileValue(row.elite)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-gray-500 border border-white/10 rounded-2xl bg-white/[0.01] font-mono text-xs">
                  No features match this filter criteria.
                </div>
              )}
            </div>

            {/* Elite Score Summary */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-primary/10 border border-primary/30">
              <span className="text-sm text-gray-300 font-medium">Elite FUT SNIPER wins</span>
              <span className="text-xl font-black text-primary font-headline">
                {eliteWins} / {data.comparisonRows.length} categories
              </span>
            </div>
          </section>

          {/* ─── WHY ELITE WINS ──────────────────────────── */}
          <section className="space-y-6 p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-2xl font-black">military_tech</span>
              <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-wider text-white">
                Is Elite FUT SNIPER Better Than {data.competitorName}?
              </h2>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>
                <strong className="text-white">Yes.</strong> The core architectural difference is execution location.{" "}
                {data.competitorType === "cloud" || data.competitorType === "web-app"
                  ? `${data.competitorName} routes market actions through external servers, adding latency and requiring EA credential access. Elite FUT SNIPER runs entirely inside your Chrome browser — no passwords, no cloud, no round-trip delays.`
                  : `${data.competitorName} requires manual execution, relying on human reaction speed. Elite FUT SNIPER automates the entire snipe loop at 20ms — 50–150x faster than any human.`}
              </p>
              <p>
                Our <strong className="text-white">20ms search speed</strong> comes from direct DOM and network hook triggers inside the EA Web App. Every millisecond matters on competitive listings — by the time a cloud bot processes a search response, Elite FUT SNIPER has already evaluated and purchased the deal.
              </p>
              <p>
                The integrated <strong className="text-white">AI SBC Solver</strong> adds another dimension entirely. It calculates cheapest card combinations using your live club inventory in real-time, then auto-purchases missing players — a feature {data.competitorName} does not offer.
              </p>
              <p>
                From an account safety perspective, Elite FUT SNIPER&apos;s local execution means EA always sees your consistent home IP. Anti-ban jitter algorithms randomize action timings to mimic natural player behavior, keeping your account protected while maximising trading throughput.
              </p>
            </div>
          </section>

          {/* ─── FAQ SECTION ─────────────────────────────── */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Frequently Asked</span>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                {data.competitorName} vs Elite FUT SNIPER FAQ
              </h2>
            </div>

            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02] hover:border-white/20 transition-all"
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white leading-snug pr-4 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <span className={`material-symbols-outlined text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : ""}`}>
                      expand_more
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ─── REVIEW QUOTES ───────────────────────────── */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Community Feedback</span>
              <h2 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">
                What Traders Say After Switching
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.reviewQuotes.map((quote, i) => (
                <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-primary/30 hover:bg-primary/[0.03] transition-all">
                  <div className="flex text-primary text-sm gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">&ldquo;{quote.text}&rdquo;</p>
                  <div className="pt-1 border-t border-white/5">
                    <p className="text-xs font-mono text-gray-500">{quote.author}</p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">{quote.platform}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── CTA ─────────────────────────────────────── */}
          <section className="p-10 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/30 text-center space-y-6 shadow-[0_0_50px_rgba(204,255,0,0.1)]">
            <h2 className="text-2xl sm:text-4xl font-black font-headline uppercase text-white tracking-tight">
              Ready to Leave {data.competitorName} Behind?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Join thousands of FUT traders using Elite FUT SNIPER — the only 100% local Chrome extension with 20ms sniping speeds, AI SBC solving, and zero password sharing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="https://discord.gg/Rkb9nF6WG6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                Join Discord — Free Beta
              </Link>
              <Link
                href="/#pricing"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all"
              >
                View Pricing Plans
              </Link>
            </div>
          </section>

          {/* ─── CITATIONS & REFERENCES (GEO) ──────────────── */}
          <footer className="pt-8 border-t border-white/5 text-center space-y-2">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              Verified Sourcing & Reference Material
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
              {data.citations.map((cite, i) => (
                <a
                  key={i}
                  href={cite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors underline decoration-dotted"
                >
                  {cite.label}
                </a>
              ))}
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}
