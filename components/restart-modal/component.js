import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Icon from 'components/icon';

import * as gtag from 'utils/gtag';

export default function RestarModal({ onRestartApp, onClose }) {

  const [isCopied, setCopy] = useState(false);

  const copyToClipboard = async (event) => {
    if (!navigator.clipboard) { return; }  

    
    try {
      const link = window.location.href;
      await navigator.clipboard.writeText(link);
      
      event.target.dataset.clipboard = link;
      setCopy(true);

      setTimeout(() =>{
        delete event.target.dataset.clipboard;
        setCopy(false)
      }, 3000);    
    } catch (error) {
      console.error("Copy failed", error);
    }

  }

  const trackDownloads = () => (
    gtag.event({
      action: 'Download report',
      category: 'downloads',
      label: 'Number of downloads',
      value: 'Download report'
    })
  );
  return (
    <div className="c-restart-modal">
      <div className="wrapper">
        <div className="restat-modal-content">
          <h1>Congratulations! You’ve completed our puzzle.</h1>
          <p>What do you want to do now?</p>
          
          <ul>
            <li className={cx('share', { '-copied': isCopied })} onClick={copyToClipboard}>
              <div className="triangle" />
              Share this experience with a friend.
            </li>    
            <li>
              <div className="triangle" />
              <a
                href={'href'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackDownloads}
              >
                Download the full report.
              </a>
            </li>
            <li onclick={onRestartApp}><div className="triangle" />Play again.</li>
          </ul>
          <p>What do you want to do now?</p>
          <a
            href="https://www.vizzuality.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackDownloads}
          >
            Visit our website.
          </a>
        </div>
        <h2>vizzuality.</h2>
      </div>
      <button
        aria-label="close button"
        type="button"
        className="close--btn"
        onClick={(e) => e.stopPropagation() || onClose()}
      >
        <Icon name="menu-close" className="-medium" />
      </button>
    </div>
  );
};

RestarModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onRestartApp: PropTypes.func.isRequired
};


