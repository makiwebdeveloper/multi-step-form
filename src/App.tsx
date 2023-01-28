import { Field, Form, Formik } from "formik";
import { useMSF } from "./MSFContext";

function App() {
  const { currentStep } = useMSF();
  const steps = [<StepOne />, <StepTwo />];

  return <div>{steps[currentStep]}</div>;
}

export default App;

const FormStep = ({ isFinalStep = false, children }: any) => {
  const { handleNextStep, handlePrevStep, data } = useMSF();

  const handleSubmit = (values: any) => {
    handleNextStep(values, isFinalStep);
  };

  return (
    <Formik initialValues={{ ...data }} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          {children}
          <button type="button" onClick={() => handlePrevStep(values)}>
            Back
          </button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

// SCREENS
const StepOne = () => {
  return (
    <FormStep>
      <p>First Name</p>
      <Field name="first_name" placeholder="First Name" />
      <p>Last Name</p>
      <Field name="last_name" />
    </FormStep>
  );
};

const StepTwo = () => {
  return (
    <FormStep isFinalStep={true}>
      <Field name="color" as="select">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </Field>
    </FormStep>
  );
};
