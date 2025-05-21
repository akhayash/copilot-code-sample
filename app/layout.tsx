import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "ProjectFlow - プロジェクト管理ツール",
  description: "モダンでプロフェッショナルなプロジェクト管理ツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
