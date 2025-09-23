"use client";
import Header from "../header";
import SideBar from "../sidebar/sidebar";
import useUistore from "../store/uiStore/store";
import { usePathname } from "next/navigation";

export default function LayoutContent({ children }) {
  const { isSidebarOpen } = useUistore();
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isHomePage = pathname.startsWith("/home");

  return (
    <>
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
    </>
  );
}

export function theme() {
  return "bg-gray-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200";
}
