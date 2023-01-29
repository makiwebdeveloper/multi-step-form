import { Field } from "formik";
import { FC } from "react";
import { addOnses } from "../../../constants";
import { FormStep } from "../../../widgets";
import styles from "./PickAddOns.module.scss";

interface Props {}

const PickAddOns: FC<Props> = () => {
  return (
    <FormStep>
      <div>
        <div role="group">
          {addOnses.map((addOns) => (
            <label key={addOns.name}>
              <Field type="checkbox" name="addOns" value={addOns.name} />
              {addOns.name} {addOns.price}
            </label>
          ))}
        </div>
      </div>
    </FormStep>
  );
};

export default PickAddOns;
