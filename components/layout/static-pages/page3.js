import Image from 'next/image';

const Page3 = () => (
    <div className="l-static-page">
    <div className="row between-xs">
      <div className="col-xs-12 col-md-3">
        <p>Food insecurity is just one example of the profound social impacts a water crisis can have. In 2020, we worked on <a href="https://www.wri.org/aqueduct" target="_blank">Aqueduct</a>, a platform that identifies and evaluates water risks worldwide. The tool can guide decisions on how to manage water resources more sustainably. </p>
        <p>Giving people the information they need to understand what is happening now — and what could happen in the future — is an essential step in preparing for the future. Whether we use maps of water risk from Aqueduct, or tables of carbon emissions from Climate Watch, the knowledge shared on digital platforms is critical.</p>
        <h2><a href="https://soilsrevealed.org/" target="_blank">Soils Revealed</a> maps the incredible potential of soil for storing carbon.</h2>
        <p>Launched in 2020, we can use the platform’s data to see the historical change in soil carbon over time and learn which land management methods would keep the most carbon in the ground. In some places, the increase in carbon stock could be more than 20 tonnes per hectare.</p>
      </div>
      <div className="col-xs-12 col-sm-5 col-sm-6">
        <Image
          src="/images/ghgEmissions.png"
          alt="GHG Emissions"
          width={665}
          height={1572}
          layout="responsive"
        />
        <p className="-italic -small">The world's lowest emitters of greenhouse gas emissions are bearing the brunt of climate change impacts. [Data sources: Cumulative country GHG emissions (1990, 2017), <a href="https://climatewatchdata.org" target="_blank">ClimateDataWatch.org</a>; Country Drought Risk Index, <a className="-strong" href="https://www.wri.org/applications/aqueduct/country-rankings/" target="_blank">Aqueduct</a>]</p>
        <p>By using models and projections to understand what the options are, we can choose the steps that will lead us to the future we want. </p>
      </div>
    </div>
  </div>
);

export default Page3;