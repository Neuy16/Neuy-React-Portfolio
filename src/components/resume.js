import React from "react";
import "bulma/css/bulma.css";
import resume from "../assets/files/Andrews_Resume.pdf";

function Resume() {
  return (
    <div>
      <div className="content">
        <h1>Resume</h1>
        <p>
          Download my{" "}
          <a href={resume} download="AndrewNeuwirthResume" target="_blank">
            resume
          </a>
        </p>
        <h1>Front-End Proficiencies</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h1>Back-End Proficiencies</h1>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequalize</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
