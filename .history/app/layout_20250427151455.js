import localFont from "next/font/local";
import "./globals.css";
import LayoutContent from "./component/pageLayout/layoutContent";
import theme from "./component/pageLayout/layoutContent";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative scroll-smooth ${theme}
`}
      >
        <LayoutContent children={children} />
      </body>
    </html>
  );
}
