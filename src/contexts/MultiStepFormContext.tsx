import { createContext, FC, useContext, useState } from "react";

interface IContext {
  currentStep: number;
  data: {
    name: string;
    email: string;
    phone: string;
    plan: string;
    addOns: string;
  };
  nextStep: (newData: any, isFinalStep: boolean) => void;
  previousStep: (newData: any) => void;
}

const MultiStepFormContext = createContext<IContext | null>(null);
export const useMultiStepForm = () =>
  useContext(MultiStepFormContext) as IContext;

export const MultiStepFormProvider: FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    addOns: "",
  });

  const nextStep = (newData: any, isFinalStep = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (isFinalStep) {
      console.table({ ...data, ...newData });
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = (newData: any) => {
    if (currentStep === 0) return;
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const value: IContext = {
    currentStep,
    data,
    nextStep,
    previousStep,
  };

  return (
    <MultiStepFormContext.Provider value={value}>
      {children}
    </MultiStepFormContext.Provider>
  );
};
