import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";

const validationSchema = [
   /* Yup.object({
    //nom: Yup.string().required("Required"),
   // lastName: Yup.string().required("Required"),
  }), */
  /*Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().required("Required"),
  }),
  Yup.object({
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
  }), */
];

const initialValues = {
  nom: "",
 /*  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "", */
};

const FormStep = () => {
  const [step, setStep] = useState(0);

  const steps = [
    "Personal Information",
    "Contact Information",
    "Address Information",
    "Address ",
  ];

  const isLastStep = () => step === steps.length - 1;

  const handleSubmit = (values ,actions) => {
       
    //alert("")
    if (isLastStep()) {
      // Soumettre le formulaire final
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    } else {
      setStep(step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema[step]}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting}) => (
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
          {step === 3 && <Step4 />}
          <div>
            {step > 0 && (
              <Button onClick={() => {
              
                 setStep(step - 1);
              }}>Back</Button>
            )}
            <Button type="submit" disabled={isSubmitting}>
              {isLastStep() ? "Submit" : "Next"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormStep;
