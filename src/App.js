import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header";
import DrumPadContainer from "./components/DrumPadContainer";
import Controls from "./components/Controls";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      powerSwitched: false,
      power: false,
      volume: 50,
    };
  }

  togglePowerSwitch = () => {
    this.setState({ powerSwitched: !this.state.powerSwitched });
  };

  togglePower = () => {
    this.setState({ power: !this.state.power });
  };

  setVolume = (e) => {
    this.setState({ volume: e.target.value });
  };

  render() {
    let { powerSwitched, power, volume } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="drum-machine">
          <ErrorBoundary>
            <DrumPadContainer power={power} volume={volume} />
          </ErrorBoundary>
          <Controls
            powerSwitched={powerSwitched}
            power={power}
            volume={volume}
            setVolume={this.setVolume}
            togglePowerSwitch={this.togglePowerSwitch}
            togglePower={this.togglePower}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
