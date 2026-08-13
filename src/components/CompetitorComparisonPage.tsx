"use client";
import Link from "next/link";
import { useState } from "react";
import type { CompetitorData } from "@/data/competitors/types";

export default function CompetitorComparisonPage({ data }: { data: CompetitorData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const eliteWins = data.comparisonRows.filter((r) => r.winner === "elite").length;
  const competitorWins = data.comparisonRows.filter((r) => r.winner === "competitor").length;

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
        description: "The fastest 100% local FC 26/27 sniping bot and AI SBC solver Chrome extension.",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">compare_arrows</span>
              Direct Comparison — Updated {new Date(data.modifiedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase font-headline">
              <span className="text-gray-400">{data.competitorName}</span>
              <span className="text-primary mx-4">vs</span>
              <span>Elite FUT SNIPER</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              {data.tagline}
            </p>
          </header>

          {/* ─── Battle Score Card ───────────────────────── */}
          <section className="grid grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
            {/* Competitor Side */}
            <div className="p-6 sm:p-8 bg-white/[0.02] space-y-3 text-center">
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
            <div className="p-6 sm:p-8 bg-primary/5 border-l border-primary/20 space-y-3 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent pointer-events-none" />
              <span className="relative text-xs font-mono uppercase tracking-widest text-primary">Champion</span>
              <p className="relative text-xl sm:text-2xl font-black font-headline text-white">Elite FUT SNIPER</p>
              <p className="relative text-xs text-primary/60 uppercase tracking-wider">local extension</p>
              <div className="relative text-4xl font-black font-headline text-primary pt-2 [text-shadow:0_0_20px_rgba(204,255,0,0.5)]">{eliteWins}</div>
              <div className="relative text-xs text-primary/60">categories won</div>
            </div>
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

          {/* ─── COMPARISON TABLE ─────────────────────────── */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Feature Breakdown</span>
              <h2 className="text-2xl sm:text-3xl font-black font-headline uppercase text-white">
                {data.competitorName} vs Elite FUT SNIPER — Full Comparison
              </h2>
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.01] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              {/* Table Header */}
              <div className="grid grid-cols-[1fr,1fr,1fr] text-[10px] font-mono uppercase tracking-widest text-gray-500 px-4 py-3 border-b border-white/10 bg-black/30">
                <span>Feature</span>
                <span className="text-center">{data.competitorName}</span>
                <span className="text-center text-primary">Elite FUT SNIPER</span>
              </div>

              {data.comparisonRows.map((row, i) => {
                const isEliteWin = row.winner === "elite";
                const isCompetitorWin = row.winner === "competitor";
                const isTie = row.winner === "tie";

                const renderValue = (val: string | boolean, side: "elite" | "competitor") => {
                  if (typeof val === "boolean") {
                    return val ? (
                      <span className={`material-symbols-outlined text-lg ${side === "elite" ? "text-primary" : "text-green-400"}`}>check_circle</span>
                    ) : (
                      <span className="material-symbols-outlined text-lg text-red-500/70">cancel</span>
                    );
                  }
                  return <span className="text-xs sm:text-sm leading-snug">{val}</span>;
                };

                return (
                  <div
                    key={i}
                    className={`grid grid-cols-[1fr,1fr,1fr] items-center px-4 py-4 border-b border-white/5 last:border-b-0 gap-4 transition-colors ${
                      isEliteWin ? "hover:bg-primary/[0.03]" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <span className="text-xs sm:text-sm text-gray-300 font-medium">{row.feature}</span>

                    <div className={`flex justify-center items-center text-center ${isCompetitorWin ? "text-white" : "text-gray-500"}`}>
                      {renderValue(row.competitor, "competitor")}
                    </div>

                    <div className={`flex justify-center items-center gap-2 text-center ${isEliteWin ? "text-primary" : isTie ? "text-gray-300" : "text-gray-500"}`}>
                      {renderValue(row.elite, "elite")}
                      {isEliteWin && (
                        <span className="hidden sm:inline-flex items-center gap-0.5 text-[9px] font-black uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 px-1.5 py-0.5 rounded-full shrink-0">
                          <span className="material-symbols-outlined text-[10px]">arrow_upward</span>
                          WINS
                        </span>
                      )}
                      {isTie && (
                        <span className="hidden sm:inline-flex text-[9px] font-bold uppercase tracking-widest text-gray-600 shrink-0">TIE</span>
                      )}
                    </div>
                  </div>
                );
              })}
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

        </div>
      </main>
    </>
  );
}
