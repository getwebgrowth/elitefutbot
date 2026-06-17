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

  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a] text-slate-300 font-body">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-lg border border-white/10">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Support Network</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-white animate-pulse">
            Contact <span className="text-primary italic">Support</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Need assistance with your account, billing, or subscription? Reach out to our operations team. We typically respond within 24 to 48 business hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Support Channels & Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
              <h2 className="text-xl font-headline font-bold text-white uppercase tracking-wider">Direct Dispatch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Support</h3>
                    <a href="mailto:support@elitefutbot.com" className="text-white font-bold hover:text-primary transition-colors text-sm sm:text-base">
                      support@elitefutbot.com
                    </a>
                    <p className="text-xs text-gray-500 mt-1">Direct billing and account queries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Discord HQ</h3>
                    <Link href="https://discord.gg/PHUfbsSzhK" className="text-white font-bold hover:text-primary transition-colors text-sm sm:text-base block">
                      Join Support Desk
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">Live updates and companion guide discussions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <h2 className="text-xl font-headline font-bold text-white uppercase tracking-wider">Merchant Notice</h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                If you have recently subscribed and wish to cancel or request a refund under our <strong>7-day money-back guarantee</strong>, please include your email address and transaction reference ID for faster processing.
              </p>
            </div>
          </div>

          {/* Interactive Form */}
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
