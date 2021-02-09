import React, { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';

import Icon from 'components/icon';
import Download from 'components/download';
import SocialMedia from 'components/social-media';


const HomeHeaderMobile = () => {
  const [isOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <div className={cx('c-header-mobile', { '-open': isOpen } )}>
      <p className="header-description">2020 by <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
        vizzuality.</a>
      </p>

      <button className="header-menu--button" onClick={handleMenu}>
        <Icon name={isOpen ? "menu-close" : "menu"} className="-medium -dark" />

      </button>
      {isOpen && (
        <div className="menu-content">
          <ul className="menu">
            <li className="menu-item">
              <h2 className="-block0">Building knowledge.</h2>
              <div>
                <Link href={{ pathname: '/report/0/[slug]', query: { slug: '0' } }}>
                  Digital tools,
                </Link>
                {' '}
                <Link href={{ pathname: '/report/0/[slug]', query: { slug: '1' } }}>
                  Open data,
                </Link>
                {' '}
                <Link href={{ pathname: '/report/0/[slug]', query: { slug: '2' } }}>
                  The future.
                </Link>
                {' '}
              </div>
            </li>
            <li className="menu-item">
              <h2 className="-block1">Working together.</h2>
              <div>
                <Link href={{ pathname: '/report/1/[slug]', query: { slug: '0' } }}>
                  Collaboration,
                </Link>
                {' '}
                <Link href={{ pathname: '/report/1/[slug]', query: { slug: '1' } }}>
                  A place to be,
                </Link>
                {' '}
                <Link href={{ pathname: '/report/1/[slug]', query: { slug: '2' } }}>
                  Go faster.
                </Link>
                {' '}
              </div>
            </li>
            <li className="menu-item">
              <h2 className="-block2">Change is possible.</h2>
              <div>
                <Link href={{ pathname: '/report/2/[slug]', query: { slug: '0' } }}>
                  Detection,
                </Link>
                {' '}
                <Link href={{ pathname: '/report/2/[slug]', query: { slug: '1' } }}>
                  Supply chains,
                </Link>
                {' '}
                <Link href={{ pathname: '/report/2/[slug]', query: { slug: '2' } }}>
                  Covid action.
                </Link>
                {' '}
              </div>
            </li>
          </ul>
          <div className="sub-menu">
            <Download className="-mobile sub-menu-item" />
            <SocialMedia className="-mobile sub-menu-item" />
            <a
              href="https://www.vizzuality.com/privacy-policy"
              title="Privacy policy"
              target="_blank"
              className="privacy-link sub-menu-item"
            >
              Privacy policy.
            </a>
          </div>

        </div>
      )}
    </div>
  );
};

export default HomeHeaderMobile;
