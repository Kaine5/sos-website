import React, { useState } from "react";
import Header from "../components/Header";
import CanvasContent from "../components/CanvasContent";
import Modal from "../components/Modal";
import ScheduleButton from "../components/ScheduleButton";
import WorkshopCard from "../components/WorkshopCard";
import Button from "../components/Button.js";
import styles from "../styles/Schedule.module.scss";
import data from "../data/Workshop.json";

const Schedule = () => {
  console.log(data);
  const [modalActive, setModalActive] = useState(false);
  const [workshopType, setWorkshopType] = useState("Tech");
  const [currentSchedule, setCurrentSchedule] = useState("5th");
  const onModalClick = e => {
    console.log(e.target.className);
    if (e.target.className) {
      if (
        e.target.className.includes("modalContainer") ||
        e.target.className.includes("Modal_icon")
      ) {
        setModalActive(false);
      }
    }
  };
  const firstDaySchedule = () => {
    return (
      <React.Fragment>
        <ScheduleButton
          type="Tech"
          title="This is a Tech button"
          onClick={() => {
            setWorkshopType("Tech");
            setModalActive(true);
          }}
        />
        <ScheduleButton
          type="Business"
          title="This is a business button"
          onClick={() => {
            setWorkshopType("Business");
            setModalActive(true);
          }}
        />
        <ScheduleButton
          type="Design"
          title="This is a Design button"
          onClick={() => {
            setWorkshopType("Design");
            setModalActive(true);
          }}
        />
      </React.Fragment>
    );
  };
  const secondDaySchedule = () => {
    return (
      <React.Fragment>
        <ScheduleButton
          type="Business"
          title="This is a business button"
          onClick={() => {
            setWorkshopType("Business");
            setModalActive(true);
          }}
        />
        <ScheduleButton
          type="Design"
          title="This is a design button"
          onClick={() => {
            setWorkshopType("Design");
            setModalActive(true);
          }}
        />
        <ScheduleButton
          type="Tech"
          title="This is a tech button"
          onClick={() => {
            setWorkshopType("Tech");
            setModalActive(true);
          }}
        />
        <ScheduleButton
          type="Business"
          title="This is a business button"
          onClick={() => {
            setWorkshopType("Business");
            setModalActive(true);
          }}
        />
        <ScheduleButton
          type="Design"
          title="This is a design button"
          onClick={() => {
            setWorkshopType("Design");
            setModalActive(true);
          }}
        />
        <ScheduleButton
          type="Tech"
          title="This is a tech button"
          onClick={() => {
            setWorkshopType("Tech");
            setModalActive(true);
          }}
        />
      </React.Fragment>
    );
  };
  return (
    <div className="App">
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
          <div>
            <Button height="70px" width="150px" name="Get your ticket" />{" "}
          </div>
        }
      />
      <CanvasContent hasBorder="true">
        <Modal active={modalActive} onModalClick={onModalClick}>
          <WorkshopCard type={workshopType} />
        </Modal>
        <div className={styles.ScheduleList}>
          {currentSchedule === "5th" ? firstDaySchedule() : secondDaySchedule()}
        </div>
      </CanvasContent>
    </div>
  );
};

export default Schedule;
