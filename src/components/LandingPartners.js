import React from "react";
import styles from "../styles/LandingPartners.module.scss";

const LandingPartners = props => {
  return (
    <div className={styles.landingPartners}>
      <div className={styles.item1}>
        Co-organizers
        <div className={styles.partnerRow}>
          <PartnerPicture />
          <PartnerPicture />
        </div>
      </div>

      <div className={styles.item2}>
        Partners
        <div className={styles.partnerRow}>
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
        </div>
      </div>

      <div className={styles.item3}>
        Sponsors
        <div className={styles.partnerRow}>
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
          <PartnerPicture />
        </div>
      </div>
    </div>
  );
};
const PartnerPicture = props => {
  return <div className="partnerPicture" />;
};
export default LandingPartners;
