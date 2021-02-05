import React from 'react';

import Download from 'components/download';
import SocialMedia from 'components/social-media';

const HomeHeaderDesktop = () => (
  <div className="c-header-desktop">
    <p className="header-description">
      Spotlight on 2020 by <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer"> 
        vizzuality.
      </a>
    </p>
    <Download className="-desktop" />
    <SocialMedia className="-desktop" />
  </div>
);

export default HomeHeaderDesktop;
