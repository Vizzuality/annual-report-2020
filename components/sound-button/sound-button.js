import React from 'react';
import * as gtag from 'utils/gtag';

const SoundButton = ({ allowedSound, setAllowedSound }) => {
  
  return (
    <button className="c-sound-button" type="button" onClick={() => {
      gtag.event({
        action: 'Sound',
        category: 'sound',
        label: `${!allowedSound ? 'OFF' : 'ON'}`,
        value: allowedSound
      })
      return (setAllowedSound(!allowedSound))
    }}>
      <span>
        SOUND{' '}
      </span>
      <span>
        {!allowedSound ? 'OFF' : 'ON'}
      </span>
    </button>
  );
};

export default SoundButton;