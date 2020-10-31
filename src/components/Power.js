import React from "react";

function Power({ powerSwitched, togglePowerSwitch, togglePower }) {
  return (
    <div className={powerSwitched ? "switch-container on" : "switch-container"}>
      <button
        onClick={togglePowerSwitch}
        onTransitionEnd={togglePower}
        className={powerSwitched ? "switch on" : "switch"}
      ></button>
      <span className="fas fa-power-off on"></span>
      <span className="fas fa-power-off off"></span>
    </div>
  );
}

export default Power;
