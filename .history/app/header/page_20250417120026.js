"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/login/OKC_LOGO.png";
import { usePathname } from "next/navigation";

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
    <header className="absolute top-0 left-1/2 md:top-0 md:left-0 flex flex-col  space-y-5 md:flex-row md:justify-between ">
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

      <nav>
        <ul className="flex flex-col justify-center items-center md:flex-row space-y-2 md:space-x-6">
          <li>{LinkHover("Home", "/home")}</li>
          <li>{LinkHover("Bills", "/bill")}</li>
          <li>{LinkHover("Files", "/file")}</li>
          <li>{LinkHover("Logout", "/")}</li>
        </ul>
      </nav>
    </header>
  );
}
