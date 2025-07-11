import React, { useState, cloneElement } from "react";
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const tooltipSpan = isVisible ? (
    <span className="tooltiptext">{text}</span>
  ) : null;

  // Clone the child and inject event handlers + class + tooltip span
  return cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    children: (
      <>
        {children.props.children}
        {tooltipSpan}
      </>
    ),
  });
};

export default Tooltip;
