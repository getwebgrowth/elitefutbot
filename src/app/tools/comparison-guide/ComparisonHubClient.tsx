"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { COMPARISONS, type ComparisonItem } from "@/data/comparisons-hub";

export default function ComparisonHubClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredComparisons = useMemo(() => {
    return COMPARISONS.filter((comp) => {
      const matchesSearch =
        comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.badge.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === "all" || comp.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  const categories = [
    { id: "all", label: "All Platforms", count: COMPARISONS.length },
    { id: "extension", label: "Browser Extensions", count: COMPARISONS.filter((c) => c.category === "extension").length },
    { id: "cloud", label: "Cloud Bots", count: COMPARISONS.filter((c) => c.category === "cloud").length },
    { id: "desktop", label: "Desktop & Apps", count: COMPARISONS.filter((c) => c.category === "desktop").length },
    { id: "utility", label: "SBC & Web Tools", count: COMPARISONS.filter((c) => c.category === "utility").length },
  ];

  return (
    <div className="space-y-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 font-mono" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary transition-colors text-gray-400">Home</Link>
        <span className="text-gray-500" aria-hidden="true">/</span>
        <span className="text-gray-300">Comparison Hub</span>
      </nav>

      {/* Hero Header */}
      <header className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-[0_0_20px_rgba(204,255,0,0.08)]">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Official Comparison Hub — 30 Platforms
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            World&apos;s First FC 26 &amp; FC 27 Support
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] uppercase font-headline">
          Elite FUT SNIPER vs <span className="text-primary">Every Competitor</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
          In-depth technical and speed benchmarks comparing Elite FUT SNIPER against all 30 major sniping bots, autobuyers, and trading utilities on the market.
        </p>
      </header>

      {/* Why Local Wins Quick Grid */}
      <section aria-label="Key Advantages" className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Search Speed", value: "20ms", sub: "vs 150–500ms cloud lag" },
          { label: "EA Password", value: "Never", sub: "100% local in-browser" },
          { label: "AI SBC Solver", value: "Built-In", sub: "untradeables auto-solve" },
          { label: "FC 27 Ready", value: "Day-One", sub: "forward-compatible engine" },
        ].map((stat) => (
          <div key={stat.label} className="text-center p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1.5 hover:border-primary/30 transition-all shadow-sm">
            <div className="text-2xl sm:text-3xl font-black text-primary font-headline [text-shadow:0_0_20px_rgba(204,255,0,0.3)]">{stat.value}</div>
            <div className="text-xs text-gray-200 font-bold uppercase tracking-wider">{stat.label}</div>
            <div className="text-[11px] text-gray-400 font-mono">{stat.sub}</div>
          </div>
        ))}
      </section>

      {/* Filter and Search Bar */}
      <section className="space-y-6" aria-label="Filter Comparisons">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/50 border border-white/10 w-full md:w-auto backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-primary text-black shadow-[0_0_15px_rgba(204,255,0,0.35)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bot or feature..."
              className="w-full px-4 py-2.5 pl-10 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono"
            />
            <svg
              className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs font-mono"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-gray-400 font-mono px-1">
          <span>Showing <strong className="text-white">{filteredComparisons.length}</strong> of {COMPARISONS.length} competitor breakdowns</span>
          {searchQuery && (
            <button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} className="text-primary hover:underline">
              Clear search &amp; filters
            </button>
          )}
        </div>
      </section>

      {/* Competitor Cards Grid */}
      <section aria-label="Competitor Comparisons Grid">
        {filteredComparisons.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredComparisons.map((comp) => (
              <Link
                key={comp.slug}
                href={`/${comp.slug}`}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-300 space-y-4 flex flex-col justify-between shadow-sm hover:shadow-[0_0_25px_rgba(204,255,0,0.06)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-black text-white font-headline text-lg group-hover:text-primary transition-colors">{comp.name}</h2>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">{comp.type}</p>
                    </div>
                    <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${comp.badgeColor}`}>
                      {comp.badge}
                    </span>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{comp.summary}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-gray-400 uppercase">Advantage</span>
                    <span className="font-bold text-primary">{comp.eliteAdvantage}</span>
                  </div>

                  {comp.highlightMetric && (
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[10px] text-gray-400 uppercase">Edge</span>
                      <span className="text-gray-300 font-semibold">{comp.highlightMetric}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-primary text-xs font-bold group-hover:gap-3 transition-all pt-1">
                    <span>View In-Depth Comparison</span>
                    <svg className="w-4 h-4 text-primary shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-white/[0.01] border border-white/10 space-y-3">
            <svg className="w-10 h-10 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m-3-3h6" />
            </svg>
            <p className="text-white font-bold text-base">No competitor comparisons found matching &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-gray-400 text-xs">Try clearing your search query or selecting &ldquo;All Platforms&rdquo; above.</p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="px-4 py-2 rounded-xl bg-primary text-black font-bold text-xs uppercase tracking-wider mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="relative p-10 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/30 text-center space-y-6 shadow-[0_0_60px_rgba(204,255,0,0.08)] overflow-hidden" aria-label="Call to Action">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(#CCFF00 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <h2 className="relative text-2xl sm:text-4xl font-black font-headline uppercase text-white tracking-tight">
          Stop Comparing. Start Winning.
        </h2>
        <p className="relative text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Join thousands of FUT traders running Elite FUT SNIPER — the only 100% local Chrome extension with 20ms sniping, AI SBC solving, zero password sharing, and world&apos;s first FC 26 &amp; FC 27 support.
        </p>
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="https://discord.gg/Rkb9nF6WG6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)] inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
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
  );
}
