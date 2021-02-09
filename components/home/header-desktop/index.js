import React, { useState } from 'react';
import cx from 'classnames';

import Link from 'next/link';

import Icon from 'components/icon';
import Download from 'components/download';
import SocialMedia from 'components/social-media';

const HomeHeaderDesktop = () => {
  const [isOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <div className={cx('c-header-desktop', { '-open': isOpen })}>
      <p className="header-description">Spotlight on 2020 by <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
        vizzuality.</a>
      </p>

      <button className="header-menu--button" onClick={handleMenu}>
        <Icon name={isOpen ? "menu-close" : "menu"} className="-medium -dark" />
      </button>
      {isOpen && (
        <div className="menu-content" role="navigation">
          <ul className="menu" role="menubar">
            <li className="menu-item">
              <h2 className="-block0" role="menuitem" tabIndex="0">Building knowledge.</h2>
              <ul role="menu" className="menu-item-wrapper">
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/0/[slug]', query: { slug: '0' } }}>
                    Digital tools,
                    </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/0/[slug]', query: { slug: '1' } }}>
                    Open data,
                    </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/0/[slug]', query: { slug: '2' } }}>
                    The future.
                    </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <h2 className="-block1">Working together.</h2>
              <ul role="menu" className="menu-item-wrapper">
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/1/[slug]', query: { slug: '0' } }}>
                    Collaboration,
                    </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/1/[slug]', query: { slug: '1' } }}>
                    A place to be,
                    </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/1/[slug]', query: { slug: '2' } }}>
                    Go faster.
                    </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <h2 className="-block2">Change is possible.</h2>
              <ul role="menu" className="menu-item-wrapper">
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/2/[slug]', query: { slug: '0' } }}>
                    Detection,
                    </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/2/[slug]', query: { slug: '1' } }}>
                    Supply chains,
                    </Link>
                </li>
                <li role="none">
                  <Link role="menuitem" tabIndex="0" href={{ pathname: '/report/2/[slug]', query: { slug: '2' } }}>
                    Covid action.
                    </Link>
                </li>
              </ul>
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
  )
};

export default HomeHeaderDesktop;
