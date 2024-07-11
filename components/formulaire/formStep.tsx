"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";
import Modal from "@/components/modals/Modal";
import Image from "next/image";

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

const FormStep = () => {
  const [step, setStep] = useState(0);

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

  const steps = ["Informations", "Important", "Formulaire"];

  const isLastStep = () => step === steps.length - 1;

  const content = (
    <>
      <div className="pt-4  items-center justify-center pb-4">
        <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg pb-4 items-center justify-center">
          {/* <div className="px-4 py-5 sm:px-6 items-center justify-center">
            <h3 className="text-xl leading-6 font-normal text-red-500 items-center justify-center text-center">
              IMPORTANT A SAVOIR
            </h3>
           
          </div> */}
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6">
                <dt className="text-xl font-normal text-black sm:col-span-2">
                  <p className="mt-1 max-w-2xl text-xl text-black justify-center text-justify">
                    Cher client, votre demande a bien été reçue. Vous recevrez
                    un message sur votre espace.
                  </p>
                </dt>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 ">
                <dt className="text-lg font-bold text-black sm:col-span-2 border-dashed border-2 border-blue-400 px-2">
                  <p className="mt-1 max-w-2xl text-xl text-black justify-center text-center">
                    Pour toute question, n’hésitez pas à nous contacter dans la
                    rubrique aide ou au numéro suivant +225 0704314164.
                  </p>
                </dt>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6 ">
                <dt className="text-lg font-bold text-black sm:col-span-2 border-dashed border-2 border-blue-400 px-2">
                  <p className="mt-1 max-w-2xl text-xl text-black justify-center text-center">
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
    setModalContent(<div></div>);
  };

  const handleSubmit = (values: any, actions: any) => {
    alert(isLastStep());
    if (isLastStep()) {
      openModal(
        content,
        "Votre demande a bien été reçue",
        true,
        "lg",
        false,
        "",
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
            <Stepper activeStep={step}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {step === 0 && <Step1 />}
            {step === 1 && <Step2 />}
            {step === 2 && <Step3 />}
            {/* {step === 3 && <Step4 />} */}

            <div className="bg-white px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <dt className="text-sm font-medium text-gray-500">
                {step > 0 && (
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
                )}
              </dt>
              <dd className="mt-4 sm:mt-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#f1a730] text-white font-bold py-2 px-4 rounded-md hover:bg-[#f1a730] hover:to-[#95ebdb] transition ease-in-out duration-150"
                >
                  {isLastStep() ? "Soumettre" : "Continuer"}
                </button>
              </dd>
            </div>
          </Form>
        )}
      </Formik>
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

export default FormStep;
