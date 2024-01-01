import "@/styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts";
import { Navbar, Footer } from "@/layouts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import {
  Socials,
  TailwindIndicator,
  ThemeProvider,
  UpArrow,
} from "@/components";

import { Viewport } from "next";
import { BASE_URL } from "@/constants";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  colorScheme: "light",
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return {
    title: {
      template: `%s | MilleniumTech`,
      default: "MilleniumTech",
    },
    description: "MilleniumTech",
    keywords: ["MilleniumTech", "Millenium Company", "IT Company Uzbekistan"],
    generator: "Next.js",
    publisher: "Hostinger",
    creator: "MilleniumTech Team",
    authors: {
      name: "Millenium Tech",
      url: BASE_URL,
    },
    applicationName: "MilleniumTech",
    referrer: "origin",
    icons: {
      icon: `/favicon.ico`,
      // shortcut: `/icon.svg`,
      // apple: `/apple-icon.svg`,
    },
    alternates: {
      canonical: "/",
    },
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
    abstract: "MilleniumTech",
    assets: `${BASE_URL}/assets`,
    metadataBase: new URL(`${BASE_URL}`),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    verification: {
      google: `${process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}`,
      yandex: `${process.env.NEXT_PUBLIC_YANDEX_VERIFICATION}`,
    },
    openGraph: {
      type: "website",
      countryName: "Uzbekistan",
      title: "MilleniumTech",
      description: "MilleniumTech",
      emails: [
        "info@milleniumcompany.tech",
        "contact@milleniumcompany.tech",
        "xasanof17@gmail.com",
      ],
      faxNumbers: ["+998900198505"],
      siteName: "MilleniumTech",
      url: `${BASE_URL}`,
      images: [
        {
          url: `/assets/opengraph-image.jpg`,
          width: 1920,
          height: 600,
          type: "image/jpg",
        },
      ],
      locale: "en",
    },
    category: "Technology",
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  return (
    <html lang="en" prefix="og:https://ogp.me/ns#" suppressHydrationWarning>
      <head />
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Analytics />
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main role="main">{children}</main>
          <Footer />
          <Socials />
          <TailwindIndicator />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
