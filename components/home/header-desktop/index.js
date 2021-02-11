import React, { useState } from 'react';
import cx from 'classnames';
import Button from 'components/link-button';
import Icon from 'components/icon';
import Download from 'components/download';
import SocialMedia from 'components/social-media';

const HomeHeaderDesktop = ({
    setSelectedPiece,
    setPositionedPieces,
    positionedPieces,
    isHidden
  }) => {
  const [isOpen, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!isOpen);
  };

  const handleLinkClick = ({ category, index }) => {
    setSelectedPiece({ category, index });
    setPositionedPieces({ ...positionedPieces, [category]: {
      ...(positionedPieces || {})[category],
      [index]: true
    }});
    setMenu(false);
  };

  return (
    <div
      className={cx('c-header-desktop ', { '-open': isOpen, '-hidden': isHidden })}
      id="main-menu"
      role="menu"
      aria-labelledby="main-menu-button"
    >
      <p className="header-description">Spotlight on 2020 by <a title="vizzuality web" href="https://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
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
        <Icon name={isOpen ? "menu-close" : "menu"} className="-big -dark" />
      </button>
      {isOpen && (
        <nav className="menu-content" role="navigation">
          <ul className="menu" role="menubar">
            <li className="menu-item">
              <h2 id="Building knowledge" className="-block0" role="menuitem" tabIndex="-1">Building knowledge.</h2>
              <ul arialabelledby="Building knowledge" role="menu" className="menu-item-wrapper">
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={0}
                    index={0}
                  >
                    Digital tools,
                  </Button>
                </li>
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={0}
                    index={1}
                  >
                    Open data,
                  </Button>
                </li>
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={0}
                    index={2}
                  >
                    The future.
                  </Button>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <h2 id="Working together" className="-block1" role="menuitem" tabIndex="-1">Working together.</h2>
              <ul arialabelledby="Working together" role="menu" className="menu-item-wrapper">
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={2}
                    index={0}
                  >
                    Collaboration,
                  </Button>
                </li>
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={2}
                    index={1}
                  >
                    A place to be,
                  </Button>
                </li>
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={2}
                    index={2}
                  >
                    Go faster.
                  </Button>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <h2 id="Change is possible" className="-block2" role="menuitem" tabIndex="-1">Change is possible.</h2>
              <ul arialabelledby="Change is possible" role="menu" className="menu-item-wrapper">
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={1}
                    index={0}
                  >
                    Detection,
                  </Button>
                </li>
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={1}
                    index={1}
                  >
                    Supply chains,
                  </Button>
                </li>
                <li role="none">
                  <Button
                    handleClick={handleLinkClick}
                    category={1}
                    index={2}
                  >
                    Covid action.
                  </Button>
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
