import React from "react";
import NavButton from "./NavButton";
import styles from "../styles/Navbar.module.scss";

const Navbar = ({ hideNav, openNav }) => {
  return (
    <div
      className={hideNav ? `${styles.Navbar} ${styles.hide}` : styles.Navbar}
      onClick={() => openNav()}
    >
      <NavButton link="/" name="home" styles={styles} />
      {/* /schedule/ */}
      <NavButton link="/schedule/" name="schedule " styles={styles} />
      {/* /getinvolved/ */}
      <NavButton link="/getinvolved/" name="get involved" styles={styles} />
      <div className={`${styles.navButton} ${styles.onlyMobile}`}>
        <a
          href="https://www.eventbrite.com/e/school-of-startups-2019-tickets-71047373607"
          className={styles.navButtonName}
        >
          get your tickets
        </a>
      </div>
    </div>
  );
};

export default Navbar;
