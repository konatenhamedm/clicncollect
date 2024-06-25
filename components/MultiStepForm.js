'use client';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      {renderStep()}
      <div className="flex justify-between mt-4">
        {currentStep > 1 && (
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
            onClick={prevStep}
          >
            Previous
          </button>
        )}
        {currentStep < 4 ? (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={nextStep}
          >
            Next
          </button>
        ) : (
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
