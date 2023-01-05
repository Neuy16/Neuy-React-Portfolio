import React from "react";
import "bulma/css/bulma.css";
import meathead from '../assets/images/meathead.PNG';
import utility from '../assets/images/cover.PNG';

function Project() {
  const projects = [
    {
      image: utility,
      url: "https://neuy16.github.io/Utility-Homepage-Project/",
      key: "utility"
    },
    {
        image: meathead,
        url: "https://neuy16.github.io/Utility-Homepage-Project/",
        key: "meathead"
    }
  ];
  return (
    <div className="columns">
        {projects.map((project) => (
            <div className="column is-half" key={project.key}>
                <a href={project.url}>
                    <img src={project.image}/>
                </a>
            </div>
        ))
        }
    </div>
  );
}

export default Project;
