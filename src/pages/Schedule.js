import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CanvasContent from "../components/CanvasContent";
import Modal from "../components/Modal";
import ScheduleButton from "../components/ScheduleButton";
import WorkshopCard from "../components/WorkshopCard";
import Button from "../components/Button.js";
import styles from "../styles/Schedule.module.scss";
import data from "../data/Workshop.json";

const Schedule = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState("5th");
  const [currentWorkshop, setCurrentWorkshop] = useState({});

  const onModalClick = e => {
    if (e.target.className) {
      if (
        e.target.className.includes("modalContainer") ||
        e.target.className.includes("Modal_icon")
      ) {
        setModalActive(false);
      }
    }
  };

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        setModalActive(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [modalActive]);

  const sessionRender = (array, id) => {
    let renderedRow = array.map(workshop => {
      return (
        <ScheduleButton
          key={workshop.workshopID}
          type={workshop.workshopType}
          title={workshop.workshopTitle}
          speaker={workshop.speaker.speakerName}
          startTime={workshop.startTime}
          endTime={workshop.endTime}
          place={workshop.place}
          onClick={() => {
            setModalActive(true);
            setCurrentWorkshop(workshop);
          }}
        />
      );
    });
    return (
      <div key={id}>
        <div className={styles.ScheduleList}>{renderedRow}</div>
      </div>
    );
  };
  const dayRender = array => {
    let renderedDay = array.map(session => {
      return sessionRender(session.list, session.id);
    });
    return <div>{renderedDay}</div>;
  };
  const daySchedule = renderData => {
    return (
      <React.Fragment>
        {dayRender(renderData.workshopsList.session)}
      </React.Fragment>
    );
  };

  return (
    <div className={`App`}>
      <Header
        left={
          <div className={styles.ScheduleDateSelector}>
            <div
              className={currentSchedule === "5th" ? styles.active : undefined}
              onClick={() => setCurrentSchedule("5th")}
            >
              October 5<sup>th</sup>
            </div>
            <div
              className={currentSchedule === "6th" ? styles.active : undefined}
              onClick={() => setCurrentSchedule("6th")}
            >
              October 6<sup>th</sup>
            </div>
          </div>
        }
        right={
          <a
            href='https://www.eventbrite.com/e/school-of-startups-2019-tickets-71047373607'
            target='__blank'
            className={styles.anchorButton}
          >
            <Button
              height='70px'
              width='150px'
              name='Get your ticket'
              specialClass='headerButton'
            />{" "}
          </a>
        }
        display='timeline'
      />
      <CanvasContent hasBorder='true'>
        <p className={styles.infoText}>
          The Event will be held in Maria01, Lapinlahdenkatu 16. <br />
          Workshops are divided into 5 spaces inside Maria01: <br />
          The Shortcut, Vertical, Icebreakers, Maria01 event space, Games
          Factory
        </p>
        <div className={styles.ScheduleList}>
          {currentSchedule === "5th"
            ? daySchedule(data.firstDay)
            : daySchedule(data.secondDay)}
        </div>
      </CanvasContent>
      <Modal active={modalActive} onModalClick={onModalClick}>
        <WorkshopCard workshop={currentWorkshop} />
      </Modal>
    </div>
  );
};

export default Schedule;
