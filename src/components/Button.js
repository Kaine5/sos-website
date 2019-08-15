import React from "react";
import buttonStyles from "../styles/Buttons.module.scss";

const Button = props => {
  return (
    <div
      className={buttonStyles.btnContainer}
      style={{ height: props.height, width: props.width }}
    >
      <div className={buttonStyles.btn}>
        <div className={buttonStyles.textContainer}>
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Button;
