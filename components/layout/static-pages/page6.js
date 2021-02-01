import Image from 'next/image';

const Page6 = () => (
  <div className="l-static-page">
    <div className="row between-xs">
      <div className="col-xs-12 col-md-3">
        <p>Covid is a stark reminder of how vulnerable our societies can be.But it’s also allowed us an opportunity to reflect and ask:</p>
        <h2>Is there a better alternative to the life we have been living? We say yes.</h2>
      </div>
      <div className="col-xs-12 col-sm-5 col-md-6">
        <p>The upswell of demand for change in 2020 sparked new conversations on the importance of intersectionality. In other words, the need to include the experiences and needs of those most affected by a crisis when we talk about solutions. It may seem obvious, but that hasn’t always been the case.</p>
        <Image
          src="/images/zebras.png"
          alt="Picture of the author"
          width={600}
          height={500}
        />
        <p className="-italic -small">Zebras in Africa</p>
        <p>The Covid-19 Tracker by FinMark Trust tracks themes including health and risk behaviours, food security, income, work and job security, personal safety concerns, and access to government and community support. With this information, we can understand the impact of covid on people’s health and wellbeing, and identify what support is most needed. </p>
        <p>Meanwhile, an Africa-based Collaborative Platform incubated by The Luc Hoffmann Institute is responding to the impact the pause in global tourism had on conservation. The platform aims to support marginalised rural community stakeholders who are the custodians of the landscapes and wildlife on which tourism depends, while amplifying existing fundraising efforts.</p>
      </div>
    </div>
  </div>
);

export default Page6;
