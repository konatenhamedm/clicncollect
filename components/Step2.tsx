"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactElement, useState } from "react";
import Modal from "./modals/Modal";

interface Step2Props {
  image: undefined | string;
  lien: undefined | string;
}
// components/Step2.js

const Step2: React.FC<Step2Props> = ({ image, lien }) => {
  const router = useRouter();

  const [etat, setEtat] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactElement>();
  const [img, setImg] = useState(null);
  const [errorServeur, setErrorServeur] = useState(false);

  const openModal = (
    content: ReactElement,
    title: string,
    existe: boolean,
    size: string,
    gradient: boolean,
    label: string,
    errorServeur: boolean
  ) => {
    setModalContent(content);
    setTitle(title);
    setCloseExiste(existe);
    setSize(size);
    setGradient(gradient);
    setLabel(label);
    setShowModal(true);
    setErrorServeur(errorServeur);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white max-w-screen-md shadow overflow-hidden  pb-0 items-center justify-center">
        <div className="px-4  py-5 sm:px-6 items-center justify-center">
          <h3 className="text-xl leading-6 font-normal text-red-500 items-center justify-center text-center">
            IMPORTANT A SAVOIR
          </h3>
          {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about user.
            </p> */}
        </div>
        <div className="border-t border-gray-200 px-4">
          <dl>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
              <dt className="text-xl  font-normal px-0 text-black sm:col-span-2">
                <p className="mt-1  text-sm sm:text-xl text-black justify-center text-justify">
                  {/*   Le site ClicnCollect s’occupe{" "}
                  <span className="font-normal">
                    {" "}
                    uniquement de la réception de vos colis en France, puis de
                    leur réacheminent à Abidjan afin que vous puissiez les
                    récupérer.
                  </span>{" "}
                  Vous effectuez vos achats directement auprès de vos marques.
                  Nous mettons à votre disposition notre adresse de Paris afin
                  que vos colis y soient livrés. Apres réception de vos colis à
                  notre adresse de Paris, nous nous occupons de leur
                  réacheminement à Abidjan. Délai de livraison à Abidjan 1-7j
                  après réception. */}
                  Vous faites le bon choix en achetant sur ClicnCollect. Nous
                  vous permettons de faire votre shopping directement sur le
                  site de vos marques préférées en France et de vous faire
                  livrer à Abidjan par Chronopost ou DHL à des tarifs réduits et
                  une garantie lors du transport. Vous procéderez au paiement
                  des frais de livraison une fois votre shopping terminé.
                  Veuillez consulter la grille de prix ci-dessous à
                  titre d’information. Délai de livraison 1-7 jours ouvrés.{" "}
                  <br></br>
                  <br></br>
                  <span className="mt-4">
                    Attention, en cas de retour les frais sont
                    entièrement à vore charge.
                  </span>
                </p>
              </dt>
            </div>
            {/*  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 ">
              <dt className="text-lg font-bold text-black sm:col-span-2 border-dashed border-2 border-blue-400 px-2">
                <p className="mt-1 max-w-2xl text-xl text-black justify-center text-center">
                  Veuillez saisir notre adresse ci-dessous comme adresse de
                  livraison à Paris.{" "}
                </p>
              </dt>
            </div> */}
            {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6  text-center">
              <dt className="text-lg font-bold text-black border-2 px-2">
                <p className="mt-1 max-w-2xl text-lg text-black">
                  Code Postal: 75019,
                  <br /> Adresse: 54 Rue Riquet <br /> Complément d’adresse:
                  Appt 0625 Chez CLICNCOLLECT <br /> Contact: +33 6 29 77 03 51
                </p>
              </dt>
            </div> */}
            <div className="px-0 py-5 sm:px-6 items-center justify-center">
              <h6 className="text-md leading-6   font-normal text-black items-center justify-center text-center">
                Options de livraison{" "}
                <span className="">
                  {/*  {" "}
                  <br /> */}{" "}
                  {/*  (entre 1 et 7 jours) */}
                </span>
              </h6>
              {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Details and informations about user.
            </p> */}
            </div>
            <div className="border-t border-gray-200 px-4">
              <dl>
                <div className="bg-white px-0 py-5 grid grid-cols-3 sm:grid-cols-3 gap-4">
                  <dt className="sm:text-lg text-sm font-normal text-black sm:col-span-2 col-span-2">
                    Retrait dans notre point relais à Abidjan riviera 2
                  </dt>
                  <dd className="sm:text-xl text-sm font-extrabold text-gray-900">
                    {/* 10,000 FCFA/KG */}{" "}
                    <a href="#" className="underline text-blue-400">
                      Voir devis
                    </a>
                  </dd>
                </div>
                <div className="bg-white px-0 py-0 grid grid-cols-3 sm:grid-cols-3 gap-4 ">
                  <dt className="sm:text-lg text-sm font-normal text-black sm:col-span-2 col-span-2">
                    Livraison à votre domicile
                  </dt>
                  <dd className="sm:text-xl text-sm font-extrabold text-black">
                    {/* 12,000 FCFA/KG */}
                    <a href="#" className="underline text-blue-400">
                      Voir devis
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="bg-white px-2 py-5 grid grid-cols-7 sm:grid-cols-5 sm:gap-2 sm:px-6 ">
              <dt className="text-lg  px-4  font-normal text-black sm:col-span-1 col-span-3">
                <img
                  src={image} // Correction ici
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-full h-full md:w-md"
                />
              </dt>
              <dd className="mt-1 px-2 font-normal sm:text-lg text-sm text-black sm:mt-0 sm:col-span-4 col-span-4">
                <a
                  href={lien}
                  /*  onClick={() => {
                    if (etat === true) {
                      router.push("/adidas");
                    } else {
                      openModal(
                        <>
                          {" "}
                          Veuillez cocher le champ obligatoire ci-dessous pour
                          continuer
                        </>,
                        "",
                        true,
                        "lg",
                        false,
                        "J'ai compris",
                        false
                      );
                      
                    }
                  }} */
                  className="underline text-blue-400"
                >
                  Cliquez {/* <span> */}ici{/* </span> */} pour être redirigé
                  sur le site de la marque
                </a>
              </dd>
            </div>
            <div className="bg-white px-0 py-5  sm:grid sm:grid-cols-5 sm:gap-2 sm:px-6  mt-[-7px] md:mt-[-40px]">
              <dt className="text-lg font-normal text-black "></dt>
              <dd className="font-normal sm:text-lg text-sm  text-black sm:mt-0 sm:col-span-4 mt-[12px]">
                {/* <p className="font-extranormal">
                  <input
                    onClick={() => {
                      setEtat(true);
                    }}
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <span className="px-2 text-[10px] sm:text-sm">
                    En poursuivant, je reconnais avoir bien pris connaissance de
                    la note d'information ci-dessus
                  </span>
                </p> */}
              </dd>
            </div>
            {/* <div className="bg-white px-6 py-5  sm:grid sm:grid-cols-5 sm:gap-2 sm:px-6  mt-[-40px] md:mt-[-80px]">
              <dt className="text-lg font-normal text-black "></dt>
              <dd className="font-normal sm:text-lg text-sm  text-black sm:mt-0 sm:col-span-4">
                <p className="font-extranormal">
                  Puis revenez sur cette page et cliquez sur continuer
                </p>
              </dd>
            </div> */}
          </dl>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={closeModal}
        content={
          <>
            <h3>
              Veuillez cocher le champ obligatoire ci-dessous pour continuer
            </h3>{" "}
          </>
        }
        size="lg"
        title=""
        actionLabel={label}
        onCloseExiste={true}
        gradient={gradient}
        errorServeur={errorServeur}
      />
    </>
  );
};

export default Step2;
