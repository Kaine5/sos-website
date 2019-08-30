import React from "react";
import styles from "../styles/LandingSchedule.module.scss";
import Button from "./Button";

const LandingSchedule = () => {
  return (
    <div className={styles.LandingSchedule} id="landingSchedule">
      <div className={styles.item1}>
        <p className={`${styles.titleText} ${styles.red}`}>Design</p>
        <p className={`${styles.titleText} ${styles.green}`}>Business</p>
        <p className={`${styles.titleText} ${styles.yellow}`}>Tech</p>
      </div>

      <div className={styles.item2}>
        <p>2 Days.<br></br>
          48+ hands-on workshop <br></br>
          For entrepreneurs and startups <br></br>
          Learn from the doers</p>
      </div>
      <div className={styles.item3}>
        <div className={styles.button}>
          <Button height="10vmax" width="24vmax" name="learn more" />
        </div>
      </div>
    </div>
  );
};

export default LandingSchedule;
