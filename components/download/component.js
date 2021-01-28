import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';

export default function Download({ isMobile }) {

  return (
    <div className="c-download">
      <div className="download-content">
      <a
        href={'href'}
        target="_blank"
        rel="noopener noreferrer"
      >
        {isMobile ? 'PDF' : 'Download full report.'}
      </a>
      <Icon name="download" className="-medium"/>
      </div>
    </div>
  );
};

Download.propTypes = {
  isMobile: PropTypes.boolean
};

Download.defaultProps = {
  isMobile: false
};


