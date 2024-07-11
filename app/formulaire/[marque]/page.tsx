"use client";
import React, { ReactElement, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useFormikContext, Formik, useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import FormInput from "@/components/formulaire/FormInput";
import { useRouter, useSearchParams } from "next/navigation";
import * as Yup from "yup";
import FormArea from "@/components/formulaire/formArea";
import FormSelect from "@/components/formulaire/formSelect";
import Modal from "@/components/modals/Modal";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenoms: "",
      numero: "",
      email: "",
      contact1: "",
      contact2: "",
      montant: "",
      description: "",
      option: "",
      adresseLivraison: "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Le champs nom est requis"),
      numero: Yup.string().required("Le champs numero de commande  est requis"),
      prenoms: Yup.string().required("Le champs prénoms est requis"),
      email: Yup.string().required("Le champs email est requis"),
      contact1: Yup.string().required("Le champs contact 1 est requis"),
      option: Yup.string().required("Le champs option de livraison est requis"),
    }),
    onSubmit: async (values) => {
      const content = (
        <>
          <div
            role="alert"
            className="relative flex w-full px-4 py-4 text-base text-gray-900 rounded-lg font-regular bg-gray-900/10"
            style={{ opacity: 1 }}
          >
            <div className="shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-red-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="ml-3 mr-12">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
                Attention ce numéro NNI est inexistant:
              </p>
              <ul className="mt-2 ml-2 list-disc list-inside">
                <li>Veillez nous fournir un NNI valide</li>
                <li>Il s'agit d'un numéro de 11 chiffres</li>
                <li>Merci !!!</li>
              </ul>
            </div>
          </div>
        </>
      );

      openModal(content, "Attention", true, "lg", false, "", false);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, handleBlur } =
    formik;

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("dd");
  const [size, setSize] = useState("3xl");
  const [gradient, setGradient] = useState(false);
  const [closeExiste, setCloseExiste] = useState(true);
  const [label, setLabel] = useState("");
  const [modalContent, setModalContent] = useState<React.ReactElement>();
  const [img, setImg] = useState(null);
  const [errorServeur, setErrorServeur] = useState(false);

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

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
    setModalContent(<div></div>);
  };

  return (
    <>
      <div className="flex pb-4 py-12 mt-[45px] min-h-[80vh] bg-[#F5F5F5] items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div className="bg-white max-w-3xl shadow overflow-hidden w-full mx-4 lg:mx-0 pb-4 flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col w-full px-4">
              <div className="px-4 py-5 sm:px-6 text-center">
                <h3 className="text-xl leading-6 font-bold text-black">
                  Récapitulatif de votre commande
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Renseignez les informations pour vous faire livrer par
                  ClicnCollect à Abidjan
                </p>
              </div>
              <div className="border-t border-gray-200 w-full">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:px-6 w-full">
                    <label
                      htmlFor="nom"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.nom && errors.nom ? "text-red-400" : ""
                      }`}
                    >
                      {touched.nom && errors.nom ? errors.nom : "Nom *"}
                    </label>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="nom"
                      placeholder="Inscrivez le nom utilisé lors de l’achat sur le site"
                      existe={false}
                      longeur={255}
                      message={errors.nom}
                    />

                    <label
                      htmlFor="prenoms"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.prenoms && errors.prenoms ? "text-red-400" : ""
                      }`}
                    >
                      {touched.prenoms && errors.prenoms
                        ? errors.prenoms
                        : "Prénoms *"}
                    </label>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="prenoms"
                      placeholder="Inscrivez le prénoms utilisé lors de l’achat sur le site"
                      existe={false}
                      longeur={255}
                      message={errors.prenoms}
                    />
                    <label
                      htmlFor="email"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.email && errors.email ? "text-red-400" : ""
                      }`}
                    >
                      {touched.email && errors.email ? errors.email : "Email *"}
                    </label>
                    <FormInput
                      formik={formik}
                      type="email"
                      name="email"
                      placeholder=""
                      existe={false}
                      longeur={255}
                      message={errors.email}
                    />
                    <label
                      htmlFor="numero"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.numero && errors.numero ? "text-red-400" : ""
                      }`}
                    >
                      {touched.numero && errors.numero
                        ? errors.numero
                        : "Numéro de commande * "}
                    </label>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="numero"
                      placeholder=""
                      existe={false}
                      longeur={255}
                      message={errors.numero}
                    />
                    <label
                      htmlFor="montant"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.montant && errors.montant ? "text-red-400" : ""
                      }`}
                    >
                      {touched.montant && errors.montant
                        ? errors.montant
                        : "Montant total de commande "}
                    </label>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="montant"
                      placeholder=""
                      existe={false}
                      longeur={255}
                      message={errors.montant}
                    />
                    <label
                      htmlFor="description"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.description && errors.description
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {touched.description && errors.description
                        ? errors.description
                        : "Description "}
                    </label>
                    <FormArea
                      formik={formik}
                      type="text"
                      name="description"
                      placeholder="Marque, quantité…"
                      existe={false}
                      longeur={255}
                      message={errors.description}
                    />
                    <label
                      htmlFor="contact1"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.contact1 && errors.contact1
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {touched.contact1 && errors.contact1
                        ? errors.contact1
                        : "Contact 1*"}
                    </label>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="contact1"
                      placeholder="xx xx xx xx xx"
                      existe={true}
                      longeur={10}
                      message={errors.contact1}
                    />
                    <label
                      htmlFor="contact2"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.contact2 && errors.contact2
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {touched.contact2 && errors.contact2
                        ? errors.contact2
                        : "Contact 2"}
                    </label>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="contact2"
                      placeholder="xx xx xx xx xx"
                      existe={true}
                      longeur={10}
                      message={errors.contact2}
                    />
                  </div>
                </dl>
              </div>
              <div className="px-4 py-0 sm:px-6 text-center">
                <h4 className="text-xl leading-6 font-bold text-black">
                  Options de livraison à Abidjan
                </h4>
                <br />
              </div>
              <div className="border-t border-gray-200 w-full">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:px-6 w-full">
                    <label
                      htmlFor="option"
                      className={`block font-latoBold text-sm pb-2 ${
                        touched.option && errors.option ? "" : ""
                      }`}
                    >
                      "Option de livraison*"
                    </label>
                    <select
                      className="bg-white flex w-full text-black text-sm border-2 border-gray placeholder-custom-placeholder placeholder-gray rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                      name="option"
                      onChange={(e) => {
                        handleChange(e);
                        setSelectedOption(e.target.value);
                      }}
                      value={values.option}
                      onBlur={handleBlur}
                    >
                      {/*  <option key="0" value="option0">
                    Option de livraison
                    </option> */}
                      <option key="1" value="option1">
                        Retrait dans notre point relais à Cocody Angré
                      </option>
                      <option key="2" value="option2">
                        Livraison à votre domicile
                      </option>
                    </select>
                    {selectedOption === "option1" && (
                      <h3 className="text-xl">
                        Nous sommes ouverts du lundi au samedi de 9h à 18h
                      </h3>
                    )}
                    {selectedOption === "option2" && (
                      <>
                        <label
                          htmlFor="adresseLivraison"
                          className={`block font-latoBold text-sm pb-2 ${
                            touched.adresseLivraison && errors.adresseLivraison
                              ? "text-red-400"
                              : ""
                          }`}
                        >
                          {touched.adresseLivraison && errors.adresseLivraison
                            ? errors.adresseLivraison
                            : "Adresse de livraison*"}
                        </label>
                        <FormInput
                          formik={formik}
                          type="text"
                          name="adresseLivraison"
                          placeholder="Veuillez saisir votre adresse de livraison"
                          existe={false}
                          longeur={255}
                          message={errors.adresseLivraison}
                        />
                      </>
                    )}
                  </div>
                </dl>
              </div>
              <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 sm:col-span-4"></dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 items-end justify-end">
                  <button
                    /*  onClick={() => router.push("/resumer")} */
                    className="bg-[#f1a730] text-white font-normal py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                    type="submit"
                  >
                    Soumettre
                  </button>
                </dd>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={closeModal}
        content={<>{modalContent}</>}
        size={size}
        title={title}
        actionLabel={label}
        onCloseExiste={closeExiste}
        gradient={gradient}
        errorServeur={errorServeur}
      />
    </>
  );
};

export default Page;
