import React from "react";
import styles from "../styles/Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Modal = props => {
  return (
    props.active && (
      <div className={styles.modalContainer} onClick={props.onModalClick}>
        <div className={styles.modalContent}>
          <div className={styles.closeButton}>
            <FontAwesomeIcon
              icon={faWindowClose}
              size="2x"
              className={styles.icon}
            />
          </div>
          {props.children}
        </div>
      </div>
    )
  );
};

export default Modal;
