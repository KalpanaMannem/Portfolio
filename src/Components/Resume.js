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
          <h5>Bangalore, India</h5>
          <div className="description">Enhanced the functionality of the company's activity tracking report in real time and slashed report response time by over 50%. Ensured cross-browser compatibility in our design, achieving a remarkable 40% increase in customer satisfaction. Developed and managed a set of web-based services and APIs that increased data accuracy by 35% and reduced the duration of processing by 10%.</div>
        </div>
        <div className="card">
          <div className="year">Aug 2020 - Mar 2022</div>
          <h3>Associate</h3>
          <h4>Amazon Development Center</h4>
          <h5>Bangalore, India</h5>
          <div className="description">Worked on several high-impact projects, improving the performance and scalability of backend services. Collaborated with cross-functional teams to develop new features and improve existing ones.</div>
        </div>
        <div className="card">
          <div className="year">July 2019 - July 2020</div>
          <h3>Process Executive</h3>
          <h4>Cognizant Technology Solutions</h4>
          <h5>Hyderabad, India</h5>
          <div className="description">Performed data analysis and process improvement initiatives that resulted in a 20% increase in operational efficiency. Collaborated with team members to design and implement new processes and workflows.</div>
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
          <div className="description">Specializing in Computer Science with a focus on Machine Learning and Data Analytics.</div>
        </div>
        <div className="card">
          <div className="year">2015 - 2019</div>
          <h3>Bachelor of Technology</h3>
          <h4>JNTU Hyderabad</h4>
          <div className="description">Specialized in Information Technology, graduating with distinction.</div>
        </div>
      </div>
    </div>

    <a href="path/to/cv.pdf" className="download-cv">Download CV</a>
  </section>
);

export default Resume;
