"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/login/OKC_LOGO.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoginPage() {
  return (
    // Background container for the login page
    <form className="flex bg-gray-50 dark:bg-zinc-700  items-center justify-center min-h-dvh">
      {/* Form container for the login page */}
      <div className="bg-gray-200/20 dark:bg-zinc-900 rounded-lg mx-6 px-10 py-8 md:py-0 shadow-md">
        {/* Flex container */}
        <div className="flex flex-col md:flex-row">
          {/* Logo Image */}
          <Image
            src={logo}
            alt="OKC Logo"
            // fill
            priority
            className="flex flex-1 items-center justify-start object-contain h-64 md:h-80 -mb-10 -mt-16 md:-mt-0 md:-ml-24"
          />
          {/* content */}
          <div className="flex flex-col flex-1 items-center justify-center space-y-2 md:-mr-10">
            <h2 className="font-serif text-xl text-gray-800 dark:text-gray-100 font-medium mb-2">
              Login
            </h2>
            <input
              type="email"
              placeholder="Email"
              className="peer p-1 px-4 border shadow-md dark:border-zinc-700 dark:bg-zinc-900 block bg-gray-200/20 text-slate-700 dark:text-gray-300 placeholder:text-xs placeholder:text-center placeholder:md:text-left text-center md:text-left focus:outline-none"
            />
            {/* Invalid email address message */}
            <p className="invisible peer-invalid:visible text-red-500 text-xs text-center md:text-left">
              Please provide a valid email address.
            </p>
            <div className=" relative">
              <input
                type="password"
                placeholder="Password"
                className="peer p-1 px-4 border dark:border-zinc-700 dark:bg-zinc-900 block dark:text-gray-300 placeholder:text-xs placeholder:text-center placeholder:md:text-left text-center md:text-left focus:outline-none"
              />

              <DotLottieReact
                src="/login/arrow.lottie"
                loop
                autoplay
                className="h-8 w-8 absolute -right-8 top-1/2 transform -translate-y-1/2 cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

{
  /* <div className="flex justify-center items-center ">
      <form>
        <h3>Log In</h3>
        <div className="flex-col">
          <div>
            <label>Email</label>
            <input name="email" type="email" required />
          </div>
          <div>
            <label>Password</label>
            <input name="password" type="password" required />
          </div>
        </div>
        <Link href="/home">
          <button type="button">Submit</button>
        </Link>
      </form>
      <Image src={logo} alt="OKC Logo"></Image>
    </div> */
}
