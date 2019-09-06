import React from "react";
import styles from "../styles/Workshop.module.scss";

const WorkshopCard = ({ workshop }) => {
  return (
    <div className={`${styles.WorkshopCard} ${styles[workshop.workshopType]}`}>
      <div className={styles.WorkshopCardLeft}>
        <div className={styles.CardTitle}>{workshop.workshopTitle}</div>
        <div className={styles.WorkshopCardMid}>
          <div className={styles.CardSpeaker}>
            <div className={styles.CardSpeakerPicture}>
              <img
                src={
                  workshop.speaker.speakerPicture ||
                  "/img/speaker-placeholder.jpg"
                }
                alt="pikachu face"
              />
            </div>
            <div className={styles.CardSpeakerName}>
              {workshop.speaker.speakerName}
            </div>
            <div className={styles.CardSpeakerTitle}>
              {workshop.speaker.speakerTitle}
            </div>
          </div>
          <div
            className={styles.CardContent}
            dangerouslySetInnerHTML={{
              __html:
                `${workshop.workshopDesc}` ||
                "The description is not available for now. <br/> It will be updated soon."
            }}
          ></div>
        </div>
        <div className={styles.CardTime}>
          {`${workshop.startTime} - ${workshop.endTime} | ${workshop.place}`}
        </div>
      </div>
      <div className={styles.WorkshopCardSide}>
        <div
          className={styles.CardType}
        >{`${workshop.workshopType} Track`}</div>
      </div>
    </div>
  );
};

export default WorkshopCard;
