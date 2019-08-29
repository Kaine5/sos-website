import React from "react";
import styles from "../styles/LandingPartners.module.scss";

const LandingPartners = props => {
  return (
    <div className={styles.landingPartners}>

      <div className={styles.item1}>
        <p>Co-organizers</p>
        <div className={styles.partnerRow}>
          <div className={styles.imgcontainer}>
            <img src="/img/aaltologo.png" className={styles.imglogo} />
          </div>
          <div className={styles.imgcontainer}>
            <img src="/img/icebreakerlogo.png" className={styles.imglogo} />
          </div>
          <div className={styles.imgcontainer}>
            <img src="/img/maria01logo.png" className={styles.imglogo} />
          </div>
          <div className={styles.imgcontainer}>
            <img src="/img/trulylogo.png" className={styles.imglogo} />
          </div>
          <div className={styles.imgcontainer}>
            <img src="/img/verticallogo.png" className={styles.imglogo} />
          </div>

        </div>
      </div>




    </div>
  );
};
const PartnerPicture = props => {
  return <div className="partnerPicture" />;
};
export default LandingPartners;
