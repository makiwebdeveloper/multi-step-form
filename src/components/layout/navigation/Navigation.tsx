import { FC } from "react";
import styles from "./Navigation.module.scss";

interface Props {
  previousStep: () => void;
}

const Navigation: FC<Props> = ({ previousStep }) => {
  return (
    <div>
      <button type="button" onClick={previousStep}>
        Go Back
      </button>
      <button type="submit">Next Step</button>
    </div>
  );
};

export default Navigation;
