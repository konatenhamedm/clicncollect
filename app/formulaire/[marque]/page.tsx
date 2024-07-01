"use client";
import FormInput from "@/components/formulaire/FormInput";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import FormArea from "@/components/formulaire/formArea";

export type Personne = {
  nom: string;
  prenom: string;
  numero: string;
  poids: string;
  montant: string;
  description: string;
  contact1: string;
  contact2: string;
};

function Page({ params }: { params: { marque: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [personne, setPersonne] = useState<Personne>({
    nom: "",
    prenom: "",
    numero: "",
    poids: "",
    montant: "",
    description: "",
    contact1: "",
    contact2: "",
  });

  const formik = useFormik({
    initialValues: {
      nom: "",
      prenom: "",
      numero: "",
      poids: "",
      montant: "",
      description: "",
      contact1: "",
      contact2: "",
    },
    validationSchema: Yup.object({
      nom: Yup.string().required("Le champs nom est requis"),
      prenom: Yup.string().required("Le champs prénom est requis"),
      montant: Yup.string().required("Le champs montant total est requis"),
      contact1: Yup.string().required("Le champs contact1 est requis"),
    }),
    onSubmit: async (values) => {
      alert("Form submitted");
      console.log(values);
      // Vous pouvez ajouter ici votre logique de soumission de formulaire
    },
  });

  useEffect(() => {
    // Save form values to localStorage when values change
  }, [personne]);

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep == 4) {
      setCurrentStep((prev) => prev - 1);
      formik.resetForm();
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const { errors, touched, values, handleChange, handleSubmit, validateForm } =
    formik;

  const handleNextStep = async () => {
    alert("");
    const formErrors = await validateForm();
    if (currentStep == 3) {
      if (Object.keys(formErrors).length > 0) {
        alert("Form submitted");
      } else {
        alert("Form submitted");
        nextStep();
      }
    } else {
      nextStep();
    }

    /* if (Object.keys(formErrors).length === 0) {
      nextStep();
    } */
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return (
          <>
            <div className="px-4 py-5 sm:px-6 items-center justify-center">
              <h3 className="text-xl leading-6 font-bold text-black items-center justify-center text-center">
                Récapitulatif de votre commande
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500 text-center">
                Renseignez les informations pour vous faire livrer par
                ClicnCollect à Abidjan
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 border-b-2">
                  <dt className="text-xl font-bold text-black sm:col-span-2">
                    <label
                      htmlFor="nom"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.nom && formik.errors.nom
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.nom && formik.errors.nom
                        ? formik.errors.nom
                        : "Nom *"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="nom"
                      placeholder="Entrez votre nom"
                      existe={false}
                      longeur={255}
                      message={formik.errors.nom}
                    />
                    <label
                      htmlFor="prenom"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.prenom && formik.errors.prenom
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.prenom && formik.errors.prenom
                        ? formik.errors.prenom
                        : "Prénoms *"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="prenom"
                      placeholder="Entrez votre prénoms"
                      existe={false}
                      longeur={255}
                      message={formik.errors.prenom}
                    />
                    <label
                      htmlFor="numero"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.numero && formik.errors.numero
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.numero && formik.errors.numero
                        ? formik.errors.numero
                        : "Numéro de commande*"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="numero"
                      placeholder="Entrez le numéro  de commande"
                      existe={false}
                      longeur={255}
                      message={formik.errors.numero}
                    />
                    <label
                      htmlFor="poids"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.poids && formik.errors.poids
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.poids && formik.errors.poids
                        ? formik.errors.poids
                        : "Poids total de commande"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="poids"
                      placeholder="Entrez le poids de votre commande "
                      existe={false}
                      longeur={255}
                      message={formik.errors.poids}
                    />
                    <label
                      htmlFor="montant"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.montant && formik.errors.montant
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.montant && formik.errors.montant
                        ? formik.errors.montant
                        : "Montant total de commande *"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="montant"
                      placeholder="Entrez le montant total de la commande"
                      existe={false}
                      longeur={255}
                      message={formik.errors.montant}
                    />
                    <label
                      htmlFor="description"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.description && formik.errors.description
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.description && formik.errors.description
                        ? formik.errors.description
                        : "Description de la commande"}
                    </label>
                    <p></p>
                    <FormArea
                      formik={formik}
                      type="text"
                      name="description"
                      placeholder="Entrez la description de la commande"
                      existe={false}
                      longeur={255}
                      message={formik.errors.description}
                    />
                    <label
                      htmlFor="contact1"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.contact1 && formik.errors.contact1
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.contact1 && formik.errors.contact1
                        ? formik.errors.contact1
                        : "Contact 1*"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="contact1"
                      placeholder="Entrez le contact 1"
                      existe={false}
                      longeur={255}
                      message={formik.errors.contact1}
                    />
                    <label
                      htmlFor="contact2"
                      className={`block font-latoBold text-sm pb-2 ${
                        formik.touched.contact2 && formik.errors.contact2
                          ? "text-red-400"
                          : ""
                      }`}
                    >
                      {formik.touched.contact1 && formik.errors.contact1
                        ? formik.errors.contact1
                        : "Contact 2*"}
                    </label>
                    <p></p>
                    <FormInput
                      formik={formik}
                      type="text"
                      name="contact2"
                      placeholder="Entrez le contact 2"
                      existe={false}
                      longeur={255}
                      message={formik.errors.contact2}
                    />
                  </dt>
                </div>
              </dl>
            </div>
          </>
        );
      case 4:
        return <h1>Final Step</h1>;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="w-full pb-4 py-7 mt-[45px] bg-[#F5F5F5] items-center justify-center grid grid-cols-1">
      <div className="pt-4 items-center justify-center pb-4">
        <div className="w-full items-center justify-center grid grid-cols-5">
          <div></div>
          <div className="col-span-3">
            <div className="bg-white max-w-3xl shadow overflow-hidden pb-4 items-center justify-center">
              <form onSubmit={handleSubmit} className="flex flex-col">
                {renderStep()}
                <dl>
                  <div className="bg-white px-4 py-3 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500 sm:col-span-4">
                      {currentStep > 1 && (
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                          onClick={prevStep}
                        >
                          Précedent
                        </button>
                      )}
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 items-end justify-end">
                      {currentStep < 4 ? (
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#f1a730] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                          onClick={handleNextStep}
                        >
                          Continuer
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#f1a730] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                        >
                          Soumettre
                        </button>
                      )}
                    </dd>
                  </div>
                </dl>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
