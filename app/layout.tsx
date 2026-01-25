import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteName = "Timur Garipov";
const title = "Timur Garipov — Full-stack Engineer";
const description =
  "Personal website and portfolio of Timur Garipov, a full-stack engineer.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL), // <-- замени на свой домен
  title: {
    default: title,
    template: `%s — ${siteName}`,
  },
  description,
  applicationName: siteName,

  // favicon / icons
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName,
    locale: "en_US",
    images: [
      {
        // TODO: Добавить og.png в public
        url: "/og.png", // добавь public/og.png (1200x630)
        width: 1200,
        height: 630,
        alt: `${siteName} — Portfolio`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
    creator: "@TimurGaripov",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
