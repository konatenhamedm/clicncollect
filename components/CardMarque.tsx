"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface CardMarqueProps {
  id: number;
  nom?: string;
  image?: string;
  lien: string;
}

const CardMarque: React.FC<CardMarqueProps> = ({ id, nom, image, lien }) => {
  const router = useRouter();
  const handleClick = () => {
    //window.open(lien, "_blank");
    router.push(`/information/${nom}?lien=${lien}&image=${image}`);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="bg-white rounded-xl border border-gray-300 md:p-5 p-2 cursor-pointer hover:-translate-y-2 transition-all relative"
      >
        <div
          onClick={handleClick}
          className="w-full h-full  flex items-center justify-center rounded-full cursor-pointer absolute top-0 bg-transparent right-0"
        ></div>

        <div
          onClick={handleClick}
          className="h-full md:h-[110px]  overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-1 mb-1"
        >
          <img
            onClick={handleClick}
            width={200}
            height={200}
            src={image}
            alt="Product 1"
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <h3 className="text-lg font-extrabold text-gray-800"></h3>
        </div>
      </div>

      {/* <div
        onClick={handleClick}
        className="relative flex flex-col text-gray-700 md:h-[150px] bg-white shadow-md bg-clip-border rounded-md w-full cursor-pointer hover:-translate-y-2 transition-all pb-4"
      >
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-full">
          <img
            onClick={handleClick}
            src={image}
            alt="card-image"
            className="object-center w-full h-full rounded-xl"
          />
        </div>
     
      </div> */}
    </>
  );
};

export default CardMarque;
