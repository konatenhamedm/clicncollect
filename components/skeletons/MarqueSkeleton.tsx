import React from "react";
import { Card, Skeleton } from "@nextui-org/react";
interface SkeletonsSousCategorieProps {
  nombre: number;
}
const Marque: React.FC<SkeletonsSousCategorieProps> = ({ nombre }) => {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {Array(nombre)
        .fill(0)
        .map((el, index) => (
          <div
            key={index}
            className="relative flex flex-col text-gray-700   rounded-xl w-full p-0"
          >
            <div className="relative mx-2 mt-4 overflow-hidden text-gray-700 bg-transparent bg-clip-border rounded-xl h-full">
              <Skeleton className="rounded-xl">
                <div className="h-[150px]  w-full  bg-transparent"></div>
              </Skeleton>
              {/* <img
            onClick={handleClick}
            src={image}
            alt="card-image"
            className="object-contain w-full h-full rounded-xl"
          /> */}
            </div>
          </div>
        ))}
    </div>
  );
};
export default Marque;
