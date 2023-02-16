import { FormikValues } from "formik";
import { FC } from "react";
import { useMultiStepForm } from "../../contexts";
import styles from "./Layout.module.scss";
import Navigation from "./navigation/Navigation";
import Sidebar from "./sidebar/Sidebar";

interface Props {
  values: FormikValues;
}

const Layout: FC<Props> = ({ children, values }) => {
  const { previousStep } = useMultiStepForm();

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className="md:relative md:flex-1">
          <div className={styles.content}>{children}</div>
          <div className={styles.navigation}>
            <Navigation previousStep={() => previousStep(values)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
