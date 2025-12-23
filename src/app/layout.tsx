import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DailyAINews - AI 编程每日情报",
  description: "由 AI 驱动的人工智能编程每日情报站，自动聚合全球最新资讯。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}<SpeedInsights /></body>
    </html>
  );
}
