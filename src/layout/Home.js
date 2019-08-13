import React, { useRef, useState } from "react";
import Header from "./Header";
import CanvasContent from "./CanvasContent";
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
      <CanvasContent ref={contentScroll} onScroll={checkScroll} />
    </div>
  );
}

export default Home;
