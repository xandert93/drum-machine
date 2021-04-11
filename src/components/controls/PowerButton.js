import React, { Component } from 'react';
import { GlobalConsumer } from '../../contexts/globalContext';

export class PowerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPowerOn: false,
      clickable: true,
    };
  }

  setIsPowerOn = () =>
    this.setState((state) => ({
      isPowerOn: !state.isPowerOn,
      clickable: false,
    }));

  togglePower = (setPower) => {
    setPower();
    this.setState({ clickable: true });
  };

  render() {
    let { setIsPowerOn, togglePower } = this;
    let { isPowerOn, clickable } = this.state;
    return (
      <GlobalConsumer>
        {({ setPower }) => (
          <div className={`power-button-container ${isPowerOn ? 'open' : ''}`}>
            <button
              style={{ pointerEvents: `${!clickable ? 'none' : ''}` }}
              onClick={setIsPowerOn}
              onTransitionEnd={() => togglePower(setPower)}
              className={`power-button ${isPowerOn ? 'on' : ''}`}
            ></button>

            <span className="fas fa-power-off on"></span>
            <span className="fas fa-power-off off"></span>
          </div>
        )}
      </GlobalConsumer>
    );
  }
}

export default PowerButton;
