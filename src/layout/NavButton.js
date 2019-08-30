import React from "react";
import PropTypes from "prop-types";
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

NavButton.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string
};
export default NavButton;
