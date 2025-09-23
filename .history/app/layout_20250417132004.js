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
  return (
    <html
      lang="en"
      className="relative scroll-smooth bg-gray-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ "--header-height": "0px" }} // Default value
      >
        <Header />
        <main
          style={{
            marginTop: "var(--header-height)",
          }}
          ref={(el) => {
            if (el) {
              const header = document.querySelector("header");
              if (header) {
                const headerHeight = header.offsetHeight;
                el.style.setProperty("--header-height", `${headerHeight}px`);
              }
            }
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
