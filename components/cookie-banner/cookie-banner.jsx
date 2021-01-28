import React from 'react';
import { PropTypes } from 'prop-types';

function CookieBanner({ setAccepted, accepted }) {
  return accepted ? null : (
    <div className="c-cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          This website uses cookies to ensure you get the best experience on our website. Read our {' '}
          <a className="cookie-link" href="https://www.vizzuality.com/privacy-policy" title="Privacy policy" target="_blank">
            privacy policy
          </a>
          {' '}to know more.
        </div>
        <button onClick={setAccepted} className="cookie-button">
          Got it!
        </button>
      </div>
    </div>
  );
}

CookieBanner.propTypes = {
  setAccepted: PropTypes.func.isRequired,
  accepted: PropTypes.bool
};

export default CookieBanner;
