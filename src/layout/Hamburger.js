import React from "react";
import styles from "../styles/Hamburger.module.scss";

const Hamburger = ({ openNav }) => {
  return (
    <div className={styles.hamburger} onClick={() => openNav()}>
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  );
};

export default Hamburger;
