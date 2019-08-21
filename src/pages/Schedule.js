import React, { useState } from "react";
import Header from "../components/Header";
import CanvasContent from "../components/CanvasContent";
import Modal from "../components/Modal";
import ScheduleButton from "../components/ScheduleButton";

function Schedule() {
  const [modalActive, setModalActive] = useState(false);
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
          <button onClick={() => setModalActive(false)}>Hide modal</button>
        </Modal>
        <button onClick={() => setModalActive(true)}>Show modal</button>
        <ScheduleButton
          type="Business"
          title="This is a business button"
          onClick={() => setModalActive(true)}
        />
        <ScheduleButton
          type="Design"
          title="This is a design button"
          onClick={() => setModalActive(true)}
        />
        <ScheduleButton
          type="Tech"
          title="This is a tech button"
          onClick={() => setModalActive(true)}
        />
      </CanvasContent>
    </div>
  );
}

export default Schedule;
