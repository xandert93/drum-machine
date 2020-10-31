import React, { Component } from "react";
import { sounds } from "../data/sounds";
import DrumPad from "./DrumPad";

class DrumPadContainer extends Component {
  render() {
    let drumpads = sounds.map(({ id, letter, url }) => (
      <DrumPad
        key={id}
        letter={letter}
        soundURL={url}
        id={id}
        power={this.props.power}
        volume={this.props.volume}
      />
    ));
    return <div className="drumpad-container">{drumpads}</div>;
  }
}

export default DrumPadContainer;
