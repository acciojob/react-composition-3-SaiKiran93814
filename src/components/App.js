import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      <Tooltip text="This is a tooltip">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <br /><br />

      <Tooltip text="This is another tooltip">
        <p>Hover over this paragraph</p>
      </Tooltip>
    </div>
  );
}

export default App;
