import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "500"],
});

export const metadata: Metadata = {
  title: "TrendyThumbs",
  description: "YouTube thumbnails analysis tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
