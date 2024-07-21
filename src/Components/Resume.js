import React from 'react';

const Resume = () => (
  <section className="resume" id="resume">
    <h1>Resume <span>Overview</span></h1>
    <p>Seasoned Senior Software Developer with 5+ years of experience driving business strategies through data-driven insights. Proven expertise in software development, project management, and team leadership.</p>

    <div className="section">
      <h2>Experience</h2>
      <div className="cards">
        <div className="card">
          <div className="year">2021 - Present</div>
          <h3>Senior Software Developer</h3>
          <h4>at Merkle</h4>
          <p>Merkle, a leading CXM and media company with over 10K+ professionals globally. It's a part of Dentsu International.</p>
          <ul>
            <li>Analyzed ad campaigns, clickstream, and customer surveys data, identified an increasing demand, and launched a strategic product line.</li>
            <li>Ensured cross-browser compatibility in our design, achieving a 40% increase in customer satisfaction.</li>
            <li>Developed and managed a set of web-based services and APIs that increased data accuracy by 35% and reduced the duration of processing by 10%.</li>
          </ul>
        </div>
        <div className="card">
          <div className="year">2018 - 2021</div>
          <h3>Senior Software Developer</h3>
          <h4>at iQuanti</h4>
          <p>iQuanti is a data-driven digital marketing analytics and solutions company, helping top 100 global brands.</p>
          <ul>
            <li>Performed in-depth market research and analysis to create online pages. Resulted in 100% website growth and 30% increase in conversion rate YoY.</li>
            <li>Delivered actionable insights to stakeholders and senior management.</li>
            <li>Mentored junior developers, improving overall team productivity and code quality.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="section">
      <h2>Education</h2>
      <div className="cards">
        <div className="card">
          <div className="year">2014 - 2018</div>
          <h3>Bachelor of Engineering</h3>
          <h4>Visvesvaraya Technological University</h4>
          <p>Grade: First class distinction.</p>
        </div>
        <div className="card">
          <div className="year">2012 - 2013</div>
          <h3>Higher Secondary School</h3>
          <h4>Army Public School</h4>
          <p>Grade: First class distinction.</p>
        </div>
      </div>
    </div>

    <a href="path/to/cv.pdf" className="download-cv">Download CV</a>
  </section>
);

export default Resume;
