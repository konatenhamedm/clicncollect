"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Page({ params }: { params: { marque: string } }) {
  const router = useRouter();
  return (
    <div className="flex pb-4 py-12 mt-[45px] min-h-[70vh] items-center justify-center bg-[#F5F5F5]">
      <div className="w-full max-w-4xl px-4">
        <div className="bg-white shadow-md overflow-hidden rounded-lg">
          <div className="px-7 py-8 ">
            <h3 className="text-[8px] font-normal text-black md:text-2xl">
              Nos tarifs de livraison pour l’envoi de vos colis de Paris à
              Abidjan
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <dt className="text-lg font-normal text-black sm:col-span-2">
                  Retrait dans notre point relais à Abidjan Angré
                </dt>
                <dd className="text-xl font-extrabold text-gray-900">
                  10,000 FCFA/KG
                </dd>
              </div>
              <div className="bg-white px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4 border-b-2">
                <dt className="text-lg font-normal text-black sm:col-span-2">
                  Livraison à votre domicile à Abidjan
                </dt>
                <dd className="text-xl font-extrabold text-black">
                  12,000 FCFA/KG
                </dd>
              </div>
              <div className="bg-white px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <dt className="text-sm font-medium text-gray-500"></dt>
                <dd className="mt-4 sm:mt-0">
                  <button
                    onClick={() => router.push("/important/" + params.marque)}
                    className=" bg-[#f1a730] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                    type="submit"
                  >
                    Continuer
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
