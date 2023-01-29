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
        phone: yup.string().required("Phone is required"),
      })}
    >
      <div>
        <Input name="name" label="Name" placeholder="e.g. Stephan King" />
        <Input
          name="email"
          label="Email Address"
          placeholder="e.g. stephanking@gmail.com"
        />
        <Input
          name="phone"
          label="Phone Number"
          placeholder="e.g. +123 456 7890"
        />
      </div>
    </FormStep>
  );
};

export default PersonalInfo;
