import Link from "next/link";
import Image from "next/image";
import logo from "@/public/login/OKC_LOGO.png";

export default function LoginPage() {
  return (
    // Background container for the login page
    <div className="flex bg-white dark:bg-zinc-700 dark:text-white items-center justify-center h-screen text-black">
      {/* Form container for the login page */}
      <div className="bg-gray-300 dark:bg-zinc-800 rounded-lg mx-6">
        {/* Flex container */}
        <div className="flex flex-col md:flex-row">
          {/* Logo Image */}
          <Image
            src={logo}
            alt="OKC Logo"
            // fill
            priority
            className="flex flex-1 items-center justify-start object-contain h-64 md:h-80 -mb-10"
          />
          {/* content */}
          <div className="flex flex-col flex-1 items-center justify-center space-y-4 p-8">
            <h2 className="font-serif text-xl font-medium">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="p-1 px-4 border border-zinc-600 bg-zinc-800 block text-white text-center md:text-left"
            />
            <div className=" relative">
              <input
                type="password"
                placeholder="Password"
                className="p-1 px-4 border border-zinc-600 bg-zinc-800 text-white text-center md:text-left"
              />
              <img
                src="/login/arrow.svg"
                alt="login arrow"
                className="h-7 w-7 absolute -right-10 top-1/2 transform -translate-y-1/2 cursor-pointer dark:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
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
