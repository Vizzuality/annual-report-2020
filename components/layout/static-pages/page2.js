const Page2 = () => (
  <div className="l-static-page">
    <div className="row between-xs">
      <div className="col-xs-12 col-sm-3">
        <p>Advances in open - source software, coupled with the growth in open data and the growing expertise of our team and partners, created opportunities to add new features to existing platforms in 2020. </p>
        <h2>In 2020, a deeper level of fire analysis was added to Global Forest Watch.</h2>
      </div>
      <div className="col-xs-12 col-sm-6">
        <p>More detailed fire data analysis arrived on <a href="https://www.globalforestwatch.org/" target="_blank">Global Forest Watch </a> in time to track the record-breaking USA wildfires. Visitors to the platform could see which states were worst affected, and see if the number of fire alerts in those places was higher than normal. (Spoiler alert, the number of fire alerts in California and Oregon was unusually high in September 2020). The ability to put data into context is vital for understanding what changes are happening and how to respond to them.</p>
        <div className="video-container">
        <iframe src="https://www.youtube.com/embed/RqDLNnaNnII"
          frameborder='0'
          className="video-embed"
          allow='autoplay; encrypted-media'
          allowfullscreen
          title='video'
        />
        </div>

        <p className="-italic -small">Wildlands and semi-natural lands have decreased globally since the 18th century.<span className="-strong -underline"> There is however room for hope.</span></p>
        <p>We also worked with the Half-Earth Project and Map of Life to publish a new approach to evaluating the level of protection species receive in any given country. The method — which has been called the <a className="-strong -underline" href="https://medium.com/vizzuality-blog/half-earth-national-report-cards-summarise-conservation-efforts-1f3eae6e0ad" target="_blank">Species Protection Index</a> — will help guide a global strategy of biodiversity conservation. </p>
        <p>In 2021, we’ll continue our collaboration with Microsoft and The Nature Conservancy to develop a new version of Marxan, the open-source conservation planning tool. Our role is to make the platform more usable and scalable, thereby increasing the positive impact this tool could have. </p>
      </div>
    </div>
  </div>
);

export default Page2;

