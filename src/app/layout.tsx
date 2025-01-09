import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import { AppWrapper } from "../components/AppContext";
import React from "react";
import Header from "@/components/frames/Header";
const noto_serif_sc = Noto_Serif_SC({
  subsets: ["latin"],
  weight: "900",
  display: "swap",
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "SZCC",
  description: "D.C Area - Shenzhe Chamber of Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${noto_serif_sc.variable}`}
    >
      <body className=" font-light text-sm">
        <Header />
        <main style={{ marginTop: "64px" }}>
          <AppWrapper>{children}</AppWrapper>
        </main>
      </body>
    </html>
  );
}
