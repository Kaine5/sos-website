import React from "react";

const NavButton = props => {
  return (
    <div className="navButton">
      <div className="navButton-name">{props.name}</div>
    </div>
  );
};

export default NavButton;
