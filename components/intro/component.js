import React from 'react';

export default function Intro({ handleReport }) {
  return (
    <div className="c-intro">
      <div className="intro-title">
        <h1>Spotlight 2020</h1>
        <h2>by vizzuality.</h2>
      </div>
      <p>Covid is a stark reminder of how vulnerable our societies can be. In 2020 we learnt that making change is possible if we work together. Fit the pieces into the world to see the impact of our work.</p>
      <button onClick={handleReport}>Let's start</button>
    </div>
  );
};


