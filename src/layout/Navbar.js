import React from "react";
import NavButton from "./NavButton";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <NavButton link='/' name='home' styles={styles} />
      <NavButton link='/schedule/' name='schedule ' styles={styles} />
      <NavButton link='/getinvolved/' name='get involved' styles={styles} />
    </div>
  );
};

export default Navbar;
