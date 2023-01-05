import React from "react";
import "bulma/css/bulma.css";
import meathead from '../assets/images/meathead.PNG';
import utility from '../assets/images/cover.PNG';

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
    }
  ];
  return (
    <div className="columns">
        {projects.map((project) => (
            <div className="column is-half mx-auto" key={project.key}>
                <a href={project.url}>
                    <img src={project.image}/>
                </a>
                <a href={project.repoUrl} key={project.key} className="columns is-size-3 is-centered has-text-success">
                Link to the Github repository
                </a>
            </div>
        ))
        }
    </div>
    
  );
}

export default Project;
