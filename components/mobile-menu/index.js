import React, { useState } from 'react';
import cx from 'classnames';

import Icon from 'components/icon';
import Download from 'components/download';
import SocialMedia from 'components/social-media';

const MobileMenu = () => {
  const [isOpen, setMenu] = useState(false);

  const handleMenu = () => {
    console.log(isOpen)
    setMenu(!isOpen);
  };

  return (
    <div className="c-mobile-menu">
      {/* <a
        href={'href'}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackDownloads}
      >
        {isMobile ? 'PDF' : 'Download full report.'}
      </a> */}
      <button onClick={handleMenu}>
        <Icon name={isOpen ? "menu-close" : "menu"} className="-light" />

      </button>
      {isOpen && (
        <div className="menu-content">
          <Download className="-mobile" />
          <SocialMedia className="-mobile" />
          <a
            href="https://www.vizzuality.com/privacy-policy"
            title="Privacy policy"
            target="_blank"
            className="privacy-link"
          >
            Privacy policy.
          </a>
        </div>
      )}
    </div>
  );
};



export default MobileMenu;
