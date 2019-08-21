import React from "react";
import Header from "./Header";
import CanvasContent from "./CanvasContent";
import styles from "../styles/rebutton.module.scss";

function Home() {
  return (
    <div className="App">
      <Header />
      <CanvasContent>
        <div className={styles.button}>LOUDER</div>
      </CanvasContent>
    </div>
  );
}

export default Home;
