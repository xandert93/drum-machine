import React, { Component, createRef } from 'react';

export class SoundDisplay extends Component {
  constructor(props) {
    super(props);
    this.displayRef = createRef();
  }

  render() {
    return (
      <div ref={this.displayRef} className="sound-display">
        Hit a Key...
      </div>
    );
  }

  componentDidMount() {
    this.props.setDisplayNode(this.displayRef.current);
  }
}

export default SoundDisplay;
