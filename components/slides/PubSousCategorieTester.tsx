"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ItemPubTester from "./ItemPubTester";
import SkeletonsPublicite from "../skeletons/SkeletonsPublicite";

/* type Publicite = {
  id: number;
  title: string;
  text: string;
  imageUrl: string;
  lien: string;
}; */

const dataR = [
  {
    id: 1,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl:
      "https://marketingreport.one/Article%20Images/Key%20Industy%20Images/e_commerce_Marketing_Report.jpg",
  },
  {
    id: 2,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "https://www.export.org.uk/media/cvb9zpgu/ECommerce.jpg",
  },
  {
    id: 3,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl: "https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg",
  },
  {
    id: 4,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl:
      "https://www.etowline.fr/wp-content/uploads/creer-un-site-ecommerce-gratuit.webp",
  },
  {
    id: 5,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2021/07/28120036/Boost-Your-eCommerce-Business.jpg",
  },
  {
    id: 6,
    title: "Swiper Carousel Example",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
    imageUrl:
      "https://www.araoo.fr/media/images/beautiful-silhouette-image-1024x5.width-800.format-webp.webp",
  },
];

interface PubSousCategorieProps {
  ordre?: number;
}

const PubSousCategorieTester: React.FC<PubSousCategorieProps> = ({ ordre }) => {
  const [datas, setDatas] = useState(dataR);

  const [isLoading, setLoading] = useState(true);
  const [isLoading2, setLoading2] = useState(true);

  const settings = {
    dots: true,
    arrows: true,
    Infinite: true,
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
          /* slidesToScroll: 3,
          infinite: true,*/
          // dots: true,
        },
      },
    ],
  };

  return (
    <div className="my-0 inset-0">
      <div id="custom-controls-gallery" className="relative w-full ">
        <div className="relative w-full  overflow-hidden rounded-lg  ">
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
          <>
            {/* {isLoading ? (oo
                  <SkeletonsPublicite nombre={1} />
                ) : ( */}
            {/* <> */}
            <Slider {...settings}>
              {dataR.map((item, key) => (
                <ItemPubTester
                  key={key}
                  image={item.imageUrl}
                  titre={item.title}
                ></ItemPubTester>
              ))}
            </Slider>
            {/* </> */}
            {/*  )} */}
          </>
        </div>
      </div>
    </div>
  );
};

export default PubSousCategorieTester;
