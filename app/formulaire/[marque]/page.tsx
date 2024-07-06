"use client";
import FormInput from "@/components/formulaire/FormInput";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import FormArea from "@/components/formulaire/formArea";
import FormStep from "@/components/formulaire/formStep";

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
        return <></>;
      case 4:
        return <h1>Final Step</h1>;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="w-full py-7 mt-[45px] bg-[#F5F5F5] flex items-center justify-center">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white max-w-3xl shadow overflow-hidden w-full mx-4 lg:mx-0 pb-4 flex flex-col items-center">
          <FormStep />
          {/* 
          <form onSubmit={handleSubmit} className="flex flex-col w-full px-4">
            {renderStep()}
            <div className="flex justify-between mt-4">
              {currentStep > 1 && (
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                  onClick={prevStep}
                >
                  Précedent
                </button>
              )}
              <button
                type="submit"
                className={`bg-gradient-to-r from-[#f1a730] to-[#f1a730] text-white font-bold py-2 px-4 rounded-md transition ease-in-out duration-150 ${
                  currentStep < 4 ? "hover:bg-[#f1a730] hover:to-[#95ebdb]" : ""
                }`}
                onClick={handleNextStep}
              >
                {currentStep < 4 ? "Continuer" : "Soumettre"}
              </button>
            </div>
          </form>
          */}
        </div>
      </div>
    </div>
  );
}

export default Page;
