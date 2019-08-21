import React from "react";
import PropTypes from "prop-types";

const CanvasContent = React.forwardRef((props, ref) => {
  return (
    <div
      className={props.hasBorder ? "Canvas hasBorder" : "Canvas"}
      ref={ref}
      onScroll={props.onScroll}
    >
      <div className="CanvasContent">{props.children}</div>
    </div>
  );
});

CanvasContent.propTypes = {
  onScroll: PropTypes.func
};

export default CanvasContent;
