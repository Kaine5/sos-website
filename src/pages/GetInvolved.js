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
            <Button height='20vw' width='20vw' name='Be a sponsor'
              backgroundImage={`url("/img/btn-illustration21.png")`}
            />

          </div>

          <div className={styles.btnImage}>
            <Button height='20vw' width='20vw' name='Volunteer in the events'
              backgroundImage={`url("/img/btn-illustration3.png")`}
            />

          </div>
        </div>
      </CanvasContent>
    </div>
  );
};

export default GetInvolved;
