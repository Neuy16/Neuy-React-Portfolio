import React from "react";
import "bulma/css/bulma.css";
import meathead from '../assets/images/meathead.PNG';
import utility from '../assets/images/cover.PNG';
import myTrybe from '../assets/images/myTrybe.PNG';
import textEditor from '../assets/images/textEditor.PNG';
import oldPortfolio from '../assets/images/oldPortfolio.PNG';
import teamProfileBuilder from '../assets/images/teambuild.PNG';


function Project() {
  const projects = [
    {
      image: utility,
      url: "https://neuy16.github.io/Utility-Homepage-Project/",
      repoUrl: "https://github.com/Neuy16/Utility-Homepage-Project",
      key: "utility"
    },
    {
        image: meathead,
        url: "https://neuy16.github.io/Utility-Homepage-Project/",
        repoUrl: "https://github.com/Neuy16/Meathead",
        key: "meathead"
    },
    {
        image: myTrybe,
        url: "https://neuy16.github.io/Utility-Homepage-Project/",
        repoUrl: "https://github.com/Neuy16/My-Trybe-Social",
        key: "MyTrybe"
    },
    {
        image: textEditor,
        url: "https://neuy16.github.io/Utility-Homepage-Project/",
        repoUrl: "https://github.com/Neuy16/PWA-Text-Editor",
        key: "TextEditor"
    },
    {
        image: oldPortfolio,
        url: "https://neuy16.github.io/Portfolio/",
        repoUrl: "https://github.com/Neuy16/Portfolio",
        key: "OriginalPortfolio"
    },
    {
        image: teamProfileBuilder,
        url: "https://neuy16.github.io/Utility-Homepage-Project/",
        repoUrl: "https://github.com/Neuy16/teamProfileBuilder",
        key: "teamBuilder"
    },
  ];
  return (
    <div className="columns is-flex-direction-column">
        {projects.map((project) => (
            <div className="column mx-auto" key={project.key}>
                <a href={project.url}>
                    <img src={project.image}/>
                </a>
                <a href={project.repoUrl} key={project.key} className="column is-size-3 is-centered has-text-success">
                Link to the Github repository
                </a>
            </div>
        ))
        }
    </div>
    
  );
}

export default Project;
