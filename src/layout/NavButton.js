import React from "react";
import { Link } from "react-router-dom";

const NavButton = props => {
  return (
    <div className="navButton">
      <Link to={props.link} className="navButton-name">
        {props.name}
      </Link>
    </div>
  );
};

export default NavButton;
