import { Field } from "formik";
import { FC } from "react";
import { FormStep } from "../../../widgets";
import styles from "./SelectPlan.module.scss";

interface Props {}

const SelectPlan: FC<Props> = () => {
  return (
    <FormStep>
      <Field name="password" placeholder="Password" />
    </FormStep>
  );
};

export default SelectPlan;
