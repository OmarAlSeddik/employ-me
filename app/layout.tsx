import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
// eslint-disable-next-line camelcase
import { Open_Sans, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(poppins.variable, openSans.variable)}>
      <body className="absolute inset-0 font-open-sans text-[0.875rem] text-text-color antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
