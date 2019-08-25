import React from "react";
import styles from "../styles/Workshop.module.scss";

const WorkshopCard = props => {
  console.log(`${styles.WorkshopCard} ${styles[props.type]}`);
  return (
    <div className={`${styles.WorkshopCard} ${styles[props.type]}`}>
      <div className={styles.WorkshopCardLeft}>
        <div className={styles.CardTitle}>Business Workshop</div>
        <div className={styles.CardContent}>
          Lorem ipsum dono si amet. Just kidding I don't even know what that
          means, but since it looks cool then I will use it for the sake of
          being an example to be honest
        </div>
        <div className={styles.CardTime}>
          My face when I stay up till 4 am and be late for work
        </div>
      </div>
      <div className={styles.WorkshopCardRight}>
        <div className={styles.CardSpeakerPicture}>
          <img src="https://i.imgur.com/Zq0iBJK.jpg" alt="pikachu face" />
        </div>
        <div className={styles.CardSpeakerName}>John Doe</div>
        <div className={styles.CardSpeakerTitle}>Tempo rapper</div>
      </div>
      <div className={styles.WorkshopCardSide}>
        <div className={styles.CardType}>{`${props.type} Track`}</div>
      </div>
    </div>
  );
};

export default WorkshopCard;
