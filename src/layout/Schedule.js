import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import CanvasContent from "./CanvasContent";

function Home() {
  return (
    <div className="App">
      <Header />
      <CanvasContent />
    </div>
  );
}

export default Home;
