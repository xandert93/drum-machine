import './App.scss';

import React, { Component } from 'react';
import Header from './components/layout/Header';
import DrumSet from './components/DrumSet';
import Controls from './components/Controls';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { GlobalProvider } from './contexts/globalContext';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: false,
      volume: 50,
      displayNode: null,
    };
  }

  setPower = () => this.setState((state) => ({ power: !state.power }));
  changeVolume = (e) => this.setState({ volume: e.target.value });
  setDisplayNode = (node) => this.setState({ displayNode: node });

  render() {
    const { setPower, changeVolume, setDisplayNode } = this;
    return (
      <div className="app">
        <Header />
        <div className="drum-machine-container">
          <GlobalProvider
            value={{ ...this.state, setPower, changeVolume, setDisplayNode }}
          >
            <Controls />
            <ErrorBoundary>
              <DrumSet />
            </ErrorBoundary>
          </GlobalProvider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
