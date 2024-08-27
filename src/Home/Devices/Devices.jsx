import React from "react";
export const Devices = () => {
  return (
    <>
      <section className="devices my-5 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="titles text-center">
                <h2 className="fw-bold fs-1 mt-5 mb-4 ">
                  We Available On Favorite Devices
                </h2>
                <p className="text-muted pb-3">
                  Facilisis vel nulla sit curabitur risus eget non eu. Et
                  curabitur est, commodo sed duis interdum id lacus, facilisis.
                  Dictumst lectus in diam mauris, habitant fringilla. A lacus,
                  fermentum a hendrerit dui, urna. Est urna mauris molestie.
                </p>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-lg-2 col-md-3 col-sm-4 icons-informtion">
                <div className="text-center text-capitalize">
                  <i class="fa-solid fa-display fa-4x"></i>
                  <h5 className="pt-3">Desktop</h5>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 icons-informtion">
                <div className="text-center text-capitalize">
                  <i class="fa-solid fa-tablet-screen-button fa-4x"></i>
                  <h5 className="pt-3">mobile</h5>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 icons-informtion">
                <div className="text-center text-capitalize">
                  <i class="fa-solid fa-display fa-4x"></i>
                  <h5 className="pt-3">tv</h5>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 icons-informtion">
                <div className="text-center text-capitalize">
                  <i class="fa-solid fa-tablet-screen-button fa-4x"></i>
                  <h5 className="pt-3">airplane</h5>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 icons-informtion">
                <div className="text-center text-capitalize">
                  <i class="fa-solid fa-tv fa-4x"></i>
                  <h5 className="pt-3">Airplay</h5>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 icons-informtion">
                <div className="text-center text-capitalize">
                  <i class="fa-solid fa-laptop fa-4x"></i>
                  <h5 className="pt-3">laptop</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
