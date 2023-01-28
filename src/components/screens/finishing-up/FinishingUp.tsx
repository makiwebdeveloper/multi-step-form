import { FC } from "react";
import { FormStep } from "../../../widgets";
import styles from "./FinishingUp.module.scss";

interface Props {}

const FinishingUp: FC<Props> = () => {
  return <FormStep isFinalStep={true}>FinishingUp</FormStep>;
};

export default FinishingUp;
