import React from 'react';

import Download from 'components/download';
import SocialMedia from 'components/social-media';

const HomeHeaderDesktop = () => (
  <div className="c-header-desktop">
    <a
      className="header-description"
      href="https://www.vizzuality.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Spotlight on 2020 by <span>vizzuality.</span></p>
    </a>
    <Download className="-desktop" />
    <SocialMedia className="-desktop" />
  </div>
);

export default HomeHeaderDesktop;
