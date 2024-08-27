import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <section className="contact-us">
        <div className="overlay"></div>
        <div className="container h-100">
          <div className="row align-items-center  ">
            <div className="title position-relative   ">
              <h2 className="text-white text-capitalize pb-4 ">
                Get In Touch With Us Everytime
              </h2>
              <Link
                className="ps-2 me-4 text-decoration-none text-info "
                to={"/home"}
              >
                Home{" "}
              </Link>{" "}
              <span className=" ps-3 border-start border-1 border-white text-white">
                Contact
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6 col-sm-12">
              <div className="contact-info pt-5">
                <h2 className="pb-3 fw-bold">Info</h2>
                <p className="text-muted pe-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <div className="pt-3 d-flex align-items-center">
                  <div className="">
                    <i class="fa-solid fa-phone fs-4 text-primary opacity-75"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="p-0 m-0">Phone:</h5>
                    <p className="p-0 m-0">(123) 123-456</p>
                  </div>
                </div>
                <div className="pt-3 d-flex align-items-center">
                  <div className="">
                    <i class="fa-solid fa-fax fs-4 text-primary opacity-75"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="p-0 m-0">Fax:</h5>
                    <p className="p-0 m-0">(123) 123-456</p>
                  </div>
                </div>
                <div className="pt-3 d-flex align-items-center">
                  <div className="">
                    <i class="fa-solid fa-earth-americas  fs-4 text-primary opacity-75"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="p-0 m-0">Web:</h5>
                    <p className="p-0 m-0">www.cinemo.com</p>
                  </div>
                </div>
                <div className="pt-3 d-flex align-items-center">
                  <div className="">
                    <i class="fa-solid fa-envelope fs-4 text-primary opacity-75 "></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="p-0 m-0">E-mail:</h5>
                    <p className="p-0 m-0">info@cinemo.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-7 col-md-6 col-sm-12">
              <div className="contact-form pt-5">
                <h3 className="pb-3 fw-bold">Contact Form</h3>
                <input
                  type="text"
                  className="form-control form-control-lg  my-3"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="form-control form-control-lg  my-3"
                  placeholder="Your E-mail"
                />
                <input
                  type="text"
                  className="form-control form-control-lg  my-3"
                  placeholder="Subject"
                />
                <textarea
                  className="form-control form-control-lg "
                  placeholder="Enter Your message"
                  name=""
                  id=""
                  cols="30"
                  rows="6 "
                ></textarea>
                <div className=" text-center mt-2">
                  <button className="btn btn-primary text-capitalize px-3 py-2 mt-2 text-center   ">
                    send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
