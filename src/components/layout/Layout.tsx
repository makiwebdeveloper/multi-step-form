import { FC } from "react";
import styles from "./Layout.module.scss";
import Sidebar from "./sidebar/Sidebar";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Sidebar  />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
