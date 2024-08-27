import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../PagMovies/Pagination";

import "./AllMovies.css";
export const AllMovies = () => {
  const [AllMovies, setAllMovies] = useState([]);
  const [Count, setPageCount] = useState([]);

  async function getAllmovies() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=aa0212de7d4909b3e6cea119c11d7140&language=en-US`
    );
    setAllMovies(data.results);
    setPageCount(data.total_pages);
  }
  async function getPageMovies(page) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=aa0212de7d4909b3e6cea119c11d7140&language=en-US&page=${page}`
    );
    setAllMovies(data.results);
    setPageCount(data.total_pages);
  }
  async function getSearch(word) {
    if (word === "") {
      getAllmovies();
    } else {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=aa0212de7d4909b3e6cea119c11d7140&query=${word}&language=en-US`
      );
      setAllMovies(data.results);
      setPageCount(data.total_pages);
    }
  }
  useEffect(() => {
    // get all movies
    getAllmovies();
  }, []);

  return (
    <>
      <section className="all-movies">
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="row align-items-center  ">
            <div className="title position-relative   ">
              <h2 className="text-white text-capitalize pb-4 ">
                Watch All Movies
              </h2>
              <Link
                className="ps-2 me-4 text-decoration-none text-info "
                to={"/home"}
              >
                Home{" "}
              </Link>{" "}
              <span className=" ps-3 border-start border-1 border-white text-white">
                Movies
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="main-title-head  position-relative ">
            <h2 className="fw-bold fs-1 text-capitalize pb-2 ">Watch Now</h2>
          </div>

          <div className="pt-5 pb-4">
            <input
              onChange={(e) => getSearch(e.target.value)}
              type="search"
              placeholder=" Search..."
              className="search  py-3  border    "
            />
          </div>
          <div className="row pt-5 g-4">
            {AllMovies.length >= 1
              ? AllMovies.map((movie, index) => {
                  return (
                    <div
                      className="col-lg-3 col-md-4 col-sm-6 movies-card-container "
                      key={index}
                    >
                      <div className="movies-list position-relative">
                        <img
                          src={
                            `https://image.tmdb.org/t/p/w500/` +
                            movie.poster_path
                          }
                          className="w-100"
                          alt=""
                        />
                        <div className="overlay  d-flex align-items-center justify-content-center">
                          <div className="ovelay-text text-white   ">
                            <p className="rate">{movie.vote_average}</p>
                            <div className="my-3 text-center ">
                              <button className="btn watch-button rounded-pill w-100 px-5 ">
                                Watch now
                              </button>
                            </div>
                            <div className="text-center  ">
                              <Link to={`/moviedetails/${movie.id}`}>
                                <button className="btn watch-button rounded-pill w-100   ">
                                  Details
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 className="fw-bold pt-2 m-0 pb-5 ">
                        {movie.title.split(" ", 3).join(" ")}
                      </h4>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        {AllMovies.length >= 1 ? (
          <Pagination getPageMovies={getPageMovies} Count={Count} />
        ) : (
          <h2 className="text-center fs-1 fw-bold py-5">Nothing Found</h2>
        )}
      </section>
    </>
  );
};
