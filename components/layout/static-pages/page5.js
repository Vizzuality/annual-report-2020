import Image from 'next/image';

const Page5 = () => (
  <div className="l-static-page">
    <div className="row between-xs">
      <div className="col-xs-12 col-md-3">
        <p>By working with the organisations who are serious about doing business that’s good for people and the planet, we are helping change happen faster. </p>
        <h2>One of our priorities for this year and beyond is to make food supply chains more sustainable.</h2>
      </div>
      <div className="col-xs-12 col-sm-5 col-md-6">
        <p>LandGriffon is an initiative we’re developing to make this possible. Through LandGriffon we will work with companies who truly want to:</p>
        <ul>
          <li>Better understand the environmental impacts related to their activity;</li>
          <li>Anticipate potential risks and consequences through scenario simulations in the short and mid-term; </li>
          <li>Make the necessary decisions to ensure a supply chain model prepared for the future.</li>
        </ul>
        <p>We know working together takes us further, faster. So we invited Satelligence and the Stockholm Environment Institute to be our partners in this endeavour.</p>
        <p>Businesses that want to thrive in a post-covid world must show more commitment to making our planet and society a better place. <span>Are you willing to make that commitment?</span> </p>
        <Image
          src="/images/supermarket.png"
          alt="Supermarket shelves"
          width={687}
          height={363}
          layout="responsive"
        />
      </div>
    </div>
  </div>
);

export default Page5;

