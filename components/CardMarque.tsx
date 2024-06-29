"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface CardMarqueProps {
  nom?: string;
  image?: string;
  lien: string;
}

const CardMarque: React.FC<CardMarqueProps> = ({ nom, image, lien }) => {
  const router = useRouter();
  const handleClick = () => {
    window.open(lien, "_blank");
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="bg-white rounded-xl border border-gray-700 p-5 cursor-pointer hover:-translate-y-2 transition-all relative"
      >
        <div
          onClick={handleClick}
          className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-0 bg-transparent right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        <div className="w-6/6 h-[110px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
          <Image
            width={200}
            height={200}
            src={"/" + nom + ".jpg"}
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-gray-800">
            {/* Sole Elegance */}
          </h3>
          {/* <p className="text-gray-600 text-sm mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <h4 className="text-lg text-gray-800 font-bold mt-4">$10</h4> */}
        </div>
      </div>
    </>
  );
};

export default CardMarque;
