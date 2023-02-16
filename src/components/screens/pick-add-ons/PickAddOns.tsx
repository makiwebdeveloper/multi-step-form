import { Field } from "formik";
import { FC, useEffect, useState } from "react";
import { addOnses } from "../../../constants";
import { useMultiStepForm } from "../../../contexts";
import { FormStep } from "../../../widgets";
import styles from "./PickAddOns.module.scss";

interface Props {}

const PickAddOns: FC<Props> = () => {
  const { data } = useMultiStepForm();
  const [checkedAddOnses, setCheckedAddOnses] = useState<string[]>(data.addOns);

  const onAddOnsClick = (addOns: string) => {
    if (checkedAddOnses.find((item) => item === addOns)) {
      setCheckedAddOnses((prev) => prev.filter((item) => item !== addOns));
    } else {
      setCheckedAddOnses((prev) => [...checkedAddOnses, addOns]);
    }
  };

  return (
    <FormStep>
      <div>
        <div role="group" className="flex flex-col gap-3">
          {addOnses.map((addOns) => (
            <label
              key={addOns.name}
              className={`border rounded-lg p-3 cursor-pointer flex items-center gap-3 ${
                checkedAddOnses.find((item) => item === addOns.name)
                  ? "border-dark-blue bg-cyan-100 bg-opacity-20"
                  : "border-white"
              }`}
            >
                <Field
                  onClick={() => onAddOnsClick(addOns.name)}
                  type="checkbox"
                  name="addOns"
                  value={addOns.name}
                />
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="text-dark-blue font-semibold capitalize">
                    {addOns.name}
                  </p>
                  <p className="text-gray-400 text-sm">{addOns.description}</p>
                </div>
                <p className="text-gray-400 text-sm">+${addOns.price}/mo</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </FormStep>
  );
};

export default PickAddOns;
