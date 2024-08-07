"use client";
import { useRouter } from "next/navigation";
import React from "react";

// components/Step1.js
const Step1 = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full">
        <div className="bg-white shadow-md overflow-hidden ">
          <div className="px-7 py-8 ">
            <p className="text-[12px] px-4 font-normal text-justify text-black text-sm ttext-center  md:text-2xl">
              Nos tarifs de livraison pour l’envoi de vos colis de Paris à
              Abidjan
            </p>
          </div>
          <div className="border-t border-gray-200 px-4">
            <dl>
              <div className="bg-gray-50 px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="text-lg font-normal text-black sm:col-span-2">
                  Retrait dans notre point relais à Abidjan Angré
                </dt>
                <dd className="text-xl font-extrabold text-gray-900">
                  {/* 10,000 FCFA/KG */}{" "}
                  <a href="#" className="underline text-blue-400">
                    Voir devis
                  </a>
                </dd>
              </div>
              <div className="bg-white px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b-2">
                <dt className="text-lg font-normal text-black sm:col-span-2">
                  Livraison à votre domicile à Abidjan
                </dt>
                <dd className="text-xl font-extrabold text-black">
                  {/* 12,000 FCFA/KG */}
                  <a href="#" className="underline text-blue-400">
                    Voir devis
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
