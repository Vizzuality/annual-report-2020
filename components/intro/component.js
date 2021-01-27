import React, { useState } from 'react';
import SoundButton from 'components/sound-button';

export default function Intro({ handleReport, allowedSound, setAllowedSound }) {

  const [intro, setIntro] = useState(false);
  const handleIntro = () => {
    setIntro(!intro);
  };

  return (
    <div className="c-intro">
      {!intro && (
        <>
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <h1>Spotlight <br />on 2020</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <div className="button-container">
                <button className="play-button -right" onClick={handleIntro}>PLAY</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <h2>by vizzuality.</h2>
            </div>
          </div>
        </>
      )}
      {intro && (
        <section className="intro-container">
          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <p>Fit the puzzle pieces into our globe to see our impact and our hope for the future.</p>

            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <SoundButton allowedSound={allowedSound} setAllowedSound={setAllowedSound} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <p>For a better experience, please put your headphones and click anywhere</p>
            </div>
          </div>
          <button className="play-button -left" onClick={handleReport}>PLAY</button>
        </section>
      )}
    </div>
  );
};


