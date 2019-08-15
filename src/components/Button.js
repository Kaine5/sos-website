import React from "react";
import buttonStyles from "../styles/Buttons.module.scss";

const Button = props => {
  return (
    <div className={buttonStyles.btnContainer}>
      <div className={buttonStyles.btn}>{props.name}</div>
    </div>
  );
};

export default Button;
