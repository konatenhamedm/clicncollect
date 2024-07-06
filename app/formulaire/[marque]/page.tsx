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
        return (
          <>
          
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
              <FormStep />
              {/* <form onSubmit={handleSubmit} className="flex flex-col">
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
              </form> */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Page;
