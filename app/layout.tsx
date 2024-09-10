import type { Metadata } from "next";
import "./globals.css";
import { zenOldMincho } from "@/lib/font";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_URL || "https://www.millemille-kushiro.com";

export const metadata: Metadata = {
  title: "Patisserie mille.mille",
  description:
    "北海道釧路市にあるシフォンケーキが有名なケーキ屋、パティスリーミルミルです。",
  robots: {
    index: false,
  },
  openGraph: {
    title: "Patisserie mille.mille",
    description:
      "北海道釧路市にあるシフォンケーキが有名なケーキ屋、パティスリーミルミルです。",
    url: siteUrl,
    siteName: "Patisserie mille.mille",
    images: [
      {
        url: `${siteUrl}/OGP.png`,
        width: 1200,
        height: 630,
        alt: "Patisserie mille.mille OGP Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patisserie mille.mille",
    description:
      "北海道釧路市にあるシフォンケーキが有名なケーキ屋、パティスリーミルミルです。",
    images: [`${siteUrl}/OGP.png`],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={zenOldMincho.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
