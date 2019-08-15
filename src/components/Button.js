import React from "react";
import buttonStyles from "../styles/Buttons.module.scss";

const Button = props => {
  return (
    <div className={buttonStyles.btnContainer}>
      <div
        className={buttonStyles.btn}
        style={{ height: props.height, weight: props.width }}
      >
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Button;
