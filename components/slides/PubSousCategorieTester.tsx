"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ItemPubTester from "./ItemPubTester";
import { Baniere } from "@/modeles/Baniere";
import { axiosAuthapi, BASE_SITE } from "@/lib/axios";
import SkeletonsPublicite from "../skeletons/SkeletonsPublicite";

const dataR = [
  /*  {
    id: 1,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/banniere4.jpg",
  }, */
  /*  {
    id: 2,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/banniere3.jpg",
  }, */
  {
    id: 3,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/bannp.jpg",
  },
  /* {
    id: 4,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/banniere1.jpg",
  }, */
];

interface PubSousCategorieProps {
  ordre?: number;
}

const PubSousCategorieTester: React.FC<PubSousCategorieProps> = ({ ordre }) => {
  const [datas, setDatas] = useState(dataR);
  const [baniere, setBaniere] = React.useState<Baniere[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 6000,
    pauseOnHover: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    //setIsLoading(true);
    axiosAuthapi
      .get("/baniere")
      .then((res) => {
        setBaniere(res.data.data);
        setIsLoading(false);

        // console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="my-0 inset-0" /* style={{ height: "30vh" }} */>
      <div
        id="custom-controls-gallery"
        className="relative w-full md:h-56 h-32"
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
          />
          {isLoading ? (
            <SkeletonsPublicite nombre={1} />
          ) : (
            <Slider {...settings}>
              {baniere.map((item: Baniere, key) => (
                <ItemPubTester
                  key={key}
                  image={`${BASE_SITE}${item.photo.nomComplet}`}
                  titre={item.libelle}
                />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default PubSousCategorieTester;
