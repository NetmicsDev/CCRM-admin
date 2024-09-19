import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ModalManager from "./_components/Modal";

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
        className={`${pretendard.className} flex h-screen font-light bg-slate-100`}
      >
        {children}
        <ModalManager />
      </body>
    </html>
  );
}
