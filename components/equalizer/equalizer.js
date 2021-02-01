import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Equalizer = ({ allowedSound }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={cx("c-equalizer", { 'animate': allowedSound })} viewBox="0 0 40 40">
    <g>
      <title>Sound enabled icon</title>
      <rect className="bar" transform="translate(0,0)" y="0" rx="2"></rect>
      <rect className="bar" transform="translate(5,0)" y="0" rx="2"></rect>
      <rect className="bar" transform="translate(10,0)" y="0" rx="2"></rect>
      <rect className="bar" transform="translate(15,0)" y="0" rx="2"></rect>
      <rect className="bar" transform="translate(20,0)" y="0" rx="2"></rect>
    </g>
  </svg>
);

Equalizer.proptypes = {
  allowedSound: PropTypes.bool
};

export default Equalizer;