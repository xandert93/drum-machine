import React from "react";

function Power({ power, togglePower }) {
  return (
    <div className={power ? "switch-container on" : "switch-container"}>
      <button
        onClick={togglePower}
        className={power ? "switch on" : "switch"}
      ></button>
      <span className="fas fa-power-off on"></span>
      <span className="fas fa-power-off off"></span>
    </div>
  );
}

export default Power;
