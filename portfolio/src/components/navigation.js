import React from "react";
import '../styles/navigation.css'
import 'bulma/css/bulma.css'

function Navigation(props) {
  const pages = ["About Me", "Projects", "Contact", "Resume"];
  return (
    <div className=" tabs navbar has-background-primary is-centered">
      <ul className="nav nav-pages">
        {pages.map((page) => (
          <li
            className={props.currentPage === page ? "nav-item is-active" : "nav-item"}
            key={page}
          >
            <a
              href={"#" + page.toLowerCase()}
              // Whenever a page is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(page)}
              className={props.currentPage === page ? "nav-link active" : "nav-link"}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
  