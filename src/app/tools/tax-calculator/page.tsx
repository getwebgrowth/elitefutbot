import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EA Tax Calculator - FC 25 Profit Calculator",
  description: "Calculate your exact profit after EA's 5% transfer market tax. The most precise tax calculator for FC 25 and 26 trading.",
  keywords: ["EA tax calculator", "FIFA tax calculator", "FC 25 profit calculator", "transfer market tax"],
};

export default function TaxCalculatorPage() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-6 py-12 space-y-24 font-body selection:bg-primary selection:text-black">
      {/* Hero & Calculator Section */}
      <section className="flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-[#2a2a2a] px-4 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-xs font-headline font-bold uppercase tracking-[0.2rem] text-primary">Live Tax Engine v2.6</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-4 text-white">
          EA FC 26 <span className="text-primary italic">PROFIT</span> CALCULATOR
        </h1>
        <p className="text-slate-400 max-w-2xl mb-12 text-lg">
          Calculate EA&apos;s 5% transaction tax and maximize your market margins with surgical precision. Use the elite dashboard to stay ahead of the transfer market.
        </p>
        {/* Glassmorphic Calculator */}
        <div className="glass-panel w-full max-w-2xl p-8 rounded-xl border border-outline-variant/20 shadow-2xl relative overflow-hidden text-slate-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-[#8e9379]">Card Quantity</label>
              <input className="w-full bg-[#0e0e0e] border-none ring-1 ring-[#444933]/30 focus:ring-primary text-primary font-headline font-bold text-xl p-4 rounded-lg transition-all placeholder:text-[#353534]" placeholder="1" type="number" />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-[#8e9379]">Buy Price</label>
              <input className="w-full bg-[#0e0e0e] border-none ring-1 ring-[#444933]/30 focus:ring-primary text-primary font-headline font-bold text-xl p-4 rounded-lg transition-all placeholder:text-[#353534]" placeholder="800" type="number" />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-headline font-bold uppercase tracking-widest text-[#8e9379]">Sell Price</label>
              <input className="w-full bg-[#0e0e0e] border-none ring-1 ring-[#444933]/30 focus:ring-primary text-primary font-headline font-bold text-xl p-4 rounded-lg transition-all placeholder:text-[#353534]" placeholder="1200" type="number" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 p-6 bg-[#0e0e0e] rounded-xl">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-headline font-bold uppercase tracking-[0.1rem] text-slate-400 mb-1">EA Tax (5%)</p>
              <p className="text-2xl font-headline font-bold text-slate-300">60 <span className="text-sm">COINS</span></p>
            </div>
            <div className="h-10 w-px bg-[#444933]/30 hidden md:block"></div>
            <div className="text-center md:text-right">
              <p className="text-[10px] font-headline font-bold uppercase tracking-[0.1rem] text-primary mb-1">Estimated Net Profit</p>
              <p className="text-4xl font-headline font-black text-primary tracking-tighter">+340 <span className="text-sm">COINS</span></p>
            </div>
          </div>
          <button className="w-full bg-gradient-to-br from-white to-primary text-black font-headline font-black text-lg py-5 rounded-lg uppercase tracking-tighter hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] active:scale-95">
            Calculate Max Profit
          </button>
        </div>
      </section>

      {/* Trust Signals Table */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-black font-headline tracking-tight uppercase text-white">Manual vs <span className="text-primary">ELITE Logic</span></h2>
          <p className="text-slate-400 mt-2">Why 12,000+ traders trust our kinetic calculation engine.</p>
        </div>
        <div className="overflow-hidden rounded-xl bg-[#1c1b1b] border border-[#444933]/10">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#2a2a2a]">
              <tr>
                <th className="p-6 text-xs font-headline uppercase tracking-widest text-[#8e9379]">Performance Metric</th>
                <th className="p-6 text-xs font-headline uppercase tracking-widest text-[#8e9379]">Manual Method</th>
                <th className="p-6 text-xs font-headline uppercase tracking-widest text-primary">Elite Sniper Logic</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#444933]/5 text-slate-100">
              <tr className="hover:bg-[#353534]/30 transition-colors">
                <td className="p-6 font-medium">Calculation Accuracy</td>
                <td className="p-6 text-red-500"><span className="material-symbols-outlined align-middle mr-2">close</span> Human Error Prone</td>
                <td className="p-6 text-primary font-bold"><span className="material-symbols-outlined align-middle mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 100% Math-Verified</td>
              </tr>
              <tr className="hover:bg-[#353534]/30 transition-colors">
                <td className="p-6 font-medium">Processing Speed</td>
                <td className="p-6 text-slate-400 italic">~15-30 Seconds</td>
                <td className="p-6 text-primary font-bold"><span className="material-symbols-outlined align-middle mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span> 20ms Execution</td>
              </tr>
              <tr className="hover:bg-[#353534]/30 transition-colors">
                <td className="p-6 font-medium">Market Trends Sync</td>
                <td className="p-6 text-red-500"><span className="material-symbols-outlined align-middle mr-2">close</span> Static Input</td>
                <td className="p-6 text-primary font-bold"><span className="material-symbols-outlined align-middle mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>sync</span> Real-time Price Tracking</td>
              </tr>
              <tr className="hover:bg-[#353534]/30 transition-colors">
                <td className="p-6 font-medium">Automated Sniping Filters</td>
                <td className="p-6 text-red-500"><span className="material-symbols-outlined align-middle mr-2">close</span> Not Available</td>
                <td className="p-6 text-primary font-bold"><span className="material-symbols-outlined align-middle mr-2" style={{ fontVariationSettings: "'FILL' 1" }}>target</span> Integrated Filters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SEO Content Grid */}
      <section className="space-y-12 pb-12">
        <h2 className="text-3xl font-black font-headline tracking-tight uppercase text-center md:text-left text-white">Tactical <span className="text-primary">Intelligence</span> FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-100">
          {/* FAQ 1 */}
          <div className="bg-[#1c1b1b] p-8 rounded-xl border-t-2 border-primary/30 relative group hover:bg-[#2a2a2a] transition-all">
            <h3 className="text-xl font-headline font-bold mb-4 text-primary">How is the EA tax calculated exactly?</h3>
            <p className="text-slate-400 leading-relaxed">EA Sports deducts a flat 5% from every completed transfer on the market. Our calculator takes your target sell price and multiplies it by 0.95 to give you the exact coin return after tax.</p>
          </div>
          {/* FAQ 2 */}
          <div className="bg-[#1c1b1b] p-8 rounded-xl border-t-2 border-primary/30 relative group hover:bg-[#2a2a2a] transition-all">
            <h3 className="text-xl font-headline font-bold mb-4 text-primary">Can I use this for flipping players?</h3>
            <p className="text-slate-400 leading-relaxed">Absolutely. This tool is designed for high-frequency flippers who need to know their break-even point instantly. Any profit highlighted in green is pure net gain.</p>
          </div>
          {/* FAQ 3 */}
          <div className="bg-[#1c1b1b] p-8 rounded-xl border-t-2 border-primary/30 relative group hover:bg-[#2a2a2a] transition-all">
            <h3 className="text-xl font-headline font-bold mb-4 text-primary">Is the calculator updated for FC 26?</h3>
            <p className="text-slate-400 leading-relaxed">Yes. We track game-code updates 24/7. The 5% tax remains the standard for FC 26 Ultimate Team across all transfer market platforms (Web App, Console, Mobile).</p>
          </div>
          {/* FAQ 4 */}
          <div className="bg-[#1c1b1b] p-8 rounded-xl border-t-2 border-primary/30 relative group hover:bg-[#2a2a2a] transition-all">
            <h3 className="text-xl font-headline font-bold mb-4 text-primary">How do I maximize my profit per trade?</h3>
            <p className="text-slate-400 leading-relaxed">Focus on &quot;The Gap.&quot; Our tool highlights the optimal buy-under price for any given sell-target, ensuring you cover the 5% tax and still net a significant margin.</p>
          </div>
        </div>
      </section>

      {/* Growth Hack Banner */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-white via-primary to-[#b5d25e] p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-black mb-12">
        <div className="max-w-xl text-center md:text-left z-10">
          <h2 className="text-4xl font-black font-headline tracking-tighter mb-2 uppercase">Join 12,000+ Pro Traders</h2>
          <p className="font-bold opacity-90 text-lg">Access exclusive Discord channels for free sniping filters, market leaks, and real-time investment alerts.</p>
        </div>
        <div className="flex-shrink-0 z-10">
          <button className="bg-black text-primary px-10 py-5 font-headline font-black rounded-lg uppercase tracking-tight scale-100 hover:scale-105 active:scale-95 transition-all shadow-xl">
            Join Discord &amp; Claim Free Access
          </button>
        </div>
        {/* Decorative background element */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </section>
    </main>
  );
}
