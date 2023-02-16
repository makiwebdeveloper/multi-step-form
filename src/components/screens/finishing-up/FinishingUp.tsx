import { FC } from "react";
import { useMultiStepForm } from "../../../contexts";
import { FormStep } from "../../../widgets";
import { plans, addOnses } from "../../../constants";
import styles from "./FinishingUp.module.scss";

interface Props {}

const FinishingUp: FC<Props> = () => {
  const { data, getTotalPrice } = useMultiStepForm();

  return (
    <FormStep isFinalStep={true}>
      <div>
        <div>
          <h1 className="title">Finishing Up</h1>
          <p className="description">
            Double-check everything looks OK before confirming
          </p>
        </div>
        <div className="mt-3">
          <div className="bg-cyan-100 bg-opacity-20 p-5 rounded-xl">
            <div className="flex justify-between items-center text-dark-blue font-bold">
              {data.plan}
              <span>
                ${plans.find((item) => item.name === data.plan)?.price}/mo
              </span>
            </div>
            <div className="mt-3">
              {data.addOns.map((addOns) => (
                <div
                  key={addOns}
                  className="flex justify-between items-center text-gray-400"
                >
                  {addOns}
                  <span>
                    ${addOnses.find((item) => item.name === addOns)?.price}/mo
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-gray-400 flex justify-between items-center px-5">
            Total (per month) <span>${getTotalPrice()}/mo</span>
          </p>
        </div>
      </div>
    </FormStep>
  );
};

export default FinishingUp;
