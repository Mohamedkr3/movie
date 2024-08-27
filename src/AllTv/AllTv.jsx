import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PagTv } from "../PagTv/PagTv";
import "./AllTv.css";

export const AllTv = () => {
  const [AllTv, setAllTv] = useState([]);
  const [CountV, setCountTv] = useState([]);
  async function getPageTv(page) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=aa0212de7d4909b3e6cea119c11d7140&language=en-US&page=${page}`
    );
    setAllTv(data.results);
    setCountTv(data.total_pages);
  }
  async function getAllTv() {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=aa0212de7d4909b3e6cea119c11d7140&language=en-US&page=4`
    );
    setAllTv(data.results);
    setCountTv(data.total_pages);
  }
  async function getSearch(word) {
    if (word === "") {
      getAllTv();
    } else {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=aa0212de7d4909b3e6cea119c11d7140&query=${word}&language=en-US`
      );
      setAllTv(data.results);
      setCountTv(data.total_pages);
    }
  }
  useEffect(() => {
    // get all Tv
    getAllTv();
  }, []);

  return (
    <>
      <section className="all-movies">
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="row align-items-center  ">
            <div className="title position-relative   ">
              <h2 className="text-white text-capitalize pb-4 ">Watch All tv</h2>
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

      <section className="py-5">
        <div className="container">
          <div className="main-title-head  position-relative ">
            <h2 className="fw-bold fs-1 text-capitalize pb-2">Watch Now</h2>
          </div>

          <div className="pt-5 pb-4">
            <input
              onChange={(e) => getSearch(e.target.value)}
              type="search"
              placeholder=" Search..."
              className="search border  py-3    "
            />
          </div>
          <div className="row  pt-5 g-4">
            {AllTv.length >= 1
              ? AllTv.map((movie, index) => {
                  return (
                    <div
                      className="col-lg-3 col-md-4 col-sm-6 movies-card-container"
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
                              <Link to={`/tvdetails/${movie.id}`}>
                                <button className="btn watch-button rounded-pill w-100   ">
                                  Details
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 className="fw-bold pt-2 m-0 pb-5 ">
                        {movie.name.split(" ", 3).join(" ")}
                      </h4>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        {AllTv.length >= 1 ? (
          <PagTv getPageTv={getPageTv} CounTv={CountV} />
        ) : (
          <h2 className="text-center fs-1 fw-bold py-5">Nothing Found</h2>
        )}
      </section>
    </>
  );
};
