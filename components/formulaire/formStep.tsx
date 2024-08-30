"use client";
import { Formik, Form, FormikHelpers } from "formik";
import React, { ReactElement, useEffect, useState } from "react";
import * as Yup from "yup";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Modal from "@/components/modals/Modal";
import { useRouter } from "next/navigation";

const validationSchema = [
  Yup.object({}),
  Yup.object({}),
  Yup.object({
    nom: Yup.string().required("Le champs nom est requis"),
    numero: Yup.string().required("Le champs est requis"),
    prenoms: Yup.string().required("Le champs prénoms est requis"),
    email: Yup.string()
      .email("format invalide email")
      .required("Le champs email est requis"),
    contact1: Yup.string()
      .length(14, "10 chiffres")
      .required("Le champs contact 1 est requis"),
    option: Yup.string().required("Le champs option de livraison est requis"),
  }),
];

const initialValues = {
  nom: "",
  prenoms: "",
  numero: "",
  email: "",
  contact1: "",
  contact2: "",
  montant: "",
  description: "",
  option: "option1",
  adresseLivraison: "",
};

interface FormStepProps {
  nom: string;
  image: undefined | string;
  lien: undefined | string;
}

/* const FormStep = () => { */
const FormStep: React.FC<FormStepProps> = ({ image, nom, lien }) => {
  const [step, setStep] = useState(1);

  // Use useEffect to load the step from localStorage when the component mounts
  useEffect(() => {
    const savedStep = parseInt(localStorage.getItem("currentStep") || "0", 10);
    if (!isNaN(savedStep)) {
      setStep(savedStep);
    }
  }, []);

  // Save the current step to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentStep", String(step));
  }, [step]);

  const steps = [/* "Informations",  */ "Important" /* "Formulaire" */];

  const isLastStep = () => step === steps.length - 1;
  const router = useRouter();
  const content = (
    <>
      <div className="pt-4 items-center justify-center pb-4">
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg pb-4 items-center justify-center">
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt className="text-normal font-normal text-black sm:col-span-2">
                  <p className="mt-1 max-w-xl text-normal text-black justify-center text-justify">
                    Cher client, votre demande a bien été reçue. Vous recevrez
                    un mail de confirmation.
                  </p>
                </dt>
              </div>
              <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt className="text-normal font-normal text-black sm:col-span-2 border-dashed border-0 px-2">
                  <p className="mt-1 max-w-xl text-normal text-black justify-center text-center">
                    Pour toute question, n’hésitez pas à nous contacter dans la
                    rubrique aide ou au numéro suivant +225 0704314164.
                  </p>
                </dt>
              </div>
              <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt className="text-lg font-bold text-black sm:col-span-2 border-dashed border-0 px-2">
                  <p className="mt-1 max-w-xl text-md text-black justify-center text-center">
                    Merci
                  </p>
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );

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

  const handleSubmit = (
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    if (isLastStep()) {
      openModal(
        content,
        "Votre demande a bien été reçue",
        true,
        "lg",
        false,
        "Fermer",
        false
      );
      actions.setSubmitting(false);
      localStorage.removeItem("currentStep"); // Optionally remove the step from localStorage after submission
    } else {
      setStep(step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema[step]}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {/*  <Stepper activeStep={step}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper> */}
            {/*  {step === 0 && <Step1 />} */}
            {/* {step === 1 && <Step2 />} */}
            <Step2 image={image} lien={lien} />
            {/*  {step === 2 && <Step3 />} */}
            {/* {step === 3 && <Step4 />} */}
            {/*   <div className="bg-white px-10 sm:px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center  justify-between">
              <div className="w-full grid grid-cols-2 justify-between">
                <div>
                  {step > 0 ? (
                    <Button
                      style={{
                        backgroundColor: "#f1a730",
                        color: "white",
                        fontWeight: "bold",
                        padding: "0.5rem 1rem",
                        borderRadius: "0.375rem",
                        transition: "background-color 150ms ease-in-out",
                      }}
                      onClick={() => setStep(step - 1)}
                    >
                      Retour
                    </Button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => router.push("/")}
                      className="bg-[#f1a730] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                    >
                      Retour
                    </button>
                  )}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#f1a730] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                  >
                    {isLastStep() ? "Soumettre" : "Continuer"}
                  </button>
                </div>
              </div>

             
            </div> */}
          </Form>
        )}
      </Formik>
      <Modal
        show={showModal}
        onClose={closeModal}
        content={<>{content}</>}
        size="lg"
        title="Votre demande a bien été reçue"
        actionLabel={label}
        onCloseExiste={true}
        gradient={gradient}
        errorServeur={errorServeur}
      />
    </>
  );
};

export default FormStep;
