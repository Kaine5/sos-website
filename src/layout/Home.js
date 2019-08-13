import React, { useRef, useState } from "react";
import Header from "./Header";
import CanvasContent from "./CanvasContent";
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
        <ScrollLink
          activeClass="active"
          to="test1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Lmao
        </ScrollLink>
        <img src="/img/background.png" alt="shortcut-bg" />
        <Element name="test1" className="element">
          lol
        </Element>
      </CanvasContent>
    </div>
  );
}

export default Home;
