import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../MoviesContext";

import "./Navbar.css";

import  logo from "../Images/cinemo_logo.png"; 

export const Navbar = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav
        className={
          navbarScroll
            ? "navbar active  navbar-expand-xl  fixed-top"
            : "navbar bg-transparent  navbar-expand-xl fixed-top"
        }
      >
        <div className="container  ">
          <a href="/home" className="w-25 pb-2 navbar-brand m-0 p-0">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler navbar-toggler-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
          <div
            className="offcanvas offcanvas-start "
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title " id="offcanvasNavbarLabel">
                <img src={logo} alt="logo" />
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body  p-0 me-4">
              <ul className="navbar-nav justify-content-end ms-auto flex-grow-2   ">
                <li className="nav-item">
                  <Link className="nav-link" to={"/home"} aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}>
                    About us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Movies
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/allmovies"}>
                        All Movies
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/populermovies"}>
                        Popular
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/toprated"}>
                        Top Rated{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/upcoming"}>
                        Up Coming
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/nowplaying"}>
                        Now Playing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tv series
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/alltv"}>
                        All Tv series
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/populartv"}>
                        Popular
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/topratedtv"}>
                        Top Rated
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to={"/onairtv"}>
                        On Air
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/contact"}>
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
