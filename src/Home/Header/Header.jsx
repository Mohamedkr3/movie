import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row  align-items-center pt-5">
            <div className="vh-100 col-lg-6 col-md-7 d-flex align-items-center  ">
              <div className="item text-white    ">
                <div>
                  <h1 className="pb-4">
                    Streaming Movie Feels In A Real Cinema
                  </h1>
                  <p className="py-2 pe-5  ">
                    Amet dictumst vulputate aenean quam mattis est etiam amet.
                    Lobortis donec imperdiet faucibus nec ut mauris adipiscing
                    vel. Nunc urna enim nunc metus nisl tortor
                  </p>
                  <div className="">
                    <img src="whitelogo-ipsum-1.png" className="w-25" alt="" />
                    <img src="whitelogo-ipsum-2.png" className="w-25" alt="" />
                    <img src="whitelogo-ipsum-4.png" className="w-25" alt="" />
                  </div>
                  <div className="pb-4">
                    <img src="whitelogo-ipsum-5.png" className="w-25" alt="" />
                    <img src="whitelogo-ipsum-6.png" className="w-25" alt="" />
                    <img src="whitelogo-ipsum-1.png" className="w-25" alt="" />
                  </div>
                  <button className="btn1">Let's know us</button>
                  <button className="btn2">try for free</button>
                </div>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5 col-md-5 col-sm-12 text-center">
              <img src="poster_1.jpeg" className="img-fluid pb-5 " alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
