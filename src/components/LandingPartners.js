import React from "react";
import styles from "../styles/LandingPartners.module.scss";

const LandingPartners = props => {
  return (
    <div className={styles.landingPartners}>
      <div className={styles.item1}>
        <p>Co-organizers</p>
        <div className={styles.partnerRow}>
          <div className={styles.imgcontainer}>
            <img
              src="/img/aaltologo.png"
              alt="logo"
              className={styles.imglogo}
            />
          </div>
          <div className={styles.imgcontainer}>
            <img
              src="/img/icebreakerlogo.png"
              alt="logo"
              className={styles.imglogo}
            />
          </div>
          <div className={styles.imgcontainer}>
            <img
              src="/img/maria01logo.png"
              alt="logo"
              className={styles.imglogo}
            />
          </div>
          <div className={styles.imgcontainer}>
            <img
              src="/img/trulylogo.png"
              alt="logo"
              className={styles.imglogo}
            />
          </div>
          <div className={styles.imgcontainer}>
            <img
              src="/img/verticallogo.png"
              alt="logo"
              className={styles.imglogo}
            />
          </div>
        </div>
      </div>
      <div>
        <div className={styles.partnerRowGrid}>
          <div className={styles.item1}>
            <p>Partners</p>
            <div className={styles.imgcontainer}>
              <img
                src="/img/maria01logo.png"
                alt="logo"
                className={styles.imglogo}
              />
            </div>
          </div>
          <div className={styles.item1}>
            <p>Sponsors</p>
            <div className={styles.imgcontainer}>
              <img
                src="/img/maria01logo.png"
                alt="logo"
                className={styles.imglogo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPartners;
