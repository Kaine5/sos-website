import React, { useRef, useState } from "react";
import Header from "../components/Header";
import CanvasContent from "../components/CanvasContent";
import LandingSchedule from "../components/LandingSchedule";
import LandingPartners from "../components/LandingPartners";
import Button from "../components/Button";
// import { Link as ScrollLink, Element } from "react-scroll";
import Footer from "../layout/Footer";
import "../App.scss";
import styles from "../styles/Home.module.scss";

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
    <div className='App'>
      {showHeader && <Header />}
      <CanvasContent ref={contentScroll} onScroll={checkScroll}>
        <div className={styles.landingBackground}>
          <img
            src='/img/background.png'
            alt='shortcut-bg'
            className={styles.homeImg}
          />
          <i className='fas fa-chevron-down' />
        </div>

        <LandingSchedule />

        <iframe
          width='100%'
          height='700'
          src='https://www.youtube.com/embed/DDByv3z_z_U'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='sos-video'
        />

        <LandingPartners />

        <div className='interact-buttons'>
          <Button height='30vw' width='30vw' name='join' />
          <Button height='30vw' width='30vw' name='get involved' />
        </div>

        <Footer />
      </CanvasContent>
    </div>
  );
}

export default Home;
