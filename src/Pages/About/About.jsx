import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
export const About = () => {
  return (
    <>
      <section className="about-us">
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="row align-items-center  ">
            <div className="title position-relative   ">
              <h2 className="text-white text-capitalize pb-4 ">
                About Our History
              </h2>
              <Link
                className="ps-2 me-4 text-decoration-none text-info "
                to={"/home"}
              >
                Home{" "}
              </Link>{" "}
              <span className=" ps-3 border-start border-1 border-white text-white">
                About us
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-5 mt-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              <div className="iamgess pe-5">
                <img src="team-10.jpg" className="w-100 rounded rounded-3 " alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="our-mission  py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mission-info">
                <h2 className="fw-bold fs-1 py-3 ps-2">Mission Of Company</h2>
                <p className="pe-5 ps-2 text-muted  pb-4">
                  Curabitur netus nullam vitae sit dignissim a nisi enim mi. Id
                  odio pretium bibendum eget enim. Bibendum quisque neque varius
                  quam est a eget ultrices. Dis tellus cras pharetra donec quis
                  lobortis. Donec vel sed eleifend vel rhoncus sem sed. Ac non
                  donec nisl mi donec.
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-6 items-container">
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 items-container">
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-info">
                <h2 className="fw-bold fs-1 py-3 ps-2">Vission Of Company</h2>
                <p className="pe-5 ps-2 text-muted pb-4">
                  Curabitur netus nullam vitae sit dignissim a nisi enim mi. Id
                  odio pretium bibendum eget enim. Bibendum quisque neque varius
                  quam est a eget ultrices. Dis tellus cras pharetra donec quis
                  lobortis. Donec vel sed eleifend vel rhoncus sem sed. Ac non
                  donec nisl mi donec.
                </p>

                <div className="row">
                  <div className="col-md-6 col-sm-6 items-container">
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 items-container">
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                    <div className="items d-flex align-items-center ps-2 py-2">
                      <i class="fa-regular fa-clipboard fs-5 "></i>
                      <p className="text-muted p-0 m-0 ps-3">
                        Tellus duis mauris nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container pb-5">
          <div className="row g-4">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="iamges-info position-relative">
                <img src="team-1.jpg" className="w-100" alt="" />
                <div className="overlay">
                  <div className="team-info  text-white text-center d-flex flex-column-reverse justify-content-between  h-100 ">
                    <div>
                      <h6 className=" fw-bold pt-2">William Anderson</h6>
                      <p>CEO</p>
                    </div>
                    <div >
                      <i class="fa-brands fa-facebook-f ps-2  fs-5"></i>
                      <i class="fa-brands fa-instagram  ps-2  fs-5"></i>
                      <i class="fa-brands fa-twitter  ps-2  fs-5"></i>
                      <i class="fa-brands fa-google  ps-2  fs-5"></i>
                    </div>
                    <div className="pt-2">
                      <p>Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="iamges-info position-relative">
                <img src="team-2.jpg" className="w-100" alt="" />
                <div className="overlay">
                  <div className="team-info  text-white text-center d-flex flex-column-reverse justify-content-between  h-100 ">
                    <div>
                      <h6 className=" fw-bold pt-2">Sarah Anderson</h6>
                      <p>Designer</p>
                    </div>
                    <div >
                      <i class="fa-brands fa-facebook-f ps-2  fs-5"></i>
                      <i class="fa-brands fa-instagram  ps-2  fs-5"></i>
                      <i class="fa-brands fa-twitter  ps-2  fs-5"></i>
                      <i class="fa-brands fa-google  ps-2  fs-5"></i>
                    </div>
                    <div className="pt-2">
                      <p>Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="iamges-info position-relative">
                <img src="team-3.jpg" className="w-100" alt="" />
                <div className="overlay">
                  <div className="team-info  text-white text-center d-flex flex-column-reverse justify-content-between  h-100 ">
                    <div>
                      <h6 className=" fw-bold pt-2">Walter White</h6>
                      <p>Accountant</p>
                    </div>
                    <div >
                      <i class="fa-brands fa-facebook-f ps-2  fs-5"></i>
                      <i class="fa-brands fa-instagram  ps-2  fs-5"></i>
                      <i class="fa-brands fa-twitter  ps-2  fs-5"></i>
                      <i class="fa-brands fa-google  ps-2  fs-5"></i>
                    </div>
                    <div className="pt-2">
                      <p>Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="iamges-info position-relative">
                <img src="team-4.jpg" className="w-100" alt="" />
                <div className="overlay">
                  <div className="team-info  text-white text-center d-flex flex-column-reverse justify-content-between  h-100 ">
                    <div>
                      <h6 className=" fw-bold pt-2">Mariam Ahmed</h6>
                      <p>Sales</p>
                    </div>
                    <div >
                      <i class="fa-brands fa-facebook-f ps-2  fs-5"></i>
                      <i class="fa-brands fa-instagram  ps-2  fs-5"></i>
                      <i class="fa-brands fa-twitter  ps-2  fs-5"></i>
                      <i class="fa-brands fa-google  ps-2  fs-5"></i>
                    </div>
                    <div className="pt-2">
                      <p>Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};
