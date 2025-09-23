"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/login/OKC_LOGO.png";
import { usePathname } from "next/navigation";
import { domine } from "@/app/font";
import useStore from "./store/store";

export default function Header() {
  const { toggleSidebar } = useStore();
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isHomePage = pathname === "/home";

  function LinkHover(label, route) {
    const pathname = usePathname();

    let activeClass = " text-stone-500 hover:text-orange-500 hover:shadow-sm";

    if (pathname.startsWith(route))
      activeClass = "text-orange-700 hover:text-orange-500 hover:shadow-sm";

    if (route === "/")
      activeClass = " text-stone-500 hover:text-orange-500 hover:shadow-sm";

    return (
      <Link href={route} className={activeClass}>
        {label}
      </Link>
    );
  }

  if (isLandingPage) return null;

  return (
    <header
      className={`${domine.className}  fixed top-0 left-0 right-0 w-full px-4 py-2 flex flex-col justify-center items-center space-y-5 md:flex-row md:justify-between md:space-y-0 shadow-md  dark:bg-slate-900 md:dark:shadow-slate-800 bg-gray-50 md:shadow-gray-200 z-10`}
    >
      <div className="flex items-center">
        {/* Sidebar button */}
        {!(isLandingPage || isHomePage) && (
          <div
            className="md:hidden absolute left-4"
            onClick={() => {
              // Toggle sidebar open/close state
              toggleSidebar();
            }}
          >
            <ul className="space-y-1">
              <li className="w-2 h-2 bg-slate-400 rounded-full"></li>
              <li className="w-2 h-2 bg-slate-400 rounded-full"></li>
              <li className="w-2 h-2 bg-slate-400 rounded-full"></li>
            </ul>
          </div>
        )}
        <div className="flex justify-center w-full md:justify-start">
          <Link href="/home">
            <Image
              src={logo}
              alt="OKC Logo"
              width={200}
              height="auto"
              className="object-cover"
              priority
            />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-auto">
        <ul className="flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-10 md:items-center md:justify-end text-sm md:text-base font-extralight md:font-light">
          <li>{LinkHover("Home", "/home")}</li>
          <li>{LinkHover("Bills", "/bill")}</li>
          <li>{LinkHover("Files", "/file")}</li>
          <li>{LinkHover("Logout", "/")}</li>
        </ul>
      </div>
    </header>
  );
}
