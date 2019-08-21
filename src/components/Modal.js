import React from "react";
import styles from "../styles/Modal.module.scss";

const Modal = props => {
  return (
    props.active && (
      <div className={styles.modalContainer} onClick={props.onModalClick}>
        <div className={styles.modalContent}>{props.children}</div>
      </div>
    )
  );
};

export default Modal;
