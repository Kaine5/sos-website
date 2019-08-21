import React from "react";

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

export default CanvasContent;
