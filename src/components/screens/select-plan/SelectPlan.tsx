import classNames from "classnames";
import { Field } from "formik";
import { FC, useState } from "react";
import { plans } from "../../../constants";
import { useMultiStepForm } from "../../../contexts";
import { FormStep } from "../../../widgets";
import styles from "./SelectPlan.module.scss";

interface Props {}

const SelectPlan: FC<Props> = () => {
  const { data } = useMultiStepForm();
  const [currentPlan, setCurrentPlan] = useState(data.plan);

  return (
    <FormStep>
      <div>
        <div className="mb-3">
          <h1 className="title">Select Plan</h1>
          <p className="description">
            You have the option of arcade, advanced and pro plan
          </p>
        </div>
        <div role="group" className="flex flex-col gap-3">
          {plans.map((plan) => (
            <label
              key={plan.id}
              className={`border rounded-lg p-3 cursor-pointer ${
                plan.name === currentPlan
                  ? "border-dark-blue bg-cyan-100 bg-opacity-20"
                  : ""
              }`}
            >
              <div className="hidden">
                <Field type="radio" name="plan" value={plan.name} />
              </div>
              <div
                onClick={() => setCurrentPlan(plan.name)}
                className="flex items-center gap-3"
              >
                <div
                  className={`text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl ${classNames(
                    { "bg-orange-400": plan.id === 0 },
                    { "bg-pink-400": plan.id === 1 },
                    { "bg-blue": plan.id === 2 }
                  )}`}
                >
                  {plan.icon}
                </div>
                <div>
                  <p className="text-dark-blue font-semibold capitalize">
                    {plan.name}
                  </p>
                  <p className="text-gray-400 text-sm">${plan.price}/mo</p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </FormStep>
  );
};

export default SelectPlan;
