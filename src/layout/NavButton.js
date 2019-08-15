import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = props => {
  return (
    <div className="navButton">
      <NavLink
        exact
        to={props.link}
        activeClassName="active"
        className="navButton-name"
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default NavButton;
