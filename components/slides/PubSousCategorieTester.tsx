"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import ItemPubTester from "./ItemPubTester";

const dataR = [
  {
    id: 1,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/WhatsApp Image 2024-06-29 à 14.58.03_de3b710e.jpg",
  },
  {
    id: 2,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/WhatsApp Image 2024-06-29 à 14.58.03_8ce96621.jpg",
  },
  {
    id: 3,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/WhatsApp Image 2024-06-29 à 14.58.03_cffbebc6.jpg",
  },
  {
    id: 4,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    imageUrl: "/PUBLICITAIRE.png",
  },
];

interface PubSousCategorieProps {
  ordre?: number;
}

const PubSousCategorieTester: React.FC<PubSousCategorieProps> = ({ ordre }) => {
  const [datas, setDatas] = useState(dataR);

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

  return (
    <div className="my-0 inset-0" style={{ height: "30vh" }}>
      <div id="custom-controls-gallery" className="relative w-full h-full">
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
          <Slider {...settings}>
            {datas.map((item, key) => (
              <ItemPubTester
                key={key}
                image={item.imageUrl}
                titre={item.title}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PubSousCategorieTester;
