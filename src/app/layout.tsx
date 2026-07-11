import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ascend Labs | Premium Technology Agency | Build, Automate, Scale",
  description: "Ascend Labs helps ambitious businesses build premium digital experiences, intelligent workflow automation, custom systems, and SEO/AEO that drive real business growth. Every business deserves to ascend.",
  keywords: [
    "Technology Agency", "Premium Web Design", "AI Calling Agents", "Workflow Automation",
    "CRM Lead Management", "Search Engine Optimization", "SEO", "AEO", "Custom Web Applications",
    "Ascend Labs", "Business Automation", "Software Development"
  ],
  openGraph: {
    title: "Ascend Labs | Premium Technology Partner for Smarter Growth",
    description: "Build a premium digital presence, automate operations, and scale with intelligence.",
    url: "https://ascendlabs.tech",
    siteName: "Ascend Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascend Labs | Premium Technology Agency",
    description: "Every business deserves to ascend. Premium web design, AI receptionist/calling, workflow automation, and custom web apps.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text font-inter selection:bg-brand-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
