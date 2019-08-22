import React, { useRef, useState } from "react";
import Header from "../components/Header";
import CanvasContent from "../components/CanvasContent";
import LandingSchedule from "../components/LandingSchedule";
import LandingPartners from "../components/LandingPartners";
import Button from "../components/Button";

import Footer from "../layout/Footer";
import "../App.scss";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const contentScroll = useRef();
  const [showHeader, setShowHeader] = useState(false);

  const checkScroll = () => {
    if (contentScroll.current.scrollTop >= 200) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    //this function should check for vh offset (Will need a formula to calculate the percentage) and show the header if needed
  };

  return (
    <div className="App">
      {showHeader && <Header />}
      <CanvasContent ref={contentScroll} onScroll={checkScroll}>
        <div className={styles.landingBackground}>
          <div className={styles.arrow}>
            <a href="#landingSchedule">
              <FontAwesomeIcon
                icon={faChevronDown}
                size="3x"
                className={styles.bounce}
              />
            </a>
          </div>
        </div>

        <LandingSchedule />
        <div className="resp-container">
          <iframe
            className="resp-iframe"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DDByv3z_z_U"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="sos-video"
          />
        </div>
        <LandingPartners />

        <div className={styles.wrapper}>
          <div className={styles.interactButtons}>
            <Button
              height="23vw"
              width="49%"
              name="join"
              backgroundImage={`url("/img/Joinbutton.png")`}
            />
            <Button
              height="23vw"
              width="49%"
              name="get involved"
              backgroundImage={`url("/img/Getinvolved.png")`}
            />
          </div>

          <Footer className={styles.footer} />
        </div>
      </CanvasContent>
    </div>
  );
}

export default Home;
