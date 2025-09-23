'use client';
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Olaseinde Karim & Co.",
  description: "OKC Utility Apps",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const homePage = pathname ===
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative scroll-smooth bg-gray-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200
`}
      >
        <Header />
        <main className="mt-20 px-4 my-8">{children}</main>
      </body>
    </html>
  );
}
