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
    /*  <div className="w-full flex flex-col h-[155px] overflow-hidden rounded-lg md:h-[455px] cursor-pointer relative">
      <div className="z-20 relative text-white container">
        <p className="leading-normal mb-1 mt-5">{desc}</p>
        <Button color="primary" variant="ghost">
          <a href={lien ? lien : "#"} className="text-white" target="_blank">
            {bouton ? bouton : "Visiter le lien"}
          </a>
        </Button>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src={image}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0"
        />
      </div>
    </div> */

    <div className="w-full flex flex-col h-[125px] overflow-hidden rounded-lg md:h-[455px] cursor-pointer relative">
      <div className="z-20 relative text-white container">
        {/*  <p className="leading-normal mb-1 mt-5"></p>
      <Button color="primary" variant="ghost">
        <a href={lien ? lien : "#"} className="text-white " target="_blank">
          {bouton ? bouton : "Visiter le lien"}
        </a>
      </Button> */}
      </div>
      <div className="absolute inset-0 z-10 w-full">
        {/*   <img src={image} alt=""  /> */}
        {/*  <img
          style={{ objectFit: "cover" }}
          src={image}
          alt=""
          // layout="fill"
          //objectFit="cover"
          //quality={100}
          //priority
          className="w-full h-full object-cover brightness-125 md:mt-[-100px] mt-0"
        /> */}
        <img
          style={{ objectFit: "cover" }}
          width={292}
          height={292}
          src={image}
          //  quality={100}
          alt=""
          className="w-full h-full object-cover brightness-125 contrast-125 md:mt-[-100px] mt-0"
        />
      </div>
      <div className="z-20 relative text-white container flex flex-col justify-center items-start h-full">
        <p className="leading-normal mb-1"></p>
        {/* <Button
          className="text-tiny w-[143px] opacity-75"
          color="primary"
          radius="full"
          size="sm"
        >
          <a href={lien ? lien : "#"} className="text-white" target="_blank">
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
