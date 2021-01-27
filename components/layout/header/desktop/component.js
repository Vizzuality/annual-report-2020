import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/icon';
import debounce from 'lodash/debounce';

const HeaderDesktop = ({ title, onClick }) => {
  let timeout;
  const ref = useRef();
  const [repetitions, setRepetitions] = useState([]);

  const resize = () => {
    if (ref.current) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();

      const newRepetitions = new Array(Math.ceil(window.innerWidth / width) * 2)
        .fill()
        .map((j, i) => {
          return {
            width,
            x: (width * i) + left
          }
        });

      setRepetitions(newRepetitions);

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        tick(newRepetitions);
      }, 500);
    }
  };

  const onResize = debounce(() => {
    resize();
  }, 500);

  const tick = (repetitions) => {

    const last = repetitions[repetitions.length - 1];

    const newRepetitions = repetitions.map(({ x, width }, i) => {
      let x1 = x;
      let className = 'transition';
      if (x < -width) {
        x1 = last.x + width + (width * i);
        className = 'no-transition';
      }

      return {
        className,
        width,
        x: x1 - 5
      }
    });

    setRepetitions(newRepetitions);

    clearTimeout(timeout);
    timeout = setTimeout(() => tick(newRepetitions), 125);
  };

  useEffect(() => {

    resize();

    // listeners
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="l-header -desktop">
      <div className="wrapper">
        <div className="l-header-content">
          <p>Spotlight on 2020 by <span>vizzuality.</span></p>
          <button
            type="button"
            className="l-header-close--btn"
            onClick={(e) => e.stopPropagation() || onClick()}
          >
            <Icon name="cancel" />
          </button>
        </div>
      </div>
      <div className="l-header-container">
        <div className="wrapper">
          <span ref={ref} className="l-header-title title-scrolling" style={{ position: 'relative', opacity: 0 }}>{title}{' '}·</span>
        </div>
        {repetitions.map(({ x, className }, index) => {
          // There can only be an h1
          const Tag = index === 0 ? 'h1' : 'span';
          return (
            <Tag
              className = {
                `l-header-title title-scrolling ${className}`
              }
              style={{
                transform: `translateX(${x}px)`
              }}
            >
              {title}{' '}·
            </Tag>
          );
        }
        )}
      </div>
    </header>
  )
};


HeaderDesktop.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeaderDesktop;
