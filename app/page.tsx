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
    <div className=" py-7 mt-[45px] bg-white">
      <Tester />

      <div className="flex items-center   bg-[#F5F5F5] rounded border-4 border-[#EC9108]">
        <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
          {/* <svg
            className="w-6 h-6 fill-current text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg> */}

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxX2VuzScK-qbyxuFlV_XlhI18bAwS7XQf6TxND4hbdTkhf9h7ZwujSUxiLLtHnU61y6k&usqp=CAU"
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
        <div className="flex-grow flex flex-col ml-4">
          {/*  <span className="text-xl font-bold">$8,430</span> */}
          <div className="flex items-center justify-between">
            <span className="text-black text-3xl">
              Achetez sur le site de vos marques en France et faites vous livrer
              à Abidjan
            </span>
            <span className="text-green-500 text-sm font-semibold ml-2"></span>
          </div>
        </div>
      </div>
      <Marque />
    </div>
  );
}
