import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ styles, link, name }) => {
  return (
    <div className={styles.navButton}>
      <NavLink
        exact
        to={link}
        activeClassName='active'
        className={styles.navButtonName}
      >
        {name}
      </NavLink>
    </div>
  );
};

export default NavButton;
