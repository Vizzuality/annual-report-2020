import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router'

import Icon from 'components/icon';

import * as gtag from 'utils/gtag';

export default function RestarModal({ onRestartApp, onClose }) {

 const copyToClipboard = () => {
    var dummy = document.createElement("textarea");
    dummy.value = 'http://localhost:3003/';
    dummy.select();
    document.execCommand("copy");
  };

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
            <li onClick={copyToClipboard}><div className="triangle" />
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


