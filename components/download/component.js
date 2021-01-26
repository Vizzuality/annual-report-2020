import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';

import * as gtag from 'utils/gtag';

export default function Download({ isMobile }) {

  const trackDownloads = () => (
    gtag.event({
      action: 'Download report',
      category: 'downloads',
      label: 'Number of downloads',
      value: 'Download report'
    })
  );

  return (
    <div className="c-download">
      <div className="download-content">
      <a
        href={'href'}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackDownloads}
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


