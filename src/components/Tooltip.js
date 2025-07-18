import React, { useState, cloneElement } from "react";
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const tooltipElement = visible ? (
    <div className="tooltiptext">{text}</div>
  ) : null;

  return cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    children: (
      <>
        {children.props.children}
        {tooltipElement}
      </>
    ),
  });
};

export default Tooltip;
