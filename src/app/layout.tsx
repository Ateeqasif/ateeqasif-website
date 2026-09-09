import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/layout/SkipLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteSchema } from "@/lib/structured-data";
import { siteSettings } from "@/content/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteSettings.domain}`),
  title: {
    default: siteSettings.defaultSeo.title,
    template: `%s — ${siteSettings.name}`,
  },
  description: siteSettings.defaultSeo.description,
  openGraph: {
    type: "website",
    siteName: siteSettings.name,
    title: siteSettings.defaultSeo.title,
    description: siteSettings.defaultSeo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.defaultSeo.title,
    description: siteSettings.defaultSeo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`} data-theme="dark">
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <JsonLd data={websiteSchema()} />
        <SkipLink />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
