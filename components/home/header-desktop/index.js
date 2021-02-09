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
    <div
      className={cx('c-header-desktop ', { '-open': isOpen })}
      id="main-menu"
      role="menu"
      aria-labelledby="main-menu-button"
    >
      <p className="header-description">Spotlight on 2020 by <a href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
        vizzuality.</a>
      </p>

      <button 
        className="header-menu--button"
        onClick={handleMenu}
        id="main-menu-button"
        aria-haspopup="true"
        aria-controls="main-menu"
        aria-expanded={isOpen}
      >
        <Icon name={isOpen ? "menu-close" : "menu"} className="-medium -dark" />
      </button>
      {isOpen && (
        <nav className="menu-content" role="navigation">
          <ul className="menu" role="menubar">
            <li className="menu-item">
              <h2 id="Building knowledge" className="-block0" role="menuitem" tabIndex="-1">Building knowledge.</h2>
              <ul arialabelledby="Building knowledge" role="menu" className="menu-item-wrapper">
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
              <h2 id="Working together" className="-block1" role="menuitem" tabIndex="-1">Working together.</h2>
              <ul arialabelledby="Working together" role="menu" className="menu-item-wrapper">
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
              <h2 id="Change is possible" className="-block2" role="menuitem" tabIndex="-1">Change is possible.</h2>
              <ul arialabelledby="Change is possible" role="menu" className="menu-item-wrapper">
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
        </nav>
      )}
    </div>
  )
};

export default HomeHeaderDesktop;
