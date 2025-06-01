import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loyal Furniture",
  description: "Your one-stop shop for all furniture needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white text-slate-900 antialiased max-w-screen-xl mx-auto",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
