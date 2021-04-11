import React from 'react';
import { GlobalConsumer } from '../contexts/globalContext';
import { sounds } from '../data/sounds';
import DrumPad from './DrumPad';

function DrumPadsContainer() {
  return (
    <GlobalConsumer>
      {({ power, volume, displayNode }) => (
        <div className="drumpads-container">
          {sounds.map(({ id, letter, url }) => (
            <DrumPad
              key={id}
              letter={letter}
              soundURL={url}
              id={id}
              power={power}
              volume={volume}
              displayNode={displayNode}
            />
          ))}
        </div>
      )}
    </GlobalConsumer>
  );
}

export default DrumPadsContainer;
