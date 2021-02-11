import YouTube from 'components/youtube';

const Page8 = () => (
  <div className="l-static-page">
    <div className="col-1">
      <p>How do you support and care for your team during a pandemic? By setting the foundations to build a great place to “be”, not just “work”.</p>
      <p>Our foundation is anchored on three principles: Engagement & Wellbeing, Creating Space for Dialogue, and Culture & Community.</p>
      <div className="image-container">
        <img
          src="/images/lockdownMessages.svg"
          alt="Vizzuality slack messages"
        />
      </div>
      <p className="-caption">The number of messages we sent via Slack increased during the European lockdown as we supported each other and stayed closer than ever.</p>
    </div>
    <div className="col-2">
      <div className="video-container">
      <YouTube videoId="to8N_2XeUEc" />
      </div>
      <p className="-caption">Having fun during one of our huddles</p>
      <h3>Engagement & Wellbeing.</h3>
      <p>On 11 March 2020, our team transitioned overnight from remote-friendly to fully-remote. Within three days, we set up a cross-functional People First team to design experiences, spaces and tools to maintain engagement and team wellbeing. Over the next four months, they co-wrote 21 newsletters containing tips and guidance on the themes of resilience, focus and community. A survey has kept track of people’s feelings and experiences during the pandemic. The data from these surveys started to show that sustaining wellbeing and mental health was going to be a marathon. In response, we kicked off an initiative that provides our people with access to therapists on demand and mental health resources. We know communication is critical in times of uncertainty. So, we have chosen to over-communicate and provide regular, transparent updates to our team on the good, the bad, and the ugly news.</p>
      <h3>Creating Space for Dialogue.</h3>
      <p>At Vizzuality, we believe that transformation happens when everyone who wants to build the new thing, actually builds the new thing. With this in mind, we invited the whole team to join the workshops and conversations that are shaping our re-imagining of our future workplace. Our team has made a conscious effort to unlearn the expectation that change is ‘done to us’. Instead, we challenged ourselves to think differently and ask, “what could happen if we build something new together?”</p>
      <h3>Culture & Community.</h3>
      <p>Pandemics reduce the opportunities to bond, nurture relationships, and develop new skills. To overcome this challenge, we have put extra effort into developing our ‘human skills’ like communication, accountability and self-management. We have also created virtual spaces to connect and have a good time, including huddles, concerts, Thursday night cañas, and Christmas celebrations.</p>
      <p>This article is an edited excerpt of a blog by <a title="vizzuality about" className="-strong -underline"href="https://www.vizzuality.com/about/sebastian-bueno/" target="_blank"> Sebastian Bueno</a>, our People & Culture Coordinator. Sebastian is offering a limited number of 1-2-1 conversations on all things related to people & culture. Book a session to start the conversation.</p>
      <a className="button-link" href="mailto:?to=sebastian.bueno@vizzuality.com" target="_blank" rel="noopener noreferrer"
      >Book a session now.</a>
    </div>
  </div>
);

export default Page8;

