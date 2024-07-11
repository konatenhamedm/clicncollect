"use client";
import React, { useState } from "react";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";

function Page() {
  const [step, setStep] = useState(0);

  const steps = [
    "Personal Information",
    "Contact Information",
    "Address Information",
    "Address ",
  ];

  const isLastStep = () => step === steps.length - 1;

  const handleSubmit = (values, actions) => {
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
    <>
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
      <div>
        {step > 0 && (
          <Button
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Back
          </Button>
        )}
        <Button type="submit">{isLastStep() ? "Submit" : "Next"}</Button>
      </div>
    </>
  );
}

export default Page;
