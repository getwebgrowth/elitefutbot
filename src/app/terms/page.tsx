import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Elite FUT SNIPER",
  description: "Read the Terms of Service for Elite FUT SNIPER. Understand user agreements, billing terms, and our refund policies.",
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a] text-slate-300 font-body">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-lg border border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-white">
            Terms of <span className="text-primary italic">Service</span>
          </h1>
          <p className="text-sm text-gray-500 font-medium">Last updated: June 18, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Elite FUT SNIPER website (located at <a href="https://www.elitefutbot.com/" className="text-primary hover:underline">https://www.elitefutbot.com/</a>), services, browser helper overlays, and tools (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not access or use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              2. Description of Service
            </h2>
            <p>
              Elite FUT SNIPER provides Squad Building Challenge (SBC) helper templates, market fee calculators, and user interface overlay utilities for browser applications. The Service is provided solely for educational, analytical, and entertainment purposes to optimize standard web app workflows.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              3. User Accounts &amp; Security
            </h2>
            <p>
              To access certain features of the Service, you may be required to register for an account (e.g., using Discord authentication). You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              4. Subscription Plans &amp; Billing
            </h2>
            <p>
              Certain premium parts of the Service require a paid subscription. By purchasing a subscription, you agree to pay all applicable fees, including taxes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Billing Cycle:</strong> Subscriptions are billed on a recurring basis (monthly or annually) depending on the plan selected at the time of purchase.</li>
              <li><strong>Automatic Renewal:</strong> Your subscription will automatically renew at the end of each billing cycle unless you cancel it before the renewal date.</li>
              <li><strong>Price Adjustments:</strong> We reserve the right to change our subscription fees. Any price changes will be communicated to you in advance and will apply to the next billing period.</li>
            </ul>
          </section>

          <section className="space-y-4 p-6 rounded-xl bg-white/[0.02] border border-primary/20">
            <h2 className="text-2xl font-headline font-bold text-primary border-b border-primary/10 pb-2">
              5. Refund &amp; Cancellation Policy
            </h2>
            <p>
              We want you to be completely satisfied with Elite FUT SNIPER. This policy outlines our commitment to fair and transparent billing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cancellations:</strong> You can cancel your recurring subscription at any time directly from your account settings page or by contacting support. Following cancellation, you will continue to have access to premium features until the end of your current active billing period.
              </li>
              <li>
                <strong>Refund Eligibility:</strong> We offer a <strong>7-day money-back guarantee</strong> on all new subscriptions. If you are not satisfied with your purchase, you may request a full refund within 7 days of your initial transaction by emailing <a href="mailto:support@elitefutbot.com" className="text-primary underline hover:brightness-110">support@elitefutbot.com</a>.
              </li>
              <li>
                <strong>Exclusions:</strong> After the initial 7 days, subscription fees are non-refundable. Renewal charges are not eligible for refunds unless required by local consumer protection laws.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              6. Acceptable Use Policy
            </h2>
            <p>
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any local, national, or international laws or regulations.</li>
              <li>Attempt to reverse engineer, copy, disrupt, or exploit the source code, databases, or API integrations of Elite FUT SNIPER.</li>
              <li>Use any automatic scripts or methods that violate third-party application terms or place an unreasonable load on our systems.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              7. Disclaimer of Warranties &amp; Limitation of Liability
            </h2>
            <p className="italic text-gray-500">
              Elite FUT SNIPER is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We do not warrant that the website or tools will be uninterrupted, error-free, or fully secure. In no event shall Elite FUT SNIPER, its developers, or affiliates be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              9. Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-white/5 p-6 rounded-lg space-y-2 font-mono text-sm border border-white/10">
              <p>Email: <a href="mailto:support@elitefutbot.com" className="text-primary hover:underline">support@elitefutbot.com</a></p>
              <p>Support Desk: <Link href="https://discord.gg/PHUfbsSzhK" className="text-primary hover:underline">Discord Support Channel</Link></p>
              <p>Response SLA: Typically within 24 to 48 business hours.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
