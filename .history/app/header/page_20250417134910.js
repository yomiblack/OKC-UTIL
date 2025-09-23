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
      className={`${domine.className} bg-white h-10 md:h-300 absolute top-0 left-1/2 md:left-0 transform -translate-x-1/2  md:transform-none flex flex-col items-center space-y-5 md:flex-row md:justify-between w-full px-4 py-2`}
    >
      <div>
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

      <div>
        <ul className="flex flex-col justify-center items-center md:flex-row space-y-2 md:space-y-0 md:space-x-10 text-sm md:text-base font-extralight md:font-medium">
          <li>{LinkHover("Home", "/home")}</li>
          <li>{LinkHover("Bills", "/bill")}</li>
          <li>{LinkHover("Files", "/file")}</li>
          <li>{LinkHover("Logout", "/")}</li>
        </ul>
      </div>
    </header>
  );
}
