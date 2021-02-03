import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Icon from 'components/icon';

import * as gtag from 'utils/gtag';

export default function Download({ className }) {

  const trackDownloads = () => (
    gtag.event({
      action: 'Download report',
      category: 'downloads',
      label: 'Number of downloads',
      value: 'Download report'
    })
  );

  return (
    <div className={cx('c-download', { [className]: className })}>
      <div className="download-content">
      <a
        href={'href'}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackDownloads}
      >
        Download full report.
      </a>
      <Icon name="download" className="-medium"/>
      </div>
    </div>
  );
};

Download.propTypes = {
  className: PropTypes.string
};

Download.defaultProps = {
  className: ''
};


