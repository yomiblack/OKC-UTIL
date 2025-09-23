import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/OKC_LOGO.png";

export default function LoginPage() {
  return (
    // Background container for the login page
    <div className="flex bg-white dark:bg-zinc-700 dark:text-white items-center justify-center h-screen text-black">
      {/* Form container for the login page */}
      <div className="bg-gray-300 dark:bg-zinc-800 rounded-lg mx-6 ">
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
            <h2 className="font-serif text-xl font-medium md:text-left">
              Login
            </h2>
            <input type="email" className="border block" />
            <input type="password" className="border block" />
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
