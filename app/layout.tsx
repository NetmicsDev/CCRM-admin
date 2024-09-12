import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./_components/Sidebar";

export const metadata: Metadata = {
  title: "CCRM 관리자",
  description: "CCRM 관리자",
};

const pretendard = localFont({
  src: "/_fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body
        className={`${pretendard.className} flex h-screen bg-gray-100 font-light`}
      >
        <Sidebar />
        <div className="flex h-screen flex-1 overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
