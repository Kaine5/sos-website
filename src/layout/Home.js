import React, { useRef, useState } from "react";
import Header from "./Header";
import CanvasContent from "./CanvasContent";
import LandingSchedule from "../components/LandingSchedule";
import LandingPartners from "../components/LandingPartners";
import { Link as ScrollLink, Element } from "react-scroll";
import "./App.scss";

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
        <div className="landing-background slide">
          <img
            src="/img/background.png"
            alt="shortcut-bg"
            style={{ width: "100%", height: "auto" }}
          />
          <i className="fas fa-chevron-down" />
        </div>

        <LandingSchedule />

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DDByv3z_z_U"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />

        <LandingPartners />

        <div className="interact-buttons">
          <button>join</button>
          <button>get involved</button>
        </div>
        <div className="footer">The footer should be here</div>
      </CanvasContent>
    </div>
  );
}

export default Home;
