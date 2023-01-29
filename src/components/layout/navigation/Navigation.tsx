import { FC } from "react";
import styles from "./Navigation.module.scss";

interface Props {
  previousStep: () => void;
}

const Navigation: FC<Props> = ({ previousStep }) => {
  return (
    <div className="w-[90%] mx-auto flex items-center justify-between h-full md:w-full md:h-auto">
      <button
        type="button"
        onClick={previousStep}
        className="py-2 font-semibold text-gray-400"
      >
        Go Back
      </button>
      <button
        type="submit"
        className="px-4 py-2 bg-dark-blue text-white font-semibold rounded-lg"
      >
        Next Step
      </button>
    </div>
  );
};

export default Navigation;
