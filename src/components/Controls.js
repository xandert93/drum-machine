import React, { Component } from "react";
import Volume from "./Volume";
import Power from "./Power";
import SoundDisplay from "./SoundDisplay";

class Controls extends Component {
  render() {
    let {
      togglePowerSwitch,
      togglePower,
      powerSwitched,
      power,
      volume,
      setVolume,
    } = this.props;
    return (
      <div className="controls-container">
        <Power
          powerSwitched={powerSwitched}
          togglePower={togglePower}
          togglePowerSwitch={togglePowerSwitch}
        />
        {power && (
          <>
            <SoundDisplay />
            <Volume volume={volume} setVolume={setVolume} />
          </>
        )}
      </div>
    );
  }
}

export default Controls;
