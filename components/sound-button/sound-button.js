import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as gtag from 'utils/gtag';

const SoundButton = ({ allowedSound, setAllowedSound, className }) => {
  
  return (
    <button 
      className={cx('c-sound-button',
        className={ [className]: className })} type="button" onClick={() => {
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

SoundButton.proptypes = {
  className: PropTypes.string.isRequired
};

export default SoundButton;