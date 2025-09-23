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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` scroll-smooth`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
