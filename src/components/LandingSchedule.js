import React from "react";
import styles from "../styles/LandingSchedule.module.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

const LandingSchedule = () => {
  return (
    <div className={styles.LandingSchedule} id="landingSchedule">
      <div className={styles.item1}>
        <p className={`${styles.titleText} ${styles.red}`}>Design</p>
        <p className={`${styles.titleText} ${styles.green}`}>Business</p>
        <p className={`${styles.titleText} ${styles.yellow}`}>Tech</p>
      </div>

      <div className={styles.item2}>
        <p>
          2 days,<br></br>
          40 hands-on workshops <br></br>
          for entrepreneurs <br></br> and startups. <br></br>
          Learn from doers
        </p>
      </div>
      <div className={styles.item3}>
        <div className={styles.button}>
          <Link to="/schedule/" className={styles.anchorButton}>
            <Button height="10vmax" width="24vmax" name="learn more" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingSchedule;
