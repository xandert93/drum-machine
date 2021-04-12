import React from 'react';
import { GlobalConsumer } from '../contexts/globalContext';
import { sounds } from '../data/sounds';
import DrumPad from './DrumPad';

function DrumSet() {
  return (
    <GlobalConsumer>
      {({ power, volume, displayNode }) => (
        <div className={`drum-set ${power ? 'drum-set--on' : ''}`}>
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

export default DrumSet;
