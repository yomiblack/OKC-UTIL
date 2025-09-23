import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/OKC_LOGO.png";

export default function LoginPage() {
  return (
    <div className="flex bg-white items-center justify-center ">Login Page</div>
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
