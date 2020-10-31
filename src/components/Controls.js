import React, { Component } from "react";
import Volume from "./Volume";
import Power from "./Power";
import SoundDisplay from "./SoundDisplay";

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      powerSwitched: false,
      power: false,
    };
  }

  togglePowerSwitch = () => {
    this.setState({ powerSwitched: !this.state.powerSwitched });
  };

  togglePower = () => {
    this.setState({ power: !this.state.power });
  };

  render() {
    let { volume, setVolume } = this.props;
    let { powerSwitched, power } = this.state;
    return (
      <div className="controls-container">
        <Power
          powerSwitched={powerSwitched}
          togglePower={this.togglePower}
          togglePowerSwitch={this.togglePowerSwitch}
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
