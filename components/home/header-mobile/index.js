import React, { useState } from 'react';

import Icon from 'components/icon';
import Download from 'components/download';
import SocialMedia from 'components/social-media';


const HomeHeaderMobile = () => {
  const [isOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <div className="c-header-mobile">
      <p className="header-description">2020 by <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
        vizzuality.</a>
      </p>

      <button className="header-menu--button" onClick={handleMenu}>
        <Icon name={isOpen ? "menu-close" : "menu"} className="-medium -light" />

      </button>
      {isOpen && (
        <div className="menu-content">
          <Download className="-mobile menu-item" />
          <SocialMedia className="-mobile menu-item" />
          <a
            href="https://www.vizzuality.com/privacy-policy"
            title="Privacy policy"
            target="_blank"
            className="privacy-link menu-item"
          >
            Privacy policy.
          </a>
        </div>
      )}
    </div>
  );
};

export default HomeHeaderMobile;
