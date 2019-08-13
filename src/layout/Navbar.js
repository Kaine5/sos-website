import React from "react";
import NavButton from "../components/NavButton";

const Navbar = props => {
  return (
    <div className="Navbar">
      <NavButton link="/" name="home" />
      <NavButton link="/schedule/" name="schedule" />
      <NavButton link="/getinvolved/" name="get involved" />
    </div>
  );
};

export default Navbar;
