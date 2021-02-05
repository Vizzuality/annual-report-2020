import React, { useState } from 'react';
import cx from 'classnames';
import Equalizer from 'components/equalizer';

export default function Intro({ handleReport, allowedSound, setAllowedSound }) {

  const [intro, setIntro] = useState(false);
  const [unmount, setUnmount] = useState(false);
  const handleIntro = () => {
    !intro && setIntro(!intro);
    
    if (intro) {
      setUnmount(!unmount)
      setTimeout(() => {
        handleReport();
      }, 1500);
    }
  };

  return (
    <div className="c-intro" onClick={handleIntro}>
      {!intro && (
        <>
          <div className="row center-xsm">
            <div className="col-xs-12">
              <h1>Spotlight <span className="title-second-line">on 2020</span></h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <h2>by vizzuality.</h2>
            </div>
          </div>
        </>
      )}
      {intro && (
        <div key={unmount} className="wrapper">
          <section className={cx('intro-container', { 'fade-out': unmount })}>
            <div className="row center-xsm">
              <div className="col-xs-12 col-sm-9">
                <p>Fit the puzzle pieces into our globe to see our impact and our hope for the future.</p>
              </div>
            </div>

            <div className="row center-xsm">
              <div className="col-xs-12 col-lg-9">
                <Equalizer allowedSound={allowedSound} />
              </div>
            </div>
            <div className="row center-xsm">
              <div className="col-xs-12 col-sm-9">
                <p>For a better experience, please put your headphones and click anywhere</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};


