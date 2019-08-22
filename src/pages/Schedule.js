import React, { useState } from "react";
import Header from "../components/Header";
import CanvasContent from "../components/CanvasContent";
import Modal from "../components/Modal";
import ScheduleButton from "../components/ScheduleButton";
import WorkshopCard from "../components/WorkshopCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Schedule() {
  const [modalActive, setModalActive] = useState(false);
  const [workshopType, setWorkshopType] = useState("Tech");
  const onModalClick = e => {
    if (e.target.className.includes("modalContainer")) {
      setModalActive(false);
    }
  };
  return (
    <div className="App">
      <Header />
      <CanvasContent hasBorder="true">
        <Modal active={modalActive} onModalClick={onModalClick}>
          <WorkshopCard type={workshopType} />
        </Modal>
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
      </CanvasContent>
    </div>
  );
}

export default Schedule;
