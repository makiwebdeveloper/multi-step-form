import { createContext, FC, useContext, useState } from "react";
import { plans, addOnses } from "../constants";

interface IContext {
  currentStep: number;
  data: {
    name: string;
    email: string;
    phone: string;
    plan: string;
    addOns: string[];
  };
  nextStep: (newData: any, isFinalStep: boolean) => void;
  previousStep: (newData: any) => void;
  getTotalPrice: () => void;
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
    plan: plans[0].name,
    addOns: [],
  });

  const nextStep = (newData: any, isFinalStep = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (isFinalStep) {
      alert(JSON.stringify({ ...data, ...newData }, 2, 2, null));
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = (newData: any) => {
    if (currentStep === 0) return;
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const getTotalPrice = () => {
    const planPrice = plans.find((item) => item.name === data.plan)?.price || 0;
    const selectedAddOnses: number[] = [];
    data.addOns.forEach((item) => {
      const addOns = addOnses.find((i) => i.name === item);
      if (addOns) selectedAddOnses.push(addOns.price);
    });

    const addOnsPrice = selectedAddOnses.reduce((acc, val) => acc + val, 0);

    return addOnsPrice + planPrice;
  };

  const value: IContext = {
    currentStep,
    data,
    nextStep,
    previousStep,
    getTotalPrice,
  };

  return (
    <MultiStepFormContext.Provider value={value}>
      {children}
    </MultiStepFormContext.Provider>
  );
};
