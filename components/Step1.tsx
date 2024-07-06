"use client";
import { useRouter } from "next/navigation";
import React from "react";

// components/Step1.js
const Step1 = () => {
  const router = useRouter();

  return (
    <>
      {/*   <div
        className="pt-4  items-center justify-center pb-4"
        //style={{ height: "54vh" }}
      > */}
      <div className="bg-white max-full shadow overflow-hidden sm:rounded-lg pb-4 items-center justify-center ">
        <div className="px-4 py-5 sm:px-6 items-center justify-center">
          <h3 className="text-xl leading-6 font-bold text-black items-center justify-center text-center">
            Nos tarifs de livraison pour l’envoi de vos colis depuis la France
          </h3>
          {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about user.
            </p> */}
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-lg font-bold text-black sm:col-span-2">
                Retrait dans notre point relais à Abidjan Angré{" "}
              </dt>
              <dd className="mt-1 font-extrabold text-xl text-gray-900 sm:mt-0 ">
                10,000 FCFA/KG
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
              <dt className="text-lg font-bold text-black sm:col-span-2">
                Livraison à votre domicile à Abidjan
              </dt>
              <dd className="mt-1 font-extrabold text-xl text-black sm:mt-0 ">
                12,000 FCFA/KG
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/*  </div> */}
    </>
  );
};

export default Step1;
