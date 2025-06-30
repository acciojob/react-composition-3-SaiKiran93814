import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <button>Hover over me</button>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is a another tooptip">
        <span style={{ textDecoration: "underline", cursor: "pointer" }}>
          Hover over me to see another tooltip
        </span>
      </Tooltip>
    </div>
  );
}

export default App;
