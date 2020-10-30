import React from "react";

function Volume({ volume, setVolume }) {
  return (
    <div className="volume-container">
      <p className="volume-text">VOL: {volume}</p>
      <input
        className="volume-slider"
        value={volume}
        onChange={setVolume}
        type="range"
      ></input>
    </div>
  );
}

export default Volume;
