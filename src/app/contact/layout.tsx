import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Elite FUT SNIPER Support",
  description: "Get in touch with the Elite FUT SNIPER team for support, business inquiries, and partnership opportunities.",
  alternates: { canonical: "https://elitefutbot.com/contact" },
  openGraph: {
    title: "Contact Elite FUT SNIPER Support",
    description: "Get in touch with the Elite FUT SNIPER team for support.",
    url: "https://elitefutbot.com/contact",
    siteName: "Elite FUT SNIPER",
    type: "website",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
