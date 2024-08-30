import { Skeleton } from "@nextui-org/react";
import React from "react";

interface SkeletonsPubliciteProps {
  nombre: number;
}

const SkeletonsPublicite: React.FC<SkeletonsPubliciteProps> = ({ nombre }) => {
  return (
    <div className="relative w-full">
      {Array(nombre)
        .fill(0)
        .map((el, index) => (
          <div
            key={index}
            className=" relative w-full h-[255px] overflow-hidden rounded-lg md:h-[255px]"
          >
            <Skeleton className="w-full h-[255px]">
              <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-white"></div>
            </Skeleton>
          </div>
        ))}
    </div>
  );
};

export default SkeletonsPublicite;
