import React from "react";

export const HowWork = () => {
  return (
    <>
      <section className="works my-5 pt-2">
        <div className="container my-5">
          <div className="row g-5   ">
            <div className="works-item text-center">
              <h2 className="fs-1 fw-bold ">How it works?</h2>
              <p className="text-muted pt-3 pb-4 w-75 m-auto">
                We will show you step by step how to start watching your
                favorite movies & tv shows starting now!
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="logo-items text-center py-4  ">
                <i className="fa-solid fa-arrow-right-to-bracket text-muted fa-4x "></i>
                <h2 className="py-3">Register</h2>
                <p className="text-muted">
                  Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                  luctus, finibus tellus ut, convallis eros sollicitudin turpis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="logo-items text-center py-4">
                <i className="fa-solid fa-layer-group text-muted fa-4x"></i>
                <h2 className="py-3">Register</h2>
                <p className="text-muted">
                  Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                  luctus, finibus tellus ut, convallis eros sollicitudin turpis.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="logo-items text-center py-4">
                <i className="fa-regular fa-face-smile text-muted fa-4x"></i>
                <h2 className="py-3">Register</h2>
                <p className="text-muted">
                  Proin dapibus nisl ornare diam varius tempus. Aenean a quam
                  luctus, finibus tellus ut, convallis eros sollicitudin turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
