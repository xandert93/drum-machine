import React, { Component, createRef } from 'react';

class DrumPad extends Component {
  constructor() {
    super();
    this.state = { isDrumPadActive: false };
    this.audioRef = createRef();
  }

  handleKeyUp = (e) => {
    if (!this.props.power) return;
    e.key.toUpperCase() === this.props.letter && this.playAudio();
  };

  playAudio = (e) => {
    this.setState({ isDrumPadActive: true });
    const audio = this.audioRef.current;
    audio.volume = this.props.volume / 100;
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => this.setState({ isDrumPadActive: false }), 100);
    this.props.displayNode.textContent = audio.id;
  };

  render() {
    let { letter, soundURL, id, power } = this.props;
    let { isDrumPadActive } = this.state;
    return (
      <div
        className={`drum-set__drum-pad ${
          isDrumPadActive ? 'drum-set__drum-pad--active' : ''
        }`}
        style={{ pointerEvents: power ? 'auto' : 'none' }}
        onClick={power ? this.playAudio : undefined}
      >
        {letter}
        <audio ref={this.audioRef} src={soundURL} id={id}></audio>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }
}

export default DrumPad;
