"use client";
import FormStep from "@/components/formulaire/formStep";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Page({ params }: { params: { marque: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const lien = searchParams.get("lien")?.toString();
  const image = searchParams.get("image")?.toString();

  return (
    <div className=" w-full flex  py-7 mt-[100px]  bg-white items-center justify-center pb-[10rem]">
      <FormStep nom={params.marque} image={image} lien={lien} />
      {/* 
      <h1>gghjghghg</h1> pp*/}
    </div>
  );
}

export default Page;
