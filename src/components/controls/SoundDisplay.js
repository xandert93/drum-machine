import React, { Component, createRef } from 'react';

export class SoundDisplay extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   screenWidth: window.innerWidth,
    // };
    this.displayRef = createRef();
  }

  render() {
    return (
      <div ref={this.displayRef} className="sound-display">
        {/* {this.state.screenWidth < 1200 ? 'Touch' : 'Press/Click'} a key! */}
        {/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
          ? 'Touch'
          : 'Press/Click'}{' '}
        a key!
      </div>
    );
  }

  componentDidMount() {
    this.props.setDisplayNode(this.displayRef.current);
    // window.onresize = () => this.setState({ screenWidth: window.innerWidth });
  }
}

export default SoundDisplay;
