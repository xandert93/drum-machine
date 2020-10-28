import React, { Component, createRef } from "react";

class DrumPad extends Component {
  constructor() {
    super();
    this.audioRef = createRef();
    this.state = {
      drumpadActive: false,
    };
  }

  handleKeyPress = (e) =>
    e.key.toUpperCase() === this.props.letter && this.playAudio();

  playAudio = (e) => {
    this.setState({ drumpadActive: true });
    let audio = this.audioRef.current;
    audio.volume = document.querySelector('input[type="range"]').value / 100;
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => this.setState({ drumpadActive: false }), 200);
    document.querySelector(".textbox").innerText = audio.id;
  };

  render() {
    let { letter, soundURL, id } = this.props;
    let { drumpadActive } = this.state;
    return (
      <button
        className={drumpadActive ? "drumpad active" : "drumpad"}
        onClick={this.playAudio}
      >
        {letter}
        <audio ref={this.audioRef} src={soundURL} id={id}></audio>
      </button>
    );
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }
}

export default DrumPad;
