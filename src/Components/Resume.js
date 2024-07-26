import React, { useState, useEffect } from 'react';

const Resume = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedCardEducation, setExpandedCardEducation] = useState(null);

  const handleReadMore = (index, type) => {
    if (type === "experience") {
      setExpandedCard(expandedCard === index ? null : index);
    } else {
      setExpandedCardEducation(expandedCardEducation === index ? null : index);
    }
  };

  const closeModal = (type) => {
    if (type === "experience") {
      setExpandedCard(null);
    } else {
      setExpandedCardEducation(null);
    }
  };

  useEffect(() => {
    if (expandedCard !== null || expandedCardEducation !== null) {
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';


    } else {
      document.body.style.height = 'auto';
      document.body.style.overflow = 'auto';

    }
  }, [expandedCard, expandedCardEducation]);


  const jobs = [
    {
      year: 'Mar 2022 - Oct 2022',
      title: 'Associate IT Consultant',
      company: 'ITC Infotech India Limited',
      location: 'Bangalore, India',
      description1: '•	Enhanced the functionality of the company activity tracking report in real time and slashed down on the report response time by over 50%.',
      description2: '•	Developed and managed a set of web-based services and APIs that increased data accuracy by 35% and reduced the duration of processing by 10%.'
    },
    {
      year: 'Aug 2020 - Mar 2022',
      title: 'Associate',
      company: 'Amazon Development Center',
      location: 'Bangalore, India',
      description1: '• Created module for a client, which led to a remarkable 30% reduction in development time and a 20% boost in team productivity.',
      description2: '• Successfully implemented UI enhancements and new features, improving the overall usability and functionality of the web applications.'
    },
    {
      year: 'July 2019 - July 2020',
      title: 'Process Executive',
      company: 'Cognizant Technology Solutions',
      location: 'Hyderabad, India',
      description1: '• Improved user interface responsiveness by implementing Python and React, resulting in a 50% increase in customer satisfaction scores.',
      description2: '• Developed UI enhancements utilizing React, resulting in a 25% enhancement in user experience. Implemented secure, tokenized transaction processing by integrating multiple payment gateways, resulting in a 22% reduction in fraudulent activities.'
    }
  ];

  const educations = [
    {
      year: '2023 - 2024',
      title: 'Master Of Science',
      institution: 'University Of North Texas',
      description: 'Specializing in Computer Science with a focus on Machine Learning and Data Analytics.'
    },
    {
      year: '2015 - 2019',
      title: 'Bachelor of Technology',
      institution: 'JNTU Hyderabad',
      description: 'Specialized in Information Technology, graduating with distinction.'
    }
  ];



  return (
    <section className="resume" id="resume">
      <h1>Resume <span>Overview</span></h1>
      <p>Enthusiastic Software Developer with over 3 years of experience in designing and implementing comprehensive web solutions, seamlessly integrating both front-end and back-end technologies to deliver robust, scalable, and high-performance applications.</p>

      <div className="section">
        <h2>Experience</h2>
        <div className="cards">
          {jobs.map((job, index) => (
            <div key={index} className={`card ${expandedCard === index ? "expanded" : ""}`}>
              <div className="year">{job.year}</div>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <h5>{job.location}</h5>
              <button className="read-more" onClick={() => handleReadMore(index, "experience")}>
                {expandedCard === index ? "Show Less" : "Read More"}
              </button>
              {expandedCard === index && (
                <div className="description-overlay">
                  <div className="modal-content">
                    <span className="close-button" onClick={() => closeModal("experience")}>&times;</span>
                    <div className="description-content">
                      <div className="year">{job.year}</div>
                      <h3>{job.title}</h3>
                      <h4>{job.company}</h4>
                      <p>{job.description1}</p>
                      <p>{job.description2}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="cards">
          {educations.map((education, index) => (
            <div key={index + 3} className={`card ${expandedCardEducation === index ? "expanded" : ""}`}>
              <div className="year">{education.year}</div>
              <h3>{education.title}</h3>
              <h4>{education.institution}</h4>
              {/* <button className="read-more" onClick={() => handleReadMore(index, "education")}>
                {expandedCardEducation === index ? "Show Less" : "Read More"}
              </button> */}
              {expandedCardEducation === index && (
                <div className="description-overlay">
                  <div className="modal-content">
                    <span className="close-button" onClick={() => closeModal("education")}>&times;</span>
                    <div className="description-content">
                      <div className="year">{education.year}</div>
                      <h3>{education.title}</h3>
                      <h4>{education.institution}</h4>
                      <p>{education.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <a href="https://drive.google.com/file/d/17eEXLax9MwHK1I054dxKNoisQBBcs0GF/view?usp=sharing" className="download-cv">Download Resume</a>
    </section>
  );
};

export default Resume;
