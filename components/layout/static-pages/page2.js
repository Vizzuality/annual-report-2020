import YouTube from 'components/youtube';

const Page2 = () => (
  <div className="l-static-page">
    <div className="col-1">
      <p>Advances in open-source software, coupled with the growth in open data and the growing expertise of our team and partners, created opportunities to add new features to existing platforms in 2020.</p>
      <h2>In 2020, a deeper level of fire analysis was added to Global Forest Watch.</h2>
    </div>
    <div className="col-2">
      <p>More detailed fire data analysis arrived on <a className="-strong -underline" href="https://www.globalforestwatch.org/" target="_blank">Global Forest Watch </a> in time to track the record-breaking USA wildfires. Visitors to the platform could see which states were worst affected, and see if the number of fire alerts in those places was higher than normal. (Spoiler alert, the number of fire alerts in California and Oregon was unusually high in September 2020). The ability to put data into context is vital for understanding what changes are happening and how to respond to them.</p>
      <div className="video-container">
        <YouTube videoId="RqDLNnaNnII" />
      </div>
      <p className="-caption">Wildlands and semi-natural lands have decreased globally since the 18th century. We used <a className="-strong -underline" href="https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1466-8238.2010.00540.x" target="_blank" rel="noopener noreferrer">data</a> to visualise where wilderness loss has occurred, and where it could be restored. <a className="-strong -underline" href="https://medium.com/vizzuality-blog/where-the-wild-things-arent-7f3d3a994cca" target="_blank" rel="noopener noreferrer">There is always room for hope.</a></p>
      <p>We also worked with the Half-Earth Project and Map of Life to publish a new approach to evaluating the level of protection species receive in any given country. The method — which has been called the <a className="-strong -underline" href="https://medium.com/vizzuality-blog/half-earth-national-report-cards-summarise-conservation-efforts-1f3eae6e0ad" target="_blank">Species Protection Index</a>  — will help guide a global biodiversity conservation strategy.</p>
      <p>In 2021, we’ll continue our collaboration with Microsoft and The Nature Conservancy to develop an open-source spatial planning platform based on Marxan. Our role is to make the platform more usable and scalable, thereby increasing the positive impact this tool has on global conservation and sustainable development.</p>
    </div>
  </div>
);

export default Page2;

