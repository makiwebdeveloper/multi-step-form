import { createContext, ReactNode, useContext, useState } from "react";

interface IContext {
  data: {
    first_name: string;
    last_name: string;
    color: string;
  };
  currentStep: number;
  handleNextStep: (newData: any, isFinalStep: boolean) => void;
  handlePrevStep: (newData: any) => void;
}

const MSFContext = createContext<IContext | null>(null);
export const useMSF = () => useContext(MSFContext) as IContext;

export const MSFProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    color: "",
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = (newData: any, isFinalStep = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (isFinalStep) {
      console.table({ ...data, ...newData });
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData: any) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const value: IContext = {
    data,
    currentStep,
    handleNextStep,
    handlePrevStep,
  };

  return <MSFContext.Provider value={value}>{children}</MSFContext.Provider>;
};
