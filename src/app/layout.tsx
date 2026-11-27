import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import MobileOptimizer from "./components/MobileOptimizer";
import JsonLd from "./components/JsonLd";
import { SITE_NAME, SITE_URL } from "./lib/site";
import { SHARE_IMAGE } from "./lib/seo";
import { organisationSchema } from "./lib/structuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

// No canonical here: it would be inherited by every page. Each page sets its
// own through pageMetadata().
export const metadata: Metadata = {
  // Ensure absolute URLs for social images/canonicals
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: { icon: { url: "/logo-small.png", type: "image/png" } },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    images: [SHARE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body
        className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <JsonLd data={organisationSchema} />
        <MobileOptimizer>
          <SmoothScrollProvider>
            {children}
            <ScrollToTopButton />
          </SmoothScrollProvider>
        </MobileOptimizer>
      </body>
    </html>
  );
}
