import React from "react";
import NavButton from "./NavButton";
import styles from "../styles/Navbar.module.scss";

const Navbar = ({ hideNav, openNav }) => {
  return (
    <div
      className={hideNav ? `${styles.Navbar} ${styles.hide}` : styles.Navbar}
      onClick={() => openNav()}
    >
      <NavButton link='/' name='home' styles={styles} />
      <NavButton link='/schedule/' name='schedule ' styles={styles} />
      <NavButton link='/getinvolved/' name='get involved' styles={styles} />
    </div>
  );
};

export default Navbar;
