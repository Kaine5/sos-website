import React from "react";
import headerStyles from "../styles/Header.module.scss";

const Header = props => {
  return (
    <div className={headerStyles.Header}>
      <div className={headerStyles.headerContent}>
        <div
          className={`${headerStyles.headerLeft} ${
            headerStyles[props.display]
          }`}
        >
          {/* <p>October 5th > 6th</p> <p> 2019 | The Shortcut</p> */}
          {props.left}
        </div>
        <div className={headerStyles.headerMiddle}>
          <a href="/">
            <img src="/img/sos-logo.png" alt="logo" />
          </a>
        </div>
        <div className={headerStyles.headerRight}>
          {/* <p>Lapinlahdenkatu 16,</p> <p>Helsinki | Maria 01</p> */}
          {props.right}
        </div>
      </div>
    </div>
  );
};

export default Header;
