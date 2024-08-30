//import Slider from "@/components/slides/Slider";
"use client";
import Image from "next/image";
import MultiStepForm from "@/components/MultiStepForm";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import Tester from "@/components/Tester";
import Marque from "@/components/Marque";
import React, { useEffect, useRef } from "react";
import { useSearch } from "../components/context/SearchContext";

export default function Home() {
  const { setSearchTerm } = useSearch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const settings = {
    arrows: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    /*   autoplay: true,
    autoplaySpeed: 2000, */

    nextArrow: <NextArrow onClick={() => console.log("next")} />,
    prevArrow: <PrevArrow onClick={() => console.log("next")} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          /* slidesToScroll: 3,
        infinite: true,
        dots: true, */
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          /*  slidesToScroll: 2,
        initialSlide: 2, */
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          /*  slidesToScroll: 1, */
        },
      },
    ],

    /*   afterChange: (current) => {
      setProgress((100 / (data.length - slideToShow + 1)) * (current + 1));
      console.log(slideToShow);
    }, */
  };
  return (
    <div className=" py-7 mt-[45px] bg-white">
      <Tester />

      <div className="flex items-center bg-white rounded border border-[#EC9108] ">
        <div className="flex-grow flex flex-col ml-4 p-2">
          <div className="flex items-center justify-between">
            <span className="text-black font-normal text-[10px] md:text-2xl">
              Avec ClicnCollect, achetez sur le site de vos marques en France et
              faites vous livrer à Abidjan
            </span>
            <span className="text-green-500 text-sm font-semibold ml-2"></span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto py-4 md:hidden  ">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-sm bg-white overflow-hidden border border-gray-300">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            onChange={handleSearchChange}
            placeholder="Recherche.."
          />
        </div>
      </div>

      <Marque />
    </div>
  );
}
