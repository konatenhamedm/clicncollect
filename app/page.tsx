//import Slider from "@/components/slides/Slider";
import Image from "next/image";
import MultiStepForm from "@/components/MultiStepForm";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import Tester from "@/components/Tester";
import Marque from "@/components/Marque";

export default function Home() {
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
    <div className=" py-7 mt-[45px] bg-[#F5F5F5]">
      <Tester />

      <div className="flex items-center bg-[#F5F5F5] rounded border border-[#EC9108]">
        <div className="flex flex-shrink-0 items-center justify-center bg-[#F5F5F5] h-10 md:h-12 w-16 rounded">
          <img
            src="/WhatsApp_Image_2024-06-29_à_12.01.09_a6f8fc8c-removebg-preview.png"
            alt="Picture of the author"
            width={40}
            height={50}
          />
        </div>
        <div className="flex-grow flex flex-col ml-0">
          <div className="flex items-center justify-between">
            <p>
              <span className="text-transparent text-[11px] md:text-2xl bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Achetez sur le site de vos marques en France et{" "}
              </span>
              <span className="text-transparent text-[11px] md:text-2xl bg-clip-text bg-gradient-to-r to-[#75d4c3] from-[#f1a730] mt-[-2rem]">
                faites vous livrer à Abidjan par ClicnCollect
              </span>
            </p>
            <span className="text-green-500 text-sm font-semibold ml-2"></span>
          </div>
        </div>
      </div>

      <Marque />
    </div>
  );
}
