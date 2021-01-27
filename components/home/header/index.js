import React from 'react';
import PropTypes from 'prop-types';
import Download from 'components/download';
import SocialMedia from 'components/social-media';

export default function Header({ isMobile }) {

  return (
    <header className="c-home-header">
      <a
        href="https://www.vizzuality.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        2020 impact review by <br /><span>vizzuality</span>
      </a>
      <Download isMobile={isMobile} />
      <SocialMedia isMobile={isMobile}/>
    </header>
  );
};

Header.propTypes = {
  isMobile: PropTypes.boolean
};

Header.defaultProps = {
  isMobile: false
};