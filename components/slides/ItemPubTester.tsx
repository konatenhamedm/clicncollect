"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

interface ItemProps {
  image: string;
  titre?: string;
  desc?: string;
  bouton?: string;
  lien?: string;
}

const ItemPubTester: React.FC<ItemProps> = ({
  image,
  titre,
  desc,
  bouton,
  lien,
}) => {
  return (
    <div className="w-full flex flex-col h-[155px] overflow-hidden rounded-lg md:h-[455px] cursor-pointer ">
      <div className="z-20 relative text-white container ">
        {/*  <p className="leading-normal mb-1 mt-5"></p>
        <Button color="primary" variant="ghost">
          <a href={lien ? lien : "#"} className="text-white " target="_blank">
            {bouton ? bouton : "Visiter le lien"}
          </a>
        </Button> */}
      </div>
      <div className="absolute  h-auto z-10 w-full">
        <Image
          height={450}
          width={100}
          src={image}
          alt=""
          quality={100}
          layout="responsive"
          objectFit="contain"
          priority
          className="z-0 w-full  h-full object-contain"
        />
      </div>
      <div className="z-20 relative text-white container ">
        <p className="leading-normal mb-1 mt-[10rem]"></p>
        {/*  <Button
          className="text-tiny w-[143px]"
          color="primary"
          radius="full"
          size="sm"
        >
          <a href={lien ? lien : "#"} className="text-white " target="_blank">
            {bouton ? bouton : "Visiter le lien"}
          </a>
        </Button> */}

        {/* <Button color="primary" variant="ghost">
          <a href={lien ? lien : "#"} className="text-white " target="_blank">
            {bouton ? bouton : "Visiter le lien"}
          </a>
        </Button> */}
      </div>
    </div>
  );
};

export default ItemPubTester;
