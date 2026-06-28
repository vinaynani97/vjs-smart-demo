import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    default: "VJS Smart Systems — Industrial Automation & IoT Solutions",
    template: "%s | VJS Smart Systems",
  },
  description:
    "VJS Smart Systems delivers Industrial Automation, IoT Monitoring, Control Panels, Wireless Communication Systems, Robotics, and Industry 4.0 Solutions for manufacturing and process industries.",
  keywords: [
    "Industrial Automation",
    "IoT Solutions",
    "SCADA",
    "PLC Programming",
    "Industry 4.0",
    "Control Panels",
    "Wireless Monitoring",
    "Robotics",
  ],
  authors: [{ name: "VJS Smart Systems" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "VJS Smart Systems",
    title: "VJS Smart Systems — Industrial Automation & IoT Solutions",
    description:
      "Engineering Smart Automation for Modern Industries. PLC, SCADA, IoT, and Industry 4.0 solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VJS Smart Systems — Industrial Automation & IoT Solutions",
    description:
      "Engineering Smart Automation for Modern Industries. PLC, SCADA, IoT, and Industry 4.0 solutions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-ink-950 text-ink-50 antialiased">
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
          <Toaster theme="dark" position="bottom-right" />
        </div>
      </body>
    </html>
  );
}
