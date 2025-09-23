"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/login/OKC_LOGO.png";
import { usePathname } from "next/navigation";
import { domine } from "@/app/font";

export default function Header() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

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
      className={`${domine.className}  relative md:fixed top-0 left-0 w-full px-4 py-2 flex flex-col items-center space-y-5 md:flex-row md:justify-between md:items-center z-10`}
    >
      <div className="md:flex-1">
        <Link href="/home" className="flex justify-center md:justify-start">
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

      <div className="w-full md:w-auto">
        <ul className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-sm md:text-base font-extralight md:font-medium">
          <li>{LinkHover("Home", "/home")}</li>
          <li>{LinkHover("Bills", "/bill")}</li>
          <li>{LinkHover("Files", "/file")}</li>
          <li>{LinkHover("Logout", "/")}</li>
        </ul>
      </div>
    </header>
  );
}
