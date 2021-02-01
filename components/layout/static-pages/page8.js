import React from 'react';
import Image from 'next/image';

const Page8 = () => (
  <div className="l-static-page">
    <div className="row between-xs">
      <div className="col-xs-12 col-md-3">
        <p>How do you support and care for your team during a pandemic? By setting the foundations to build a great place to “be”, not just “work”.</p>
        <p>Our foundation is anchored on three principles: Engagement & Wellbeing, Create Space to Listen, and Culture & Community. </p>
        <Image
          src="/images/workingTogether.png"
          alt="Picture of the author"
          width={256}
          height={1000}
        />
        <p className="-italic -small">The number of messages we sent via Slack increased during the European lockdown as we supported each other and stayed closer than ever.</p>
      </div>
      <div className="col-xs-12 col-sm-5 col-md-6">
        <div>Video</div>
        <p className="-italic -small">Caption</p>
        <h3>Engagement & Wellbeing.</h3>
        <p>
          On 11 March 2020, our team transitioned overnight from remote-friendly to fully-remote. Within three days, we set up a cross-functional People First team to design initiatives, spaces and tools to maintain engagement and team wellbeing. Over the next four months, they co-wrote 21 newsletters containing ideas, tips and guidance on the themes of resilience, focus and community. A fortnightly survey kept track of people’s feelings and experiences during the pandemic and identified new opportunities to support them. We know communication is critical in times of uncertainty. So, we have chosen to over-communicate during the pandemic and provide regular, transparent updates to our team on the good, the bad, and the ugly news. </p>
        <h3>Create Space to Listen. </h3>
        <p>At Vizzuality, we believe that transformation happens when everyone who wants to build the new thing, actually builds the new thing. With this in mind, we invited the whole team to join the workshops and conversations that are shaping our re-imagining of our future workplace.
Our team has made a conscious effort to unlearn the expectation that change is ‘done to us’. Instead, we challenged ourselves to think differently and ask, “what could happen if we build something new together?”</p>
        <h3>Culture & Community.</h3>
        <p>Pandemics reduce the opportunities to bond, nurture relationships, and develop new skills. To overcome this challenge, we have put extra effort into developing our ‘human skills’ like communication, accountability and self-management. We have also created virtual spaces to connect and have a good time, including huddles, concerts, Thursday night cañas, and Christmas celebrations. </p>
        <p>This article is an edited excerpt of a blog written by
          <a href="https://www.vizzuality.com/about/sebastian-bueno/" target="_blank"> Sebastian Bueno</a>, our People & Culture Coordinator. In addition, Sebastian is offering a limited number of 1-2-1 conversations on how to navigate a pandemic. Email him at           <a
            href="mailto:?to=sebastian.bueno@vizzuality.com"
            target="_blank"
            rel="noopener noreferrer"
            className="c-button -border -medium -tertiary"
          >
            sebastian.bueno@vizzuality.com
          </a> to arrange a session.</p>
      </div>
    </div>
  </div>
);

export default Page8;

