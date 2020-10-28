import React, { Component } from "react";

class Switch extends Component {
  constructor() {
    super();
    this.state = { power: false };
  }

  togglePower = () => {
    this.setState({ power: !this.state.power });
  };

  render() {
    let { power } = this.state;
    return (
      <div className="switch-container">
        <div
          className={power === false ? "power-btn" : "power-btn on"}
          onClick={this.togglePower}
        >
          <i
            className={
              power === false ? "fas fa-power-off" : "fas fa-power-off on"
            }
          ></i>
        </div>
      </div>
    );
  }
}

export default Switch;
