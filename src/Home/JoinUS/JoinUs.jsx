import React from "react";
import "./JoinUs.css"
export const JoinUs = () => {
  return (
    <>
      <section className="join-cinemo py-5 pb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 .col-md-10">
              <div className=" text-center">
                <h2 className="py-4 fs-1 fw-bold">Join Cinemo Now!</h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy consectetuer adipiscing.                  
                  
                </p>

                <div className="input-group mb-3 mt-5">
                  <input
                    type="email"
                    className="form-control form-control-lg  py-3"
                    placeholder="Your E-mail"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="join-button fs-5 px-4  "
                    type="button"
                    id="button-addon2"
                  >
                    Subscribe
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
