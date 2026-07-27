"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "General Support",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "General Support", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    {
      name: "Discord",
      handle: "Join Support HQ",
      url: "https://discord.gg/Rkb9nF6WG6",
      desc: "50,000+ traders & direct help desk",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
        </svg>
      ),
      color: "hover:text-[#5865F2] hover:border-[#5865F2]/40"
    },
    {
      name: "TikTok",
      handle: "@elitefutbotx",
      url: "https://www.tiktok.com/@elitefutbotx",
      desc: "Sniping clips & daily bot showcases",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.35a7.86 7.86 0 0 1-1.87-1.53v8.52c-.02 2.1-.8 4.21-2.42 5.54-1.68 1.41-3.95 2.05-6.14 1.77-2.18-.28-4.24-1.56-5.32-3.5-1.12-1.95-1.2-4.42-.2-6.33 1.01-1.91 3.04-3.23 5.19-3.46.12-.01.24-.02.35-.02v4.02c-.89.09-1.81.47-2.42 1.15-.65.71-.87 1.72-.73 2.66.14.99.78 1.87 1.66 2.3 1.05.51 2.37.38 3.29-.36.78-.62 1.19-1.63 1.17-2.63V.02z" />
        </svg>
      ),
      color: "hover:text-[#ff0050] hover:border-[#ff0050]/40"
    },
    {
      name: "Instagram",
      handle: "@elitefutbot",
      url: "https://www.instagram.com/elitefutbot/",
      desc: "Market updates & setup tutorials",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "hover:text-[#e1306c] hover:border-[#e1306c]/40"
    },
    {
      name: "Telegram",
      handle: "@elitefutbot",
      url: "https://t.me/elitefutbot",
      desc: "Real-time bot alerts & coupon codes",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.332 4.978c.488 0 .702-.223.975-.488l2.339-2.274 4.862 3.593c.897.494 1.542.24 1.765-.83l3.19-15.035c.327-1.31-.5-1.905-1.36-1.514z"/>
        </svg>
      ),
      color: "hover:text-[#26A5E4] hover:border-[#26A5E4]/40"
    },
    {
      name: "X / Twitter",
      handle: "@FutSnipeBot",
      url: "https://x.com/FutSnipeBot",
      desc: "Real-time bot status & announcements",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "hover:text-[#1da1f2] hover:border-[#1da1f2]/40"
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a] text-slate-300 font-body">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-lg border border-white/10">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Support &amp; Community Network</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-white">
            Contact <span className="text-primary italic">Support</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Need assistance with your account, billing, or subscription? Reach out directly via form or connect with us on our official social channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Support Channels & Official Socials */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct Email Support Box */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-sm font-headline font-bold text-white uppercase tracking-wider text-primary">
                Direct Email Dispatch
              </h2>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Support</h3>
                  <a href="mailto:support@elitefutbot.com" className="text-white font-bold hover:text-primary transition-colors text-sm sm:text-base">
                    support@elitefutbot.com
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Direct billing, refunds &amp; account queries.</p>
                </div>
              </div>
            </div>

            {/* Official Social Channels Card */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-headline font-bold text-white uppercase tracking-wider">
                  Official Social Channels
                </h2>
                <Link href="/bio" className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1">
                  <span>View Bio Hub</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>

              <div className="space-y-3 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 ${s.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-gray-300 group-hover:scale-110 transition-transform">
                        {s.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{s.name}</span>
                          <span className="text-[10px] text-gray-400 font-mono">({s.handle})</span>
                        </div>
                        <p className="text-[10px] text-gray-500 line-clamp-1">{s.desc}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-sm text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all">
                      arrow_forward
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Merchant Guarantee Notice */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <h2 className="text-xs font-headline font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                7-Day Money-Back Guarantee
              </h2>
              <p className="text-xs text-gray-400 leading-relaxed">
                If you wish to cancel or request a refund under our 7-day policy, please include your subscription email and reference ID.
              </p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
              <div className="absolute -right-24 -bottom-24 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

              {submitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-16 h-16 bg-primary/10 border border-primary/20 text-primary rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-headline font-black text-white">Transmission Successful</h2>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                      Your support request has been logged. Our response team will reach out to you within 24 to 48 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-primary/50 text-sm transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-primary/50 text-sm transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Inquiry Department
                    </label>
                    <select
                      name="subject"
                      id="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-primary/50 text-sm transition-all"
                    >
                      <option value="General Support">General Support</option>
                      <option value="Billing &amp; Subscription">Billing &amp; Subscription</option>
                      <option value="Refund &amp; Cancellation Request">Refund &amp; Cancellation Request</option>
                      <option value="Technical Feedback">Technical Feedback / Bugs</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Detailed Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-black border border-white/10 text-white focus:outline-none focus:border-primary/50 text-sm transition-all resize-none"
                      placeholder="Please detail your inquiry here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:brightness-110 text-dark font-headline font-black uppercase tracking-wider py-4 rounded-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        DISPATCH MESSAGE
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
