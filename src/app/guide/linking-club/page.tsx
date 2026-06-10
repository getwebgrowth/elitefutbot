import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club Linking Guide - Secure Your FUT Account",
  description: "Learn how to safely link your FC 25 club to the EliteFut platform using our encrypted session protocols.",
  keywords: ["link FUT club", "EliteFut setup", "FIFA account security", "trading extension setup"],
};

export default function LinkingClubGuidePage() {
  return (
    <main className="bg-[#131313] text-slate-100 font-body min-h-screen selection:bg-primary selection:text-black pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary animate-pulse"></div>
              <span className="font-headline text-xs uppercase tracking-[0.2rem] text-primary/80">Tactical Readiness</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Initialize Club Sync: <span className="text-primary italic">Step-by-Step</span> Tactical Guide
            </h1>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              Optimize your SBC workflow by bridging your EA Web App data with our Kinetic Command Center. High-frequency synchronization for the digital athlete.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="bg-[#2A2A2A] px-4 py-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div>
                  <p className="font-headline text-[10px] uppercase tracking-widest text-[#8e9379]">Encryption</p>
                  <p className="text-xs font-bold text-white">AES-256 LOCAL</p>
                </div>
              </div>
              <div className="bg-[#2A2A2A] px-4 py-3 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">speed</span>
                <div>
                  <p className="font-headline text-[10px] uppercase tracking-widest text-[#8e9379]">Sync Speed</p>
                  <p className="text-xs font-bold text-white">&lt; 1.2s LATENCY</p>
                </div>
              </div>
            </div>
          </div>
          {/* High-Fidelity Extension Mockup */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
            <div className="relative bg-[#1c1b1b] p-1 border-t-2 border-primary shadow-2xl">
              <div className="bg-[#0e0e0e] p-6 aspect-[4/3] flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-lg font-bold text-white">ELITEFUT EXTENSION</h3>
                    <p className="text-[10px] font-headline text-[#8e9379] uppercase tracking-tighter">v4.0.2 // STABLE_BUILD</p>
                  </div>
                  <div className="bg-[#5d7602] px-2 py-1 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[#defd83] rounded-full animate-pulse"></div>
                    <span className="text-[9px] font-bold text-[#defd83]">LIVE_SESSION</span>
                  </div>
                </div>
                {/* Central Sync Action */}
                <div className="flex flex-col items-center justify-center space-y-4">
                  <button className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-primary flex items-center justify-center glow-lime group-hover:scale-105 transition-transform duration-500">
                    <span className="material-symbols-outlined text-black text-4xl font-bold">sync</span>
                  </button>
                  <div className="text-center">
                    <p className="text-primary font-bold tracking-widest text-xs uppercase mb-1">Ready to Deploy</p>
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest">Protocol: Secure Sync</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1 bg-[#2A2A2A] w-full">
                    <div className="h-full bg-primary w-1/3"></div>
                  </div>
                  <div className="flex justify-between text-[8px] font-headline text-[#8e9379] uppercase tracking-widest">
                    <span>Scanning Cache...</span>
                    <span>32%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Indicator */}
            <div className="absolute -bottom-6 -right-6 bg-[#353534] p-4 flex gap-4 items-center shadow-2xl">
              <span className="material-symbols-outlined text-primary">shield_lock</span>
              <span className="text-[10px] font-bold leading-tight uppercase tracking-tight text-white">Credential<br />Lock Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Flow Section */}
      <section className="bg-[#0e0e0e] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold text-white uppercase tracking-tighter">Deployment Flow</h2>
            <div className="h-0.5 bg-primary w-16 mt-2"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-[#1c1b1b] p-8 relative flex flex-col gap-6 group hover:bg-[#201f1f] transition-colors">
              <span className="absolute top-4 right-6 font-headline text-6xl font-black text-[#2A2A2A] group-hover:text-primary/5 transition-colors">01</span>
              <div className="w-12 h-12 bg-[#2A2A2A] flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-primary">browser_updated</span>
              </div>
              <div className="z-10">
                <h4 className="font-headline text-xl font-bold text-white mb-2">Open EA Web App</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Ensure you are logged into the official EA FC 26 Web App in your current browser session.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-[#1c1b1b] p-8 relative flex flex-col gap-6 group hover:bg-[#201f1f] transition-colors">
              <span className="absolute top-4 right-6 font-headline text-6xl font-black text-[#2A2A2A] group-hover:text-primary/5 transition-colors">02</span>
              <div className="w-12 h-12 bg-[#2A2A2A] flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-primary">extension</span>
              </div>
              <div className="z-10">
                <h4 className="font-headline text-xl font-bold text-white mb-2">Activate Extension</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Launch the EliteFut extension. Our &apos;Secure Sync&apos; protocol will automatically detect your active session.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-[#1c1b1b] p-8 relative flex flex-col gap-6 group hover:bg-[#201f1f] transition-colors">
              <span className="absolute top-4 right-6 font-headline text-6xl font-black text-[#2A2A2A] group-hover:text-primary/5 transition-colors">03</span>
              <div className="w-12 h-12 bg-[#2A2A2A] flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-primary">database</span>
              </div>
              <div className="z-10">
                <h4 className="font-headline text-xl font-bold text-white mb-2">Extract Club Data</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Click the &apos;Sync Club&apos; button in the Solver tab. Your players, chemistry, and resource balance will populate the Command Center instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
        <div className="w-full max-w-2xl bg-[#1c1b1b] p-8 flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="text-primary">
            <span className="material-symbols-outlined text-5xl">lock_open</span>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-headline text-lg font-bold text-white mb-1">Zero-Knowledge Architecture</h5>
            <p className="text-slate-400 text-sm font-body">Authentication is handled locally; your credentials never leave your machine. We use temporary session tokens to scrape player data without accessing your password.</p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-white to-primary text-black px-12 py-5 font-headline font-black text-lg uppercase tracking-[0.25rem] hover:scale-105 active:scale-95 glow-lime transition-all">
          Deploy First Sync
        </button>
        <p className="mt-6 text-[10px] font-headline text-[#8e9379] uppercase tracking-widest">Awaiting Command... Tactical Link Active</p>
      </section>
    </main>
  );
}
