import React, { useEffect, useRef } from 'react';

const Page7 = () => {

  const videoRef = useRef(null);
  const attemptPlay = () => {
    videoRef && videoRef.current && videoRef.current.play().catch(error => {
      console.error('Error attempting to play', error);
    })
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="l-static-page">
    <div className="col-1">
      <p>Global problems need global teams to solve them. That’s why our team represents a range of nationalities, experiences and specialist skills. We have <a className="-strong -underline" title="vizzuality about" href="https://www.vizzuality.com/about/" target="_blank">backgrounds</a> in everything from archaeology and architecture to sociology and zoology.</p>
      <p>Eleven years ago, Vizzuality had one designer and one developer. Today, we have a team of almost 50 people.</p>
      <h2>It takes a team to succeed. </h2>
      <p>Our team includes Scientists, Designers, User Researchers, Front-end and Back-end Engineers, Communication Specialists, Business Explorers, Finance, and experts in People & Culture.</p>
    </div>
    <div className="col-2">
      <p>Working together at every stage of a project, we create spaces to talk about the issues we’re trying to solve, and challenge each other’s biases.
But we can’t solve the world’s problems alone. That’s why we work with, and support, the organisations and companies who are leading the change we want to see in the world. Organisations like the World Resources Institute and the Stockholm Environment Institute who have important data, expertise and knowledge that needs to be seen and used. We work with them to make sure it is.</p>
      <p>Working together as one giant international team is our best chance to save ourselves from the climate crisis. Are you ready to join us?</p>
      <video ref={videoRef} muted playsInline autoPlay loop width="100%" height="auto" src="/videos/workingTogether.mp4" type="video/mp4" />
      <p className="-caption">The way we combine our expertise and skills in each project responds to its goals and the needs of our partners.</p>
    </div>
  </div>
  )
};

export default Page7;
