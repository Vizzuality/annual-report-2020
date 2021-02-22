import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Spinner = ({ index }) => (
  <div
    className={cx("c-spinner", 
        { [`theme${index}`]: index + 1 > 0 }
    )}
  />
);


Spinner.propTypes = {
  color: PropTypes.number.isRequired
};

export default Spinner;
