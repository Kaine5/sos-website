import React from "react";
import styles from "../styles/box3d.module.scss";

const Box3d = () => {
  return (
    <div className={styles.boxContainer}>
      <a href='#' className={styles.box}>
        <span>Learn more</span>
      </a>
    </div>
  );
};

export default Box3d;
