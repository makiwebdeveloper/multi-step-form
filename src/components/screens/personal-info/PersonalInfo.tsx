import { FC } from "react";
import { FormStep } from "../../../widgets";
import { Input } from "../../ui";
import styles from "./PersonalInfo.module.scss";
import * as yup from "yup";

interface Props {}

const PersonalInfo: FC<Props> = () => {
  return (
    <FormStep
      validationSchema={yup.object({
        name: yup.string().required("Name is required"),
        email: yup
          .string()
          .email("Email is not a valid")
          .required("Email is required"),
      })}
    >
      <div className="flex flex-col gap-5">
        <Input name="name" label="Name" placeholder="Name" />
        <Input name="email" label="Email" placeholder="Email" />
      </div>
    </FormStep>
  );
};

export default PersonalInfo;
