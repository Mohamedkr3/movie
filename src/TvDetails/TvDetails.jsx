/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Tvdetails.css"
export const TvDetails = () => {
    const parms = useParams();
    const [tv, settvDetails] = useState([]);
  
    async function gettvDetails() {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/${parms.id}?api_key=aa0212de7d4909b3e6cea119c11d7140&language=en-US`
      );
      console.log(data);
      settvDetails(data);
    }
    useEffect(() => {
      gettvDetails();
    }, [gettvDetails]);
  
    return (
      <>
        <section className="popular-movies">
          <div className="overlay"></div>
          <div className="container h-100">
            <div className="row align-items-center  ">
              <div className="title position-relative   ">
                <h2 className="text-white text-capitalize pb-4">
                  Tv Series Details
                </h2>
                <Link
                  className="ps-2 me-4 text-decoration-none text-info "
                  to={"/home"}
                >
                  Home{" "}
                </Link>{" "}
                <span className=" ps-3 border-start border-1 border-white text-white">
                  Tv
                </span>
              </div>
            </div>
          </div>
        </section>
        <section class="tvDetails  d-flex align-items-center">
          <div class="container ">
            <div class="row g-5 pt-5 align-items-center ">
              <div class=" col-lg-4  sad   ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/` + tv.poster_path}
                  className="w-100"
                  alt=""
                />
                <button class="btn btn-success my-2 py-2 w-100">
                  Download <i class="fa-solid fa-cloud-arrow-down"></i>
                </button>
              </div>
              <div class="col-lg-8 ">
                <div class="item">
                  <h2 class="fw-bold fs-1 pb-2">{tv.name}</h2>
                  <p class="text-muted  my-3 pb-4 fs-5">{tv.overview}</p>
  
                  <table class="table table-bordered table-striped ">
                    <tbody>
                      <tr>
                        <td className="category-movi">
                          <p class="ps-2 my-1">Country :</p>
                        </td>
                        <td>
                          <span class="fw-normal text-primary my-1 ms-3">
                            {tv.production_countries &&
                              tv.production_countries.map((cont, i) => {
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
                            {tv.spoken_languages &&
                              tv.spoken_languages.slice(0,1).map((lang, i) => {
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
                            {tv.production_companies &&
                              tv.production_companies.slice(0,1).map((comp, i) => {
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
                            {tv.genres &&
                              tv.genres.map((gener, i) => {
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
                            {tv.vote_average}{" "}
                            <span class="text-black fw-normal"> From 10</span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="category-movi">
                          <p class="ps-2 my-1">Seaseons :</p>
                        </td>
                        <td>
                          <span class="fw-normal ms-3 my-1">
                            {tv.number_of_seasons} 
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="category-movi">
                          <p class="ps-2 my-1">Release :</p>
                        </td>
                        <td>
                          <span class="fw-normal ms-3 my-1">
                            {tv.first_air_date}
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
}
