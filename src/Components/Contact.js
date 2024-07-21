import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact Me</h2>
    <p>Below are the details to reach out to me!</p>
    <div className="contact-details">
      <div className="detail">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        <h3>Address</h3>
        <p>Bengaluru, India</p>
      </div>
      <div className="detail">
        <FontAwesomeIcon icon={faPhone} size="2x" />
        <h3>Contact Number</h3>
        <p>+0 101 0101 101</p>
      </div>
      <div className="detail">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <h3>Email Address</h3>
        <p>contact@domainname.com</p>
      </div>
      <div className="detail">
        <FontAwesomeIcon icon={faDownload} size="2x" />
        <h3>Download Resume</h3>
        <a href="path/to/resume.pdf" download>resumelink</a>
      </div>
    </div>
  </section>
);

export default Contact;
