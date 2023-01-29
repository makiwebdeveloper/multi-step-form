import { Field } from "formik";
import { FC } from "react";
import { plans } from "../../../constants";
import { FormStep } from "../../../widgets";
import styles from "./SelectPlan.module.scss";

interface Props {}

const SelectPlan: FC<Props> = () => {
  return (
    <FormStep>
      <div>
        <div role="group" className="flex flex-col">
          {plans.map((plan) => (
            <label key={plan.name}>
              <Field type="radio" name="plan" value={plan.name} />
              {plan.name} {plan.price}
            </label>
          ))}
        </div>
      </div>
    </FormStep>
  );
};

export default SelectPlan;
