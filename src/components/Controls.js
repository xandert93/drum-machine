import React, { Component } from "react";
import Volume from "./Volume";
import Power from "./Power";
import SoundDisplay from "./SoundDisplay";

class Controls extends Component {
  constructor() {
    super();
    this.state = { power: false };
  }

  togglePower = () => {
    this.setState({ power: !this.state.power });
  };

  render() {
    let { volume, setVolume } = this.props;
    let { power } = this.state;
    return (
      <div className="controls-container">
        <Power power={power} togglePower={this.togglePower} />
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
