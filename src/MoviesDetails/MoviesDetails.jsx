/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./MoviesDetails.css";
export const MoviesDetails = () => {
  const parms = useParams();
  const [movie, setMovieDetails] = useState([]);

  async function getMovieDetails() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${parms.id}?api_key=aa0212de7d4909b3e6cea119c11d7140&language=en-US`
    );
    console.log(data);
    setMovieDetails(data);
  }
  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return (
    <>
      <section className="popular-movies ">
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="row align-items-center  ">
            <div className="title position-relative   ">
              <h2 className="text-white text-capitalize pb-4">
                Moveis Details
              </h2>
              <Link
                className="ps-2 me-4 text-decoration-none text-info "
                to={"/home"}
              >
                Home{" "}
              </Link>{" "}
              <span className=" ps-3 border-start border-1 border-white text-white">
                movie
              </span>
            </div>
          </div>
        </div>
      </section>
      <section class="movieDetails  d-flex align-items-center">
        <div class="container ">
          <div class="row g-5 pt-5 align-items-center ">
            <div class=" col-lg-4 ">
              <img
                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                className="w-100"
                alt=""
              />
              <button class="btn btn-success my-2 py-2 w-100">
                Download <i class="fa-solid fa-cloud-arrow-down"></i>
              </button>
            </div>
            <div class="col-lg-8 ">
              <div class="item">
                <h2 class="fw-bold fs-1 pb-2">{movie.title}</h2>
                <p class="text-muted fs-5  my-3 pb-4">{movie.overview}</p>

                <table class="table table-bordered table-striped ">
                  <tbody>
                    <tr>
                      <td className="category-movi">
                        <p class="ps-2 my-1">Country :</p>
                      </td>
                      <td>
                        <span class="fw-normal text-primary my-1 ms-3">
                          {movie.production_countries &&
                            movie.production_countries.map((cont, i) => {
                              return (
                                <span
                                  className="production_companies-item pe-2"
                                  key={i}
                                >
                                  {cont.name}
                                </span>
                              );
                            })}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="category-movi">
                        <p class="ps-2 my-1">Language :</p>
                      </td>
                      <td>
                        <span class="fw-normal text-primary my-1 text-capitalize ms-3">
                          {movie.spoken_languages &&
                            movie.spoken_languages.slice(0,1).map((lang, i) => {
                              return (
                                <span
                                  className="production_companies-item pe-2"
                                  key={i}
                                >
                                  {lang.name}
                                </span>
                              );
                            })}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="category-movi">
                        <p class="ps-2 my-1">P-Company:</p>
                      </td>
                      <td>
                        <span class="fw-normal text-primary my-1 ms-3">
                          {movie.production_companies &&
                            movie.production_companies.slice(0,1).map((comp, i) => {
                              return (
                                <span
                                  className="production_companies-item pe-2"
                                  key={i}
                                >
                                  {comp.name}
                                </span>
                              );
                            })}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p class="ps-2 my-1">Geners :</p>
                      </td>
                      <td>
                        <span class="fw-normal text-primary my-1 ms-3">
                          {movie.genres &&
                            movie.genres.map((gener, i) => {
                              return (
                                <span className="genres-item pe-2" key={i}>
                                  {gener.name}
                                </span>
                              );
                            })}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="category-movi">
                        <p class="ps-2 my-1">Rating : </p>
                      </td>
                      <td>
                        <span class="fw-normal text-primary my-1 ms-3">
                          <i class="text-warning fa-solid fa-star"></i>
                          {movie.vote_average}{" "}
                          <span class="text-black fw-normal"> From 10</span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="category-movi">
                        <p class="ps-2 my-1">Duration :</p>
                      </td>
                      <td>
                        <span class="fw-normal ms-3 my-1">
                          {movie.runtime} min
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="category-movi">
                        <p class="ps-2 my-1">Release :</p>
                      </td>
                      <td>
                        <span class="fw-normal ms-3 my-1">
                          {movie.release_date}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
