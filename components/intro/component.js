import React, { useState } from 'react';
import SoundButton from 'components/sound-button';
import cx from 'classnames';

export default function Intro({ handleReport }) {

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
          <button className="play-button" role="button" />
        </>
      )}
      {intro && (
        <section key={unmount} className={cx('intro-container', { 'fade-out': unmount })}>
          <p>Fit the puzzle pieces into our globe to see our impact and our hope for the future.</p>
          <SoundButton
            className="sound-button-intro"
          />
          <p>For a better experience, please put your headphones on and click anywhere.</p>
        </section>
      )}
    </div>
  );
};


