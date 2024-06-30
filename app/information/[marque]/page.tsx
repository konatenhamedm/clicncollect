"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Page({ params }: { params: { marque: string } }) {
  const router = useRouter();
  return (
    <div className=" flex pb-4 py-7 mt-[45px] bg-[#F5F5F5] items-center justify-center">
      <div
        className="pt-4  items-center justify-center pb-4"
        style={{ height: "54vh" }}
      >
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg pb-4 items-center justify-center mt-[100px]">
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
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2">
                <dt className="text-lg font-bold text-black sm:col-span-2">
                  Livraison à votre domicile à Abidjan
                </dt>
                <dd className="mt-1 font-extrabold text-xl text-black sm:mt-0 ">
                  12,000 FCFA/KG
                </dd>
              </div>
              <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 sm:col-span-4"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 items-end justify-end">
                  <button
                    // onClick={modal.onOpen}
                    onClick={() => router.push("/important/" + params.marque)}
                    className="bg-gradient-to-r from-[#f1a730] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md  hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                    type="submit"
                  >
                    Continuer
                  </button>
                </dd>
              </div>
              {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Salary</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  $10,000
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  To get social media testimonials like these, keep your
                  customers engaged with your social media accounts by posting
                  regularly yourself
                </dd>
              </div> */}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
