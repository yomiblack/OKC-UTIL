"use client";
import justiceScaleImg from "@/app/assets/justiceScale.jpg";
import manualFilesImg from "@/app/assets/manualFiles.jpg";
import moneyTax from "@/app/assets/moneyTax.jpg";
import remoteWorkImg from "@/app/assets/remoteWork.jpg";
import teamWorkImg from "@/app/assets/teamWork.jpg";
import wrappedDollarImg from "@/app/assets/wrappedDollar.jpg";
// import workHardImg from "@/app/assets/workHard.jpg";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  { image: justiceScaleImg, alt: "Justice scale" },
  { image: manualFilesImg, alt: "manual files" },
  { image: moneyTax, alt: "money on tax document" },
  { image: remoteWorkImg, alt: "remote work setup" },
  { image: teamWorkImg, alt: "hands join together" },
  { image: wrappedDollarImg, alt: "dollar wrapped with rubber" },
  // { image: workHardImg, alt: "work hard written on laptop screen" },
];

export default function ImageSlides() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeClass =
    "opacity-100 scale-100 transition-opacity duration-1000 ease-in-out rounded-lg object-contain";
  const inactiveClass =
    "opacity-0 scale-95 transition-opacity duration-1000 ease-in-out";

  return (
    <div className="relative h-full">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={index === imageIndex ? activeClass : inactiveClass}
          fill
          // sizes="10"
        />
      ))}
    </div>
  );
}
