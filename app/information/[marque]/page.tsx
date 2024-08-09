import FormStep from "@/components/formulaire/formStep";
//import { useRouter } from "next/navigation";
import React from "react";

function Page({ params }: { params: { marque: string } }) {
  //const router = useRouter();
  return (
    <div className=" w-full flex  py-7 mt-[100px]  bg-[#F5F5F5] items-center justify-center pb-[10rem]">
      <FormStep />
    </div>
  );
}

export default Page;
