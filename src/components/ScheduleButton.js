import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ScheduleButton.module.scss";

const ScheduleButton = props => {
  return (
    <div
      className={`${styles.ScheduleButton} ${styles[props.type]}`}
      onClick={props.onClick}
    >
      <div className={styles.ScheduleButtonTitle}>{props.title}</div>
      <div className={styles.ScheduleButtonSpeaker}>{props.speaker}</div>
      <div className={styles.sideText}>{props.type}</div>
    </div>
  );
};

const validType = (props, propName, componentName) => {
  const buttonTypes = ["Business", "Tech", "Design"];
  if (buttonTypes.indexOf(props[propName]) === -1) {
    return new Error(
      `Invalid prop ${propName} passed to ${componentName}. Expected "Business", "Tech" or "Design".`
    );
  }
};

ScheduleButton.propTypes = {
  type: validType,
  title: PropTypes.string,
  onClick: PropTypes.func
};

export default ScheduleButton;
