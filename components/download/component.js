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
          href="https://dl.dropboxusercontent.com/s/lqfsswrof1vl8ju/Spotlight%20on%202020%20by%20vizzuality.pdf"
          rel="noopener noreferrer"
          onClick={trackDownloads}
          className="download-link"
        >
          Download full report.
          <Icon name="download" className="-medium download-icon"/>
        </a>
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


