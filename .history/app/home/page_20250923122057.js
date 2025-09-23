import Link from "next/link";
import Image from "next/image";
import Button from "../component/button";
import homeImage from "/public/home/justiceScale.jpg";

export default function Home() {
  return (
    // Global container
    <div className="absolute flex items-center justify-center min-h-dvh mt-[50%] md:mt-20 px-1">
      {/* Card container */}
      <div className="w-full min-h-dvh flex flex-col m-3 space-y-10 md:flex-row md:space-y-0 md:space-x-10">
        {/* Image */}
        <div className="w-full">
          <Image
            src={homeImage}
            alt="justice scale and a laptop"
            priority
            className="object-contain rounded-lg hover:scale-105 duration-200 sepia"
          />
        </div>
        {/* content */}
        <div className="flex flex-col space-y-6 md:space-y-16 w-full text-center md:text-left">
          {/* Introduction */}
          <div className="select-none">
            <h1 className="text-2xl md:text-4xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-5 md:mb-10 tracking-wide">
              Next-level <span className="italic font-serif">tools</span> for
              next-level{" "}
              <span className="italic font-serif text-red-600">efficiency</span>
              .
            </h1>
            <p className="text-ld md:text-2xl text-stone-600">
              Manage & share files, track bills-anytime, anywhere
            </p>
          </div>
          {/* Buttons */}
          <div className="pt-6 md:p-0 flex flex-col items-center md:flex-row space-y-8 md:space-y-0 md:space-x-4">
            <Link href={`/file`}>
              <Button>View Files</Button>
            </Link>
            <Link
              // href="/bill"
              href="/bill"
              className="md:py-4 text-orange-700 text-md md:text-xl hover:text-orange-800 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Track Bills
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <>
<main className="bg-gray-50 dark:bg-zinc-800 min-h-dvh flex flex-col md:flex-row items-center justify-center p-4 space-y-5 md:space-x-8">
  <div className="w-full md:w-1/2 h-1/2 md:h-[90vh]">
    <ImageSlides />
  </div>
  <div className="flex flex-col items-start justify-center w-full md:w-1/2 p-4 space-y-4">
    <h1 className=" text-4xl uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 ">
      Next-level <span className="italic font-serif">tools</span> for
      next-level{" "}
      <span className="italic font-serif text-red-600">efficiency</span>.
    </h1>
    <p className="text-2xl mb-8 text-stone-600">
      Manage & share files, track bills-anytime, anywhere
    </p>
    <div className="flex space-x-10 items-center justify-start">
      <Link
        href="/bill"
        className="text-orange-700 text-xl hover:text-orange-800 shadow-sm hover:shadow-md"
      >
        Track Bills
      </Link>
      
    </div>
  </div>
</main>
</> */
}
