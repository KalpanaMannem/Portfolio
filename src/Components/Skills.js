import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faNode, faReact, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => (
  <div className="section section-skills">
    <div className="section-overlay"></div>
    <div className="section-content">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>
          <FontAwesomeIcon icon={faHtml5} /> HTML5
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3Alt} /> CSS3
        </li>
        <li>
          <FontAwesomeIcon icon={faJsSquare} /> JavaScript
        </li>
        <li>
          <FontAwesomeIcon icon={faNode} /> Node.js
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} /> React
        </li>
        <li>
          <FontAwesomeIcon icon={faPython} /> Python
        </li>
        <li>
          <FontAwesomeIcon icon={faGitAlt} /> Git
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} /> SQL
        </li>
      </ul>
    </div>
  </div>
);

export default Skills;
