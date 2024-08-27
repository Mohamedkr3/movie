import React from "react";
import  footLogo  from "../Images/cinemo_logo.png";
export const Footer = () => {
  return (
    <>
      <footer className=" pt-5">
        <div className="container">
          <div className="row  pb-5">
            <div className="col-lg-4 col-md-12  ">
              <div className="footer-item pb-5 pt-3 ">
                <h2 className=" fw-bold ">
                  Your quality and comfort in using our services is the top main
                  thing for us
                </h2>
                <div className="images-footer  d-flex align-items-center pt-4">
                  <img src={footLogo} alt="" />
                  <div className="footer-images-icons ps-2 pt-4">
                    <i className="fa-brands fa-instagram fs-4 "></i>
                    <i className="fa-brands fa-google fs-4"></i>
                    <i className="fa-brands fa-youtube fs-4"></i>
                    <i className="fa-brands fa-linkedin-in fs-4"></i>
                    <i className="fa-brands fa-facebook-f fs-4"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 ">
              <div className="row  gx-5">
                <div className="offset-lg-1 col-lg-3 col-md-4 col-sm-6 footer-container">
                  <div className="footer-info pt-3">
                    <h4 className="fw-bold">Footer Menu</h4>
                    <ul className="text-capitalize text-decoration-none list-unstyled">
                      <li>home</li>
                      <li>about us</li>
                      <li>testmonial</li>
                      <li>protofolio</li>
                      <li>price</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 footer-container">
                  <div className="footer-info ps-lg-5 pt-3">
                    <h4 className="fw-bold">Footer Menu</h4>
                    <ul className="text-capitalize text-decoration-none list-unstyled">
                      <li>subscripition</li>
                      <li>our employee</li>
                      <li>help center</li>
                      <li>list movie</li>
                      <li>price</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 footer-container">
                  <div className="footer-info pt-3">
                    <h4 className="fw-bold">Customer Menu</h4>
                    <ul className="text-capitalize text-decoration-none list-unstyled">
                      <li>our service</li>
                      <li>about us</li>
                      <li>help</li>
                      <li>our support</li>
                      <li>price list</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className=" border-top   ">
            <div className="copy-right pb-4 pt-4  d-flex justify-content-between text-muted ">
              <p className="text-white">© 2022 Cinemo. All rights reserved.</p>
              <p className="text-white ">Simple tagline for website</p>
            </div>
          </article>
        </div>
      </footer>
    </>
  );
};
