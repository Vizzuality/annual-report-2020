import React from 'react';

const SoundButton = ({ allowedSound, setAllowedSound }) => {
  return (
    <button className="c-sound-button" onClick={() => setAllowedSound(!allowedSound)}>
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