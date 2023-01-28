import { useState } from "react";
import { Layout } from "./components/layout";
import {
  PersonalInfo,
  SelectPlan,
  PickAddOns,
  FinishingUp,
} from "./components/screens";

const steps = [
  <PersonalInfo />,
  <SelectPlan />,
  <PickAddOns />,
  <FinishingUp />,
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return <Layout>{steps[currentStep]}</Layout>;
};

export default App;
