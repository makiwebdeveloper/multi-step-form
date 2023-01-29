import { FC } from "react";
import { Formik, Form } from "formik";
import { useMultiStepForm } from "../contexts";
import { Layout } from "../components/layout";

interface Props {
  isFinalStep?: boolean;
  validationSchema?: any;
}

const FormStep: FC<Props> = ({
  children,
  isFinalStep = false,
  validationSchema,
}) => {
  const { data, nextStep } = useMultiStepForm();

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
          <Layout values={values}>{children}</Layout>
        </Form>
      )}
    </Formik>
  );
};

export default FormStep;
