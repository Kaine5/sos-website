import React from "react";
import Box3d from "../components/Box3d";
import styles from "../styles/LandingSchedule.module.scss";

const LandingSchedule = props => {
  return (
    <div className={styles.LandingSchedule}>
      <div className={styles.item1}>
        <p className={`${styles.titleText} ${styles.blue}`}>Business</p>
        <p className={`${styles.titleText} ${styles.red}`}>Design</p>
        <p className={`${styles.titleText} ${styles.yellow}`}>Tech</p>
      </div>

      <div className={styles.item2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div style={{ marginLeft: "20px", position: "relative" }}>
        <Box3d />
      </div>

      <button className={`${styles.item3} ${styles.buttonText}`}>
        {" "}
        learn<br />more{" "}
      </button>
    </div>
  );
};

export default LandingSchedule;
