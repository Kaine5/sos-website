import React from "react";
import styles from "../styles/homeSchedule.module.scss";

const LandingSchedule = props => {
  return (
    <div className={styles.landingSchedule}>
      <div>
        <p className='routeText blue'>Business</p>
        <p className='routeText red'>Design</p>
        <p className='routeText yellow'>Tech</p>
      </div>
      <div className='normalText'>Lorem ipsum dono si amet</div>
      <button>learn more </button>
    </div>
  );
};

export default LandingSchedule;
