import "./App.css";

import React, { Component } from "react";
import Header from "./components/Header";
import DrumPadContainer from "./components/DrumPadContainer";
import Controls from "./components/Controls";
import Footer from "./components/Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      power: false,
    };
  }

  render() {
    let { power } = this.state;
    return (
      <div className="app">
        <Header />
        <div className="drum-machine">
          <DrumPadContainer />
          <Controls power={power} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
