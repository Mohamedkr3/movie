import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../MoviesContext";
import "./MoviesSlider.css";

export const MoviesSlider = () => {
  const { populerMoviesSlider } = useContext(MoviesContext);
  return (
    <>
      <section className="m-slider py-5">
        <div className="container ">
          <div className="row g-4">
            <div className=" d-flex mb-2 align-items-center justify-content-between pb-4 ">
              <div className="main-title-head ">
                <h2 className="fs-1  fw-bold   text-capitalize">
                  Populer movies
                </h2>
              </div>
              <div>
                <Link to={"/populermovies"}>
                  <button>View more</button>
                </Link>
              </div>
            </div>
            {populerMoviesSlider.length >= 1
              ? populerMoviesSlider.slice(11, 15).map((movie, index) => {
                  return (
                    <div className="col-lg-3 col-sm-6" key={index}>
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
                              <button className="btn watch-button rounded-pill w-100   ">
                                Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-iteems-center">
                        <h4 className="fw-bold pt-2 m-0 mb-1">
                          {movie.title.split(" ", 4).join(" ")}
                        </h4>
                        <div className="pt-2">
                          <p className="release  d-inline-block m-0 p-0 text-white px-2 py-1  ">
                            {movie.release_date.split("-", 2).join("-")}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </section>
    </>
  );
};
