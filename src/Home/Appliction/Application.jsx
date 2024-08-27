import React from "react";

export const Application = () => {
  return (
    <>
      <section className="my-5  ">
        <div className="container my-5 py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="items mb-5 pt-3">
                <div>
                  <h2 className="pb-2 fs-1">
                    Now you can easily download on your favorite platform
                  </h2>
                  <h5 className="my-4 text-muted  ">
                    Facilisis turpis neque leo, volutpat mattis sodales sed
                    potenti. Scelerisque enim tempor hac orci. Fringilla eget
                    hendrerit sit felis cras id.
                  </h5>
                  <h5 className="my-3 text-muted ">
                    Ipsum sit at ut malesuada tempor sapien nulla nisi. Justo
                    enim sed dui pellentesque at risus.
                  </h5>
                </div>
                <div className="py-3   ">
                  <div className="icons-info my-3  text-muted d-flex  align-items-center">
                    <i className="fa-solid fa-arrow-right pe-4 pt-1 fs-4"></i>
                    <h5 className="p-0 m-0 ">
                      Tellus duis at urna mauris nisi.
                    </h5>
                  </div>
                  <div className="icons-info my-3  text-muted d-flex  align-items-center">
                    <i className="fa-solid fa-arrow-right pe-4 pt-1 fs-4"></i>
                    <h5 className="p-0 m-0 ">
                      Velit egestas cras sit cras at rhoncus.
                    </h5>
                  </div>
                  <div className="icons-info  my-3  text-muted d-flex  align-items-center">
                    <i className="fa-solid fa-arrow-right pe-4 pt-1 fs-4"></i>
                    <h5 className="p-0 m-0 ">
                      Commodo leo at molestie ut lorem.
                    </h5>
                  </div>
                </div>

                <div className="images-apps">
                  <img src="app1.png" className="pe-4" alt="" />
                  <img src="app2.png" className="" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="item">
                    <img src="1.jpg" className="w-100 rounded" alt="" />
                    </div>
                </div>
              </div>
              <div className="row g-2 ">
                <div className="col-lg-4  col-md-4">
                  <div className="item">
                    <img
                      src="33.jpg"
                      className="w-100 mt-2 rounded"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className="item">
                    <img
                      src="22.jpg"
                      className="w-100 mt-2 rounded"
                      alt=""
                    />
                  </div>
                </div>

                <div className="col-lg-4 col-md-4">
                  <div className="item">
                    <img
                      src="11.jpg"
                      className="w-100 mt-2 rounded"
                      alt=""
                    />
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
