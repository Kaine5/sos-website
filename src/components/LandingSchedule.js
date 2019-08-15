import React from "react";
import Box3d from "../components/Box3d";
import styles from "../styles/LandingSchedule.module.scss";
import Button from "./Button";

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
      <div className={styles.item3}>
        <div>
          <Button height="15vw" width="30vw" name="learn more" />
        </div>
      </div>
    </div>
  );
};

export default LandingSchedule;
