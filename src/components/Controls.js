import React from 'react';
import Volume from './controls/Volume';
import PowerButton from './controls/PowerButton';
import SoundDisplay from './controls/SoundDisplay';
import { GlobalConsumer } from '../contexts/globalContext';

function Controls() {
  return (
    <GlobalConsumer>
      {({ power, setDisplayNode }) => (
        <div className="controls-container">
          <PowerButton />
          {power && (
            <>
              <SoundDisplay setDisplayNode={setDisplayNode} />
              <Volume />
            </>
          )}
        </div>
      )}
    </GlobalConsumer>
  );
}
export default Controls;
