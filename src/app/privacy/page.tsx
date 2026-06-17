import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - FUT Sniper",
  description: "Read the Privacy Policy for FUT Sniper. Learn how we collect, use, and safeguard your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20 bg-[#0a0a0a] text-slate-300 font-body">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-lg border border-white/10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-white">
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-sm text-gray-500 font-medium">Last updated: June 18, 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              1. Introduction
            </h2>
            <p>
              At FUT Sniper (accessible via <a href="https://www.elitefutbot.com/" className="text-primary hover:underline">https://www.elitefutbot.com/</a>), we respect your privacy and are committed to protecting any personal data we process. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit or use our website, tools, and companion overlay services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              2. Information We Collect
            </h2>
            <p>
              We collect information to provide a better user experience and to facilitate transaction processing. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Registration Details:</strong> When you register or log in (e.g., using Discord authorization), we may collect your email address, username, and profile identifier.</li>
              <li><strong>Billing Information:</strong> If you purchase a subscription, all credit card and transactional information is processed securely by our third-party payment gateways (such as Dodo Payments / Creem). **We do not store your credit card or financial account numbers on our servers.** We only receive a transaction confirmation token.</li>
              <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including IP address, browser type, device info, and page views, to help us debug and optimize performance.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              3. How We Use Your Information
            </h2>
            <p>
              We use the information we collect for several essential business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our SBC helper and market tools.</li>
              <li>To process subscription payments, handle cancellations, and verify active memberships.</li>
              <li>To send transactional emails, including receipts, invoice alerts, and system notifications.</li>
              <li>To respond to customer support inquiries and provide assistance.</li>
              <li>To enforce our terms, monitor against fraudulent operations, and ensure site security.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              4. Data Sharing &amp; Third-Party Services
            </h2>
            <p>
              **We do not sell, rent, or trade your personal information to third parties.** We only share data with trusted service providers necessary to operate the Service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Payment Processors:</strong> We use payment processors like Dodo Payments / Creem to handle transactions securely. These processors operate under their own strict security protocols and privacy policies.</li>
              <li><strong>Hosting &amp; Infrastructure:</strong> Our servers and CDN services are hosted on secure modern clouds (like Vercel).</li>
              <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by law, or in response to valid requests by public authorities.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              5. Cookies and Local Storage
            </h2>
            <p>
              We use cookies and local storage tokens to keep you logged in, remember your preferences (like tax calculations or themes), and gather anonymous analytics about site usage. You can instruct your browser to refuse all cookies, but doing so may prevent you from using some parts of our active dashboard.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              6. GDPR &amp; California Privacy Rights (CCPA)
            </h2>
            <p>
              Depending on your location, you have rights regarding your personal information under the General Data Protection Regulation (GDPR) or California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> You can request copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You can request that we update or correct inaccurate details.</li>
              <li><strong>Right to Erasure (Deletion):</strong> You can request that we delete all your account records and personal data from our active databases.</li>
            </ul>
            <p>
              To exercise any of these rights, please email us directly at <a href="mailto:support@elitefutbot.com" className="text-primary hover:underline">support@elitefutbot.com</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              7. Security of Your Data
            </h2>
            <p>
              We implement industry-standard security measures (such as SSL encryption and tokenized authentication) to safeguard your personal data from unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-white border-b border-white/10 pb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy or how we manage your information, please contact our support desk:
            </p>
            <div className="bg-white/5 p-6 rounded-lg space-y-2 font-mono text-sm border border-white/10">
              <p>Email: <a href="mailto:support@elitefutbot.com" className="text-primary hover:underline">support@elitefutbot.com</a></p>
              <p>Support Desk: <Link href="https://discord.gg/PHUfbsSzhK" className="text-primary hover:underline">Discord Support Channel</Link></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
