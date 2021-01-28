import React from 'react';
import Image from 'next/image';

const Page1 = () => (
  <div className="l-static-page">
    <div className="row between-xs">
      <div className="col-xs-12 col-md-3">
        <p>For 11 years, we've been building digital platforms that help people better understand the world. Working with world-leading environmental organisations has taught us that this is an essential step in knowing where, when, and how to take action that is good for the planet.</p>
        <h2>Digital tools help us understand how the future could be.</h2>
      </div>
      <div className="col-xs-12 col-sm-5 col-md-6">
        <Image
          src="/images/page1.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <p className="-italic -small">In 2020, we invested our collective effort into projects at the intersection of climate change, biodiversity, and social inequality.</p>
        <p>2020 was the year in which we saw the importance of these platforms more clearly than ever before. Virtually overnight, millions of people had to stay at home. Planes were grounded, meetings moved online, and we all adopted new ways of working.</p>
        <p>But despite this massive change, open data platforms built with open-source software continued to provide the data and digital tools we need. Data that helps us make sense of the rapid changes happening around us. The world may have paused, but the level of atmospheric carbon dioxide kept increasing, and our important work to protect our planet continued.</p>
        <p>This year, as 2021 reveals itself, we are confident that we have reached the turning point towards a greener future. Are you? </p>
      </div>
    </div>
  </div>
);

export default Page1;