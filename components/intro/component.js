import React from 'react';
import Link from 'next/link';

export default function Intro() {

  return (
    <div className="c-intro">
      <div className="wrapper">
        <div className="row center-xs">
          <div className="col-md-10 col-xs-12">
            <div className="intro-title">
              <h1>Spotlight 2020</h1>
              <h2>by vizzuality.</h2>
            </div>

            <p>Covid is a stark reminder of how vulnerable our societies can be. In 2020 we learnt that making change is possible if we work together. Fit the pieces into the world to see the impact of our work.</p>
            <Link href="/report">Let's start</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


