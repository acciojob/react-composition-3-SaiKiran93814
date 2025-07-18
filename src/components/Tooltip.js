import React, { useState } from "react";
import "../styles/App.css";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false),
    children: (
      <>
        {children.props.children}
        {visible && <div className="tooltiptext">{text}</div>}
      </>
    )
  });
};

export default Tooltip;
