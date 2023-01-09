import React, { useState } from "react";
import "../styles/header.css";
import "bulma/css/bulma.css";
import Navigation from "./navigation";
import AboutMe from "./aboutMe";
import Contact from "./contact";
import Resume from "./resume";
import Project from "./project";

function Header(props) {
  const [page, setPage] = useState("AboutMe");

  const renderPage = () => {
    switch (page) {
      case "About":
        return <AboutMe />;
      case "Portfolio":
        return <Project />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <div>
        <nav className="has-background-primary">
          <div className="columns is-centered">
            <a
              className="has-text-white is-size-1"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/Neuy16?tab=repositories"
            >
              <span id="name">Andrew Neuwirth</span>
            </a>
          </div>
        </nav>
        <Navigation currentPage={page} handlePageChange={setPage} />
      </div>
      <div className="has-background-primary-light">
        <main className="mx-6 px-auto">
          <div>{renderPage(page)}</div>
        </main>
      </div>
    </div>
  );
}

export default Header;
