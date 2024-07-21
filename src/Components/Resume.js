import React from 'react';

const Resume = () => (
  <section className="resume" id="resume">
    <h1>Resume <span>Overview</span></h1>
    <p>Enthusiastic Software Developer with over 3 years of experience crafting user-centric solutions that meet business goals.</p>

    <div className="section">
      <h2>Experience</h2>
      <div className="cards">
        <div className="card">
          <div className="year">Mar 2022 - Oct 2022</div>
          <h3>Associate IT Consultant</h3>
          <h4>ITC Infotech India Limited</h4>
          <h5>Bangalore,India</h5>
          {/* <p>Merkle, a leading CXM and media company with over 10K+ professionals globally. It's a part of Dentsu International.</p>
          <ul>
            <li>Analyzed ad campaigns, clickstream, and customer surveys data, identified an increasing demand, and launched a strategic product line.</li>
            <li>Ensured cross-browser compatibility in our design, achieving a 40% increase in customer satisfaction.</li>
            <li>Developed and managed a set of web-based services and APIs that increased data accuracy by 35% and reduced the duration of processing by 10%.</li>
          </ul> */}
        </div>
        <div className="card">
          <div className="year">Aug 2020 - Mar 2022</div>
          <h3>Associate</h3>
          <h4>Amazon Development Center</h4>
          <h5>Bangalore,India</h5>
          {/* <p>iQuanti is a data-driven digital marketing analytics and solutions company, helping top 100 global brands.</p>
          <ul>
            <li>Performed in-depth market research and analysis to create online pages. Resulted in 100% website growth and 30% increase in conversion rate YoY.</li>
            <li>Delivered actionable insights to stakeholders and senior management.</li>
            <li>Mentored junior developers, improving overall team productivity and code quality.</li>
          </ul> */}
        </div>
        <div className="card">
          <div className="year">July 2019 - July 2020</div>
          <h3>Process Executive</h3>
          <h4>Cognizant Technology Solutions</h4>
          <h5>Hyderabad,India</h5>
          {/* <p>iQuanti is a data-driven digital marketing analytics and solutions company, helping top 100 global brands.</p>
          <ul>
            <li>Performed in-depth market research and analysis to create online pages. Resulted in 100% website growth and 30% increase in conversion rate YoY.</li>
            <li>Delivered actionable insights to stakeholders and senior management.</li>
            <li>Mentored junior developers, improving overall team productivity and code quality.</li>
          </ul> */}
        </div>
      </div>
    </div>

    <div className="section">
      <h2>Education</h2>
      <div className="cards">
        <div className="card">
          <div className="year">2023 - 2024</div>
          <h3>Master Of Science</h3>
          <h4>University Of North Texas</h4>
          {/* <p>Grade: First class distinction.</p> */}
        </div>
        <div className="card">
          <div className="year">2015 - 2019</div>
          <h3>Bachelor of Technology</h3>
          <h4>JNTU Hyderabad</h4>
          {/* <p>Grade: First class distinction.</p> */}
        </div>
      </div>
    </div>

    <a href="path/to/cv.pdf" className="download-cv">Download CV</a>
  </section>
);

export default Resume;
