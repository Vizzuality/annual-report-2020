import React, { useState } from 'react';
import cx from 'classnames';
import Button from 'components/link-button';
import Icon from 'components/icon';
import Download from 'components/download';
import SocialMedia from 'components/social-media';

const HomeHeaderMobile = ({
    setSelectedPiece,
    setPositionedPieces,
    positionedPieces
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
                <Button
                  handleClick={handleLinkClick}
                  category={0}
                  index={0}
                >
                    Digital tools,
                </Button>
                {' '}
                <Button
                  handleClick={handleLinkClick}
                  category={0}
                  index={1}
                >
                  Open data,
                </Button>
                {' '}
                <Button
                  handleClick={handleLinkClick}
                  category={0}
                  index={2}
                >
                  The future.
                </Button>
                {' '}
              </div>
            </li>
            <li className="menu-item">
              <h2 className="-block1">Working together.</h2>
              <div>
                <Button
                  handleClick={handleLinkClick}
                  category={2}
                  index={0}
                >
                  Collaboration,
                </Button>
                {' '}
                <Button
                  handleClick={handleLinkClick}
                  category={2}
                  index={1}
                >
                  A place to be,
                </Button>
                {' '}
                <Button
                  handleClick={handleLinkClick}
                  category={2}
                  index={2}
                >
                  Go faster.
                </Button>
                {' '}
              </div>
            </li>
            <li className="menu-item">
              <h2 className="-block2">Change is possible.</h2>
              <div>
                <Button
                  handleClick={handleLinkClick}
                  category={1}
                  index={0}
                >
                  Detection,
                </Button>
                {' '}
                <Button
                  handleClick={handleLinkClick}
                  category={1}
                  index={1}
                >
                  Supply chains,
                </Button>
                {' '}
                <Button
                  handleClick={handleLinkClick}
                  category={1}
                  index={2}
                >
                  Covid action.
                </Button>
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
