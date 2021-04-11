import React from 'react';
import { GlobalConsumer } from '../../contexts/globalContext';

function Volume() {
  return (
    <GlobalConsumer>
      {({ volume, changeVolume }) => (
        <div className="volume-container">
          <p className="volume-text">VOL: {volume}</p>
          <input
            className="volume-slider"
            value={volume}
            onChange={changeVolume}
            type="range"
          ></input>
        </div>
      )}
    </GlobalConsumer>
  );
}

export default Volume;
