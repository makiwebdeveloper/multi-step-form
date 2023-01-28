import { FC } from "react";
import { Formik, Form } from "formik";
import Navigation from "../components/layout/navigation/Navigation";
import { useMultiStepForm } from "../contexts/MultiStepFormContext";

interface Props {
  isFinalStep?: boolean;
  validationSchema?: any;
}

const FormStep: FC<Props> = ({
  children,
  isFinalStep = false,
  validationSchema,
}) => {
  const { data, nextStep, previousStep } = useMultiStepForm();

  const handleSubmit = (values: any) => {
    nextStep(values, isFinalStep);
  };

  return (
    <Formik
      initialValues={{ ...data }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form>
          {children}
          <Navigation previousStep={() => previousStep(values)} />
        </Form>
      )}
    </Formik>
  );
};

export default FormStep;
