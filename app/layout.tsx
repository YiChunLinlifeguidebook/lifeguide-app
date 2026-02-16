import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LifeGuide - 你的生活導師",
  description: "LifeGuide 提供專業的生活諮詢服務",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
