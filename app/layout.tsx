import Header from "@/components/Header";
import { cn } from "@/lib/utils";
// eslint-disable-next-line camelcase
import { Open_Sans, Poppins } from "next/font/google";
import React from "react";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "absolute inset-0 font-sans antialiased",
          poppins.className,
          openSans.className
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
