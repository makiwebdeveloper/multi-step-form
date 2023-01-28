import { FC } from "react";
import { Formik, Field, Form } from "formik";
import Navigation from "../components/layout/navigation/Navigation";

interface Props {
  isFinalStep?: boolean;
}

const FormStep: FC<Props> = ({ children, isFinalStep }) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      {({ values }) => (
        <Form>
          {children}
          <Navigation />
        </Form>
      )}
    </Formik>
  );
};

export default FormStep;
