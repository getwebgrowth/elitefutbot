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
  const total = data.comparisonRows.length;
  const elitePct = Math.round((eliteWins / total) * 100);

  const filteredRows = data.comparisonRows.filter((row) => {
    if (filterMode === "elite") return row.winner === "elite";
    if (filterMode === "diff") return String(row.elite) !== String(row.competitor);
    return true;
  });

  const renderValue = (val: string | boolean, side: "elite" | "competitor", winner: string) => {
    if (typeof val === "boolean") {
      if (val) {
        return (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider ${side === "elite" ? "bg-primary/15 text-primary border border-primary/30 shadow-[0_0_12px_rgba(204,255,0,0.15)]" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />AVAILABLE
          </span>
        );
      } else {
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-wider bg-white/[0.04] text-gray-400 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />MISSING
          </span>
        );
      }
    }
    const isElite = side === "elite";
    const isWinner = winner === side;
    return (
      <span className={`text-xs sm:text-sm tracking-wide ${isElite ? "text-primary font-bold drop-shadow-[0_0_8px_rgba(204,255,0,0.2)]" : isWinner ? "text-white font-semibold" : "text-gray-300 font-medium"}`}>{val}</span>
    );
  };

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "FAQPage", mainEntity: data.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
      { "@type": "Article", headline: `${data.competitorName} vs Elite FUT SNIPER – Full Comparison`, description: data.verdict, datePublished: data.publishedDate, dateModified: data.modifiedDate, citation: data.citations.map((cite) => cite.url), author: { "@type": "Person", name: "Elite FUT SNIPER Developer", url: "https://elitefutbot.com/bio" }, publisher: { "@type": "Organization", name: "Elite FUT SNIPER", logo: { "@type": "ImageObject", url: "https://elitefutbot.com/logo-elite.png" } } },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://elitefutbot.com/" }, { "@type": "ListItem", position: 2, name: "Compare", item: "https://elitefutbot.com/tools/comparison-guide" }, { "@type": "ListItem", position: 3, name: `${data.competitorName} vs Elite FUT SNIPER`, item: `https://elitefutbot.com/${data.slug}` }] },
      { "@type": "Product", name: "Elite FUT SNIPER", description: "The world's first local FC 26 & FC 27 sniping bot, autobuyer, and AI SBC solver Chrome extension.", offers: { "@type": "Offer", price: "19.00", priceCurrency: "USD" }, aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "1250" } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />

      <main className="min-h-screen bg-[#060606] text-gray-200 pt-28 pb-24 relative overflow-hidden font-body selection:bg-primary selection:text-black">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[50%] right-0 w-[500px] h-[500px] bg-primary/3 blur-[200px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[25%] left-0 w-[400px] h-[400px] bg-blue-500/[0.02] blur-[160px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 font-mono" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors text-gray-400">Home</Link>
            <span className="text-gray-500" aria-hidden="true">/</span>
            <Link href="/tools/comparison-guide" className="hover:text-primary transition-colors text-gray-400">Compare</Link>
            <span className="text-gray-500" aria-hidden="true">/</span>
            <span className="text-gray-300">{data.competitorName} vs Elite FUT SNIPER</span>
          </nav>

          {/* Header */}
          <header className="space-y-6 text-center max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_rgba(204,255,0,0.08)]">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Direct Comparison — Updated {new Date(data.modifiedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {"World's First FC 26 & FC 27 Support"}
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase font-headline">
              <span className="text-gray-300">{data.competitorName}</span>
              <span className="text-primary mx-4 font-black">vs</span>
              <span className="text-white">Elite FUT SNIPER</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">{data.tagline}</p>
            
            {/* FC 27 Readiness Highlight Box */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/25 text-xs sm:text-sm text-gray-200 font-medium max-w-2xl mx-auto backdrop-blur-md shadow-[0_0_25px_rgba(204,255,0,0.05)]">
              <svg className="w-5 h-5 text-primary shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="text-left">{data.fc27SupportNote}</span>
            </div>
          </header>

          {/* Comparison Score Matrix */}
          <section aria-label="Comparison Score" className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] bg-black/40 backdrop-blur-md">
            <div className="grid grid-cols-3 gap-0">
              <div className="p-6 sm:p-8 bg-white/[0.01] space-y-3 text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Challenger</span>
                <p className="text-xl sm:text-2xl font-black font-headline text-gray-200">{data.competitorName}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{data.competitorType}</p>
                <div className="text-4xl font-black font-headline text-gray-300 pt-2">{competitorWins}</div>
                <div className="text-xs text-gray-400">categories won</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-black/60 border-x border-white/10 p-4 gap-3">
                <span className="text-3xl sm:text-4xl font-black text-white/60 font-headline" aria-hidden="true">VS</span>
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                <div className="px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40 text-primary text-xs font-bold font-mono shadow-[0_0_15px_rgba(204,255,0,0.15)]">{eliteWins} – {competitorWins}</div>
                <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">score</span>
              </div>
              <div className="p-6 sm:p-8 bg-primary/[0.04] border-l border-primary/30 space-y-3 text-center relative overflow-hidden shadow-[inset_0_0_30px_rgba(204,255,0,0.03)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                <span className="relative text-xs font-mono uppercase tracking-widest text-primary font-bold">Champion</span>
                <p className="relative text-xl sm:text-2xl font-black font-headline text-white">Elite FUT SNIPER</p>
                <p className="relative text-xs text-primary/80 uppercase tracking-wider font-medium">local extension</p>
                <div className="relative text-4xl font-black font-headline text-primary pt-2 [text-shadow:0_0_25px_rgba(204,255,0,0.6)]">{eliteWins}</div>
                <div className="relative text-xs text-primary/90 font-medium">categories won</div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-white/5 bg-black/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Elite FUT SNIPER Win Rate</span>
                <span className="text-[10px] font-mono text-primary font-bold">{elitePct}% dominance</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                <div className="h-full bg-primary rounded-full shadow-[0_0_12px_rgba(204,255,0,0.7)] transition-all duration-1000" style={{ width: `${elitePct}%` }} />
              </div>
            </div>
          </section>

          {/* Key Statistics */}
          <section aria-label="Key Statistics" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.keyStatistics.map((stat, i) => (
              <div key={i} className="relative text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-1.5 hover:bg-white/[0.04] hover:border-primary/30 transition-all group overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(204,255,0,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-2xl md:text-3xl font-black font-headline text-primary [text-shadow:0_0_15px_rgba(204,255,0,0.25)]">{stat.value}</span>
                <p className="relative text-[11px] text-gray-300 font-semibold uppercase tracking-wider">{stat.label}</p>
                {stat.source && <p className="relative text-[9px] text-gray-400 font-mono">Source: {stat.source}</p>}
              </div>
            ))}
          </section>

          {/* Verdict Box */}
          <section aria-label="Verdict" className="relative p-8 sm:p-10 rounded-2xl border border-primary/35 bg-primary/[0.04] shadow-[0_0_50px_rgba(204,255,0,0.08)] overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(204,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute top-4 right-6 font-mono text-[10px] text-primary/80 uppercase tracking-[0.3rem] flex items-center gap-2" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              CLASSIFIED // VERDICT
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-primary/15 rounded-full" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/20 rounded-full" />
            <div className="flex items-start gap-4 relative">
              <svg className="w-7 h-7 text-primary mt-1 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <div className="space-y-2">
                <h2 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">Bottom Line Verdict</h2>
                <p className="text-gray-200 leading-relaxed text-base sm:text-lg">{data.verdict}</p>
              </div>
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="space-y-6" aria-label="Feature Comparison">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1">
                <span className="text-primary text-xs font-bold uppercase tracking-widest">Side-by-Side Breakdown</span>
                <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">{data.competitorName} vs Elite FUT SNIPER</h2>
              </div>
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/15 self-start md:self-auto font-mono text-xs backdrop-blur-sm" role="group" aria-label="Filter comparison features">
                <button onClick={() => setFilterMode("all")} aria-pressed={filterMode === "all"} className={`px-3 py-1.5 rounded-lg transition-colors ${filterMode === "all" ? "bg-primary text-black font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]" : "text-gray-300 hover:text-white"}`}>All Features</button>
                <button onClick={() => setFilterMode("elite")} aria-pressed={filterMode === "elite"} className={`px-3 py-1.5 rounded-lg transition-colors ${filterMode === "elite" ? "bg-primary text-black font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]" : "text-gray-300 hover:text-white"}`}>Elite Advantages</button>
                <button onClick={() => setFilterMode("diff")} aria-pressed={filterMode === "diff"} className={`px-3 py-1.5 rounded-lg transition-colors ${filterMode === "diff" ? "bg-primary text-black font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]" : "text-gray-300 hover:text-white"}`}>Differences</button>
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-black/60 font-mono text-[10px] tracking-widest text-gray-300">
                    <th className="px-6 py-5 font-bold uppercase">Feature / Attribute</th>
                    <th className="px-6 py-5 font-bold text-center w-[25%]">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="uppercase text-gray-200">{data.competitorName}</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/[0.05] text-gray-300 font-bold font-mono text-[8px] uppercase tracking-wider">CHALLENGER</span>
                      </div>
                    </th>
                    <th className="px-6 py-5 font-bold text-center text-primary w-[30%] bg-primary/[0.03] border-x border-primary/20">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="uppercase text-primary font-black tracking-wide">Elite FUT SNIPER</span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary text-black font-black font-mono text-[8px] uppercase tracking-wider shadow-[0_0_12px_rgba(204,255,0,0.5)]">CHAMPION</span>
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
                        <tr key={i} className={`transition-all group ${isEliteWin ? "hover:bg-primary/[0.03]" : "hover:bg-white/[0.01]"}`}>
                          <td className="px-6 py-5 space-y-1">
                            <span className="text-sm text-gray-200 font-bold tracking-wide group-hover:text-white transition-colors">{row.feature}</span>
                            {desc && <p className="text-xs text-gray-400 font-medium leading-relaxed">{desc}</p>}
                          </td>
                          <td className="px-6 py-5 text-center">
                            <div className="flex justify-center">{renderValue(row.competitor, "competitor", row.winner)}</div>
                            {isCompetitorWin && <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 mt-1.5 block">Challenger Win</span>}
                          </td>
                          <td className={`px-6 py-5 text-center border-x transition-all ${isEliteWin ? "bg-primary/[0.04] border-primary/20" : "bg-primary/[0.01] border-primary/10"}`}>
                            <div className="flex flex-col items-center gap-1.5">
                              {renderValue(row.elite, "elite", row.winner)}
                              {isEliteWin && <span className="text-[9px] font-mono font-black uppercase tracking-wider bg-primary/20 border border-primary/40 px-2.5 py-0.5 rounded-full text-primary shadow-[0_0_10px_rgba(204,255,0,0.2)]">WINS</span>}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr><td colSpan={3} className="px-6 py-12 text-center text-gray-400 font-mono text-sm bg-black/20">No features match this filter criteria.</td></tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="block md:hidden space-y-3">
              {filteredRows.length > 0 ? (
                filteredRows.map((row, i) => {
                  const isEliteWin = row.winner === "elite";
                  const isCompetitorWin = row.winner === "competitor";
                  const isTie = row.winner === "tie";
                  const desc = FEATURE_DESCRIPTIONS[row.feature] || "";
                  const renderMobileValue = (val: string | boolean) => { if (typeof val === "boolean") return val ? "Available" : "Missing"; return val; };
                  return (
                    <div key={i} className={`p-5 rounded-2xl border space-y-4 transition-all ${isEliteWin ? "border-primary/30 bg-primary/[0.03]" : "border-white/10 bg-white/[0.01] hover:border-white/20"}`}>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white uppercase tracking-wider">{row.feature}</span>
                          {isEliteWin && <span className="text-[9px] font-mono font-black uppercase tracking-wider bg-primary/20 border border-primary/30 px-2 py-0.5 rounded-full text-primary">ELITE WINS</span>}
                          {isCompetitorWin && <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400">Challenger Win</span>}
                          {isTie && <span className="text-[9px] font-mono text-gray-400 uppercase">Tie</span>}
                        </div>
                        {desc && <p className="text-xs text-gray-400 leading-normal">{desc}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className={`p-3 rounded-xl border text-center space-y-1 ${isCompetitorWin ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" : "bg-black/40 border-white/5 text-gray-300"}`}>
                          <span className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block">{data.competitorName}</span>
                          <span className="font-bold text-sm block">{renderMobileValue(row.competitor)}</span>
                        </div>
                        <div className={`p-3 rounded-xl border text-center space-y-1 ${isEliteWin ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_15px_rgba(204,255,0,0.1)]" : isTie ? "bg-white/5 border-white/10 text-white" : "bg-black/40 border-white/5 text-gray-300"}`}>
                          <span className="text-[9px] font-mono uppercase tracking-widest text-primary/80 block">Elite FUT SNIPER</span>
                          <span className="font-bold text-sm block">{renderMobileValue(row.elite)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-gray-400 border border-white/10 rounded-2xl bg-white/[0.01] font-mono text-xs">No features match this filter criteria.</div>
              )}
            </div>

            {/* Score Bar Footer */}
            <div className="flex items-center justify-between p-5 rounded-xl bg-primary/10 border border-primary/30 shadow-[0_0_25px_rgba(204,255,0,0.08)]">
              <div className="space-y-0.5">
                <span className="text-sm text-gray-200 font-semibold">Elite FUT SNIPER wins category battle</span>
                <p className="text-[10px] text-primary/80 font-mono uppercase tracking-widest">across {total} categories tested</p>
              </div>
              <span className="text-2xl font-black text-primary font-headline">{eliteWins}<span className="text-lg text-primary/70"> / {total}</span></span>
            </div>
          </section>

          {/* Structured Key Advantages Breakdown */}
          <section className="space-y-8 p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm" aria-label="Why Elite FUT SNIPER is better">
            <div className="flex items-center gap-3 text-primary">
              <svg className="w-6 h-6 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-bold font-headline uppercase tracking-wider text-white">Why Elite FUT SNIPER Outperforms {data.competitorName}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7V7z" />
                  </svg>
                  1. Local In-Browser Architecture
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {data.competitorType === "cloud" || data.competitorType === "web-app" ? `${data.competitorName} runs through external cloud servers, adding latency and requiring your sensitive EA credentials. Elite FUT SNIPER operates 100% locally inside your Chrome browser — zero passwords, zero cloud servers, zero external tokens.` : `${data.competitorName} relies on manual inputs or clunky setup. Elite FUT SNIPER automates the complete snipe and relist loop seamlessly inside the official EA Web App HUD.`}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  2. Surgical 20ms Execution Speed
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our direct DOM and native network hook triggers inside the EA Web App bypass round-trip delays. On high-demand meta player listings, Elite FUT SNIPER purchases underpriced deals in 20ms before external bots even finish handshaking.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  3. Real-Time AI SBC Solver
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Unlike {data.competitorName}, Elite FUT SNIPER features an integrated AI SBC solver that analyzes your live club inventory in real-time, calculates optimal chemistry solutions with untradeables, and automatically snipes missing cards at rock-bottom prices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-2.5 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono uppercase tracking-wider">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  4. Maximum Account Protection &amp; FC 27 Day-One
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Local execution means EA servers always observe your consistent home IP address. Built-in humanized micro-delays and random action jitter protect your club, backed by forward-compatible day-one support for EA Sports FC 26 and FC 27.
                </p>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="space-y-6" aria-label="Frequently Asked Questions">
            <div className="space-y-1">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Frequently Asked</span>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">{data.competitorName} vs Elite FUT SNIPER FAQ</h2>
            </div>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <div key={i} className={`rounded-xl border overflow-hidden transition-all ${openFaq === i ? "border-primary/35 bg-primary/[0.04]" : "border-white/10 bg-white/[0.02] hover:border-white/20"}`}>
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`competitor-faq-answer-${i}`}
                  >
                    <span className={`text-sm sm:text-base font-semibold leading-snug pr-4 transition-colors ${openFaq === i ? "text-primary" : "text-white group-hover:text-primary"}`}>{faq.question}</span>
                    <svg className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div id={`competitor-faq-answer-${i}`} className="px-5 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Community Feedback */}
          <section className="space-y-6" aria-label="Community Reviews">
            <div className="space-y-1">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Community Feedback</span>
              <h2 className="text-xl sm:text-2xl font-black font-headline uppercase text-white">What Traders Say After Switching</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.reviewQuotes.map((quote, i) => (
                <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-primary/30 hover:bg-primary/[0.03] transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex text-primary text-sm gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 fill-primary" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed relative">&ldquo;{quote.text}&rdquo;</p>
                  <div className="pt-1 border-t border-white/5">
                    <p className="text-xs font-mono text-gray-400">{quote.author}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{quote.platform}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="relative p-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/30 text-center space-y-6 shadow-[0_0_60px_rgba(204,255,0,0.08)] overflow-hidden" aria-label="Call to Action">
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <h2 className="relative text-2xl sm:text-4xl font-black font-headline uppercase text-white tracking-tight">Ready to Leave {data.competitorName} Behind?</h2>
            <p className="relative text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">Join thousands of FUT traders using Elite FUT SNIPER — the only 100% local Chrome extension with 20ms sniping speeds, AI SBC solving, zero password sharing, and {"world's first FC 26 & FC 27 support"}.</p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="https://discord.gg/Rkb9nF6WG6" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] inline-flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                Join Discord — Free Beta
              </Link>
              <Link href="/#pricing" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-all">View Pricing Plans</Link>
            </div>
          </section>

          {/* Sourcing & Reference Citations */}
          <footer className="pt-8 border-t border-white/5 text-center space-y-2">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Verified Sourcing &amp; Reference Material</p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400">
              {data.citations.map((cite, i) => (
                <a key={i} href={cite.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline decoration-dotted text-gray-400">{cite.label}</a>
              ))}
            </div>
          </footer>

        </div>
      </main>
    </>
  );
}
