import { Layout } from "./components/layout";
import {
  PersonalInfo,
  SelectPlan,
  PickAddOns,
  FinishingUp,
} from "./components/screens";
import { useMultiStepForm } from "./contexts/MultiStepFormContext";

const steps = [
  <PersonalInfo />,
  <SelectPlan />,
  <PickAddOns />,
  <FinishingUp />,
];

const App = () => {
  const { currentStep } = useMultiStepForm();

  return <Layout>{steps[currentStep]}</Layout>;
};

export default App;
