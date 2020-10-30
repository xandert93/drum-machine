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
      volume: 50,
    };
  }

  setVolume = (e) => {
    this.setState({ volume: e.target.value });
  };

  render() {
    let { volume } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="drum-machine">
          <ErrorBoundary>
            <DrumPadContainer volume={volume} />
          </ErrorBoundary>
          <Controls volume={volume} setVolume={this.setVolume} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
