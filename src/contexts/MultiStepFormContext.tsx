import { createContext, FC, useContext, useState } from "react";

interface IContext {
  currentStep: number;
}

const MultiStepFormContext = createContext<IContext | null>(null);
export const useMultiStepForm = () =>
  useContext(MultiStepFormContext) as IContext;

export const MultiStepFormProvider: FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const value: IContext = {
    currentStep,
  };

  return (
    <MultiStepFormContext.Provider value={value}>
      {children}
    </MultiStepFormContext.Provider>
  );
};
