import React, { createContext, useCallback, useContext, useState } from "react";
import { descriptions, titles } from "../data/form.data";
import { StepChangeType } from "./form.types";

interface FormContextProps {
  step: number;
  title: string;
  description: string;
  changeStep: (action: StepChangeType) => void;
  changePlan: () => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<number>(1);
  const title = titles[step - 1];
  const description = descriptions[step - 1];

  const changeStep = useCallback(
    (action: StepChangeType) => {
      if (!action) {
        throw new Error("changeStep action not provided");
      }

      switch (action) {
        case StepChangeType.increase: {
          if (step === 5) {
            console.log("confirmed");
          } else {
            setStep((prev) => prev + 1);
          }
          break;
        }

        case StepChangeType.reduce: {
          if (step === 1) {
            throw new Error("Cannot reduce step");
          } else {
            setStep((prev) => prev - 1);
          }
          break;
        }

        default: {
          throw new Error("changeStep action not provided");
        }
      }
    },
    [step]
  );

  const changePlan = () => {
    setStep(2);
  };

  return (
    <FormContext.Provider
      value={{
        step,
        title,
        description,
        changeStep,
        changePlan,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
