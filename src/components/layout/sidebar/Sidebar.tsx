import { FC } from "react";
import styles from "./Sidebar.module.scss";

const steps = [
  { step: 1, title: "YOUR INFO" },
  { step: 2, title: "SELECT PLAN" },
  { step: 3, title: "PICK ADD-ONS" },
  { step: 4, title: "SUMMARY" },
];

interface Props {}

const Sidebar: FC<Props> = () => {
  const currentStep = 1;

  return (
    <div className={styles.sidebar}>
      <ul className={styles.list}>
        {steps.map((item) => (
          <li key={item.step} className={styles.item}>
            <span
              className={currentStep + 1 === item.step ? styles.activeIcon : ""}
            >
              {item.step}
            </span>
            <div className={styles.itemInfo}>
              <p className={styles.step}>
                STEP {item.step}
              </p>
              <p className={styles.title}>{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
