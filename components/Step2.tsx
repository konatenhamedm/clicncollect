"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// components/Step2.js
const Step2 = () => {
  const router = useRouter();

  return (
    <>
      {/*  <div className="pt-4  items-center justify-center pb-4"> */}
      <div className="bg-white max-full shadow overflow-hidden sm:rounded-lg pb-4 items-center justify-center">
        <div className="px-4 py-5 sm:px-6 items-center justify-center">
          <h3 className="text-xl leading-6 font-bold text-red-500 items-center justify-center text-center">
            IMPORTANT A SAVOIR
          </h3>
          {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about user.
            </p> */}
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
              <dt className="text-xl font-bold text-black sm:col-span-2">
                <p className="mt-1 max-w-2xl text-xl text-black justify-center ">
                  Le site ClicnCollect s’occupe{" "}
                  <span className="font-extrabold">
                    {" "}
                    uniquement de la réception de vos colis en France, puis de
                    leur réacheminent à Abidjan afin que vous puissiez les
                    récupérer.
                  </span>{" "}
                  Toutes vos courses sont effectuées auprès de vos marques
                  directement. Notre mettons à votre disposition une adresse
                  afin que vous puissiez vous faire livrer en France par votre
                  marque, puis nous nous occupons du réacheminement à Abidjan.
                  Délai de livraison 1-14j après réception. Une cotation vous
                  est faite après remplissage du formulaire de la page suivante.
                </p>
              </dt>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 ">
              <dt className="text-lg font-bold text-black sm:col-span-2 border-dashed border-2 border-blue-400 px-2">
                <p className="mt-1 max-w-2xl text-xl text-black justify-center text-center">
                  Adresse de Livraison à utiliser sur le site de la marque pour
                  votre livraison en France
                </p>
              </dt>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6  text-center">
              <dt className="text-lg font-bold text-black border-2 px-2">
                <p className="mt-1 max-w-2xl text-lg text-black">
                  Adresse: 54 Rue Riquet,
                  <br /> Code Postal: 75019 Complément d’adresse: Appt 0625 Chez
                  KONE M. <br /> Contact: +33 X XXXXXXXX
                </p>
              </dt>
            </div>
            <div className="bg-white px-2 py-5 sm:grid sm:grid-cols-5 sm:gap-2 sm:px-6 ">
              <dt className="text-lg font-bold text-black ">
                <Image
                  src="/adidas.jpg"
                  alt="logo"
                  width={200}
                  height={100}
                  className="w-[3rem] md:w-[3rem]"
                />
              </dt>
              <dd className="mt-1 font-normal text-lg text-black sm:mt-0 sm:col-span-4">
                <a href="">
                  Cliquez ici pour être redirigé sur le site de la marque
                </a>
              </dd>
            </div>
            <div className="bg-white px-2 py-5 sm:grid sm:grid-cols-5 sm:gap-2 sm:px-6  mt-[-40px]">
              <dt className="text-lg font-bold text-black "></dt>
              <dd className="mt-0 font-normal text-lg text-black sm:mt-0 sm:col-span-4">
                <p className="font-extrabold text-center">
                  Puis revenez sur cette page et cliquez sur continuer
                </p>
              </dd>
            </div>

            {/*  <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 sm:col-span-4"></dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 items-end justify-end">
              <button
                onClick={() => router.push("/formulaire/")}
                className="bg-gradient-to-r from-[#f1a730] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md  hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                type="submit"
              >
                Continuer
              </button>
            </dd>
          </div> */}
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
      {/* </div> */}
    </>
  );
};

export default Step2;
