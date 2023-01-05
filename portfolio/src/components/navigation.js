import React from "react";
import '../styles/navigation'

function Navigation(props) {
  const pages = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <div className="pages is-centered">
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
  