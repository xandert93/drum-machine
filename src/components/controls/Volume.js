import React from 'react';
import { GlobalConsumer } from '../../contexts/globalContext';

function Volume() {
  return (
    <GlobalConsumer>
      {({ volume, changeVolume }) => (
        <div className="volume">
          <p className="volume__text">VOL: {volume}</p>
          <input
            className="volume__slider"
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
