import React from "react";
import NavButton from "../components/NavButton";

const Navbar = props => {
  return (
    <div className="Navbar">
      <NavButton name="home" />
      <NavButton name="schedule" />
      <NavButton name="get involved" />
    </div>
  );
};

export default Navbar;
