import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import profilepic from "./Profilepic.jpeg"
const Hero = () => (
  <section className="hero" id="home">
    <div className="intro">
      <h1>Hello!</h1>
      <h1>
        I'm <span>Kalpana Mannem</span>
      </h1>
      <p>Software Developer</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/kalpana-m-339938177/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/KalpanaMannem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
    <div className="profile-pic">
      {/* <img src={profilepic} alt="Kalpana M" /> */}
      <h1>Image Loading.....!!!</h1>
    </div>
  </section>
);

export default Hero;
