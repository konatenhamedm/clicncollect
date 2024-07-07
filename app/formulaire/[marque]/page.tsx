"use client";
import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useFormikContext, Formik, useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import FormInput from "@/components/formulaire/FormInput";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import FormArea from "@/components/formulaire/formArea";
import FormSelect from "@/components/formulaire/formSelect";

const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

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
      prenoms: Yup.string().required("Le champs prénoms est requis"),
      email: Yup.string().required("Le champs email est requis"),
      contact1: Yup.string().required("Le champs contact 1 est requis"),
      option: Yup.string().required("Le champs option de livraison est requis"),
    }),
    onSubmit: async (values) => {
      alert("gggg");
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, handleBlur } =
    formik;

  return (
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
                    placeholder="Entrez votre email s'il vous plait"
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
                      : "Numéro de commande "}
                  </label>
                  <FormInput
                    formik={formik}
                    type="text"
                    name="numero"
                    placeholder="Entrez le numéro de commande s'il vous plait"
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
                    placeholder="Entrez le Montant total de commande s'il vous plait"
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
                    placeholder="Entrez une description s'il vous plait"
                    existe={false}
                    longeur={255}
                    message={errors.description}
                  />
                  <label
                    htmlFor="contact1"
                    className={`block font-latoBold text-sm pb-2 ${
                      touched.contact1 && errors.contact1 ? "text-red-400" : ""
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
                    placeholder="Entrez le contact1 s'il vous plait"
                    existe={false}
                    longeur={255}
                    message={errors.contact1}
                  />
                  <label
                    htmlFor="contact2"
                    className={`block font-latoBold text-sm pb-2 ${
                      touched.contact2 && errors.contact2 ? "text-red-400" : ""
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
                    placeholder="Entrez le contact2 s'il vous plait"
                    existe={false}
                    longeur={255}
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
                      touched.option && errors.option ? "text-red-400" : ""
                    }`}
                  >
                    {touched.option && errors.option
                      ? errors.option
                      : "Option de livraison*"}
                  </label>
                  <select
                    className="bg-white flex w-full text-black text-sm border-2 border-black placeholder-custom-placeholder placeholder-black rounded-sm p-2 mb-4 focus:bg-gray focus:outline-none focus:ring-1 focus:ring-black transition ease-in-out duration-150"
                    name="option"
                    onChange={(e) => {
                      handleChange(e);
                      setSelectedOption(e.target.value);
                    }}
                    value={values.option}
                    onBlur={handleBlur}
                  >
                    <option key="1" value="option1">
                      Retrait dans notre point relais à Cocody Angré
                    </option>
                    <option key="2" value="option2">
                      Livraison à votre domicile
                    </option>
                  </select>
                  {selectedOption == "option1" && (
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
  );
};

export default Page;
