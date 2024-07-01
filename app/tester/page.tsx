"use client";
import MultiStepForm from "@/components/MultiStepForm";
import React from "react";

function Page() {
  return (
    <>
      <div className=" flex pb-4 py-7 mt-[100px]  bg-[#F5F5F5] items-center justify-center">
        <h2 className="sr-only">Steps</h2>

        <MultiStepForm />
      </div>
    </>
  );
}

export default Page;
