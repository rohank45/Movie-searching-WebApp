import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <h3 className="navbar-brand cursor-pointer">
            <Link to="/" className="link-button">
              TP-MOVIE
            </Link>
          </h3>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p
                  className="nav-link active cursor-pointer"
                  aria-current="page"
                >
                  <Link className="link-button" to="/">
                    Home
                  </Link>
                </p>
              </li>

              <li className="nav-item">
                <p className="nav-link cursor-pointer" aria-current="page">
                  <Link className="link-button" to="/about-us">
                    About us
                  </Link>
                </p>
              </li>

              <li className="nav-item">
                <p className="nav-link cursor-pointer" aria-current="page">
                  <Link className="link-button" to="/contact-us">
                    Contact us
                  </Link>
                </p>
              </li>

              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movies
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/popular-movies">
                      Popular Movies
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/comedy-movies">
                      ComedyMovies
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science-movies">
                      ScienceMovies
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/kids-movies">
                      Kids
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/best-dramas">
                      BestDramas
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </p>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/register-form">
                      Register
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/login-form">
                      Login
                    </Link>
                  </li>
                  <li>
                    <p className="dropdown-item link-button">
                      <a href="https://movieapp-mern.herokuapp.com/oauth/logout">
                        Logout
                      </a>
                    </p>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profile-page">
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
