import localFont from "next/font/local";
import "./globals.css";
import Header from "./component/header";
import SideBar from "./component/sidebar/sidebar";
import useUistore from "./component/store/uiStore/store";
import { usePathname } from "next/navigation";

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

// export const metadata = {
//   title: "Olaseinde Karim & Co.",
//   description: "OKC Utility Apps",
//   icons: {
//     icon: "/favicon.png",
//   },
// };

export default function RootLayout({ children }) {
  const { isSidebarOpen } = useUistore();
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isHomePage = pathname.startsWith("/home");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative scroll-smooth bg-gray-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200
`}
      >
        <Header />

        <div
          className={`flex justify-between ${
            isLandingPage || isHomePage ? "mt-0" : "mt-[50%] md:mt-20"
          }`}
        >
          {!(isLandingPage || isHomePage) && (
            <div
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } md:block w-full md:w-1/4 border-r-2 dark:border-slate-800 border-slate-200 text-sm min-h-dvh p-4 bg-gray-50 dark:bg-slate-900`}
            >
              <SideBar />
            </div>
          )}
          <div
            className={`${
              isSidebarOpen ? "hidden md:block" : "block"
            } flex justify-center ${!(isLandingPage || isHomePage
              ? "pt-10"
              : "pt-0")} min-h-dvh w-dvw`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
