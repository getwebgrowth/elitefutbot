import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support & Help Desk | Elite FUT SNIPER',
  description: 'Get instant 24/7 support, join our Discord HQ, or reach out to our team.',
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-dark text-white pt-28 pb-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            24/7 Customer Support
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-headline tracking-tight">
            How can we <span className="text-primary">help you?</span>
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-base">
            Join our live Discord community for real-time assistance, or reach out to our support team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6 flex flex-col justify-between hover:border-primary/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </div>
              <h2 className="text-xl font-bold font-headline">Discord Support HQ</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Connect with our technical support team and community of 50,000+ traders in real time.
              </p>
            </div>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-primary text-dark font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
            >
              Join Discord HQ
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-6 flex flex-col justify-between hover:border-primary/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold font-headline">Email & Contact Form</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Have account inquiries, billing questions, or refund requests under our 7-day money-back guarantee?
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all"
            >
              Open Contact Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
