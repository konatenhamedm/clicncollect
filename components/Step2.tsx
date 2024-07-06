"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

// components/Step2.js
const Step2 = () => {
  const router = useRouter();

  return (
    <div className="bg-white max-w-full shadow-lg overflow-hidden rounded-lg pb-4 flex flex-col items-center justify-center">
      <div className="px-4 py-5 sm:px-6 flex flex-col items-center justify-center">
        <h3 className="text-xl leading-6 font-bold text-red-500 text-center">
          IMPORTANT A SAVOIR
        </h3>
      </div>
      <div className="border-t border-gray-200 w-full">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt className="text-xl font-bold text-black sm:col-span-1">
              <p className="mt-1 max-w-2xl text-xl text-black text-center">
                Le site ClicnCollect s’occupe{" "}
                <span className="font-extrabold">
                  uniquement de la réception de vos colis en France, puis de
                  leur réacheminent à Abidjan afin que vous puissiez les
                  récupérer.
                </span>{" "}
                Toutes vos courses sont effectuées auprès de vos marques
                directement. Notre mettons à votre disposition une adresse afin
                que vous puissiez vous faire livrer en France par votre marque,
                puis nous nous occupons du réacheminement à Abidjan. Délai de
                livraison 1-14j après réception. Une cotation vous est faite
                après remplissage du formulaire de la page suivante.
              </p>
            </dt>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dt className="text-lg font-bold text-black sm:col-span-1 border-dashed border-2 border-blue-400 px-2">
              <p className="mt-1 max-w-2xl text-xl text-black text-center">
                Adresse de Livraison à utiliser sur le site de la marque pour
                votre livraison en France
              </p>
            </dt>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 text-center">
            <dt className="text-lg font-bold text-black border-2 px-2">
              <p className="mt-1 max-w-2xl text-lg text-black">
                Adresse: 54 Rue Riquet,
                <br /> Code Postal: 75019 Complément d’adresse: Appt 0625 Chez
                KONE M. <br /> Contact: +33 X XXXXXXXX
              </p>
            </dt>
          </div>
          <div className="bg-white px-2 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <div className="flex items-center justify-center">
              <Image
                src="/adidas.jpg"
                alt="logo"
                width={200}
                height={100}
                className="w-[3rem] md:w-[3rem]"
              />
            </div>
            <dd className="mt-1 font-normal text-lg text-black text-center">
              <a href="" className="text-blue-500 underline">
                Cliquez ici pour être redirigé sur le site de la marque
              </a>
            </dd>
          </div>
          <div className="bg-white px-2 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
            <dd className="font-extrabold text-center text-lg text-black">
              Puis revenez sur cette page et cliquez sur continuer
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Step2;
