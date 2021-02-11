import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Icon from 'components/icon';

import * as gtag from 'utils/gtag';
import { useRouter } from 'next/router';

export default function FinalModal({ onClose }) {

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
  const router = useRouter();

  return (
    <div className="c-final-modal">
      <div className="wrapper">
        <div className="final-modal-content">
          <h1>Congratulations! You’ve completed our puzzle.</h1>
          <p>What do you want to do now?</p>

          <ul>
            <li className={cx("share", { '-copied': isCopied })} onClick={copyToClipboard}>
              <div className="triangle" />
              {isCopied ? 'Url copied to clipboard' : 'Share this experience with a friend.'}
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
            <li onClick={() => router.reload()}><div className="triangle" />Play again.</li>
          </ul>
          <p>What do you want to do now?</p>
          <a
            href="https://www.vizzuality.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackDownloads}
          >
            <div className="triangle" />Visit our website.
          </a>
        </div>
        <h2 className="vizzualiy-logo">vizzuality.</h2>
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

FinalModal.propTypes = {
  onClose: PropTypes.func.isRequired
};


