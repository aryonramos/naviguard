import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaviGuard™ — Apple Find My Tracker | No Subscription, Ever",
  description:
    "Industrial-strength magnetic tracker. Connects directly to Apple Find My. No monthly fees, no extra apps. Protect what matters — vehicles, gear, luggage, loved ones.",
  openGraph: {
    title: "NaviGuard™ — Apple Find My Tracker",
    description:
      "The discreet, magnetic tracker trusted by 12,000+ Australians. Connects to Apple Find My. No subscription.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
