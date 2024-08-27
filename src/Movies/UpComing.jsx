import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../MoviesContext";
import "./Movies.css";

export const UpComing = () => {
    const { upComingMovies } = useContext(MoviesContext);
    return (
      <>
        <section className="popular-movies ">
          <div className="overlay"></div>
          <div className="container h-100">
            <div className="row align-items-center  ">
              <div className="title position-relative   ">
                <h2 className="text-white text-capitalize pb-4">
                  Watch all Up Coming Movies
                </h2>
                <Link
                  className="ps-2 pe-4 text-decoration-none text-info "
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
  
        <section className="my-5  py-5">
          <div className="container">
             <div className=" main-title-head position-relative">
             <h2 className="fw-bold fs-1 text-capitalize pb-2">Up Coming movies</h2>             
             </div>
            <div className="row pt-5 g-4">
             {
              upComingMovies.length >=1?( upComingMovies.slice(5,13).map((movie ,index)=>{
                  return(
                    <div className="col-lg-3 col-md-4 col-sm-6 movies-card-container" key={index}>
                    <div className="movies-list position-relative">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
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
                    <h4 className="fw-bold pt-2 m-0 pb-5">
                      {movie.title.split(" ", 3).join(" ")}
                    </h4>
                  
                  </div>
                  )
              })):''
             }
            </div>
          </div>
        </section>
      </>
    );

}
