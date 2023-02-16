import { Layout } from "./components/layout";
import {
  PersonalInfo,
  SelectPlan,
  PickAddOns,
  FinishingUp,
} from "./components/screens";
import { useMultiStepForm } from "./contexts";

const steps = [
  <PersonalInfo />,
  <SelectPlan />,
  <PickAddOns />,
  <FinishingUp />,
];

const App = () => {
  const { currentStep } = useMultiStepForm();

  return <div>{steps[currentStep]}</div>;
};

export default App;
