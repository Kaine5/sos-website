import React from "react";
import headerStyles from "../styles/Header.module.scss";

const Header = props => {
  return (
    <div className={headerStyles.Header}>
      <div className={headerStyles.headerContent}>
        <div className={headerStyles.headerLeft}>
          <p>October 5th > 6th</p> <p> 2019 | The Shortcut</p>
        </div>
        <div className={headerStyles.headerMiddle}>
          <img src="/img/sos-logo.png" alt="logo" />
        </div>
        <div className={headerStyles.headerRight}>
          <p>Lapinlahdenkatu 16,</p> <p>Helsinki | Maria 01</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
