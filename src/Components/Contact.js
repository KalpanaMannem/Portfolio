import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact Me</h2>
    <p>Below are the details to reach out to me!</p>
    <div className="contact-details">
      <div className="detail">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        <h3>Address</h3>
        <p>Dallas, Texas</p>
      </div>
      {/* <div className="detail">
        <FontAwesomeIcon icon={faPhone} size="2x" />
        <h3>Contact Number</h3>
        <p>+19409775060</p>
      </div> */}
      <div className="detail">
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <h3>Email Address</h3>
        <p><a href="mailto:kalpanamannem1998@gmail.com">kalpanamannem1998@gmail.com</a></p>
      </div>
    </div>
  </section>
);

export default Contact;
