import React from "react";
import CanvasContent from "../components/CanvasContent";
import Header from "../components/Header";
import styles from "../styles/GetInvolved.module.scss";
import Button from "../components/Button";

const GetInvolved = props => {
  return (
    <div className={styles.getInvolved}>
      <Header />

      <CanvasContent>
        <p className={styles.item1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className={styles.item2}>

          <div className={styles.btnImage}>
            <Button height='20vw' width='20vw' name='Be a sponsor' />
            <img src='/img/btn-illustration2.png' alt='btn2' />
          </div>

          <div className={styles.btnImage}>
            <Button height='20vw' width='20vw' name='Volunteer in the events' />
            <img src='/img/btn-illustration3.png' alt='btn3' />
          </div>
        </div>
      </CanvasContent>
    </div>
  );
};

export default GetInvolved;
