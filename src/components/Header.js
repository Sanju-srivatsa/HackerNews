import React from "react";
const Header = () => {
  return (
    <div > 
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
        <div className="container-fluid" style={{margin:"auto 0"}}>
          <a className="navbar-brand" href="/ ">
            HackerNews
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className="nav-link" href="/topstories">
                  Top Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/newstories">
                  New Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/beststories">
                  Best Stories
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
