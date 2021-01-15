import React from 'react';
import Download from 'components/download';
import SocialMedia from 'components/social-media';

export default function Header() {

  return (
    <header className="c-home-header">
      <a
        href="https://www.vizzuality.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        2020 impact review by <span>vizzuality</span>
      </a>
      <Download />
      <SocialMedia/>
    </header>
  );
};

