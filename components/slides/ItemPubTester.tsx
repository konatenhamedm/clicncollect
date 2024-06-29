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
    <div className="w-full flex flex-col h-[155px] overflow-hidden rounded-lg md:h-[455px] cursor-pointer relative">
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
    </div>
  );
};

export default ItemPubTester;
