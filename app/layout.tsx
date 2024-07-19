import type { Metadata } from "next";

import "./globals.css";
import { marcellusRegular, zenOldMincho } from "@/lib/font";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Patisserie mille.mille",
  description: "釧路パティスリーミルミル",
  robots: {
    index: false,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={[marcellusRegular.className, zenOldMincho.className].join(" ")}
    >
      <body className="">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
