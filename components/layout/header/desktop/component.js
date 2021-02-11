import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';
import Malarquee from 'react-malarquee';

const HeaderDesktop = ({ title, onClick }) => {
  return (
    <header className="l-header -desktop">
      <button
        type="button"
        className="l-header-close--btn -border"
        onClick={(e) => e.stopPropagation() || onClick()}
      >
        <Icon name="menu-close" className="-medium" />
      </button>
      <div className="l-header-container">
        <Malarquee>
          <h1>
            {title}{' '}·{' '}
          </h1>
        </Malarquee>
      </div>
    </header>
  )
};

HeaderDesktop.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeaderDesktop;
