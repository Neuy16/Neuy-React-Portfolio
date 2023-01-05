import React from "react";
import "bulma/css/bulma.css";
import githubClip from "../assets/images/github.png";
import linkdClip from "../assets/images/linkedin.png";
import facebook from "../assets/images/Facebook-logo.png";

function Footer() {
  return (
    <footer className="mt-auto footer has-background-primary">
      <h1 className="columns has-text-white is-size-2 is-centered">
        Thank you!💪
      </h1>
      <div className="columns is-half is-centered mt-auto">
      <a href="https://github.com/Neuy16?tab=repositories" className="mx-2 image is-128x128">
        <img
          src={githubClip}
          className="is-rounded"
        />
      </a>
      <a href="https://www.linkedin.com/in/andrew-neuwirth-b31421219/" className="mx-2 image is-128x128">
        <img
          src={linkdClip}
          className="is-rounded"
        />
      </a>
      <a href="https://www.facebook.com/andrew.neuwirth16/" className="mx-2 image is-128x128">
        <img
          src={facebook}
          className="is-rounded"
        />
      </a>
      </div>
    </footer>
  );
}

export default Footer;
